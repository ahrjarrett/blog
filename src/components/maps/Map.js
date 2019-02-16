import React from "react"
import PropTypes from "prop-types"

class Map extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      mapRendered: false
    }
    this.mapRef = React.createRef()
  }

  componentDidMount() {
    setTimeout(() => this.renderMap(), 500)
  }

  renderMap = () => {
    const map = new window.google.maps.Map(this.mapRef.current, {
      center: this.props.center,
      zoom: this.props.zoom,
      mapTypeId: this.props.mapTypeId,
      disableDefaultUI: true
    })
    this.setState({ map, mapRendered: true })
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
