import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import MDXRenderer from "gatsby-mdx/mdx-renderer"

import * as s from "./styles/PostArticle.styles"

const PostArticle = ({
  body,
  date,
  excerpt,
  image,
  tags,
  title,
  prev,
  next
}) => (
  <s.ArticleStyles image={image} className="article-content">
    {console.log("POST ARTICLE image:", image)}
    <div className="section-stretch">
      <article>
        <div className="byline">
          <span className="by">By</span>
          <h4>
            <a
              href="https://thegrepper.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andrew Jarrett
            </a>
          </h4>
          <a
            className="author-img"
            href="https://thegrepper.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/headshot.jpeg" alt="Andrew Jarrett" />
          </a>
          <h4>{date}</h4>
        </div>
        <p className="lead-paragraph">{excerpt}</p>

        <div className="article-img">
          <div className="article-img-overlay">
            <Img fluid={image.childImageSharp.fluid} />
            {/* <span className="img-overlay" /> */}
            <h2>{title}</h2>
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

PostArticle.propTypes = {
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  next: PropTypes.object,
  prev: PropTypes.object
}

export default PostArticle
