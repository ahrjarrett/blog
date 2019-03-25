import { FrontmatterI } from "./Frontmatter.interface"
import { ImageSharpFluid } from "./ImageSharp.interface"

export interface PostQueryData {
  data: {
    mdx: {
      frontmatter: FrontmatterI
      code: {
        body: string
      }
    }
    img: {
      relativePath: string
      childImageSharp: {
        fluid: ImageSharpFluid
      }
    }
  }
}
