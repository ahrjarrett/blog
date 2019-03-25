import React from "react"

const ArticleMeta = ({ author, date }) => (
  <div className="article-meta">
    <div className="byline">
      <span className="by">By</span>
      <h4>
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
      <h4>{date}</h4>
    </div>
  </div>
)

export default ArticleMeta
