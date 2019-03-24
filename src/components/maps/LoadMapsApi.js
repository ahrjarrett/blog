import React, { useState, useEffect } from "react"
import { loadScript } from "../../utils/loadScript"

const { GATSBY_MAPS_KEY } = process.env
const scriptId = "googleMapsScript"
const getMapsUri = key => `https://maps.googleapis.com/maps/api/js?key=${key}`

function LoadMapsApi() {
  let _script
  const [apiLoaded, markApiAsLoaded] = useState(false)
  const loadApi = () =>
    loadScript(getMapsUri(GATSBY_MAPS_KEY), scriptId)
      .then(() => {
        _script = document.getElementById(scriptId)
        markApiAsLoaded({ apiLoaded: true })
      })
      .catch(() => console.log("ERROR LOADING MAPS API"))

  useEffect(() => {
    loadApi()
    return () => {
      _script && _script.parentNode.removeChild(_script)
      window.google = null
    }
  }, []) // empty array

  return null
}

class LoadMapsApiClass extends React.Component {
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
    loadScript(getMapsUri(GATSBY_MAPS_KEY), scriptId)
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
