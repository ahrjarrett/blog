import { graphql } from "gatsby"

export const FrontmatterFragment = graphql`
  fragment FrontmatterFragment on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "MMM DD, YYYY")
      image
      excerpt
      path
      tags
    }
  }
`
