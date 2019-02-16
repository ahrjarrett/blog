import React from "react"
import Map from "./Map"
import PropTypes from "prop-types"

import * as s from "../styles/Map.styles.js"

class MapWithMarkers extends React.Component {
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

  render() {
    return (
      <Map width={600} height={400}>
        {({ map, ref, defaultStyles }) => (
          <s.MapStyles>
            {/* {console.log("MAP INSIDE MAP CHILDREN:", map)} */}
            <div className="childrenWrapper">
              <div
                className="googleMap"
                ref={ref}
                style={{ ...defaultStyles }}
              />
              {map === null ? (
                <h3>Loading... </h3>
              ) : (
                <h3>{map.getCenter().lat() + " " + map.getCenter().lng()}</h3>
              )}
            </div>
          </s.MapStyles>
        )}
      </Map>
    )
  }
}

export default MapWithMarkers
