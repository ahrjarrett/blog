import React from "react"
import Map from "./Map"
import PropTypes from "prop-types"

import mapMarker from "../icons/MapMarker.svg"
import { indexToLetter } from "../../utils/indexToLetter"
import * as s from "../styles/Map.styles"

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
    this.themeRef = React.createRef()
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
    if (window) {
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
      window.polyline = polyline
      polyline.setMap(map)
      this.setState({ showPath: true })
    }
  }

  removePath = () => {
    if (window) {
      window.polyline.setMap(null)
    }
    this.setState({ showPath: false })
  }

  addMarkers = (map, positions) => () => {
    if (window) {
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

      this.setState({ markers, showMarkers: true })
    }
  }

  removeMarkers = () => {
    this.state.markers.forEach(marker => marker.setMap(null))
    this.removePath()
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
    const { exampleType, markerPositions } = this.props
    return (
      <Map {...this.props} {...this.state}>
        {({ map, ref }) => (
          <s.MapStyles>
            <div className="childrenWrapper">
              <div
                className={`googleMap map_${this.props.title.replace(
                  /[^a-zA-Z0-9]/g,
                  "_"
                )}`}
                ref={ref}
              />
              {map === null ? (
                <h3>Loading... </h3>
              ) : (
                <h3>{this.props.title}</h3>
              )}
            </div>
            <div className="theme-select" ref={this.themeRef}>
              <h6>Map Theme:</h6>
              <form>
                <label>
                  <input
                    type="radio"
                    name="night-day"
                    id="night-mode"
                    value="night"
                    className="toggle-control"
                    checked={this.state.theme === "night"}
                    onChange={this.handleThemeToggle}
                  />
                  Night
                </label>
                <label>
                  <input
                    type="radio"
                    name="night-day"
                    id="day-mode"
                    value="day"
                    className="toggle-control"
                    checked={this.state.theme === "day"}
                    onChange={this.handleThemeToggle}
                  />
                  Day
                </label>
              </form>
            </div>

            {markerPositions.length > 0 && (
              <div className="map-buttons">
                <h4>Actions:</h4>
                <button
                  onClick={
                    showMarkers
                      ? this.removeMarkers
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
