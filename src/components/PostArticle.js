import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import MDXRenderer from "gatsby-mdx/mdx-renderer"

import ArticleMeta from "./ArticleMeta"
import * as s from "./styles/PostArticle.styles"

const PostArticle = ({
  body,
  date,
  excerpt,
  imagePath,
  metadata,
  sharpImage,
  tags,
  title,
  prev,
  next
}) => {
  const [state, setState] = useState({ width: 0, fontSize: 0 })
  let article
  let h2
  let width
  let fontSize
  useEffect(() => {
    article = document.getElementById("postArticle")
    h2 = document.getElementById("h2Size")
    width = article.offsetWidth
    fontSize = window.getComputedStyle(h2, null).getPropertyValue("font-size")

    window.h2 = h2
    window.fontSize = fontSize

    setState(() => ({ width, fontSize }))
  }, [])

  return (
    <s.ArticleStyles
      sharpImage={sharpImage}
      imagePath={imagePath}
      className="article-content"
    >
      <div className="section-stretch">
        <article id="postArticle">
          <ArticleMeta date={date} author={metadata.author} />
          <p className="lead-paragraph">{excerpt}</p>

          {console.log("WIDTH IN RENDER:", width)}
          {sharpImage ? (
            <div
              className="sharp-article-img"
              style={
                !state.width
                  ? null
                  : {
                      width: state.width,
                      height: state.width / sharpImage.aspectRatio
                    }
              }
            >
              <div className="article-img-overlay sharp-img-overlay">
                <Img fluid={sharpImage} />

                <h2
                  id="h2Size"
                  style={{
                    top: !state.fontSize
                      ? `inherit`
                      : `calc(50% - ${state.fontSize} - 20px`
                  }}
                >
                  {title}
                </h2>
                <h3>
                  tags:{" "}
                  {tags.map((t, i) => (
                    <Link key={i} to={"/tags/" + t}>
                      {t}
                    </Link>
                  ))}
                </h3>
              </div>
            </div>
          ) : (
            <div className="article-img">
              <div className="article-img-overlay">
                <span className="img-overlay" />
                <h2 id="h2Size">{title}</h2>
                <h3>
                  tags:{" "}
                  {tags.map((t, i) => (
                    <Link key={i} to={"/tags/" + t}>
                      {t}
                    </Link>
                  ))}
                </h3>
              </div>
            </div>
          )}

          <MDXRenderer>{body}</MDXRenderer>

          <div className="article-footer" style={{ marginBottom: "1rem" }}>
            <div className="footer-prev">
              {prev && (
                <Link to={`/posts${prev.frontmatter.path}`}>
                  ← Previous Post: {prev.frontmatter.title}
                </Link>
              )}
            </div>
            <div className="footer-next">
              {next && (
                <Link to={`/posts${next.frontmatter.path}`}>
                  → Next Post: {next.frontmatter.title}
                </Link>
              )}
            </div>
          </div>
        </article>
      </div>
    </s.ArticleStyles>
  )
}

PostArticle.propTypes = {
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  sharpImage: PropTypes.object,
  next: PropTypes.object,
  prev: PropTypes.object
}

export default PostArticle
