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
  .posts-header {
    max-width: 70.5rem;
    border-top: 1px solid rgba(214, 209, 230, 0.5);
    margin: 0 auto;
    padding: 6.25rem 0 1.25rem;
    h3 {
      text-align: center;
      width: 100%;
    }
  }
`

const Index = ({ data, location }) => {
  const { edges } = data.allMdx
  const { edges: imgEdges } = data.allFile
  const imgs = imgEdges.reduce((acc, curr) => {
    const { node } = curr
    acc[node.relativePath] = node.childImageSharp
    return acc
  }, {})

  return (
    <Layout location={location}>
      <IndexStyles>
        <Header />
        <BlogIntro />
        <div className="posts-header">
          <h3>Latest Blog Posts</h3>
        </div>
        <CardsWrapper>
          {edges.map(({ node }) => {
            const { frontmatter } = node
            return !frontmatter.published ? null : (
              <Card
                key={frontmatter.path}
                frontmatter={frontmatter}
                img={imgs[frontmatter.image]}
              />
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
          Hi! Not sure how you got here but I’m glad you did{" "}
          <span role="img" aria-label="sunflower">
            🌻
          </span>
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
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        extension: { ne: "gif" }
        base: { regex: "/.(png|jpg|jpeg)$/" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(traceSVG: { background: "#dbd4e2", color: "#fff" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Index
