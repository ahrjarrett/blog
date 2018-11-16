import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'

const Layout = styled.div`
  max-width: 900px;
  margin: 40px auto;
`

export default ({ children }) =>
  <GlobalStyles>
    <Layout>
      {children}
    </Layout>
  </GlobalStyles>