import React from "react"
import styled from "styled-components"
import { media } from "./theme/mixins"

const ArticleMetaStyles = styled.div`
  position: relative;

  .byline-social {
    display: none;
  }
/* 
  ${media.tabletLg`
    .byline {
      position: absolute;
      top: 0;
      left: -150px;
      flex-direction: column;
      align-items: start;
      border-bottom: none;
      & > :nth-child(4) {
        order: 1;
      }
      & > :nth-child(2) {
        order: 2;
      }
      & > :nth-child(5) {
        order: 3;
        display: inherit;
      }
      & > :nth-child(3) {
        display: none;
      }

      div,
      h4,
      ul,
      li,
      a {
        font: 800 0.75rem/150% Tik, sans-serif;
        line-height: 1.15;
        padding: 0;
        margin: 0;
      }
      .byline-date {
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 4px;
        color: #222;
      }
      .byline-author a {
        color: #aaa;
        font-weight: 600;
      }

    }

    ul.byline-social {
      color: #1d78af;
      height: 2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

  `}; */
`

const ArticleMeta = ({ author, date }) => (
  <ArticleMetaStyles className="article-meta-styles">
    <div className="byline">
      <span className="by">By</span>
      <h4 className="byline-author">
        <a
          href="https://thegrepper.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {author.name}
        </a>
      </h4>
      <a
        className="author-img"
        href="https://thegrepper.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={author.image} alt={author.minobio} />
      </a>
      <h4 className="byline-date">{date}</h4>
      <ul className="byline-social">
        <li>
          <a
            href={author.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            gh
          </a>
        </li>
        <li>
          <a
            href={author.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tw
          </a>
        </li>

        <li>
          <a
            href={author.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Li
          </a>
        </li>
      </ul>
    </div>
  </ArticleMetaStyles>
)

export default ArticleMeta
