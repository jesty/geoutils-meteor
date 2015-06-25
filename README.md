# geoutils-meteor
Some utilities to handle with geo coordinates in Meteor. This utilities could used both on server and client side.

Documentation:

**radians(degrees)**: Converts from degrees to radians.

**degrees(radians)**: Converts from radians to degrees.

**zipPoints(locationArray, dist)**: returns a new array without point with a distance from previous point minor than "dist" value. The "locationArray" parameter is an array of arrays that contains latitude in position 0 and longitude in position 1. This method is useful to reduce points array returned from a polyline.

**latLngToArray(str)**: given a string with latitude and longitude separated by a comma, returns an array with two elements with latitude in position 0 and longitude in position 1.

**computeHeading(start, end)**: a heading is defined in degrees from true north, where headings are measured clockwise from true north (0 degrees). Start and end parameters are two arrays with two elements where latitude is in position 0 and longitude is in position 1.

**sameDirection(startA, endA, startB, endB)**: given two starts and two ends point returns true if the end points are in the same direction (+/- 45 degree) of starts points. The four input points are arrays with two elements where latitude is in position 0 and longitude is in position 1.
  
**calcDist(start, end)**: returns distance in meters between two points. Start and end parameters are two arrays with two elements where latitude is in position 0 and longitude is in position 1.

**earthRadius()**: returns the earth radius in meters.
