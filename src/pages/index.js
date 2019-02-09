import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Header from "../components/Header"
import BlogIntro from "../components/BlogIntro"
import Card from "../components/Card"
import { media } from "../components/theme/mixins"
import { pageFormatting } from "../components/theme/GlobalStyles"

const CardsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
`

const IndexStyles = styled.div`
  background: ${props => props.theme.ghost};
  ${pageFormatting};
  h3.posts-header {
    text-align: center;
    width: 900px;
    border-top: 1px solid rgba(214, 209, 230, 0.5);
    margin: 0 auto;
    padding: 6.25rem 0 1.25rem;
  }
`

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <IndexStyles>
        <Header />
        <BlogIntro />
        <h3 className="posts-header">Latest Blog Posts</h3>
        <CardsWrapper>
          {edges.map(edge => {
            const { frontmatter } = edge.node
            return !frontmatter.published ? null : (
              <Card key={frontmatter.path} frontmatter={frontmatter} />
            )
          })}
        </CardsWrapper>
        <div style={{ margin: "2rem 0" }}>
          <Link to="/tags">Browse all tags</Link>
        </div>
        <div>
          Hi! This blog was built with GraphQL and Gatsby 2.0. Right now I'm
          working on a branch that, when merged, will let me write posts in
          org-mode.{" "}
          <a
            href="https://github.com/ahrjarrett/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>{" "}
          on GitHub.
        </div>
      </IndexStyles>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            published
            excerpt
            tags
            image
          }
        }
      }
    }
  }
`

export default Index
