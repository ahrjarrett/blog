import React from "react"
import * as d3 from "d3"

const D3Version = () => (
  <h4
    id="d3-version"
    style={{
      textAlign: "center",
      marginBottom: "3rem"
    }}
  >
    D3 Version: <strong>{d3.version}</strong>
  </h4>
)

export default D3Version
