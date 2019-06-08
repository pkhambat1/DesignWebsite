
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
