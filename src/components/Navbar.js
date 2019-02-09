import React, { Component } from "react"
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
    url: `https://thegrepper.com/resume`,
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

const Lambda = ({ visible }) => (
  <LambdaWrapper visible={visible}>
    <Link to="/">
      <LambdaSvg height="40px" width="40px" />
    </Link>
  </LambdaWrapper>
)

const LambdaWrapper = styled.span`
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  opacity: ${props => (props.visible ? 1 : 0)};
  position: absolute;
  top: 0;
  line-height: 0;
  text-align: center;
  width: 48px;
  a {
    color: ${props => props.theme.black};
    text-decoration: none;
  }
  transition: all 0.2s ease-in;
`

const NavLogoStyles = styled.div`
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  opacity: ${props => (props.visible ? 1 : 0)};
  position: absolute;
  bottom: 15%;
  transition: all 0.2s ease-in;
  font-size: 2.3675rem;
  font-family: TraFine;
  font-weight: 800;
  letter-spacing: -0.025em;
`

const NavLogo = ({ visible }) => (
  <NavLogoStyles visible={visible}>the grepper</NavLogoStyles>
)

class Navbar extends Component {
  state = {
    y: 0,
    showLogo: false
  }
  componentDidMount() {
    this.setState({ y: window.scrollY })
    window.addEventListener("scroll", this.handleScroll)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.y !== window.scrollY) {
      if (this.state.y > 500)
        this.setState({ y: window.scrollY, showLogo: true })
      else this.setState({ y: window.scrollY, showLogo: false })
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    this.setState({ y: window.scrollY })
  }
  showLogo = () => {
    this.setState({ showLogo: true })
  }
  hideLogo = () => {
    this.setState({ showLogo: false })
  }

  render() {
    const { showLogo } = this.state
    return (
      <NavbarWrapper>
        <Container>
          <FlexContainerLeft>
            <NavigationLinks links={links.slice(0, 2)} />
          </FlexContainerLeft>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Lambda visible={!showLogo} />
            <NavLogo visible={showLogo} />
          </div>
          <FlexContainerRight>
            <NavigationLinks links={links.slice(2)} />
          </FlexContainerRight>
        </Container>
      </NavbarWrapper>
    )
  }
}

export default Navbar
