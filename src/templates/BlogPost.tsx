import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostHeader from "../components/PostHeader"
import PostArticle from "../components/PostArticle"
import * as s from "../components/styles/BlogPost.styles"
import { PostQueryData } from "../interfaces/PostQuery.interface"
import { RouterProps } from "@reach/router"

type Props = PostQueryData & RouterProps

// pageContext is passed thru via context object in gatsby-node.js
const Template: React.FunctionComponent<Props> = ({ data, pageContext }) => {
  const { mdx } = data
  const { title, date, excerpt, tags, image } = mdx.frontmatter
  const { code } = mdx
  const { prev, next } = pageContext

  return (
    <Layout>
      <s.BlogPostStyles>
        <PostHeader next={next} prev={prev} />
        <div className="title">
          <div className="section-wide">
            <h1>{title}</h1>
          </div>
        </div>
        <PostArticle
          date={date}
          excerpt={excerpt}
          tags={tags}
          title={title}
          image={image}
          body={code.body}
          next={next}
          prev={prev}
        />
        {/* <footer>
          <div className="section-stretch">
            <h1>FOOTER</h1>
          </div>
        </footer> */}
      </s.BlogPostStyles>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      code {
        body
      }
      ...FrontmatterFragment
    }
  }
`

export default Template
