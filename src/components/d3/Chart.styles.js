import styled from "styled-components"

export const ChartStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 508px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0.625rem 0px;
  padding: 30px 20px 15px 25px;
  margin: 1.875rem auto 2.725rem;
  margin-top: ${({ type }) => (type === "withMap" ? 0 : "1.875rem")};
  border-radius: 2px;

  background: ${({ background }) => background || "#fff"};
  line {
    stroke: ${({ lineColor }) => `rgba(${lineColor}, ${0.4})`};
  }
  g.tick line {
    color: transparent;
    stroke: ${({ lineColor }) => `rgba(${lineColor}, ${0.15})`};
    stroke-opacity: 1;
  }
  text {
    font-size: 12px;
    stroke: none;
    fill: ${({ lineColor }) => `rgba(${lineColor}, ${0.5})`};
  }
  path {
    stroke: ${({ lineColor }) => `rgba(${lineColor}, ${0.67})`};
  }
  path.chartLine {
    stroke: ${({ fillColor }) => `rgb(${fillColor})`};
    stroke-opacity: 0.4;
    fill: ${({ fillColor }) => `rgb(${fillColor})`};
    fill-opacity: 0.25;
  }
  path.domain {
    stroke: ${({ lineColor }) => `rgba(${lineColor}, ${0.5})`};
    fill: none;
  }

  text.crossBarText {
    fill: #666;
    width: 200px;
  }

  .crossBar line {
    stroke: #333;
    stroke-width: 1px;
    pointer-events: none;
    shape-rendering: crispEdges;
  }

  .chartOverlay {
    fill: none;
    pointer-events: all;
  }

  .infoBox rect {
    stroke: #ccccd1;
    pointer-events: none;
    stroke-width: 1px;
    shape-rendering: crispEdges;
    font-size: 11px;
    fill: #fff;
    fill-opacity: 0.9;
  }

  tspan,
  text.crossBarText {
    font-size: 15px;
  }

  tspan {
    fill: #2d2d32;
  }

  .infoBoxElevationValue,
  .infoBoxGradeValue {
    font-weight: 600;
  }

  .elevationChartGrid line {
    /* stroke: lightgrey;
    stroke-opacity: 0.7; */
    shape-rendering: crispEdges;
  }

  .elevationChartGrid path {
    stroke-width: 0;
  }
`
