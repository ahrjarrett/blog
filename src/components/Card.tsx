import * as React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { media } from "./theme/mixins"

import { FrontmatterI } from "../interfaces/Frontmatter.interface"

const ImgWrapper = styled.div`
  img {
    box-sizing: border-box;
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
  box-sizing: border-box;
  ul {
    padding: 0;
  }
  display: flex;
  padding: 0;
  /* margin-top: 3rem; */
  padding-top: 1.5rem;
  width: 100%;
  ${media.tablet`
    width: 50%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  `};
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem;
  padding-bottom: 1.5rem;
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

  /* padding: 0; */
  ${media.tablet`
    padding: 0 0.875rem;
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

interface Props {
  frontmatter: FrontmatterI
  img?: object
}

const SharpImg = styled(Img)`
  &:hover {
    div + img {
      opacity: 1 !important;
      transition: none !important;
    }
    img + picture > img {
      opacity: 0 !important;
    }
    span: {
      opacity: 1 !important;
    }
  }
`

// date, path, tags, title, excerpt, image
const Card: React.FunctionComponent<Props> = ({ frontmatter, img }) => {
  const { date, excerpt, path, tags, title, image } = frontmatter
  return (
    <CardWrapper>
      <CardContent>
        <ImgWrapper>
          <Link to={`/posts${path}`}>
            {img ? (
              <SharpImg fluid={img.fluid} />
            ) : (
              <img src={`/static_imgs/${image}`} alt="some alt" />
            )}
          </Link>
        </ImgWrapper>
        <CardMeta>
          <FlexContainer>
            <Link to={`/posts${path}`}>{title}</Link>
            <span>{date}</span>
          </FlexContainer>
          <p>{excerpt}</p>
          <TagsContainer>
            Tags —{" "}
            {tags.map((t, i, arr) => (
              <span key={i}>
                <Link to={`/tags/${t}`}>{t}</Link>
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
