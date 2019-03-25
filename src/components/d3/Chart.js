import React from "react"
import * as d3 from "d3"
import { data } from "./data"
import { ChartStyles } from "./Chart.styles"

const margin = { top: 25, right: 25, bottom: 25, left: 25 }
const width = 550 - margin.left - margin.right
const height = 300 - margin.top - margin.bottom

export const numOfSamples = 100
export const metersToMiles = m => m * 0.000621371
export const metersToFeet = m => m * 3.28084

// NEW STUFF
// Constants:
const aspectRatio = width / height
const xAxisTicks = 8
const yAxisTicks = 6
// Helper functions for drawing the gridlines:
const makeXGridlines = xScale => d3.axisBottom(xScale).ticks(xAxisTicks)
const makeYGridlines = yScale => d3.axisLeft(yScale).ticks(yAxisTicks)

class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data ? this.props.data : data
    }
  }
  componentDidMount() {
    this.drawChart()
  }

  drawChart = () => {
    const { data } = this.props
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, d => d.x))
      .range([0, width])
    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data, co => co.y), d3.max(data, co => co.y)])
      .range([height, 0])

    const svg = d3
      .select(this.props.targetNode)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr(
        "viewBox",
        "0 0 " +
          // NEW: VIEWBOX USES ASPECT RATIO TO FRAME OUR SVG:
          (width + margin.left + margin.right) +
          " " +
          (height + (margin.top + margin.bottom) / aspectRatio)
      )
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
        .attr("transform", `translate(0, ${height})`)
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
          .attr("class", "elevationChartLine")
          .style("stroke", "#787979")
          .style("stroke-opacity", 0.2)
          .style("stroke-width", 1)
          .style("fill", "#787979")
          .style("fill-opacity", 0.2)
      }

      // No ticks? This is your last stop.
      if (!this.props.ticks) return
    }
    /******************/
    /*** END NO TICKS */
    /******************/

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(xScale)
          // NEW: FORMAT X-TICKS TO DISPLAY MILES INSTEAD OF METERS
          .ticks(xAxisTicks)
          .tickFormat(d => d3.format(".1f")(metersToMiles(d)) + " mi")
          .tickSize(0)
          .tickPadding(9)
      )

    svg.append("g").call(
      d3
        .axisLeft(yScale)
        // NEW: FORMAT Y-TICKS TO DISPLAY FEET INSTEAD OF METERS
        .ticks(yAxisTicks)
        .tickFormat(d => d3.format(",.0f")(metersToFeet(d)) + " ft")
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
          .attr("class", "elevationChartLine")
          .style("stroke", "#787979")
          .style("stroke-opacity", 0.2)
          .style("stroke-width", 1)
          .style("fill", "#787979")
          .style("fill-opacity", 0.2)
        // chart3? This is your last stop.
        return
      }
      // No gridlines? This is your last stop.
      if (!this.props.gridlines) return
    }
    /************************/
    /*** END NO GRIDLINES ***/
    /**********************I*/

    // Make X grid:
    svg
      .append("g")
      .attr("class", "elevationChartGrid")
      .attr("transform", `translate(0, ${height})`)
      .call(
        makeXGridlines(xScale)
          .tickSize(-height)
          .tickFormat("")
      )
    // Make Y grid:
    svg
      .append("g")
      .attr("class", "elevationChartGrid")
      .call(
        makeYGridlines(yScale)
          .tickSize(-width)
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
        .attr("class", "elevationChartLine")
        .style("stroke", "#787979")
        .style("stroke-opacity", 0.2)
        .style("stroke-width", 1)
        .style("fill", "#787979")
        .style("fill-opacity", 0.2)
      // chart4? This is your last stop.
      return
    }

    console.log("somehow hit default block??")
  }

  render() {
    const { data } = this.state
    return <ChartStyles {...this.props}>{this.props.children}</ChartStyles>
  }
}

export default Chart
