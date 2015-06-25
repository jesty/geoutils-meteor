# geoutils-meteor
Some utilities to handle with geo coordinates in Meteor.

radians(degrees): Converts from degrees to radians.

degrees(radians): Converts from radians to degrees.

zipPoints(locationArray, dist): returns a new array without point with a distance from previous point minor than dist value. This method is useful to reduce points array returned from a polyline.

latLongToArray(str): given a string with latitude and longitude separated by a comma, returns an array with two elements with latitude in position 0 and longitude in position 1.

computeHeading(start, end): a heading is defined in degrees from true north, where headings are measured clockwise from true north (0 degrees)

sameDirection(startA, endA, startB, endB): given two starts and two ends point returns true if the end points are in the same direction (+/- 45 degree) of starts points.
  
calcDist(lat1, lat2, lng1, lng2): returns distance in meters between two points.
