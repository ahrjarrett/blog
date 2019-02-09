import styled, { css, createGlobalStyle } from "styled-components"
import { codeStyles, fontDeclarations, fontStyles, media } from "./mixins"

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
`

export const pageFormatting = css`
  padding-bottom: 4rem;
  ${media.desktop`
    padding-bottom: 6rem;
  `};

  header,
  div.title,
  article.content,
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

  .title {
    ${media.desktop`
      h1 {
        font-size: 4.5rem;
        line-height: 1.1;
      }
    `};

    h1 {
      margin-top: 3rem;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      text-align: center;
    }
  }
`
