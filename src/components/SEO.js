import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const SEO = ({ pathname, isBlogPost, frontmatter }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            subtitle
            description
            canonicalUrl
            image
            author {
              name
              minibio
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          title,
          subtitle,
          description,
          canonicalUrl,
          image,
          author: { name, minibio }
        }
      }
    }) => {
      let pageTitle = isBlogPost ? frontmatter.title : title

      return (
        <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
          <html lang="en" />
          <title>{pageTitle}</title>
          <meta name="description" content={description} />
          <meta
            property="image"
            content={`${canonicalUrl}/images/2019-02-16-draw-an-interactive-elevation-chart-with-d3-and-react-pt-2.gif`}
          />
          <link rel="canonical" href={`${canonicalUrl}${pathname}`} />

          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content={`${canonicalUrl}/images/2019-02-16-draw-an-interactive-elevation-chart-with-d3-and-react-pt-2.gif`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content={title} />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="225" />

          <meta name="docsearch:version" content="2.0" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
          />
        </Helmet>
      )
    }}
  />
)

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  pathname: PropTypes.string,
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    excerpt: PropTypes.string,
    published: PropTypes.bool
  })
  // frontmatter:
}

SEO.defaultProps = {
  isBlogPost: false
}

export default SEO
