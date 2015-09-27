$(document).ready(function() {


//Interval method for time display
	setInterval(function() {
		// var min = ("0" + d.getMinutes()).substr(-2);
		var d = new Date();

		$("#milliseconds").text(d.getMilliseconds());
		$("#seconds").text(d.getSeconds());
		$("#minutes").text(d.getMinutes());
		$("#hours").text(d.getHours());
	}, 100);


//background-color change every minute to see if odd or even
	setInterval(function(){
		var d = new Date();
		if ((d.getMinutes())%2 === 0) {
		$("body").css("background-color", "blue");
		} 
		else {
		$("body").css("background-color", "black");
		}	
	}, 1000);

//background change every 5 mins
	setInterval(function(){
		var d = new Date();
		var cc = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
		
		// if ((d.getMinutes())%5 === 0) {
			$("body").css("background-color", cc);
		// }	
	}, 50000);

//text color change every hour
	setInterval(function(){
		var d = new Date();
		var cc = ["orange", "blue", "green", "yellow", "purple", "red"];
		var i = Math.floor(Math.random()*cc.length);
		console.log(i);
			$("#clock").css("color", cc[i]);
	}, 3600000);
	
});