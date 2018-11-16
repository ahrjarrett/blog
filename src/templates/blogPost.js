import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'


// pageContext is passed thru via context object in gatsby-node.js
const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { title, date, tags } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { prev, next } = pageContext

  const DateAndTagsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const TagsWrapper = styled.div`
    display: flex;
    h4 {
      padding-left: 6px;
    }
  `

  return (
    <div className="LOOK">
      <Layout>
        <h1>{title}</h1>
        <DateAndTagsWrapper>
          <h4>{date}</h4>
          <TagsWrapper>
            {tags.map((tag, index, arr) =>
              <h4 key={index}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
                {index < arr.length - 1 ? `\t::` : null}
              </h4>
            )}
          </TagsWrapper>
        </DateAndTagsWrapper>
        <div
          className="blogpost"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div style={{ marginBottom: '1rem' }}>
          {prev && <Link to={prev.frontmatter.path}>Previous Post: {prev.frontmatter.title}</Link>}
          {next && <Link to={next.frontmatter.path}>Next Post: {next.frontmatter.title}</Link>}
        </div>
      </Layout>
    </div >
  )
}

export const query = graphql`
  query($pathSlug: String!) {
          markdownRemark(frontmatter: {path: {eq: $pathSlug } }) {
          html
      ...FrontmatterFragment
      }
    }
  `

export default Template
