import React from "react"
import Map from "./Map"
import PropTypes from "prop-types"

import mapMarker from "../icons/MapMarker.svg"
import { indexToLetter } from "../../utils/indexToLetter"
import * as s from "../styles/Map.styles"

class MapWithMarkers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: [],
      showMarkers: false
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

  addMarkers = (map, positions) => () => {
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

  removeMarkers = () => {
    this.state.markers.forEach(marker => marker.setMap(null))
    this.setState({ showMarkers: false, markers: [] })
  }

  render() {
    const { showMarkers } = this.state
    return (
      <Map width={720} height={540}>
        {({ map, ref, defaultStyles }) => (
          <s.MapStyles>
            <button
              onClick={
                showMarkers
                  ? this.removeMarkers
                  : this.addMarkers(map, markerPositions)
              }
            >
              {showMarkers ? "Hide Markers!" : "Show Markers!"}
            </button>
            <div className="childrenWrapper">
              <div
                className="googleMap"
                ref={ref}
                style={{ ...defaultStyles }}
              />
              {map === null ? (
                <h3>Loading... </h3>
              ) : (
                <h3>Waipio Rd – Waimea, Hawaii</h3>
              )}
            </div>
          </s.MapStyles>
        )}
      </Map>
    )
  }
}

export default MapWithMarkers

const markerPositions = [
  { lat: 20.108041337744396, lng: -155.59666531849717 },
  { lat: 20.108625679154304, lng: -155.5937685327611 },
  { lat: 20.11104362041467, lng: -155.5942406015477 },
  { lat: 20.11345983582809, lng: -155.5931969275535 },
  { lat: 20.11400385906143, lng: -155.59081512594827 },
  { lat: 20.115414280856378, lng: -155.58858352804788 },
  { lat: 20.117674634503672, lng: -155.5855219656006 },
  { lat: 20.117453000837656, lng: -155.58425596294558 },
  { lat: 20.116022448711515, lng: -155.5850713544861 }
]

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
