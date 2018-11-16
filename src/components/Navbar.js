import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import NavigationLinks from './NavigationLinks'
import GraphQLSvg from './icons/GraphQLSvg'

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

const NavbarWrapper = styled.div`
  background: rgb(36, 41, 46);
  position: fixed;
  z-index: 1;
  bottom: 0;
  min-height: 56px;
  width: 100%;
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
`

const LambdaWrapper = styled.span`
  font-family: Fira Code;
  font-weight: 600;
  font-size: 40px;
  line-height: 0;
  text-align: center;
  color: white;
  padding-right: 2px;
  margin-bottom: -1px;
  height: 1px;
  width: 48px;
`

const Lambda = () => (
  <LambdaWrapper>
    <Link to='/'>λ</Link>
  </LambdaWrapper>
)

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Container>
        <FlexContainerLeft>
          <Lambda />
          <SearchBar />
          <NavigationLinks links={links} />
        </FlexContainerLeft>
        <FlexContainerRight>
          <GraphQLSvg height='36px' width='36px' />
        </FlexContainerRight>
      </Container>
    </NavbarWrapper>
  )
}

export default Navbar