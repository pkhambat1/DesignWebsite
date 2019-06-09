
$(function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
});	

$(function(){
	$("#typing").typed({
		strings: ["", "", "", "", " coding . . .", "", " drawing . . .", "", "writing . . .", "", " photography . . .", "", " math . . .", "", " cars . . .", "", " Apple keynotes . . .", "", " coding . . ."],
		typeSpeed: 0
	});
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if ($(this).scrollTop() > $('.fixed-top').height()) {
		$('#logo, .portfolio-navbar .navbar-nav .nav-link').css({"color" : "#212529"});
		$('.navbar-light').css("padding", "0px 10px");
		$('.navbar-light').css("opacity", ".96");
		$('.navbar-light').css("background", "#fff");
		$('.portfolio-navbar.navbar').css("box-shadow", "0 4px 10px rgba(0,0,0,.1)");
	} else {	
		$('#logo, .portfolio-navbar .navbar-nav .nav-link').css({"font-size" : ""});
		$('#logo, .portfolio-navbar .navbar-nav .nav-link').css({"color" : ""});
		$('.navbar-light').css({"padding" : ""});
		$('.navbar-light').css({"opacity" : ""});
		$('.navbar-light').css({"background" : ""});
		$('.portfolio-navbar.navbar').css({"box-shadow" : ""});
	}
}

$(document).ready(function() {

	$('.owl-carousel').owlCarousel({
		items:1,
		margin:0,
		autoHeight:true,
		mouseDrag:false,
		autoplay:false,
		nav:true,
		// navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		// navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
		// navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"] 
		navText: ["<div class=\"carousel-control-prev\" role=\"button\" data-slide=\"prev\"><div class='arrowbox'><i class='fa fa-angle-left align-middle mt-3 mb-3'></i></div><span class=\"sr-only\">Previous</span></div>",
		"<div class=\"carousel-control-next\" data-slide=\"next\"><div class='arrowbox'><i class='fa fa-angle-right align-middle mt-3 mb-3'></i></div><span class=\"sr-only\">Next</span></div>"]
	});

});