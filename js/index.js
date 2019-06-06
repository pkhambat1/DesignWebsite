
// $(function () {
// 	// $('.animsition').animsition();
// 	$(document).scroll(function () {
// 		if ($(this).scrollTop() > $('.fixed-top').height()) {
// 			$('.fixed-top').addClass('scrolled').removeClass('gradient');
// 		} else {
// 			$('.fixed-top').removeClass('scrolled').addClass('gradient');
// 		}
// 	});
// });

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
	    // $('.portfolio-navbar .navbar-nav .nav-link, #logo').css("color", "#212529");
	    // $('#logo').css({"font-size" : "20px"});
	    // $('.portfolio-navbar .navbar-nav .nav-link').css({"font-size" : "17px"});
	    $('#logo, .portfolio-navbar .navbar-nav .nav-link').css({"color" : "#212529"});
	    // $('.portfolio-navbar .navbar-nav .nav-link').css("font-size", "17px");
	    $('.navbar-dark').css("padding", "0px 10px");
	    $('.navbar-dark').css("opacity", ".96");
	    $('.navbar-dark').css("background", "#fff");
	    $('.portfolio-navbar.navbar').css("box-shadow", "0 4px 10px rgba(0,0,0,.1)");
  	} else {
  		// $('.navbar-dark').css({"padding" : ""});
	   //  $('.navbar-dark').css({"background" : ""}, {"opacity" : ""});
	   //  $('.portfolio-navbar .navbar-nav .nav-link').css({"color" : ""}, {"font-size" : "" });
	    $('#logo, .portfolio-navbar .navbar-nav .nav-link').css({"font-size" : ""});
	    $('#logo, .portfolio-navbar .navbar-nav .nav-link').css({"color" : ""});
	    $('.navbar-dark').css({"padding" : ""});
	    $('.navbar-dark').css({"opacity" : ""});
	    $('.navbar-dark').css({"background" : ""});
	    $('.portfolio-navbar.navbar').css({"box-shadow" : ""});
  }
}



// $(function() {
//   var $el,
//     leftPos,
//     newWidth,
//     $mainNav = $(".navbar-nav");

//   $mainNav.append("<li id='magic-line'></li>");
//   var $magicLine = $("#magic-line");

//   $magicLine
//     .width($(".active").width())
//     .css("left", $(".active a").position().left)
//     .data("origLeft", $magicLine.position().left)
//     .data("origWidth", $magicLine.width());
// });

// Credit: https://css-tricks.com/jquery-magicline-navigation
