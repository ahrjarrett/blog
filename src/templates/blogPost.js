import React from 'react'
import { graphql, Link } from 'gatsby'
import { MAIN_FONT } from '../constants'

// pageContext is being passed via context object in gatsby-node.js
const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { prev, next } = pageContext

  console.log(pageContext)

  return (
    <div style={{ fontFamily: MAIN_FONT }}>
      <h1>{title}</h1>
      <div
	className="blogpost"
	dangerouslySetInnerHTML={{ __html: html }}
	/>
      <div style={{ marginBottom: '1rem' }}>
	{ prev && <Link to={prev.frontmatter.path}>Previous {prev.frontmatter.title}</Link>}
	{ next && <Link to={next.frontmatter.path}>Next {next.frontmatter.title}</Link>}
      </div>
    </div>
  )
}

export const query = graphql`
query($pathSlug: String!) {
  markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
    html
    frontmatter {
      title
    }
  }
}`

export default Template

