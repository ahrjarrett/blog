import React from "react"

import { loadScript } from "../utils/loadScript"

const getMapsUri = (key, callback) =>
  `https://maps.googleapis.com/maps/api/js?key=${key}`
const { MAPS_KEY } = process.env
const scriptId = "googleMapsScript"

class Map extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      mapRendered: false,
      mapsApiMounted:
        window.google && Object.keys(window.google).length ? true : false
    }
    this.mapRef = React.createRef()
    this._google = null
    this._scriptElement = null
  }

  componentDidMount() {
    // if Google Maps script already included:
    if (this.state.mapsApiMounted) {
      this._google = window.google
      this._scriptElement = window.document.getElementById(scriptId)
      this.renderMap()
    } else {
      this.mountMapsApi()
      this.setState({ mapsApiMounted: true })
    }
  }

  componentWillUnmount() {
    // remove google maps script from DOM
    this._scriptElement.parentNode.removeChild(this._scriptElement)
    // remove google from global scope
    window.google = null
  }

  mountMapsApi = () => {
    loadScript(getMapsUri(MAPS_KEY), scriptId)
      .then(() => {
        this._scriptElement = window.document.getElementById(scriptId)
        this.renderMap()
      })
      .catch(e => console.log("ERROR MOUNTING MAP:", e))
  }

  renderMap = () => {
    const map = new window.google.maps.Map(this.mapRef.current, {
      center: { lat: 39.0997, lng: -94.5786 },
      zoom: 11,
      disableDefaultUI: true
    })
    this.setState({ map })
  }

  render() {
    return this.props.children({
      ref: this.mapRef,
      map: this.state.map
    })
  }
}

export default Map
