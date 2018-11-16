import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const TitleAndDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <TitleAndDescriptionWrapper>
      <h2>{title}</h2>
      <p>{description}</p>
    </TitleAndDescriptionWrapper>
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
