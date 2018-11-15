import React from 'react'
import { graphql, Link } from 'gatsby'
import { MAIN_FONT } from '../constants'

const style = {
  fontFamily: MAIN_FONT,
}

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext

  return (
    <div style={style}>
      <div>
	<ul style={{listStyle: 'none'}}>
	  {tags.map((tagName, index) => {
	    return (
	      <li key={index}>
		<Link to={`/tags/${tagName}`}>{ tagName }</Link>
	      </li>
	    )
	  })}
	</ul>
      </div>
    </div>
  )
}

export default AllTagsTemplate

