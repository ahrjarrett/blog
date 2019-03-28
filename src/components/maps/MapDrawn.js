import React from "react"
import Map from "./Map"
import PropTypes from "prop-types"

import ThemeSelect from "../ThemeSelect"
import mapMarker from "../icons/MapMarker.svg"
import { indexToLetter } from "../../utils/indexToLetter"
import * as s from "../styles/MapWithMarkers.styles"

export const normalizeTitle = str => str.replace(/[^a-zA-Z0-9]/g, "_")

class MapDrawn extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      theme: props.theme
    }
    this._polyline = null
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.map && !prevState.map) {
      this.addMarkers(this.state.map, this.props.markerPositions)
      this.drawPath(this.state.map, this.props.markerPositions)
    }
  }

  addMarkers = (map, positions) => {
    if (!window) return
    const { maps } = window.google
    const markers = []
    const icon = {
      url: mapMarker,
      anchor: new maps.Point(15, 30),
      scaledSize: new maps.Size(30, 30),
      labelOrigin: new maps.Point(15, 12)
    }
    const label = {
      color: "white",
      fontFamily: "Tik, sans-serif",
      fontSize: "14px",
      fontWeight: "700"
    }
    positions.forEach((position, index) => {
      const marker = new maps.Marker({
        position,
        map,
        draggable: false,
        label: { ...label, text: indexToLetter(index) },
        index,
        icon
      })
      markers.push(marker)
    })
    this.setMapBounds(map, markers)
  }

  drawPath = (map, path) => {
    if (!window) return
    const polyline = new window.google.maps.Polyline({
      path,
      strokeColor: "#000c3c",
      strokeOpacity: 1,
      strokeWeight: 2.5
    })
    this._polyline = polyline
    polyline.setMap(map)
  }

  setMapBounds = (map, positions) => {
    let bounds = new window.google.maps.LatLngBounds()
    positions.forEach(p => {
      const bound = p.position
        ? { lat: p.position.lat(), lng: p.position.lng() }
        : { lat: p.lat, lng: p.lng }
      bounds.extend(bound)
    })
    map.fitBounds(bounds)
  }

  getElevationForLocations = (map, markers) => () => {
    const { maps } = window.google
    const elevator = new maps.ElevationService()
    const locations = markers.map(marker => marker.getPosition())
    elevator.getElevationForLocations({ locations }, (results, status) => {
      if (status === "OK") {
        const elevationForLocations = results.map(({ elevation }) => elevation)
        this.setState({ elevationForLocations }, () =>
          this.createElevationInfoWindows(map, markers)
        )
      } else console.log("ELEVATION FOR LOCATIONS ERROR")
    })
  }

  createElevationInfoWindows = (map, markers) => {
    const { maps } = window.google
    const { elevationForLocations } = this.state
    markers.forEach((m, i) => {
      const infoWindow = new maps.InfoWindow({
        content: `Elevation: ${elevationForLocations[i].toFixed(1)}m`
      })
      m.addListener("click", () => infoWindow.open(map, m))
    })
  }

  handleThemeToggle = e => {
    this.setState({ theme: e.target.value })
  }

  getChildMap = map => this.setState({ map })

  render() {
    const { theme } = this.state
    const { markerPositions, title, type } = this.props
    return (
      <Map {...this.props} {...this.state} propogateMap={this.getChildMap}>
        {({ map, ref }) => (
          <s.MapStyles>
            <div className="childrenWrapper">
              <div
                className={`googleMap map_${normalizeTitle(title)}`}
                ref={ref}
                id={`__map__${normalizeTitle(title)}`}
              />
              {map === null ? <h3>Loading... </h3> : <h3>{title}</h3>}
            </div>
            <ThemeSelect
              theme={theme}
              handleThemeToggle={this.handleThemeToggle}
            />
          </s.MapStyles>
        )}
      </Map>
    )
  }
}

MapDrawn.propTypes = {
  showDeltas: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  layer: PropTypes.string,
  title: PropTypes.string,
  mapTypeId: PropTypes.string,
  markerPositions: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  ),
  theme: PropTypes.string,
  type: PropTypes.string,
  zoom: PropTypes.number
}

MapDrawn.defaultProps = {
  title: "Cork, Ireland",
  width: 720,
  height: 480,
  center: {
    // Cork, Ireland
    lat: 51.9001478637568,
    lng: -8.473813764445682
  },
  markerPositions: [],
  mapTypeId: "terrain",
  showDeltas: false,
  theme: "night",
  zoom: 15.5
}

export default MapDrawn
