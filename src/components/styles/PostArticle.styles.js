import styled from "styled-components"
import { linkHoverMixin, media } from "../theme/mixins"

export const ArticleStyles = styled.article`
  p,
  li {
    margin-bottom: 1.1875rem;
    color: ${props => props.theme.primary};
    font-size: 0.9375rem;
    line-height: 1.45;
    font-weight: 500;
  }

  @media screen and (min-width: 40rem) {
    article {
      p,
      li,
      ol,
      h2,
      h3,
      h4 {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  @media screen and (min-width: 60rem) {
    article {
      p,
      li,
      ol,
      h2,
      h3,
      h4 {
        padding-left: 4.5rem;
        padding-right: 4.5rem;
      }
    }
  }

  @media screen and (min-width: 64rem) {
    article {
      p,
      li,
      ol,
      h2,
      h3,
      h4 {
        padding-left: 3rem;
        padding-right: 3rem;
      }
    }
  }

  ${media.newPhone`
    p, li {
      font-size: 1.0625rem;
    }
    ol {
      /* padding-left: 4.25rem; */
      li {
        padding-left: 0.5rem;
      }
    }
  `}

  ol {
    margin-left: 2.25rem;
  }

  ${media.tablet`
    h1 {
      font-size: 3rem;
      line-height: 1.2;
    }
  `}

  ${media.desktop`
    p, li {
      font-size: 1.25rem;
      font-weight: 500;
    }
    p.lead-paragraph {
      font-size: 1.375rem;
      font-weight: 900;
    }
    h1 {
      font-size: 4.5rem;
      line-height: 1.1;
    }
  `}

  h2 {
    margin-top: 1.9375rem;
    margin-bottom: 0.9375rem;
  }

  h3 {
    margin-top: 1.4375rem;
    margin-bottom: 0.8rem;
  }

  h4 {
    margin-top: 1.08rem;
    margin-bottom: 0.775rem;
  }

  .byline {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${props => props.theme.primary};
    margin-top: 1.75rem;
    margin-bottom: 1.9375rem;
    padding-bottom: 1rem;
    color: ${props => props.theme.primary};
    line-height: 0;

    h4 {
      padding: 0.5rem;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.primary};
    }
    a.author-img {
      border-bottom: unset;
      box-shadow: unset;
      transition: unset;
      &:hover {
        background: transparent;
      }
    }
    img {
      margin-left: 0.475rem;
      margin-right: 0.375rem;
      margin-top: 4px;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }
  .by {
    display: none;
  }
  .lead-paragraph {
    font-weight: 900;
    font-size: 1.25rem;
    line-height: 1.375;
    margin-bottom: 2.125rem;
    letter-spacing: -0.03em;
    text-transform: none;
    text-align: left;
  }

  .article-img {
    position: relative;
    /* height: 14rem; */
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    span.img-overlay {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background: ${({ imgOverlay, theme }) =>
        imgOverlay
          ? imgOverlay
          : imgOverlay === null
          ? "unset"
          : theme.tertiaryTrans};
        /* imgOverlay || imgOverlay === null ? "unset" : theme.tertiaryTrans}; */
    }

    ${media.newPhone`
      height: 18rem;
    `};
    ${media.tablet`
      height: 20rem;
    `};
    ${media.desktop`
      height: 24rem;
    `};
  }

  .article-img-overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;

      background-image: ${props => `url(${props.imagePath})`};
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;

    h2,
    h3 {
      margin-top: 0;
      margin-bottom: 0;
    }

    h2,
    h3 {
      color: white;
      text-shadow: ${props => props.theme.textShadow};
      position: absolute;
    }
    h2 {
      top: 35%;
      transform: translateY(-50%);
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      z-index: 2;
      font-size: 1.5rem;
      max-width: 100%;
      text-align: center;
      text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
      padding-left: 1rem;
      padding-right: 1rem;
    }
    h3 {
      top: 1rem;
      left: 1rem;
      z-index: 2;
      font-size: 0.9375rem;
    }
    a {
      color: white;
      margin-right: 0.5rem;
      ${linkHoverMixin};
    }

    ${media.newPhone`
      h2, h3 {
        padding-left: 0;
        padding-right: 0;
      }
    `};

    ${media.tablet`
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1rem;
      }
    `};

    ${media.desktop`
      h2 {
        font-size: 2.625rem;
      }
      h3 {
        font-size: 1.125rem;
      }
    `};
  }

  .sharp-article-img {
    position: relative;
    /* height: ${props => props.sharpImage.presentationHeight + "px"}; */
    /* max-height: ${props => props.sharpImage.presentationHeight}; */
    height: ${({ sharpImage }) =>
      !sharpImage
        ? null
        : sharpImage.aspectRatio * (sharpImage.presentationHeight / 2) + "px"};
  }

  .sharp-img-overlay {
    background: ${({ imgOverlay }) => imgOverlay || "unset"};
    h2 {
      position: absolute;
      /* top: calc(50% - 1.125rem); */
      margin: 0;
      padding: 0;
      line-height: 1.2;
    }
    span.sharp-img-overlay-span {
      background: ${({ imgOverlay }) => imgOverlay || "unset"};
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
    }
  }

  .article-footer {
    margin-top: 3.5rem;
    margin-bottom: 3rem;

    .footer-prev {
      margin: 0.5rem 0rem;
    }
    .footer-next {
      margin: 0.5rem 0rem;
    }

    ${media.tablet`
      /* .footer-prev {
        margin: 0.375rem 4.5rem;
      }
      .footer-next {
        margin: 0.375rem 4.5rem;
      } */
    `};
    ${media.desktop`
      .footer-prev {
        margin: 0.375rem 4.5rem;
      }
      .footer-next {
        margin: 0.375rem 4.5rem;
      }
    `};
  }
`
