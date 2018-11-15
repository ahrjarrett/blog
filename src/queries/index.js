import { graphql } from 'gatsby'

export const FrontmatterFragment = graphql`
  fragment FrontmatterFragment on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "dddd, MMMM DD YYYY")
      path
      tags
    }
  }
`
