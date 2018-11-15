import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MAIN_FONT } from '../constants'

const query = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}`

const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <div style={{
	   display: 'flex',
	   flexDirection: 'column',
	   alignItems: 'center',
	   fontFamily: MAIN_FONT,
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={query}
      render={data => <TitleAndDescription data={data} />}
      />
  )
}

export default Header
