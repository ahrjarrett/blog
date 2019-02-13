---
path: "/2019-02-09-draw-an-interactive-elevation-chart-with-d3-and-react"
date: "2019-02-09"
title: "Draw an Interactive Elevation Chart with D3 & React"
image: "/images/2019-02-09-draw-an-interactive-elevation-chart-with-d3-and-react.gif"
tags: ["react", "d3", "javascript", "google maps"]
excerpt: "Data visualization is too fun. My team made an app that consumes a user’s trip data and uses it to draw cool stuff. Here’s how we used React, D3 and Google Maps to do it."
published: true
---

One of the first decisions we have to make when using D3 and React together is **who gets control of the DOM**. In this video [Shirley Wu does a great job explaining](https://www.youtube.com/watch?v=zXBdNDnqV2Q) when each library should get control.

In general, it’s best to let React paint the DOM since it manages state and, presumably, the inputs to our chart will live on state.

<div class="box-quote"><p class="box-quote-p">
Check out the project’s <a href="https://github.com/Lambda-School-Labs/LabsPT1_Backwoods" target="_blank">source code on GitHub</a>, or watch the 15 second demo below!
</p></div>

<iframe class="youtube-video" width="720" height="480" src="https://www.youtube.com/embed/9HXlmXwyuKk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

However, because our data is coming from the Google Maps API, and because putting 100 map samples on state (each sample a nested object containing keys such as elevation and coordinates, which is itself an object with latitude and longitude keys), keeping track of these things on state would create an enormous performance overhead -- especially because unless we’re using a Pure Component, _any time the component re-renders it does a deep-equality comparison on all 100 sample objects_. That’s a lot of comparisons.

So we made the decision only to store things like map markers on state when absolutely necessary, and to never store our samples on state. For this reason, **it made more sense to let D3 control how the ElevationChart paints the DOM**.
