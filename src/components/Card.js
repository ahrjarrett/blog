import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ImgWrapper = styled.div`
  img {
    border: .75rem solid #fff;
    box-shadow: rgba(145,106,112,0.15) 0 6px 24px;
    transition: box-shadow 0.4s ease-out;
  }
`

const CardWrapper = styled.li`
  display: flex;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 3rem;
  width: 100%;
  @media all and (min-width: 640px) {
    width: 50%;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`

const CardMeta = styled.div`
  a { flex: 1 0 auto; }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const TagsContainer = styled.div`
  a { padding-left: 6px; }
`

// date, path, tags, title, excerpt, image
const Card = ({ frontmatter }) => {
  const { date, excerpt, path, tags, title } = frontmatter
  return (
    <CardWrapper>
      <CardContent>
        <ImgWrapper>
          <Link to={path}>
            <img src='/images/2018-11-13.png' alt='some alt' />
          </Link>
        </ImgWrapper>
        <CardMeta>
          <FlexContainer>
            <Link to={path}>{title}</Link>
            <div>{date}</div>
          </FlexContainer>
          <TagsContainer>
            Tags — {
              tags.map((t, i, arr) =>
                <span>
                  <Link key={i} to={`/tags/${t}`}>{t}</Link>
                  {i < arr.length - 1 ? ',' : null}
                </span>
              )}
          </TagsContainer>
          <p>{excerpt}</p>
        </CardMeta>
      </CardContent>
    </CardWrapper>
  )
}

export default Card
