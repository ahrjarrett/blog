import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import PostHeader from "../components/PostHeader"
import PostArticle from "../components/PostArticle"
import * as s from "../components/styles/BlogPost.styles"

// pageContext is passed thru via context object in gatsby-node.js
const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { title, date, excerpt, tags, image } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { prev, next } = pageContext

  return (
    <Layout>
      <s.BlogPostStyles>
        <PostHeader next={next} prev={prev} />
        <div className="title">
          <div className="section-header">
            <h1>{title}</h1>
          </div>
        </div>
        <PostArticle
          date={date}
          excerpt={excerpt}
          tags={tags}
          title={title}
          image={image}
          html={html}
          next={next}
          prev={prev}
        />
        {/* <footer>
          <div className="section-stretch">
            <h1>FOOTER</h1>
          </div>
        </footer> */}
      </s.BlogPostStyles>
    </Layout>
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
