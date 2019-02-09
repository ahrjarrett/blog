import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Navbar from "./Navbar"

const BlogTitleAndDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: right;
    position: relative;
  }
  @media all and (max-width: 500px) {
    p {
      margin-top: 2rem;
    }
  }
`

const Title = styled.h1`
  font-family: flex;
  font-size: 20vw;
  line-height: .625;
  letter-spacing: -.0975em;
  border-bottom: 0;
  color: rgba(0, 0, 0, 0.375);
  background: white;
  height: 110vh;
  position: relative;
  z-index: 2;

  margin-top: -2rem;
  margin-bottom: 2rem;
  @media all and (max-width: 900px) {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  #title-top {
    text-align: right;
  }

  #title-bottom {
    text-align: left;
    line-height: .675;
    letter-spacing: -.08em;
  }

  #grep {
    color: rgba(0, 0, 0, 0.8);
  }

  #amp {
    position: absolute;
    top: 35%;
    left: 0%;
    font-size: 56vw;
    color: rgba(0, 0, 0, 0.15);
    line-height: .3;
    padding-left: 1rem;
  }
  #amp:before {
    content: '&';
  }
}
`

const Subtitle = styled.h2`
  font-size: 3rem;
  border-bottom: 0;
  text-align: center;
  font-family: flex;
  font-size: 12vw;
  margin-top: 12rem;
  margin-bottom: 4rem;
`

const BlogTitleAndDescription = ({ data }) => {
  const { title, subtitle, description } = data.site.siteMetadata
  return (
    <BlogTitleAndDescriptionWrapper>
      <Title>{title}</Title>
      <Navbar />
      <Subtitle>{subtitle.toLowerCase()}</Subtitle>
    </BlogTitleAndDescriptionWrapper>
  )
}

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <BlogTitleAndDescription data={data} />
      </div>
    )}
  />
)

export default Header
