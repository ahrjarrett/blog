import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MAIN_FONT } from '../constants'

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: MAIN_FONT,
}

const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <div style={style}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
