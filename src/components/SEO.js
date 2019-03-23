import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const SEO = ({ pathname }) => (
   <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            canonicalUrl
            title
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { canonicalUrl, title, twitter },
      },
    }) => (
      <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
	<html lang="en" />
        <link rel="canonical" href={`${canonicalUrl}${pathname}`} />
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${canonicalUrl}/images/2019-02-16-draw-an-interactive-elevation-chart-with-d3-and-react-pt-2.gif`} />
	<meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="225" />

      </Helmet>
    )}
  />
)

export default SEO

