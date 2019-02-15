import { FrontmatterI } from "./Frontmatter.interface"

export interface PostQueryData {
  data: {
    mdx: {
      frontmatter: FrontmatterI
      code: {
        body: string
      }
    }
  }
}
