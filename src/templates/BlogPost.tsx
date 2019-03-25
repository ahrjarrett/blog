import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostHeader from "../components/PostHeader"
import PostArticle from "../components/PostArticle"
import * as s from "../components/styles/BlogPost.styles"
import { PostQueryData } from "../interfaces/PostQuery.interface"
import { RouterProps } from "@reach/router"

type Props = PostQueryData & RouterProps

// pageContext is passed thru via context object in gatsby-node.js
const Template: React.FunctionComponent<Props> = ({
  data,
  pageContext,
  location
}) => {
  const { mdx } = data
  const { frontmatter } = mdx
  const { title, date, excerpt, tags } = frontmatter
  const { code } = mdx
  const { prev, next, img } = pageContext

  console.log("pageContext:", pageContext)
  console.log("data:", data)

  return (
    <Layout location={location}>
      <SEO pathname={location.pathname} frontmatter={frontmatter} isBlogPost />
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
          image={data.img}
          body={code.body}
          next={next}
          prev={prev}
        />
      </s.BlogPostStyles>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!, $image: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      code {
        body
      }
      ...FrontmatterFragment
    }
    img: file(relativePath: { eq: $image }) {
      relativePath
      childImageSharp {
        fluid(
          maxWidth: 1408
        ) # traceSVG: { color: "#30866f", turnPolicy: TURNPOLICY_MINORITY }
        {
          tracedSVG
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Template
