import React from 'react'
import { graphql, Link } from 'gatsby'
import { MAIN_FONT } from '../constants'

const style = {
  fontFamily: MAIN_FONT,
  margin: '40px',
  maxWidth: '700px',
}

// pageContext is being passed via context object in gatsby-node.js
const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { prev, next } = pageContext

  return (
    <div style={style}>
      <h1>{title}</h1>
      <div
	className="blogpost"
	dangerouslySetInnerHTML={{ __html: html }}
	/>
      <div style={{ marginBottom: '1rem' }}>
	{ prev && <Link to={prev.frontmatter.path}>Previous Post: {prev.frontmatter.title}</Link>}
	{ next && <Link to={next.frontmatter.path}>Next Post: {next.frontmatter.title}</Link>}
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

