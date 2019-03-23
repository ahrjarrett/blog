import React from "react"
import { pageVisibilityApi } from "../utils/visibilityState"
const { hidden, visibilityChange } = pageVisibilityApi()

class VisibilityState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true
    }
  }

  componentDidMount() {
    document.addEventListener(
      visibilityChange,
      this.handleVisibilityChange,
      false
    )
    document.addEventListener("focus", this.forceVisibilityTrue, false)
    document.addEventListener("blur", this.forceVisibilityFalse, false)
    window.addEventListener("focus", this.forceVisibilityTrue, false)
    window.addEventListener("blur", this.forceVisibilityFalse, false)
  }

  componentWillUnmount() {
    document.removeEventListener(
      visibilityChange,
      this.handleVisibilityChange,
      false
    )
    document.removeEventListener("focus", this.forceVisibilityTrue, false)
    document.removeEventListener("blur", this.forceVisibilityFalse, false)
    window.removeEventListener("focus", this.forceVisibilityTrue, false)
    window.removeEventListener("blur", this.forceVisibilityFalse, false)
  }

  handleVisibilityChange = forcedFlag => {
    // Handles when event is triggered by focus and blur events:
    if (typeof forcedFlag === "boolean") {
      if (forcedFlag) return this.setVisibility(true)
      else return this.setVisibility(false)
    }
    // Handles when triggered by page visibility change events:
    if (document[hidden]) return this.setVisibility(false)
    else return this.setVisibility(true)
  }

  forceVisibilityTrue = () => this.handleVisibilityChange(true)
  forceVisibilityFalse = () => this.handleVisibilityChange(false)

  setVisibility = flag => {
    this.setState(prevState => {
      if (prevState.isVisible === flag) return null
      return { isVisible: flag }
    })
  }

  render() {
    return this.props.children(this.state.isVisible)
  }
}

export default VisibilityState
