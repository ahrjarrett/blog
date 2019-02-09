import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import NavigationLinks from "./NavigationLinks"
import LambdaSvg from "./icons/LambdaSvg"
import { media } from "../components/theme/mixins"

const links = [
  {
    text: `About`,
    url: `/about`,
    meta: { type: "internal" }
  },
  {
    text: `Portfolio`,
    url: `https://thegrepper.com/`,
    meta: { type: "external", newtab: false }
  },
  {
    text: `Explore`,
    url: `/tags/`,
    meta: { type: "internal" }
  },
  {
    text: `Resume`,
    url: `https://github.com/resume`,
    meta: { type: "external", newtab: true }
  }
]

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100vw;
  background: ${props => props.theme.primary};
`

const Container = styled.div`
  height: 60px;
  letter-spacing: 0.02em;
  font-size: 1.125rem;
  span,
  a,
  li {
    color: ${props => props.theme.ghost};
    text-transform: uppercase;
    padding-top: 10px;
    padding-bottom: 10px;
    &:hover a {
      font-family: TikRotalic;
    }
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.25rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tablet`
    justify-content: space-between;
  `};
`

const FlexContainerLeft = styled.div`
  width: 33%;

  display: none;
  ${media.tablet`
    display: flex;
  `}
  align-items: center;
  justify-content: flex-start;
`

const FlexContainerRight = styled.div`
  width: 33%;

  display: none;
  ${media.tablet`
    display: flex;
  `}

  align-items: center;
  justify-content: flex-end;
`

const LambdaWrapper = styled.span`
  line-height: 0;
  text-align: center;
  width: 48px;
  a {
    color: ${props => props.theme.black};
    text-decoration: none;
  }
`

const Lambda = () => (
  <LambdaWrapper>
    <Link to="/">
      <LambdaSvg height="40px" width="40px" />
    </Link>
  </LambdaWrapper>
)

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Container>
        <FlexContainerLeft>
          <NavigationLinks links={links.slice(0, 2)} />
        </FlexContainerLeft>
        <Lambda />
        <FlexContainerRight>
          <NavigationLinks links={links.slice(2)} />
        </FlexContainerRight>
      </Container>
    </NavbarWrapper>
  )
}

export default Navbar
