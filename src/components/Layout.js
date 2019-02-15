import React from "react"
import styled, { ThemeProvider } from "styled-components"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import { MDXProvider } from "@mdx-js/tag"

import Code from "../components/Code"
import { GlobalStyles } from "./theme/GlobalStyles"
import { theme } from "./theme/theme"

const CodeStyles = styled.div`
  display: flex;
  justify-content: center;
  width: 100% !important;
  margin-bottom: 1.5rem;
  & pre {
    /* maxWidth: calc(38rem - 1.5rem); */
    width: 100%;
    min-width: 100%;
    padding: 1.5rem;
    overflow-x: scroll;
  }
`

const components = {
  pre: ({ children: { props } }) => {
    // props is for MDXTag, props.props is for code element
    const lang = props.props.className && props.props.className.split("-")[1]
    return (
      <CodeStyles>
        <Code language={lang} {...props} />
      </CodeStyles>
    )
  }
}

const Layout = styled.div``

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      <GlobalStyles />
      <Layout>{children}</Layout>
    </MDXProvider>
  </ThemeProvider>
)
