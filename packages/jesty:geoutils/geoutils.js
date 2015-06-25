//Documentation on https://github.com/jesty/geoutils-meteor
geoutils = {
	radians: function(degrees) {
	 return degrees * Math.PI / 180;
	},	
	degrees: function(radians) {
		return radians * 180 / Math.PI;
	},
	zipPoints: function(locationArray, maxDist){
	  var result = [ locationArray[0] ];
	  var counter = 0;
	  for(var i = 0; i < locationArray.length-1; i++){
	      var lat1 = locationArray[i][0];
	      var lat2 = locationArray[i+1][0];
	      var lng1 = locationArray[i][1];
	      var lng2 = locationArray[i+1][1];
	      var dist = calcDist(lat1, lat2, lng1, lng2);
	      if(counter + dist <= maxDist){
	        counter = counter + dist;
	      } else {
	        counter = 0;
	        result.push(locationArray[i]);
	      }
	  }
	  return result;
	},	
	latLongToArray: function(str){
	  return str.split(",");
	},
	computeHeading: function (start, end){
	  var lat1 = start[0]*Math.PI/180;
	  var lat2 = end[0]*Math.PI/180;
	  var lng1 = start[1]*Math.PI/180;
	  var lng2 = end[1]*Math.PI/180;
	  return Math.atan2( Math.sin(lng2-lng1) * Math.cos(lat2), Math.cos(lat1)*Math.sin(lat2)-Math.sin(lat1)*Math.cos(lat2)*Math.cos(lng2-lng1))*180/Math.PI;
	},
	sameDirection: function(startA, endA, startB, endB){
	  var bearingA = computeHeading(startA, endA);
	  var bearingB = computeHeading(startB, endB);
	  return Math.abs(bearingA - bearingB) < 45
	},
	calcDist: function (start, end){
	  var lat1 = start[0];
	  var lat2 = end[0];
	  var lng1 = start[1];
	  var lng2 = end[1];
	  var dLat = radians(lat2-lat1);
	  var dLng = radians(lng2-lng1);
	  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLng/2) * Math.sin(dLng/2);
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	  var dist = (earthRadius() * c);
	  return dist;     
	},
	earthRadius: function(){
		return 6371000; //meters
	}
}
