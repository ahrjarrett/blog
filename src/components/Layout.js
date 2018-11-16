import React from 'react'
import styled from 'styled-components'
import Navigation from './Navbar'
import GlobalStyles from './GlobalStyles'

const Layout = styled.div`
  max-width: 700px;
  margin: 40px auto;
  @media all and (max-width: 768px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`

export default ({ children }) =>
  <GlobalStyles>
    <Layout>
      {children}
    </Layout>
  </GlobalStyles>