import styled from "styled-components"
import { media } from "../theme/mixins"

export const BlogPostStyles = styled.div`
  background: ${props => props.theme.ghost};
  padding-bottom: 4rem;

  header,
  div.title,
  article.content,
  .footer {
    margin-left: auto;
    margin-right: auto;
    max-width: 70.5rem;

    .section-stretch,
    .section-header {
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
