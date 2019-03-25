import React from "react"
import * as d3 from "d3"
import { data } from "./data"
import { ChartStyles } from "./Chart.styles"

const margin = { top: 0, right: 0, bottom: 15, left: 50 }
const width = 700 - margin.left - margin.right
const height = 155 - margin.top - margin.bottom

export const numOfSamples = 100
export const metersToMiles = m => m * 0.000621371
export const metersToFeet = m => m * 3.28084

const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  for (let i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }

  componentDidMount() {
    this.drawChart()
  }

  drawChart = () => {
    const { data } = this.state

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, d => d.x))
      .range([0, width])

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data, co => co.y), d3.max(data, co => co.y)])
      .range([height, 0])

    const svg = d3
      .select("#elevationChart")
      .append("svg")
      .attr("width", 700)
      .attr("height", 155)
      .attr("viewBox", "0 0 " + width + " " + 160)
      .attr("preserveAspectRatio", "xMinYMid")
      .append("g")
      .attr("transform", `translate(${margin.left}, 2.5)`)

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3.axisBottom(xScale)
        // .ticks(xAxisTicks)
        // .tickFormat(d => d3.format(".1f")(metersToMiles(d)) + " mi")
        // .tickSize(0)
        // .tickPadding(9)
      )

    svg.append("g").call(
      d3.axisLeft(yScale)
      // .ticks(yAxisTicks)
      // .tickFormat(d => d3.format(",.0f")(metersToFeet(d)) + " ft")
      // .tickSize(0)
      // .tickPadding(8)
    )
  }

  render() {
    const { data } = this.state
    return (
      <ChartStyles {...this.props}>
        {data.length > 0 && <div id="elevationChart" />}
      </ChartStyles>
    )
  }
}

export default Chart
