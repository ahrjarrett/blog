import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Navbar from "./Navbar"
import { media } from "../components/theme/mixins"

const TitleSubtitleStyles = styled.div`
  .main {
    padding-top: 60px;
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

    .subtitle {
      ${media.tablet`
        font-size: 0.9375rem;
      `};
      position: absolute;
      top: 28.5%;
      left: 5%;
      transform: rotate(-90deg);
      text-transform: lowercase;
      align-self: flex-start;
      color: ${props => props.theme.primary};
      font-family: Fira Code;
      font-weight: 600;
      font-size: 0.875rem;
      font-weight: 700;
      span {
        color: black;
      }
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
    height: 100%;
    left: 0;
    right: 0;

    .hero-img {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 800px;
      background: url("/images/hero.jpeg");
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .hero-img-overlay {
      height: 800px;
      width: 100%;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      background: ${props => props.theme.tertiaryTrans};
    }

    ${media.tablet`
      top: calc(50vh + 80px);

    `};
  }

  .blurb {
    max-width: 450px;
    align-self: flex-start;
    color: #fcf8e4;
    margin-left: auto;

    position: absolute;
    z-index: 2;
    max-width: 450px;
    align-self: flex-start;
    text-shadow: 0 0 20px #000;
    left: 30px;
    right: 30px;

    /* TINY MOBILE STYLES */
    bottom: 2.75rem;
    padding: 0.5rem;
    h3 {
      color: ${props => props.theme.ghost};
      font-size: 1rem;
      line-height: 1.375;
    }
    ${media.newPhone`
      h3 {
        font-size: 1.125rem;
      }
      bottom: 8.75rem;
    `};
    ${media.tablet`
      padding: 0;
      bottom: 7.25rem;
    `};
    ${media.desktop`
      bottom: 5.25rem;
      padding-right: 3.725rem;
    `};
  }
`

interface Props {
  data: {
    site: {
      siteMetadata: {
        description: string
        subtitle: string
        title: string
      }
    }
  }
}

const TitleSubtitle = ({ data }: Props) => {
  const { title, description } = data.site.siteMetadata
  return (
    <TitleSubtitleStyles>
      <Navbar />
      <div className="main">
        <div className="content">
          <div className="landing">
            <div className="full">
              <div className="subtitle">
                <span>g</span>lobal
                <br />
                <span>r</span>egular
                <br />
                <span>e</span>xpression
                <br />
                <span>p</span>rint
              </div>
              <div className="title">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="hero">
              {/* <img src="/images/hero.jpeg" /> */}
              <div className="hero-img" />
              <span className="hero-img-overlay" />
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
