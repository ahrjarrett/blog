import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { linkHoverMixin, media } from "./theme/mixins";

const PostHeaderStyles = styled.header`
  .logo {
    padding-top: 3.75rem;
    text-align: center;
    a {
      font-family: TraDisplay;
      font-size: 2.5rem;
      font-weight: 800;
      text-decoration: none;
      color: ${props => props.theme.primary};
    }
  }
  .tagline {
    color: ${props => props.theme.primary};
    margin-top: 0.375rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.01em;
  }
  nav.post-nav {
    margin-top: 2.5rem;
    border-top: 1px solid ${props => props.theme.primary};
    padding-top: 0.875rem;
    padding-bottom: 0;
    ul {
      text-align: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    li {
      ${media.desktop`
        font-size: 1rem;
      `}
      font-size: 0.875rem;
      font-weight: 800;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      line-height: 2;
      text-transform: uppercase;
      ${linkHoverMixin};
      a {
        display: flex;
        flex-direction: column;
      }
    }
  }

  ${media.desktop`
    .logo {
      padding-top: 5.25rem;
      a {
        font-size: 5.25rem;
      }
    }

    .tagline {
      margin-top: 0.75rem;
      font-size: 1.625rem;

    }

    nav.post-nav {
      li {
        ${media.desktop`
          font-size: 1rem;
        `}
      }
    }
  `}
`

const PostHeader = ({ next, prev }) => (
  <PostHeaderStyles>
    <div className="section-wide">
      <div className="logo">
        <Link to="/">The Grepper</Link>
      </div>
      <div className="tagline">’cuz you can’t grep dead trees</div>
      <nav className="post-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="https://thegrepper.com/">Portfolio</a></li>
          <li><a href="https://thegrepper.com/resume">Resume</a></li>
          {prev && <li><Link to="/">Previous Post</Link></li>}
          {next && <li><Link to="/">Next Post</Link></li>}
        </ul>
      </nav>
    </div>
  </PostHeaderStyles>
)

PostHeader.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object
}

export default PostHeader
