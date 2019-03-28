import React from "react"
import PropTypes from "prop-types"

import { mapThemes } from "./mapThemes"
import { normalizeTitle } from "./MapWithMarkers"

class Map extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      mapRendered: false
    }
    this._map = null
    this.mapRef = React.createRef()
  }

  componentDidMount() {
    setTimeout(() => {
      this.renderMap()
      if (this.props.propogateMap) this.props.propogateMap(this._map)
    }, 1000)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.changeTheme(this._map, this.props.theme)
    }
  }

  renderMap = () => {
    const { title } = this.props
    const map = new window.google.maps.Map(this.mapRef.current, {
      center: this.props.center,
      zoom: this.props.zoom,
      mapTypeId: this.props.mapTypeId,
      disableDefaultUI: true
    })
    this._map = map
    // Attach instance to window for debugging purposes:
    window[`__map__${normalizeTitle(title)}`] = map
    if (this.props.layer) this.addLayer(map, this.props.layer)
    if (this.props.theme) this.changeTheme(map, this.props.theme)

    this.setState({ map, mapRendered: true })
  }

  addLayer = (map, layer) => {
    switch (layer) {
      case "transit":
        const transitLayer = new window.google.maps.TransitLayer()
        transitLayer.setMap(map)
        break
      case "bicycle" || "bike":
        const bikeLayer = new window.google.maps.BicyclingLayer()
        bikeLayer.setMap(map)
        break
      default:
        return null
    }
  }

  changeTheme = (map, theme) => {
    map.setOptions({ styles: mapThemes[theme] })
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
  title: PropTypes.string,
  mapTypeId: PropTypes.string,
  zoom: PropTypes.number
}

export default Map
