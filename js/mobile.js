function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
  		val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	}
	
	return val;
}

// var locations = {
// 	"dallas": {
// 		"lat": 32.7833333,
// 		"lon": -96.8
// 	}, "spain": {
// 		"lat": 39.4666667,
// 		"lon": -0.3666667
// 	}, "senegal": {
// 		"lat": 14.6708333,
// 		"lon": -17.4380556
// 	}, "sierraleone": {
// 		"lat": 8.4840000,
// 		"lon": -13.2299400
// 	}, "guinea": {
// 		"lat": 9.537029,
// 		"lon": -13.67847
// 	}, "liberia": {
// 		"lat": 6.358975,
// 		"lon": -10.744629
// 	}, "nigeria": {
// 		"lat": 6.599131,
// 		"lon": 3.383789
// 	}, "drofcongo": {
// 		"lat": -1.691649,
// 		"lon": 18.874512
// 	}, "newyork": {
// 		"lat": 40.738555,
// 		"lon": -73.975438
// 	}
// }

var calculateClosest = function( lat, lon ) {
	var distance = 100000000;
	for (var key in locations) {
		dist = havesineDistance( lat, lon, locations[key].lat, locations[key].lon );
		if( dist < distance ) {
			distance = dist;
			last_key = key;
		}
	}

	return distance;
}

var havesineDistance = function( lat1, lon1, lat2, lon2 ) {
	var R = 6371; // km 

	var x1 = lat2-lat1;
	var dLat = toRad(x1);
	var x2 = lon2-lon1;
	var dLon = toRad(x2);
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
			Math.sin(dLon/2) * Math.sin(dLon/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	
	return (R * c) * 0.6214; // to miles
}

$(window).load(function() {
	$("#spacer").css({
		height: $(window).height()/2 - $("#title").height() - $("#loading").height()
	});

	$("#wrapper").animate({
		opacity: 1
	}, 'slow' );
});

var ie = false;
var ebolas;
var last_key;
$(document).ready(function() {

	ie = getInternetExplorerVersion() > 0 ? true : false;

	ebolas = new Ebolas( 40 );

	$(window).resize(function() {
		ebolas.resize();
	});

	setTimeout(function() {
		//https://github.com/manuelbieh/jQuery-Geolocation
		$.geolocation.getCurrentPosition(function(data){
			if( data && data.coords && data.coords.latitude && data.coords.longitude ) {
				var dist = calculateClosest( data.coords.latitude, data.coords.longitude );

				dist = commaSeparateNumber( Math.floor(dist) );

				$("#miles").text(dist);
				$("#location").text(locations[last_key].location);
				console.log(last_key, locations, locations[last_key].location);

				$("#loading, #please").animate({
					opacity: 0
				}, 'fast');

				$("#title").animate({
					opacity: 0
				}, 'slow', function() {
					$("#spacer").css({
						height: $(window).height()/2 - 210
					})
					$("#loading").hide();
					$("#title").hide();

					$("#two").css({display:"block"}).animate({
						opacity: 1
					});

					$("#two").css({
						width: $("#miles").width()-35
					});

					setTimeout(function() {
						var h = 25;
						console.log( $(window).height() );
						if( $(window).height() > 925 ) {
							h = 140;
						}
						$("#spacer").animate({
							height: h
						}, function() {
							$("#knowledge").css({display:"block"}).animate({
								opacity: 1
							});
						});
					}, 1500 );
				});
			}
		}, function(err){
			console.log(err);
		});
	}, 1000);
});