import React from "react"
import Map from "./Map"
import PropTypes from "prop-types"

import ThemeSelect from "../ThemeSelect"
import mapMarker from "../icons/MapMarker.svg"
import { indexToLetter } from "../../utils/indexToLetter"
import * as s from "../styles/MapWithMarkers.styles"

export const normalizeTitle = str => str.replace(/[^a-zA-Z0-9]/g, "_")

class MapWithMarkers extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      markers: [],
      showMarkers: false,
      showPath: false,
      elevations: [],
      theme: this.props.theme
    }
    this.polyline = null
  }

  componentDidMount() {
    console.group("map with markers mounted")
    console.log("props:", this.props)
    console.log("state:", this.state)
    console.groupEnd("map with markers mounted")
  }

  componentDidUpdate(prevProps, prevState) {
    console.group("map with markers updated")
    console.log("prev props:", prevProps)
    console.log("prev state:", prevState)
    console.log("props:", this.props)
    console.log("state:", this.state)
    console.groupEnd("map with markers updated")
  }

  drawPath = (map, markers) => () => {
    if (!window) return
    const path = markers.map(marker => ({
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng()
    }))
    const polyline = new window.google.maps.Polyline({
      path,
      strokeColor: "#000c3c",
      strokeOpacity: 1,
      strokeWeight: 2.5
    })
    this.polyline = polyline
    polyline.setMap(map)
    this.setState({ showPath: true })
  }

  removePath = () => {
    if (this.polyline) this.polyline.setMap(null)
    this.setState({ showPath: false })
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

  addMarkers = (map, positions) => () => {
    if (!window) return

    const { maps } = window.google
    const markers = []
    let bounds = new maps.LatLngBounds()

    const icon = {
      url: mapMarker,
      anchor: new maps.Point(15, 30),
      scaledSize: new maps.Size(30, 30),
      labelOrigin: new maps.Point(15, 12)
    }
    const label = {
      color: "white",
      fontFamily: "Tra, serif",
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
    this.setState({ markers, showMarkers: true })
  }

  removeMarkers = map => () => {
    this.state.markers.forEach(marker => marker.setMap(null))
    this.removePath()
    map.setCenter(this.props.center)
    map.setZoom(this.props.zoom)
    this.setState({ showMarkers: false, showPath: false, markers: [] })
  }

  getElevationWindow = (map, markers) => () => {
    const elevationService = new window.google.maps.ElevationService()
    window.el = elevationService
    const infoWindow = new window.google.maps.InfoWindow({ map })

    const locations = markers.map(({ position }) => position)
    console.log("LOCATIONS:", locations)
    elevationService.getElevationForLocations(locations, (results, status) => {
      if (status === "OK") {
        console.log("ELEVATION RESULTS:", results)
      }
    })
  }

  handleThemeToggle = e => {
    this.setState({ theme: e.target.value })
  }

  render() {
    const { showMarkers, showPath, theme } = this.state
    const { exampleType, markerPositions, title } = this.props
    return (
      <Map {...this.props} {...this.state}>
        {({ map, ref }) => (
          <s.MapStyles>
            <div className="childrenWrapper">
              <div
                className={`googleMap map_${normalizeTitle(title)}`}
                ref={ref}
              />
              {map === null ? <h3>Loading... </h3> : <h3>{title}</h3>}
            </div>

            <ThemeSelect
              theme={theme}
              handleThemeToggle={this.handleThemeToggle}
            />

            {markerPositions.length > 0 && (
              <div className="map-buttons">
                <h4>Actions:</h4>
                <button
                  onClick={
                    showMarkers
                      ? this.removeMarkers(map)
                      : this.addMarkers(map, markerPositions)
                  }
                >
                  {showMarkers ? "Hide Markers!" : "Show Markers!"}
                </button>
                {showMarkers && (
                  <button
                    onClick={
                      showPath
                        ? this.removePath
                        : this.drawPath(map, this.state.markers)
                    }
                  >
                    {showPath ? "Hide Path!" : "Draw Path!"}
                  </button>
                )}
                {exampleType === "elevationInfobox" && showPath && (
                  <button
                    onClick={this.getElevationWindow(map, this.state.markers)}
                  >
                    Get Elevation
                  </button>
                )}
              </div>
            )}
          </s.MapStyles>
        )}
      </Map>
    )
  }
}

MapWithMarkers.propTypes = {
  exampleType: PropTypes.string,
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
  zoom: PropTypes.number
}

MapWithMarkers.defaultProps = {
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
  theme: "night",
  zoom: 15.5
}

export default MapWithMarkers
