import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'
import { MAIN_FONT } from '../contants'

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: MAIN_FONT,
}

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <div>
      <Header />
      <div style={style}>
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
      </div>
    </div>
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

export default Layout

