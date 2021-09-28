---
title: How to calculate the distance between two locations using JavaScript
date: '2021-09-25'
categories: ["html", "javascript"]
---

The most popular way of calculating the distance between two points on a 
sphere is using the Haversine equation. 
If you have the coordinates (that is; longitude and latitude) of the the starting and 
destination locations, you can use this equation to calculate it. 
Here's how to do calculate the distance in kilometers between two locations using 
JavaScript and the geolocation API. 

By default, coordinates (gotten using the Geolocation API) are given in degrees. 
We need them in radians for the formula. Here's our conversion function: 

```js
// Convert from degrees to radians
function degreesToRadians(degrees) {
  var radians = (degrees * Math.PI)/180;
  return radians;
}
```

Here's the function that does the distance calculation using coordinates (longitudes and latitudes).

```js
// Function takes two objects, that contain coordinates to a starting and destination location.
function calcDistance (startingCoords, destinationCoords){
  let startingLat = degreesToRadians(startCoords.latitude);
  let startingLong = degreesToRadians(startCoords.longitude);
  let destinationLat = degreesToRadians(destCoords.latitude);
  let destinationLong = degreesToRadians(destCoords.longitude);

  // Radius of the Earth in kilometers
  let radius = 6571;

  // Haversine equation
  let distanceInKilometers = Math.acos(Math.sin(startingLat) * Math.sin(destinationLat) +
  Math.cos(startingLat) * Math.cos(destinationLat) *
  Math.cos(startingLong - destinationLong)) * radius;
}
  return distanceInKilometers;
}
```

Now, you can the call `calcDistance` function and pass it any two coordinates. 
For example:

```js
let sCoords = {
latitude: 58.39343;
longitude: -259.2627;
}

let dCoords = {
latitude: 43.8394;
longitude: -129.3984;
}
let dist = calcDistance(sCoords, dCoords)
```
