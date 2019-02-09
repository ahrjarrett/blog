import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { media } from "./theme/mixins"

const ImgWrapper = styled.div`
  img {
    border: 0.75rem solid #fff;
    box-shadow: rgba(145, 106, 112, 0.15) 0 6px 24px;
    transition: box-shadow 0.4s ease-out;
    width: calc(100% - 2 * 0.75rem);
    ${media.tablet`
      width: 100%;
    `};
  }
`

const CardWrapper = styled.li`
  ul {
    padding: 0;
  }
  display: flex;
  padding: 0;
  margin-top: 3rem;
  width: 100%;
  ${media.tablet`
    width: 50%;
  `};
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e3d7d7;

  ${media.tablet`
    padding: 0;
  `};
`

const CardMeta = styled.div`
  a {
    flex: 1 0 auto;
  }
  p {
    line-height: 1.35;
    color: black;
    font-weight: 400;
  }

  padding: 0.75rem;
  ${media.tablet`
    padding: 0;
  `};
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    word-wrap: break-word;
    display: inline-block;
    width: 100%;
    font-weight: 600;
    font-size: 1.25rem;
    text-decoration: none;
    margin-top: 1rem;
  }
  span {
    margin-top: 1rem;
    margin-bottom: 1.3125rem;
    font-style: italic;
    font-weight: 700;
  }
`

const TagsContainer = styled.div`
  a {
    padding-left: 6px;
  }
  margin-top: 0.75rem;
`

// date, path, tags, title, excerpt, image
const Card = ({ frontmatter }) => {
  const { date, excerpt, path, tags, title, image } = frontmatter
  return (
    <CardWrapper>
      <CardContent>
        <ImgWrapper>
          <Link to={path}>
            <img src={image} alt="some alt" />
          </Link>
        </ImgWrapper>
        <CardMeta>
          <FlexContainer>
            <Link to={path}>{title}</Link>
            <span>{date}</span>
          </FlexContainer>
          <p>{excerpt}</p>
          <TagsContainer>
            Tags —{" "}
            {tags.map((t, i, arr) => (
              <span>
                <Link key={i} to={`/tags/${t}`}>
                  {t}
                </Link>
                {i < arr.length - 1 ? "," : null}
              </span>
            ))}
          </TagsContainer>
        </CardMeta>
      </CardContent>
    </CardWrapper>
  )
}

export default Card
