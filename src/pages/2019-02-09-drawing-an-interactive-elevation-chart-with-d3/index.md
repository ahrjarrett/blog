---
path: "/2019-02-09-draw-an-interactive-elevation-chart-with-d3-and-react"
date: "2019-02-09"
title: "Draw an Interactive Elevation Chart with D3 & React"
image: "/images/2019-02-09-draw-an-interactive-elevation-chart-with-d3-and-react.gif"
tags: ["react", "d3", "javascript", "google maps"]
excerpt: "Data visualization is too fun. My team made an app that consumes a user’s trip data and uses it to draw cool stuff. Here’s how we used React, D3 and Google Maps to do it."
published: true
---

## Virtual DOM vs. the DOM

One of the first decisions we have to make when using D3 and React together is **who gets control of the DOM**. In this video [Shirley Wu does a great job explaining](https://www.youtube.com/watch?v=zXBdNDnqV2Q) when each library should get control.

<div class="box-quote"><p class="box-quote-p">
Check out the project’s <a href="https://github.com/Lambda-School-Labs/LabsPT1_Backwoods" target="_blank">source code on GitHub</a>, or watch the 15 second demo below!
</p></div>

Shirley goes on to explain that it’s usually best to let React paint the DOM since it manages state and, presumably, the inputs to our chart will live on state. However in our case, because we have over 100 map samples from Google Maps API to manage (each sample a nested object containing keys such as `elevation` and `location`, which is itself an object with `latitude` and `longitude` keys), it didn't make sense from a performance standpoint to give React control of the DOM.

Even if we were to use a PureComponent to avoid doing deep comparisons and minimize re-renders, we’re still managing references to 100 objects, and 100 shallow comparisons is still 100 comparisons.

So we made the decision to store things like map markers on state only when absolutely necessary, and to never store our samples on state. For this reason, **it made more sense to let D3 control how the ElevationChart paints the DOM**.

## What We’ll Be Building

Here’s the feature we’ll be building:

<!-- <iframe class="youtube-video" width="720" height="480" src="https://www.youtube.com/embed/9HXlmXwyuKk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

We won’t cover adding a map, creating markers or drawing the polyline; detailed instructions for how to create those are all available in the [Google Maps Documentation](https://developers.google.com/maps/documentation/).

Assuming you’ve got your map, some markers, and a polyline path that connects them, we’re ready to build the component. This is what we need to do:

1. Get data: We’ll use Google’s Distance and Elevation APIs to create an array with 100 objects representing samples along our polyline
1. Draw the data: Add the D3 library and draw an SVG chart to represent this data visually
1. Draw the infobox: When a user hovers over the chart, we show the user the Elevation and Grade at that point
1. Draw the blip: Based on where the user hovers, we need to draw a blip (almost a marker, but not quite) on the map at that point along the path

Are you excited? I am too. Let’s get started.

## 1. Get Data

Let’s look at the docs for the Google Maps [Elevation API](https://developers.google.com/maps/documentation/elevation) to see what we’ll be working with.

From the [Google Map Docs](https://developers.google.com/maps/documentation/elevation/intro):

<div class="box-quote"><p class="box-quote-p">
[...] you may request sampled elevation data along paths, allowing you to calculate elevation changes along routes.
</p></div>

This is exactly what we need to do!

**Note:** See the [docs on the LatLng class](https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng) and the [Marker API](https://developers.google.com/maps/documentation/javascript/markers) for more info on the Google Maps objects we’ll be working with.

Let’s define a class method called `getElevationsAlongPath` that handles this:

```javascript
import React from "react"

// helper fn that calculates the distance between 2 locations:
const calcDistance = (
  { lat: fromLat, lng: fronLng },
  { lat: toLat, lng: toLng }
) => {
  // IMPURE! assumes google is available on the window object:
  return window.google.maps.geometry.spherical.computeDistanceBetween(
    new window.google.maps.LatLng(fromLat, fromLng),
    new window.google.maps.LatLng(toLat, toLng)
  )
}

export default class ChartWrapper extends React.Component {
  state = {
    distances: [],
    elevations: [],
    markers: [],
  }

  // componentDidMount() { ... }
  // componentDidUpdate(prevProps, prevState) { ... }

  getElevationsAlongPath = () => {
    if (this.state.markers.length > 1) {
      const elevator = new window.google.maps.ElevationService()
      const latLngs = this.state.markers.map(marker => ({
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
      }))

      const { distances } = latLngs.reduce(
        (acc, curr, i, arr) => {
          if (i === arr.length - 1) return acc
          // highlight-start
          const distances = acc.distances.concat(
            // use the helper function we defined above:
            calcDistance(
              { lat: curr.lat, lng: curr.lng },
              { lat: arr[i + 1].lat, lng: arr[i + 1].lng }
            )
          )
          // highlight-end
          return distances
        },
        { distances: [] }
      )

      // API call to get our elevations:
      // highlight-start
      elevator.getElevationAlongPath(
        {
          path: latLngs,
          samples: 100
        },
        results => {
          this.setState({
            distances,
            // we’ll probably want to change the data shape later:
            elevations: results.map(result => result)
          })
        }
      )
      // highlight-end
    }
  }

  render() {
    return (
      // ...
    )
  }
}
```

[See the source code here!](https://github.com/Lambda-School-Labs/LabsPT1_bkwds/blob/master/client/src/components/Maps/SingleTrip/TripPanel.js#L75)

Let’s talk through it.

**First**, `calcDistance` is a helper function that takes 2 objects of shape `{lat: number, lng: number}` and returns the distance between them in meters.

However, if we have 5 markers, there will be 4 distance calculations between them. Having 2 arrays of unequal lengths complicates things, so we initialize the first distance to 0 (lines 36-42, highlighted).

Now we have 5 markers and 5 distances and we don’t have to do maths later.

**Second**, in lines 49-61 (highlighted) we call the Elevations API, passing in the path we want to take samples from along with the number of samples we want. We ask for 100 samples because again, math is hard.

When we call our method (in our case, inside `componentDidUpdate`), our `ChartWrapper` state will look something like this:

```javascript
{
  distances: [3080.666166039471, 2841.623465928883, /* ... */ ],
  markers: [<GoogleMapsMarkerObject>, <GoogleMapsMarkerObject>, /* ... */ ]
  elevations: [
    {
      elevation: 149.1212768554688,
      location: <GoogleMapsLatLngClass>,
      resolution: 9.543951988220215,

    },
    {
      elevation: 152.5092315673828,
      location: <GoogleMapsLatLngClass>,
      resolution: 9.543951988220215,
    },
    // 98 more elevations...
  ]
}
```

Success! ✨

Let’s start drawing.

## 2. Draw the data
