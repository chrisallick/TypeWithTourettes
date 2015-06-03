$(window).load(function() {
	// $("#spacer").css({
	// 	height: $(window).height()/2 - 20
	// });

	$("#wrapper").animate({
		opacity: 1
	}, 'slow' );

	$("#prompts input").focus();
});


$(document).ready(function() {
	$("#wtf").click(function(){
		if( !$("#info").hasClass("on") ) {
			$("#info").addClass("on");
			$(this).text("< back");

			$("#prompts").removeClass("on");
		} else {
			$("#info").removeClass("on");
			$(this).text("WTF?");

			$("#prompts").addClass("on");
			$("#prompts input").focus();
		}
	});
	// ie = getInternetExplorerVersion() > 0 ? true : false;

	// ebolas = new Ebolas( 70 );

	// $(window).resize(function() {
	// 	ebolas.resize();
	// });

	// setTimeout(function() {
	// 	//https://github.com/manuelbieh/jQuery-Geolocation
	// 	$.geolocation.getCurrentPosition(function(data){
	// 		if( data && data.coords && data.coords.latitude && data.coords.longitude ) {
	// 			var dist = calculateClosest( data.coords.latitude, data.coords.longitude );

	// 			dist = commaSeparateNumber( Math.floor(dist) );

	// 			$("#miles").text(dist);
	// 			$("#location").text(locations[last_key].location);

	// 			$("#loading, #please").animate({
	// 				opacity: 0
	// 			}, 'fast');

	// 			$("#title").animate({
	// 				opacity: 0
	// 			}, 'slow', function() {
	// 				$("#spacer").css({
	// 					height: $(window).height()/2 - 100
	// 				})
	// 				$("#loading").hide();
	// 				$("#title").hide();

	// 				$("#two").css({
	// 					display: "block"
	// 				}).animate({
	// 					opacity: 1
	// 				});

	// 				$("#two").css({
	// 					width: $("#miles").width()-35
	// 				});

	// 				setTimeout(function() {
	// 					$("#spacer").animate({
	// 						height: $(window).height()/9
	// 					}, function(){
	// 						$("#knowledge").css({display:"block"}).animate({
	// 							opacity: 1
	// 						}, function(){
	// 							$("#speak").delay(1500).animate({
	// 								opacity: 1
	// 							});
	// 						});
	// 					});
	// 				}, 1500 );
	// 			});
	// 		}
	// 	});
	// }, 1000);
});