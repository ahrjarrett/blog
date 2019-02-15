import React from "react"
import { Pre, LineNo } from "./styles/Code.styles"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/dracula"

const Code = ({ language, block, children }) => (
  <Highlight
    {...defaultProps}
    theme={theme}
    code={children.trim()}
    language={language}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
)

export default Code
