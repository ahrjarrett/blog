import { graphql } from "gatsby"

export const FrontmatterFragment = graphql`
  fragment FrontmatterFragment on Mdx {
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
