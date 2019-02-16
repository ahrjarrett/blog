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
      showPath: false
    }
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
    console.log("calling remove path")
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

  render() {
    const { showMarkers, showPath } = this.state
    const { markerPositions } = this.props
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
              </div>
            )}
          </s.MapStyles>
        )}
      </Map>
    )
  }
}

MapWithMarkers.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  title: PropTypes.string,
  mapTypeId: PropTypes.string,
  markerPositions: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  ),
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
  zoom: 15.5
}

export default MapWithMarkers

// const markerPositions = [
//   { lat: 37.80202084444066, lng: -122.41955600757011 },
//   { lat: 37.80210111666835, lng: -122.41938048805349 },
//   { lat: 37.80205025343619, lng: -122.41929733957403 },
//   { lat: 37.8019909129544, lng: -122.41922223772161 },
//   { lat: 37.802060849945775, lng: -122.4191310426151 },
//   { lat: 37.802139264069496, lng: -122.41906935180776 },
//   { lat: 37.802110779926295, lng: -122.4189838410803 },
//   { lat: 37.80204578650493, lng: -122.4189061247899 },
//   { lat: 37.802066979523865, lng: -122.41881761189241 },
//   { lat: 37.80216234803381, lng: -122.41875860329408 },
//   { lat: 37.802172635385745, lng: -122.41867557849932 },
//   { lat: 37.80209915843709, lng: -122.41861060610567 },
//   { lat: 37.802083812143856, lng: -122.41853485728969 },
//   { lat: 37.80215401157957, lng: -122.41847048427333 },
//   { lat: 37.802221829119375, lng: -122.41837392474879 },
//   { lat: 37.80214523057462, lng: -122.41828445292184 },
//   { lat: 37.80212615687803, lng: -122.41819862223336 },
//   { lat: 37.80221092882507, lng: -122.41809938049981 }
// ]
