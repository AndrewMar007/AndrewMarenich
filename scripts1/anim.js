$( function() {
	var state = true;
	$( "#button" ).on( "click", function() {
		if ( state ) {
			$( "#effect" ).animate({
				backgroundColor: "#19a0c4",
				color: "black",
			}, 1000);
			$("#img").animate({
				height: "220px"
			},500);
			$("#img").animate({
				width: "400px"
			},500);
			$("#block").animate({
				left: "+=70%"
			}, 1000);
		} 
		else {
			$( "#effect" ).animate({
				backgroundColor: "#383c42",
				color: "white",
			}, 1000 );
			$("#img").animate({
				height: "110px"
			},500);
			$("#img").animate({
				width: "200px"
			},500);
			$("#block").animate({
				left: "-=70%"
			}, 1000);
		}
		state = !state;
	});
});