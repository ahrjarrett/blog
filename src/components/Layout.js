import React from "react"
import styled from "styled-components"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import GlobalStyles from "./GlobalStyles"

const Layout = styled.div`
  max-width: 900px;
  margin: 40px auto;
`

export default ({ children }) => (
  <GlobalStyles>
    <Layout>{children}</Layout>
  </GlobalStyles>
)
