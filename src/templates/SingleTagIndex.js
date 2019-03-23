import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const SingleTagTemplate = ({ data, pageContext, location }) => {
  const { posts, tagName } = pageContext

  return (
    <Layout location={location}>
      <div style={{ marginBottom: "20px" }}>Other posts about {tagName}:</div>
      {posts.map(post => {
        return (
          <li key={post.frontmatter.path}>
            <Link to={`/posts${post.frontmatter.path}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        )
      })}
    </Layout>
  )
}

export default SingleTagTemplate
