import styled, { css, createGlobalStyle } from "styled-components"
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
    font-family: Tik;
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

  /* input:focus,
  textarea:focus,
  select:focus {
    outline: 0;
  } */

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

  .box-quote {
    padding: 2rem;
    /* 2rem on smaller than tabletLg */
    border: 2px solid ${props => props.theme.primary};
    width: 80%;
    margin: 2.75rem auto 2.375rem;
    p {
      color: ${props => props.theme.primary};
      padding: 0;
      margin-bottom: 0;
      font-size: 1.875rem;
      font-weight: 600;
    }
  }
`

export const pageFormatting = css`
  padding-bottom: 4rem;
  ${media.desktop`
    padding-bottom: 6rem;
  `};

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
