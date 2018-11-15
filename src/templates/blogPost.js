import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'


// pageContext is passed thru via context object in gatsby-node.js
const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { title, date, tags } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { prev, next } = pageContext

  return (
    <div className="LOOK">
      <Layout>
        <h1>{title}</h1>
        <h4>{date}</h4>
        <div>
          Tags: {
            tags.map((tag, index) =>
              <div key={index}><Link to={`/tags/${tag}`}>{tag}</Link></div>
            )
          }
        </div>
        <div
          className="blogpost"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div style={{ marginBottom: '1rem' }}>
          {prev && <Link to={prev.frontmatter.path}>Previous Post: {prev.frontmatter.title}</Link>}
          {next && <Link to={next.frontmatter.path}>Next Post: {next.frontmatter.title}</Link>}
        </div>
      </Layout>
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
