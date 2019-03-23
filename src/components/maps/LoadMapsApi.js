import React from "react"

import { loadScript } from "../../utils/loadScript"

const getMapsUri = key => `https://maps.googleapis.com/maps/api/js?key=${key}`
const { MAPS_KEY } = process.env
console.log("process.env:", process.env)
console.log("MAPS KEY:", MAPS_KEY)
const scriptId = "googleMapsScript"

class LoadMapsApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apiLoaded: false
    }
    this._script = null
  }

  componentDidMount() {
    this.loadApi()
  }

  loadApi = () => {
    loadScript(getMapsUri(MAPS_KEY), scriptId)
      .then(() => {
        this._script = document.getElementById(scriptId)
        this.setState({ apiLoaded: true })
      })
      .catch(() => console.log("ERROR LOADING MAPS API"))
  }

  componentWillUnmount() {
    // rm google maps script from DOM
    this._script.parentNode.removeChild(this._script)
    // rm google from global scope
    window.google = null
  }

  render() {
    return null
  }
}

export default LoadMapsApi
