import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import NavigationLinks from './NavigationLinks'

const links = [
  {
    text: `Home`, url: `/`,
    meta: { type: 'internal' }
  },
  {
    text: `About me`, url: `https://thegrepper.com/resume`,
    meta: { type: 'external', newtab: false }
  },
  {
    text: `GitHub`, url: `https://github.com/ahrjarrett`,
    meta: { type: 'external', newtab: true }
  },
]

const NavigationWrapper = styled.div`
  background: rgb(36, 41, 46);
  min-height: 56px;
  ul {
    display: flex;
    justify-content: flex-start;
    margin: 0;
  }
  li {
    list-style: none;
    margin-bottom: 0;
    padding: 16px 8px;
    font-size: 14px;
  }
  a {
    color: rgb(255, 255, 255);
    font-weight: 600;
  }
  a:hover {
    color: hsla(0,0%,100%,.75);
    text-decoration: none;
  }

  @media all and (min-width: 600px) {
    ul {
      flex: 30 0 auto;
    }
    form {
      flex: 15 0 auto;
    }
    span {
      flex: '1 0 auto',
    }
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 600px) {
    flex-direction: row-reverse;
  }
`

const FlexContainerLeft = styled.div`
  display: flex;
  align-items: center;

  @media all and (max-width: 1012px) {
    width: 100%;
    span { order: 1; }
    form { order: 3; }
    ul { order: 2; }
  }
  @media all and (max-width: 600px) {
    justify-content: space-between;
    width: 100%;
    ul { padding-left: 0px; }
    li { 
      padding-left: 10px; 
      padding-right: 10px; 
    }
  }
  @media all and (max-width: 530px) {
    flex-direction: row;
    justify-content: space-between;
    form { display: none; }
    a {
      font-size: 18px;
    }
    span a {
      font-size: 40px;
    }
  }
`

const FlexContainerRight = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 0;
    height: 36px;
    width: 36px;
    @media all and (max-width: 1012px) {
      display: none;
    }
  }
`


const Lambda = () => (
  <span
    style={{
      fontFamily: 'Fira Code',
      fontWeight: '600',
      fontSize: '40px',
      lineHeight: '0',
      textAlign: 'center',
      color: 'white',
      paddingRight: '2px',
      marginBottom: '-1px',
      height: '1px',
      width: '48px',
    }}>
    <Link to='/'>λ</Link>
  </span>
)

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Container>
        <FlexContainerLeft>
          <Lambda />
          <SearchBar />
          <NavigationLinks links={links} />
        </FlexContainerLeft>
        <FlexContainerRight>
          <img src='/GraphQl.svg' alt='GraphQL Logo' />
        </FlexContainerRight>
      </Container>
    </NavigationWrapper>
  )
}

export default Navigation