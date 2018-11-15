import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Header from '../components/Header'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  alignItems: center;
`

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <HeaderWrapper>
        <Header />
        <div>
          {edges.map(edge => {
            const { frontmatter } = edge.node
            return (
              <div key={frontmatter.path}>
                <Link to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
              </div>
            )
          })}
          <div style={{ margin: '2rem 0' }}>
            <Link to='/tags'>Browse all tags</Link>
          </div>
          <div>
            This blog was built with GraphQL and Gatsby 2.0. <a href="https://github.com/ahrjarrett/blog" target="_blank" rel="noopener noreferrer">View the source code</a> on GitHub.
        </div>
        </div>
      </HeaderWrapper>
    </Layout>
  )
}

export const query = graphql`
query HomePageQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
  ) {
    edges {
      node {
        frontmatter {
          title
          path
          date
        }
      }
    }
  }
}`

export default Index

