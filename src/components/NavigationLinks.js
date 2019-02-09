import React from "react"
import { Link } from "gatsby"

const NavigationLinks = ({ links }) => {
  return (
    <ul>
      {links.map(({ text, url, meta }, index) => (
        <li key={index}>
          {meta.type === "internal" ? (
            <Link to={url}>{text}</Link>
          ) : meta.newtab ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          ) : (
            <a href={url}>{text}</a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default NavigationLinks
