import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Header from "../components/Header"
import BlogIntro from "../components/BlogIntro"
import Card from "../components/Card"
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
  const { edges } = data.allMdx

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
        <div
          style={{ maxWidth: "840px", margin: "3rem auto", padding: "0 3rem" }}
        >
          <Link to="/tags">Browse all tags</Link>
        </div>
        <div
          style={{
            maxWidth: "840px",
            padding: "0 3rem",
            margin: "0 auto 4.25rem"
          }}
        >
          Hi! Not sure how you got here but I’m glad you did 🌻
          <br />
          <br />
          This site was built with GraphQL, Gatsby 2.0 and other cool stuff. It
          started as a project to see if I could make a Gatsby plugin that would
          render org-mode instead of Markdown files. Hoping to get that branch
          merged soon, along with upgrading this app to use TypeScript and
          ElasticSearch.
          <br />
          <br />
          <a
            href="https://github.com/ahrjarrett/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code on GitHub
          </a>{" "}
        </div>
      </IndexStyles>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
