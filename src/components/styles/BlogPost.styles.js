import styled from "styled-components"

export const BlogPostStyles = styled.div`
  background: ${props => props.theme.ghost};

  header,
  div.title,
  article.content,
  .footer {
    margin-left: auto;
    margin-right: auto;

    .section-stretch {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .title {
    h1 {
      margin-top: 3rem;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      text-align: center;
    }
  }
`
