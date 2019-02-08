import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import { linkHoverMixin } from "./theme/mixins"

const ArticleStyles = styled.article`
  li,
  p,
  blockquote {
    margin-bottom: 0.9375rem;
  }

  p,
  li {
    color: ${props => props.theme.primary};
    font-size: 0.9375rem;
    line-height: 1.45;
    font-weight: 500;
  }

  h2 {
    margin-top: 1.3125rem;
    margin-bottom: 0.9375rem;
  }

  .content {
  }
  .byline {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${props => props.theme.primary};
    padding-bottom: 1.5625rem;
    margin-top: 1.875rem;
    margin-bottom: 1.9375rem;
    color: ${props => props.theme.primary};
    line-height: 0;
    a {
      text-decoration: none;
    }
    img {
      margin-left: 0.425rem;
      margin-right: 0.375rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }
  .by {
    display: none;
  }
  .lead-paragraph {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.375;
    letter-spacing: -0.03em;
    text-transform: none;
    text-align: left;
  }

  .article-img {
    position: relative;
    height: 14rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    span.img-overlay {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${props => props.image});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
  .article-img-overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100%;
    background: ${props => props.theme.primaryTrans};

    h2,
    h3 {
      color: white;
      text-shadow: ${props => props.theme.textShadow};
      position: absolute;
    }
    h2 {
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      font-size: 1.5rem;
      width: 100%;
      max-width: 100%;
      text-align: center;
    }
    h3 {
      top: 1rem;
      left: 1rem;
      z-index: 2;
    }
    a {
      color: white;
      padding-right: 0.5rem;
      ${linkHoverMixin};
    }
  }
`

const PostArticle = ({
  date,
  excerpt,
  image,
  tags,
  title,
  html,
  prev,
  next
}) => (
  <ArticleStyles image={image} className="content">
    <div className="section-stretch">
      <div className="byline">
        <span className="by">By</span>
        <h4>
          <a href="https://thegrepper.com/" target="_blank">
            Andrew Jarrett
          </a>
        </h4>
        <a href="https://thegrepper.com/" target="_blank">
          <img src="/images/headshot.jpeg" alt="Andrew Jarrett" />
        </a>
        <h4>{date}</h4>
      </div>
      <p className="lead-paragraph">{excerpt}</p>

      <div className="article-img">
        <span className="img-overlay" />
        <div className="article-img-overlay">
          <h2>{title}</h2>
          <h3>
            Tags:{" "}
            {tags.map((t, i) => (
              <Link key={i} to={"/tags/" + t}>
                {t}
              </Link>
            ))}
          </h3>
        </div>
      </div>

      {/* <DateAndTagsWrapper>
        <TagsWrapper>
          {tags.map((tag, index, arr) => (
            <h4 key={index}>
              <Link to={`/tags/${tag}`}>{tag}</Link>
              {index < arr.length - 1 ? `\t::` : null}
            </h4>
          ))}
        </TagsWrapper>
      </DateAndTagsWrapper> */}
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      <div style={{ marginBottom: "1rem" }}>
        {prev && (
          <Link to={prev.frontmatter.path}>
            Previous Post: {prev.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={next.frontmatter.path}>
            Next Post: {next.frontmatter.title}
          </Link>
        )}
      </div>
    </div>
  </ArticleStyles>
)

PostArticle.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  image: PropTypes.string,
  next: PropTypes.object,
  prev: PropTypes.object
}

const DateAndTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TagsWrapper = styled.div`
  display: flex;
  h4 {
    padding-left: 6px;
  }
`

export default PostArticle
