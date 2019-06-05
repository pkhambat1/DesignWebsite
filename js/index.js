
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
  // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	if ($(this).scrollTop() > $('.fixed-top').height()) {
	    $('.nav-link, .logo').css("color", "#212529");
	    $('.fixed-top').css("padding", "5px 10px");
	    $('.fixed-top').css("opacity", ".9");
	    $('.fixed-top').css("background", "white");
  	} else {
  		$('.fixed-top').css("padding", "20px 10px");
	    $('.fixed-top').css({"background" : ""}, {"opacity" : ""});
	    $('.nav-link, .logo').css({"color" : ""});
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
