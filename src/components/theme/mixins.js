import { css } from "styled-components"

const breakpoints = {
  desktop: 1024,
  tabletLg: 768,
  tablet: 640,
  newPhone: 480
}

/* You can use the media export in a styled-component like so:
 *   ${media.desktop`display: flex;`}
 *   ${media.tablet`display: inline-block;`}
 *   ${media.phone`display: none;`} */
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export const linkHoverMixin = css`
  &:hover {
    font-family: TikRotalic;
  }
`

export const fontStyles = css`
  i,
  em {
    font-style: italic;
  }

  b,
  strong {
    font-weight: 700;
  }

  /*** CODE BLOCK STYLES ***/
  blockquote {
    /* general styles */
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
    position: relative;

    &::before,
    &::after {
      font-size: 1.925em;
      font-weight: 600;
      position: absolute;
      left: 50%;
      line-height: 0;
    }
    &::before {
      content: "“";
      top: -0.625rem;
    }
    &::after {
      content: "”";
      bottom: -2rem;
    }

    /* specific styles */
    text-align: center;
    margin-top: 2.75rem;
    margin-bottom: 3rem;
    line-height: 1.35;

    &,
    p {
      font-weight: 600;
    }
    a,
    code,
    pre {
      font-weight: 800;
    }
    b,
    strong {
      font-weight: 800;
    }
    cite {
      /* font-family: TikRotalic; */
      text-transform: uppercase;
      ${linkHoverMixin};
    }

    a {
      text-decoration: none;
    }

    &,
    a,
    b,
    code,
    strong,
    p,
    cite,
    pre {
      font-size: 2rem;
      ${media.tablet`
      font-size: 1.5rem;
    `};
      ${media.tabletLg`
      font-size: 1.625rem;
    `};
    }

    ${media.desktop`
      width: calc(100vw - 320px);
      font-size: 1.75rem;
    `};

    sup a {
      font-size: 1rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: Tik;
  }

  ul,
  li {
    font-family: Tik;
    font-weight: 500;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  h2 {
    font-size: 1.375rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  h4 {
    font-size: 1.125rem;
    font-weight: 800;
  }

  ${media.newPhone`
    h1 {
      font-size: 1.875rem;
    }
  `}

  ${media.tablet`
    h1 {
      font-size: rem;
      font-weight: 500;
    }
    h2 {
      font-size: 2.25rem;
      font-weight: 600;
    }
    h3 {
      font-size: 1.75rem;
      font-weight: 600;
    }

  `}
`

export const fontDeclarations = css`
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Lazer.woff2") format("woff2");
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Thin.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Light.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Medium.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Black.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Lazer-Oblique.woff2") format("woff2");
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Thin-Oblique.woff2") format("woff2");
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Light-Oblique.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Regular-Oblique.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Medium-Oblique.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Bold-Oblique.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "Tik";
    src: url("/fonts/Tik/Black-Oblique.woff2") format("woff2");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "TikRotalic";
    src: url("/fonts/Tik/Lazer-Rotalic.woff2") format("woff2");
    font-weight: 200;
  }
  @font-face {
    font-family: "TikRotalic";
    src: url("/fonts/Tik/Thin-Rotalic.woff2") format("woff2");
    font-weight: 300;
  }
  @font-face {
    font-family: "TikRotalic";
    src: url("/fonts/Tik/Light-Rotalic.woff2") format("woff2");
    font-weight: 400;
  }
  @font-face {
    font-family: "TikRotalic";
    src: url("/fonts/Tik/Regular-Rotalic.woff2") format("woff2");
    font-weight: 500;
  }
  @font-face {
    font-family: "TikRotalic";
    src: url("/fonts/Tik/Medium-Rotalic.woff2") format("woff2");
    font-weight: 600;
  }
  @font-face {
    font-family: "TikRotalic";
    src: url("/fonts/Tik/Bold-Rotalic.woff2") format("woff2");
    font-weight: 700;
  }
  @font-face {
    font-family: "TikRotalic";
    src: url("/fonts/Tik/Black-Rotalic.woff2") format("woff2");
    font-weight: 800;
  }

  @font-face {
    font-family: "Tra";
    src: url("fonts/Tra/Book.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Tra";
    src: url("fonts/Tra/Regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Tra";
    src: url("fonts/Tra/Medium.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Tra";
    src: url("fonts/Tra/Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Tra";
    src: url("fonts/Tra/Black.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Tra";
    src: url("fonts/Tra/Book-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "Tra";
    src: url("fonts/Tra/Regular-Italic.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: "Tra";
    src: url("fonts/Tra/Medium-Italic.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: "Tra";
    src: url("fonts/Tra/Bold-Italic.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "Tra";
    src: url("fonts/Tra/Black-Italic.woff2") format("woff2");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "TraFine";
    src: url("fonts/Tra/Fine-Book.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "TraFine";
    src: url("fonts/Tra/Fine-Regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "TraFine";
    src: url("fonts/Tra/Fine-Medium.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "TraFine";
    src: url("fonts/Tra/Fine-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "TraFine";
    src: url("fonts/Tra/Fine-Black.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "TraFine";
    src: url("fonts/Tra/Fine-Book-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "TraFine";
    src: url("fonts/Tra/Fine-Regular-Italic.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: "TraFine";
    src: url("fonts/Tra/Fine-Medium-Italic.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: "TraFine";
    src: url("fonts/Tra/Fine-Bold-Italic.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "TraFine";
    src: url("fonts/Tra/Fine-Black-Italic.woff2") format("woff2");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "TraDisplay";
    src: url("fonts/Tra/Display-Light.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("fonts/Tra/Display-Regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("fonts/Tra/Display-Medium.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("fonts/Tra/Display-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("fonts/Tra/Display-Super.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "TraDisplay";
    src: url("fonts/Tra/Display-Light-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("fonts/Tra/Display-Regular-Italic.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("fonts/Tra/Display-Medium-Italic.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("fonts/Tra/Display-Bold-Italic.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("fonts/Tra/Display-Super-Italic.woff2") format("woff2");
    font-weight: 800;
    font-style: italic;
  }

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
`

export const codeStyles = css`
  pre,
  code {
    font-family: Fira Code;
    font-weight: 500;
    display: inline;
    font-size: 0.75rem;
    ${media.tablet`
      font-size: 1rem;
    `}
  }

  /**
  * Add back the container background-color, border-radius, padding, margin
  * and overflow that we removed from <pre>.
  */
  .gatsby-highlight {
    background-color: #2d2d2d;
    border-radius: 0.3rem;
    margin: 1.5rem 0;
    padding: 1rem;
    overflow: auto;
    max-width: 900px;
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
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
    padding-left: 0;
    ${media.tablet`
      /* Adjustments for line numbers! */
      padding-left: 2.8rem;
    `};
  }

  /* Code blocks: */
  .gatsby-highlight-code-line {
    background: hsla(24, 20%, 50%, 0.08);
    background: linear-gradient(
      to right,
      hsla(24, 20%, 50%, 0.1) 70%,
      hsla(24, 20%, 50%, 0)
    );

    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  /* Hide line-numbers on mobile */
  .line-numbers-rows {
    visibility: hidden;
    ${media.tablet`
      visibility: visible;
    `};
  }
`
