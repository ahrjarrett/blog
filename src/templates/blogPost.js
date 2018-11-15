import React from 'react'
import { graphql, Link } from 'gatsby'
import { MAIN_FONT } from '../constants'

const style = {
  fontFamily: MAIN_FONT,
  margin: '40px',
  maxWidth: '700px',
}

// pageContext is passed as context object in gatsby-node.js
const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { title, date } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { prev, next } = pageContext

  console.log(pageContext)

  return (
    <div style={style}>
      <h1>{title}</h1>
      <h4>{date}</h4>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div style={{ marginBottom: '1rem' }}>
        {prev && <Link to={prev.frontmatter.path}>Previous Post: {prev.frontmatter.title}</Link>}
        {next && <Link to={next.frontmatter.path}>Next Post: {next.frontmatter.title}</Link>}
      </div>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      ...FrontmatterFragment
    }
  }
`

export default Template
