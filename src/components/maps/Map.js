import React from "react"
import PropTypes from "prop-types"

import { loadScript } from "../../utils/loadScript"

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
    // Make sure we only mount the google maps API once!
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
    // rm google maps script from DOM
    this._scriptElement.parentNode.removeChild(this._scriptElement)
    // rm google from global scope
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
    try {
      const map = new window.google.maps.Map(this.mapRef.current, {
        center: this.props.center,
        zoom: this.props.zoom,
        mapTypeId: this.props.mapTypeId,
        disableDefaultUI: true
      })
      this.setState({ map, mapRendered: true })
    } catch (e) {
      console.error("ERROR RENDERING MAP:", e)
      this.setState({ mapRendered: false })
    }
  }

  render() {
    return this.props.children({
      ref: this.mapRef,
      map: this.state.map
    })
  }
}

Map.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  mapTypeId: PropTypes.string,
  zoom: PropTypes.number
}

Map.defaultProps = {
  width: 720,
  height: 480,
  center: {
    // Bedford-Stuyvesant, Brooklyn NY
    /* lat: 40.6872176,
     * lng: -73.94177350000001 */

    // Lombard Street, San Francisco
    /* lat: 37.802145883206705,
     * lng: -122.41884253997215 */

    // Waipio Rd, Waimea, HI
    lat: 20.114140010845457,
    lng: -155.5897780659501
  },
  mapTypeId: "terrain",
  zoom: 15.5
}

export default Map
