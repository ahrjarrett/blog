import React from 'react'
import styled from 'styled-components'
import Navigation from './Navbar'
import GlobalStyles from './GlobalStyles'

const Layout = styled.div`
  max-width: 700px;
  margin: 40px auto;
`

export default ({ children }) =>
  <GlobalStyles>
    <Navigation />
    <Layout>
      {children}
    </Layout>
  </GlobalStyles>