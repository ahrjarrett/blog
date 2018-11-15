import React from 'react'
import { graphql, Link } from 'gatsby'

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext

  return (
    <div>
      <div>
	Posts about {tagName}
      </div>
      {posts.map(post => {
	return (
	  <li key={post.frontmatter.path}>
            <Link to={post.frontmatter.path}>
              {post.frontmatter.title}
            </Link>
          </li>
	)
      })}
    </div>
  )
}

export default SingleTagTemplate

