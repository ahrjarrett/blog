import styled from "styled-components"
import { pageFormatting } from "../theme/GlobalStyles"

export const BlogPostStyles = styled.div`
  background: ${props => props.theme.ghost};

  .blogpost {
    margin-bottom: 3.25rem;
  }

  ${pageFormatting};
`
