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
  const { mdx, img, metadata } = data
  const { frontmatter } = mdx
  const { title, date, excerpt, tags } = frontmatter
  const { code } = mdx
  const { prev, next, image } = pageContext

  console.log("data:", data)
  console.log("pageContext:", pageContext)

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
          imagePath={`/images/${image}`}
          sharpImage={img.childImageSharp ? img.childImageSharp.fluid : null}
          body={code.body}
          next={next}
          prev={prev}
          metadata={metadata.siteMetadata}
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
        fluid(maxWidth: 1408) {
          ...GatsbyImageSharpFluid_tracedSVG
          presentationHeight
          presentationWidth
        }
      }
    }
    metadata: site {
      siteMetadata {
        author {
          name
          minibio
          image
        }
      }
    }
  }
`

export default Template
