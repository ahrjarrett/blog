import React from 'react'
import { Link } from 'gatsby'
import { MAIN_FONT } from '../constants'

const style = {
  fontFamily: MAIN_FONT,
  margin: '40px',
}

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext

  return (
    <div style={style}>
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

