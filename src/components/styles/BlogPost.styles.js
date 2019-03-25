import styled from "styled-components"
import { pageFormatting } from "../theme/GlobalStyles"
import { media } from "../theme/mixins"

export const BlogPostStyles = styled.div`
  background: ${props => props.theme.white};

  .title {
    h1 {
      font-family: Tra !important;
      font-size: 2rem;
      font-weight: 600;
      color: #000;
      line-height: 1.15;

      ${media.newPhone`
        font-size: 3rem;
      `};
      ${media.tablet`
        font-size: 3.6875rem;
      `}
    }
  }

  .blogpost {
    margin-bottom: 3.25rem;
  }

  ${pageFormatting};
`
