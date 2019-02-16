import { css } from "styled-components"

const breakpoints = {
  desktop: 1024,
  tabletLg: 768,
  tablet: 640,
  newPhone: 480
}

type MediaType = {
  desktop: Function
  tabletLg: Function
  tablet: Function
  newPhone: Function
}

/* You can use the media export in a styled-component like so:
 *   ${media.desktop`display: flex;`}
 *   ${media.tablet`display: inline-block;`}
 *   ${media.phone`display: none;`} */
export const media: MediaType = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpoints[label] / 16}em) {
        ${css(...args)};
      }
    `
    return acc
  },
  {}
)

export const linkHoverMixin = css`
  &:hover {
    font-family: TikRotalic, sans-serif;
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

  /* blockquote {
    font-family: Tik, sans-serif;
    code {
      font-family: Fira Code;
    }
    margin-bottom: 3rem;
    color: ${props => props.theme.gray};
    line-height: 1.35;
    pre,
    b,
    a {
      color: ${props => props.theme.midGray};
    }
    a {
      text-decoration: none;
      border-bottom: 1px solid ${props => props.theme.offWhite};
      box-shadow: inset 0 -3px 0 ${props => props.theme.offWhite};
      transition: background 0.4s ease-out;
      &:hover, &:focus {
        background: ${props => props.theme.offWhite};
      }
    }
  } */


  /*** CODE BLOCK STYLES ***/

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  button {
    font-family: Tik, sans-serif;
  }

  ul,
  li {
    font-family: Tik, sans-serif;
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
  `};

  ${media.tablet`
    h1 {
      font-size: 2.75rem;
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
  `};

  blockquote {
    font-family: Tik, sans-serif;
    line-height: 1.35;
    /* 2rem on smaller than tabletLg */
    padding: 2rem;
    color: ${props => props.theme.gray};
    border: 2px dashed #738a94;
    width: 80%;
    margin: 2.75rem auto 2.375rem;

    font-weight: 600;

    p {
      margin-bottom: 0 !important;
      font-weight: 600 !important;
      font-family: Tik, sans-serif !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      color: ${props => props.theme.gray} !important;
      font-size: 1.75rem !important;
    }
    code,
    pre {
      font-weight: 700;
      font-family: Fira Code;
      color: ${props => props.theme.midGray};
    }
    b,
    strong {
      font-weight: 700;
      color: ${props => props.theme.midGray};
      font-family: Tik, sans-serif;
    }
    cite {
      text-transform: uppercase;
      font-weight: 700;
      ${linkHoverMixin};
    }

    a {
      font-family: Tik, sans-serif;
      text-decoration: none;
      color: ${props => props.theme.midGray} !important;
      border-bottom: 1px solid ${props => props.theme.offWhite};
      box-shadow: inset 0 -3px 0 ${props => props.theme.offWhite};
      transition: background 0.4s ease-out;
      &:hover, &:focus {
        background: ${props => props.theme.offWhite};
      }
    }

    &,
    a,
    b,
    strong,
    p,
    cite,
    code,
    pre {
      font-size: 1.5rem;
      ${media.tablet`
        font-size: 1.5rem;
      `};
      ${media.tabletLg`
        font-size: 1.625rem;
      `};
    }

    /* ${media.desktop`
      width: calc(100vw - 320px);
      font-size: 1.75rem;
    `}; */

    sup a {
      font-size: 1rem;
    }
  }
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
    src: url("/fonts/Tra/Book.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Tra";
    src: url("/fonts/Tra/Regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Tra";
    src: url("/fonts/Tra/Medium.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Tra";
    src: url("/fonts/Tra/Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Tra";
    src: url("/fonts/Tra/Black.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Tra";
    src: url("/fonts/Tra/Book-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "Tra";
    src: url("/fonts/Tra/Regular-Italic.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: "Tra";
    src: url("/fonts/Tra/Medium-Italic.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: "Tra";
    src: url("/fonts/Tra/Bold-Italic.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "Tra";
    src: url("/fonts/Tra/Black-Italic.woff2") format("woff2");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "TraFine";
    src: url("/fonts/Tra/Fine-Book.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "TraFine";
    src: url("/fonts/Tra/Fine-Regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "TraFine";
    src: url("/fonts/Tra/Fine-Medium.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "TraFine";
    src: url("/fonts/Tra/Fine-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "TraFine";
    src: url("/fonts/Tra/Fine-Black.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "TraFine";
    src: url("/fonts/Tra/Fine-Book-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "TraFine";
    src: url("/fonts/Tra/Fine-Regular-Italic.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: "TraFine";
    src: url("/fonts/Tra/Fine-Medium-Italic.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: "TraFine";
    src: url("/fonts/Tra/Fine-Bold-Italic.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "TraFine";
    src: url("/fonts/Tra/Fine-Black-Italic.woff2") format("woff2");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "TraDisplay";
    src: url("/fonts/Tra/Display-Light.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("/fonts/Tra/Display-Regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("/fonts/Tra/Display-Medium.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("/fonts/Tra/Display-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("/fonts/Tra/Display-Super.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "TraDisplay";
    src: url("/fonts/Tra/Display-Light-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("/fonts/Tra/Display-Regular-Italic.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("/fonts/Tra/Display-Medium-Italic.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("/fonts/Tra/Display-Bold-Italic.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "TraDisplay";
    src: url("/fonts/Tra/Display-Super-Italic.woff2") format("woff2");
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
  pre {
    padding: 0;
  }
  pre,
  code {
    font-family: Fira Code;
    font-weight: 600;
    display: inline;
    font-size: 0.75rem;
    ${media.tablet`
      font-size: 1rem;
    `}
  }

  /* Hide line-numbers on mobile */
  .line-numbers-rows {
    visibility: hidden;
    ${media.tablet`
      visibility: visible;
    `};
  }
`
