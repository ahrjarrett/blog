import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Navbar from "./Navbar"
import { media } from "../components/theme/mixins"

const TitleSubtitleStyles = styled.div`
  .main {
    padding-top: 60px;
  }

  .content {
    padding: 30px 20px;
    ${media.tablet`
      padding: 60px 60px 80px 60px;
    `};
  }

  .landing {
  }

  .full {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    min-height: calc(100vh - 120px);
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    flex-wrap: wrap;
    display: flex;

    .tagline {
      ${media.tablet`
        font-size: 1.125rem;
      `};
      position: absolute;
      top: 20%;
      transform: rotate(-90deg);
      text-transform: lowercase;
      align-self: flex-start;
      color: ${props => props.theme.primary};
      font-size: 0.925rem;
      font-weight: 700;
      margin-top: 5.625rem;
    }

    .title {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: auto;
      margin-right: auto;
      width: 100%;

      h1 {
        padding: 0;
        margin-top: 0;
        margin-bottom: 1.4rem;
        font-size: 14vw;
        z-index: 1;
        position: relative;
        font-family: TraDisplay;
        font-weight: 800;
      }
    }
  }

  .hero {
    top: calc(50vh + 45px);
    position: absolute;
    z-index: 0;
    width: 100%;
    left: 0;
    right: 0;
    .hero-img {
      background: url("/images/hero.jpeg");
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      height: 800px;
    }

    ${media.tablet`
      top: calc(50vh + 80px);

    `};
  }

  .blurb {
    /* width: 100%; */
    max-width: 450px;
    align-self: flex-start;
    /* margin-left: auto; */
    /* text-shadow: 0 0 20px #000; */
    color: #fcf8e4;

    position: absolute;
    z-index: 2;
    max-width: 450px;
    align-self: flex-start;
    text-shadow: ${props => props.theme.textShadow};
    bottom: 15px;
    left: 30px;
    right: 30px;

    h3 {
      color: ${props => props.theme.ghost};
      font-size: 1rem;
    }
  }
`

const TitleSubtitle = ({ data }) => {
  const { title, subtitle, description } = data.site.siteMetadata
  return (
    <TitleSubtitleStyles>
      <Navbar />
      <div className="main">
        <div className="content">
          <div className="landing">
            <div className="full">
              <div className="tagline">
                Live.
                <br />
                Explore.
                <br />
                Expand.
              </div>
              <div className="title">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="hero">
              {/* <img src="/images/hero.jpeg" /> */}
              <div className="hero-img" />
            </div>
          </div>
          <div className="blurb">
            <h3>{description}</h3>
          </div>
        </div>
      </div>
    </TitleSubtitleStyles>
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
        <TitleSubtitle data={data} />
      </div>
    )}
  />
)

export default Header
