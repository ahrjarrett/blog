import { graphql } from "gatsby"

export const FrontmatterFragment = graphql`
  fragment FrontmatterFragment on Mdx {
    frontmatter {
      title
      date(formatString: "MMM DD, YYYY")
      image
      sharpImage
      imgOverlay
      excerpt
      path
      tags
    }
  }
`

export const AuthorFragment = graphql`
  fragment AuthorFragment on SiteSiteMetadata {
    author {
      name
      minibio
      image
      social {
        github
        linkedin
        twitter
      }
    }
  }
`
