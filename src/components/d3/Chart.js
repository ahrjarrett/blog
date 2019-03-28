import React from "react"
import * as d3 from "d3"
import { data } from "./data"
import { ChartStyles } from "./Chart.styles"

export const numOfSamples = 100
export const metersToMiles = m => m * 0.000621371
export const metersToFeet = m => m * 3.28084

const xAxisTicks = 9
const yAxisTicks = 8
const makeXGridlines = xScale => d3.axisBottom(xScale).ticks(xAxisTicks)
const makeYGridlines = yScale => d3.axisLeft(yScale).ticks(yAxisTicks)

const fromLatLngToPoint = (latLng, map) => {
  const topRight = map
    .getProjection()
    .fromLatLngToPoint(map.getBounds().getNorthEast())
  const bottomLeft = map
    .getProjection()
    .fromLatLngToPoint(map.getBounds().getSouthWest())
  const scale = Math.pow(2, map.getZoom())
  const worldPoint = map
    .getProjection()
    .fromLatLngToPoint(new window.google.maps.LatLng(latLng))
  const point = new window.google.maps.Point(
    (worldPoint.x - bottomLeft.x) * scale,
    (worldPoint.y - topRight.y) * scale
  )
  return point
}

class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data ? this.props.data : data,
      map: null
    }

    this.margin = { top: 25, right: 25, bottom: 25, left: 25 }
    this.width =
      (this.props.width || 550) - this.margin.left - this.margin.right
    this.height =
      (this.props.height || 300) - this.margin.top - this.margin.bottom
    this.aspectRatio = this.width / this.height
    this.viewBox =
      this.props.viewBox ||
      "0 0 " +
        (this.width + this.margin.left + this.margin.right) +
        " " +
        (this.height +
          (this.margin.top + this.margin.bottom) / this.aspectRatio)
  }
  componentDidMount() {
    this.drawChart()
    if (this.props.map) {
      setTimeout(() => {
        console.log("setting map!")
        this.setState({ map: window.__map__Prague })
      }, 1250)
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component updated!")
    console.log("prevState:", prevState)
    console.log("this.state:", this.state)
    console.log("window.__map__Prague:", window.__map__Prague)

    if (!prevState.map && window.__map__Prague) {
      this.setState({ map: window.__map__Prague })
    }
    // if (window) this.setState({ map: window.__map_Prague })
  }

  drawChart = () => {
    const { data, xResolver, yResolver } = this.props
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, xResolver ? xResolver : d => d.x))
      .range([0, this.width])
    const yScale = d3
      .scaleLinear()
      .domain([
        d3.min(data, yResolver ? yResolver : co => co.y),
        d3.max(data, yResolver ? yResolver : co => co.y)
      ])
      .range([this.height, 0])

    const svg = d3
      .select(this.props.targetNode)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("viewBox", this.viewBox)
      .attr("preserveAspectRatio", "xMinYMid")
      .append("g")
      // WE CAN TWEAK OUR CHART’s POSITIONING IF NEEDED VIA PROPS:
      .attr("transform", this.props.transform)

    /*****************/
    /*** NO TICKS? ***/
    /*****************/
    if (!this.props.ticks) {
      svg
        .append("g")
        .attr("transform", `translate(0, ${this.height})`)
        .call(d3.axisBottom(xScale))

      svg.append("g").call(d3.axisLeft(yScale))

      // #chart2
      if (this.props.data.length === 3) {
        const area = d3
          .area()
          .x(d => xScale(d.x))
          .y0(yScale(yScale.domain()[0]))
          .y1(d => yScale(d.y))
        svg
          .append("path")
          .attr("d", area(data))
          .attr("class", "chartLine")
          .style("stroke", this.props.lineColor)
          .style("stroke-opacity", 0.3)
          .style("stroke-width", 1)
          .style("fill", this.props.fillColor)
          .style("fill-opacity", 0.25)
      }

      // No ticks? This is your last stop.
      if (!this.props.ticks) return
    }
    /******************/
    /*** END NO TICKS */
    /******************/

    svg
      .append("g")
      .attr("transform", `translate(0, ${this.height})`)
      .call(
        d3
          .axisBottom(xScale)
          // NEW: FORMAT X-TICKS TO DISPLAY MILES INSTEAD OF METERS
          .ticks(xAxisTicks)
          .tickFormat(d => d3.format(".1f")(metersToMiles(d)) + "mi")
          .tickSize(0)
          .tickPadding(9)
      )

    svg.append("g").call(
      d3
        .axisLeft(yScale)
        // NEW: FORMAT Y-TICKS TO DISPLAY FEET INSTEAD OF METERS
        .ticks(yAxisTicks)
        .tickFormat(d => d3.format(",.0f")(metersToFeet(d)) + "ft")
        .tickSize(0)
        .tickPadding(8)
    )

    /*********************/
    /*** NO GRIDLINES? ***/
    /*********************/
    if (!this.props.gridlines) {
      // #chart3
      if (this.props.data.length === 5) {
        const area = d3
          .area()
          .x(d => xScale(d.x))
          .y0(yScale(yScale.domain()[0]))
          .y1(d => yScale(d.y))
          .curve(d3.curveCatmullRom.alpha(0.005))
        svg
          .append("path")
          .attr("d", area(data))
          .attr("class", "chartLine")
          .style("stroke", this.props.lineColor)
          .style("stroke-opacity", 0.3)
          .style("stroke-width", 1)
          .style("fill", this.props.fillColor)
          .style("fill-opacity", 0.25)
        // chart3? This is your last stop.
        return
      }

      // No gridlines? This is your last stop.
      if (!this.props.gridlines) return
    }
    /************************/
    /*** END NO GRIDLINES ***/
    /**********************I*/

    // MAKE X GRID:
    svg
      .append("g")
      .attr("class", "chartGrid")
      .attr("transform", `translate(0, ${this.height})`)

      .call(
        makeXGridlines(xScale)
          .tickSize(-this.height)
          .tickFormat("")
      )
    // MAKE Y GRID:
    svg
      .append("g")
      .attr("class", "chartGrid")
      .call(
        makeYGridlines(yScale)
          .tickSize(-this.width)
          .tickFormat("")
      )

    // #chart4
    if (this.props.data.length === 10) {
      const area = d3
        .area()
        .x(d => xScale(d.x))
        .y0(yScale(yScale.domain()[0]))
        .y1(d => yScale(d.y))
        .curve(d3.curveCatmullRom.alpha(0.005))
      svg
        .append("path")
        .attr("d", area(data))
        .attr("class", "chartLine")
        .style("stroke", this.props.lineColor)
        .style("stroke-opacity", 0.3)
        .style("stroke-width", 1)
        .style("fill", this.props.fillColor)
        .style("fill-opacity", 0.25)
      // chart4? This is your last stop.
      return
    }

    const crossBar = svg
      .append("g")
      .attr("class", "crossBar")
      .style("display", "none")

    crossBar
      .append("line")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", this.height)
      .attr("y2", 0)

    crossBar
      .append("text")
      .attr("x", 10)
      .attr("y", 17.5)
      .attr("class", "crossBarText")

    const infoBox = svg
      .append("g")
      .attr("class", "infoBox")
      .style("display", "none")

    infoBox
      .append("rect")
      .attr("x", 0)
      .attr("y", 10)
      .style("height", 45)
      .style("width", 125)

    const infoBoxElevation = infoBox
      .append("text")
      .attr("x", 8)
      .attr("y", 30)
      .attr("class", "infoBoxElevation")

    infoBoxElevation
      .append("tspan")
      .attr("class", "infoBoxElevationTitle")
      .text("Elev: ")

    infoBoxElevation.append("tspan").attr("class", "infoBoxElevationValue")

    // BISECTUAL
    const bisect = d3.bisector(function(d) {
      return d.x
    }).left

    if (this.props.data.length === 100) {
      const area = d3
        .area()
        .x(d => xScale(d.x))
        .y0(yScale(yScale.domain()[0]))
        .y1(d => yScale(d.y))
        .curve(d3.curveCatmullRom.alpha(0.005))
      svg
        .append("path")
        .attr("d", area(data))
        .attr("class", "chartLine")
        .style("stroke", this.props.lineColor)
        .style("stroke-opacity", 0.3)
        .style("stroke-width", 1)
        .style("fill", this.props.fillColor)
        .style("fill-opacity", 0.25)
      // Adios, #chart5 ✌ ️
      // return
    }

    let blip
    const makeBlip = () => {
      const blip = d3
        .select(`#${this.props.map}`)
        .append("div")
        .attr("class", "customBlip")
        .style("margin-left", "-12.5px")
        .style("margin-top", "-12.5px")
        .style("position", "absolute")
        .style("z-index", 5000)
        .style("width", "20px")
        .style("height", "20px")
        .style("background", "#2da5ca")
        .style("border", "2px solid white")
        .style("border-radius", "50%")
        .style("color", "black")
        .style("color", "black")
        .style("display", "none")
      return blip
    }

    // MOUSE IN / OUT EVENTS
    svg
      .append("rect")
      .attr("class", "chartOverlay")
      .attr("width", this.width)
      .attr("height", this.height)
      .on("mouseover", function() {
        if (!blip) blip = makeBlip()
        crossBar.style("display", null)
        infoBox.style("display", null)
        blip.style("display", null)
      })
      .on("mouseout", function(e) {
        crossBar.style("display", "none")
        infoBox.style("display", "none")
        blip.style("display", "none")
      })
      .on("mousemove", mousemove)

    function mousemove() {
      const x0 = xScale.invert(d3.mouse(this)[0])
      const i = bisect(data, x0, 1)
      const d0 = data[i - 1]
      const d1 = data[i]
      const d = !d1 ? d0 : x0 - d0.x > d1.x - x0 ? d1 : d0
      crossBar.attr("transform", `translate(${xScale(d.x)}, 0)`)
      crossBar.select("text").text(d3.format(".1f")(metersToMiles(d.x)) + "mi")
      infoBox.attr("transform", `translate(${xScale(d.x) + 10}, 12.5)`)
      infoBox
        .select(".infoBoxElevationValue")
        .text(d3.format(",.0f")(metersToFeet(d.y)) + "ft")

      // infoBox.select(".infoBoxGradeValue").text(d3.format(".1%")(d.grade))
      const { x: px, y: py } = fromLatLngToPoint(
        d.location,
        window.__map__Prague
        // this.state.map
      )

      window.blip = blip
      blip.style("transform", `translate3d(${px}px, ${py}px, 0px)`)
      return null
    }

    // #chart5
    console.log("somehow hit default block??")
  }

  render() {
    const { data, children, ...rest } = this.props
    return <ChartStyles {...rest}>{children}</ChartStyles>
  }
}

export default Chart
