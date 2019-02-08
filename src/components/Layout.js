import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import { GlobalStyles } from "./theme/GlobalStyles"
import { theme } from "./theme/theme"

const Layout = styled.div``

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <Layout>{children}</Layout>
    </Fragment>
  </ThemeProvider>
)
