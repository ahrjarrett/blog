import styled from "styled-components"

const GlobalStyles = styled.div`
  @font-face {
    font-family: "Fira Code";
    src: local("Fira Code Bold"), local("FiraCode-Bold"),
      url("/fonts/FiraCode-Bold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: local("Fira Code Medium"), local("FiraCode-Medium"),
      url("/fonts/FiraCode-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: local("Fira Code Regular"), local("FiraCode-Regular"),
      url("/fonts/FiraCode-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: local("Fira Code Light"), local("FiraCode-Light"),
      url("/fonts/FiraCode-Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Flex";
    src: local("Flex"), local("Flex"), url("/fonts/flex.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "GT Super Text";
    src: local("GT Super Text Medium"), local("GT-Super-Text-Medium"),
      url("/fonts/GT-Super-Text-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  padding-bottom: 50px;

  blockquote {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  pre,
  code {
    font-family: Fira Code;
    font-weight: 600;
    font-size: 1rem;
    display: inline;
  }

  h3 {
    font-family: Flex;
  }

  input {
    font-family: Flex;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    margin-left: 0;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 0;
  }

  /**
  * Add back the container background-color, border-radius, padding, margin
  * and overflow that we removed from <pre>.
  */
  .gatsby-highlight {
    background-color: #2d2d2d;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  /**
  * Remove the default PrismJS theme background-color, border-radius, margin,
  * padding and overflow.
  * 1. Make the element just wide enough to fit its content.
  * 2. Always fill the visible space in .gatsby-highlight.
  * 3. Adjust the position of the line numbers
  */
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    /* Handles line numbers to the left! */
    padding-left: 40px;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  /* Code blocks: */
  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }
`

export default GlobalStyles
