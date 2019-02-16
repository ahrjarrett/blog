import { css, createGlobalStyle } from "styled-components"
import {
  codeStyles,
  fontDeclarations,
  fontStyles,
  linkHoverMixin,
  media
} from "./mixins"

export const GlobalStyles = createGlobalStyle`
  /* RESET/NORMALIZER TYPE STUFF */
  html {
    box-sizing: border-box;
  }

  body {
    /* @SET: 1rem === 16px */
    font-size: 16px;
    margin: 0;
    padding: 0;
    font-family: Tik, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    ${linkHoverMixin};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.primary};
  }

  ${fontDeclarations};
  ${fontStyles};
  ${codeStyles};

  .youtube-video {
    ${media.newPhone`
      width: 480px;
      height: 360px;
    `}
    ${media.tablet`
      width: 600px;
      height: 400px;
    `}
    ${media.desktop`
      width: 720px;
      height: 480px;
    `}
    width: 100%;
    height: 240px;
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
  }

`

export const pageFormatting = css`
  padding-bottom: 4rem;
  ${media.desktop`
    padding-bottom: 6rem;
  `};

  article {
    p, li {
      font-family: Tra, serif;
      font-weight: 500;
      color: ${props => props.theme.midGray};
    }
    p.lead-paragraph {
      color: ${props => props.theme.primary};
    }
    strong, b {
      font-family: Tra, serif;
      font-weight: 700;
      color: ${props => props.theme.midGray};
    }
    h2, h3 {
      font-family: Tra, serif;
      font-weight: 700;
      color: ${props => props.theme.midGray};
    }
    a {
      color: ${props => props.theme.gray};
      border-bottom: 1px solid ${props => props.theme.offWhite};
      box-shadow: inset 0 -3px 0 ${props => props.theme.offWhite};
      transition: background 0.4s ease-out;
      line-height: 1.3;
      /* ${linkHoverMixin}; */
      &:hover {
        font-family: inherit;
        background: ${props => props.theme.offWhite};
      }
    }
  }

  header,
  div.title,
  article.article-content,
  .footer {
    margin-left: auto;
    margin-right: auto;
    max-width: 70.5rem;

    .section-stretch,
    .section-wide {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      article {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
      }
    }

    .section-stretch {
      ${media.tablet`
        width: 66.6666666667%;
        margin-left: auto;
        margin-right: auto;
      `}
    }
  }

  .title h1 {
    ${media.desktop`
      font-size: 4.5rem;
      line-height: 1.1;
    `};

    margin-top: 3rem;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }

  /* Spacing wrapper that can be reused */
  .content {
    padding: 30px 20px;
    ${media.tablet`
      padding: 60px;
    `};
  }
`
