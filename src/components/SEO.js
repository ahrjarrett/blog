import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"
import PageVisibility from "react-page-visibility"

class SEO extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
      pageTitle: ``,
      titleTemplate: ``
    }
    this.isBlogPost = null
    this.isHomePage = null
    this.frontmatter = {}
    this.siteMetadata = {}
  }

  componentDidMount() {
    const pageTitle = this.getPageTitle(this.state.isVisible)
    const titleTemplate = this.makeTitleTemplate(
      this.state.isVisible,
      pageTitle
    )
    document.title = titleTemplate
    this.setState({ pageTitle, titleTemplate })
  }

  handleVisibilityChange = (isVisible, visibilityState) => {
    const pageTitle = this.getPageTitle(isVisible)
    const titleTemplate = this.makeTitleTemplate(
      this.state.isVisible,
      pageTitle
    )
    document.title = titleTemplate
    this.setState({ isVisible, pageTitle, titleTemplate })
  }

  getPageTitle = isVisible => {
    if (isVisible && this.isBlogPost) return this.frontmatter.title
    if (!isVisible && this.isBlogPost) return `I’m watching you  👀 `
    if (isVisible && this.isHomePage) return this.siteMetadata.shortTitle
    if (!isVisible && this.isHomePage) return `👎 Beat it creep! `
    else return this.siteMetadata.title
  }

  makeTitleTemplate = (isVisible, pageTitle) => {
    if (isVisible && this.isBlogPost)
      return `${pageTitle} – ${this.frontmatter.title}`
    if (!isVisible && this.isBlogPost)
      return `${pageTitle} – ${this.frontmatter.title}`
    if (isVisible && this.isHomePage)
      return `${pageTitle} – ${this.siteMetadata.shortTitle}`
    if (!isVisible && this.isHomePage)
      return `${pageTitle} – ${this.siteMetadata.subtitle}`
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteMetadata {
            site {
              siteMetadata {
                title
                shortTitle
                subtitle
                description
                canonicalUrl
                image
                altImage
                author {
                  minibio
                }
              }
            }
          }
        `}
        render={({ site: { siteMetadata } }) => {
          const { frontmatter } = this.props
          this.isBlogPost = this.props.isBlogPost
          this.isHomePage = this.props.isHomePage
          this.frontmatter = frontmatter
          this.siteMetadata = siteMetadata
          // const { canonicalUrl } = siteMetadata
          const canonicalUrl = new URL(window.location.href).origin

          const image = this.isBlogPost
            ? frontmatter.image
            : this.isHomePage
            ? siteMetadata.image
            : siteMetadata.altImage

          const description = this.isBlogPost
            ? frontmatter.excerpt
            : siteMetadata.author.minibio

          return (
            <PageVisibility onChange={this.handleVisibilityChange}>
              <Helmet>
                <html lang="en" />
                <meta name="description" content={description} />
                <meta property="image" content={`${canonicalUrl}${image}`} />
                <link
                  rel="canonical"
                  href={`${canonicalUrl}${this.props.pathname}`}
                />
                <meta property="og:url" content={canonicalUrl} />
                <meta
                  property="og:title"
                  content={
                    (frontmatter && frontmatter.title) || siteMetadata.title
                  }
                />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={`${canonicalUrl}${image}`} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en" />
                <meta property="og:site_name" content={siteMetadata.title} />
                {/* <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="225" /> */}
                <meta name="docsearch:version" content="2.0" />
                <meta
                  name="viewport"
                  content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
                />
              </Helmet>
            </PageVisibility>
          )
        }}
      />
    )
  }
}

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  isHomePage: PropTypes.bool,
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
}

SEO.defaultProps = {
  isBlogPost: false
}

export default SEO
