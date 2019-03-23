import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { linkHoverMixin, media } from "./theme/mixins"

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
    font-size: 1.125rem;
    font-style: italic;
    font-weight: 400;
    font-family: TraFine, serif;
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
      line-height: 1.35;
      text-transform: uppercase;
      a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        ${linkHoverMixin};

        border-bottom: 1px solid ${props => props.theme.offWhite};
        box-shadow: inset 0 -3px 0 ${props => props.theme.offWhite};
        transition: background 0.4s ease-out;
        &:hover {
          background: ${props => props.theme.offWhite};
        }
      }
    }
  }

  ${media.tablet`
    .tagline {
      font-size: 1.5rem;
    }
    .logo {
      padding-top: 5.25rem;
      a {
        font-size: 5.25rem;
      }
    }
  `};

  ${media.desktop`
    /* .logo {
      padding-top: 5.25rem;
      a {
        font-size: 5.25rem;
      }
    } */

    .tagline {
      margin-top: 0.625rem;
      font-size: 1.625rem;
    }

    nav.post-nav {
      li {
        ${media.desktop`
          font-size: 1rem;
        `}
      }
    }
  `};
`

const PostHeader = ({ next, prev }) => (
  <PostHeaderStyles>
    <div className="section-wide">
      <div className="logo">
        <Link to="/">The Grepper</Link>
      </div>
      <div className="tagline">you can’t grep dead trees</div>
      <nav className="post-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://thegrepper.com/">Portfolio</a>
          </li>
          <li>
            <a href="https://thegrepper.com/resume">Résumé</a>
          </li>
          {prev && (
            <li>
              <Link to={`/posts${prev.frontmatter.path}`}>Previous Post</Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={`/posts${next.frontmatter.path}`}>Next Post</Link>
            </li>
          )}
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
