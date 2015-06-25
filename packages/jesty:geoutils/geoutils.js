geoutils = {
	//Converts from degrees to radians.
	radians: function(degrees) {
	 return degrees * Math.PI / 180;
	},	
	// Converts from radians to degrees.
	degrees: function(radians) {
		return radians * 180 / Math.PI;
	},
	zipPoints: function(b, maxDist){
	  var minArray = [ b[0] ];
	  var counter = 0;
	  for(var i = 0; i < b.length-1; i++){
	
	      var lat1 = b[i][0];
	      var lat2 = b[i+1][0];
	      var lng1 = b[i][1];
	      var lng2 = b[i+1][1];
	      var dist = calcDist(lat1, lat2, lng1, lng2);
	      if(counter + dist <= maxDist){
	        counter = counter + dist;
	      } else {
	        console.log("adding " + b[i] + " prev tot: " + counter + " now dist " + dist);
	        counter = 0;
	        minArray.push(b[i]);
	      }
	  }
	  return minArray;
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
	calcDist: function (lat1, lat2, lng1, lng2){
	  var earthRadius = 6371000; //meters
	  var dLat = Math.radians(lat2-lat1);
	  var dLng = Math.radians(lng2-lng1);
	  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(Math.radians(lat1)) * Math.cos(Math.radians(lat2)) * Math.sin(dLng/2) * Math.sin(dLng/2);
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	  var dist = (earthRadius * c);
	  return dist;     
	}
}
