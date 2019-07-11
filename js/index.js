// Global vars
var toggleVal = "initial";

$(document).ready(function() {
	loadCarousel();
    scrollCarousel();
    slideCarousel();
	typing();
});


var scrollCarousel = () => {
    $('.carousel-control-prev, .carousel-control-next, .owl-dots').on('click', function () {
        $('html,body').animate({ scrollTop: $(this).closest('.rect').offset().top - 80 }, 400);
    });
};

function typing(){
    $("#typing").typed({
        strings: ["", "", "", "", " coding . . . ", "", " drawing . . .", "", "writing . . .", "", " photography . . .", "", " math . . .", "", " cars . . .", "", " Apple keynotes . . .", "", " coding . . ."],
        typeSpeed: 0
    });
};

// Being extremely nitpicky here
$(window).on("resize", function(){
  	if ($(this).width() >= 992 && toggleVal == "uncollapsed") {
  		console.log("if hit!");
  		toggleVal = "stretchUncollapsed";
  		navbarChange("stretchUncollapsed");
  	} else if ($(this).width() < 992 && toggleVal == "stretchUncollapsed") {
  		console.log("else if hit!");
  		toggleVal = "uncollapsed";
  		navbarChange("uncollapsed");
  	}
});

var hideOwlNav = () => {
    $('.arrowbox, .owl-dots').css("opacity", "0");
    $('.rect').hover(function () {
        $(this).find('.arrowbox').css("opacity", ".4");
        $(this).find('.owl-dots').css("opacity", "1");
    },
        function () {
            $(this).find('.arrowbox').css("opacity", "0");
            $(this).find('.owl-dots').css("opacity", "0");
        });
};

function navbarChange(toggleVal) {
    // if scrolled down
    if ($(this).scrollTop() > $('.fixed-top').height()) {
        $('#logo, .portfolio-navbar .navbar-nav .nav-link').css({ "color": "#212529" });
        $('.navbar-light').css("background", "#fff");
        $('.navbar-light').css("opacity", ".96");
        $('.portfolio-navbar.navbar').css("box-shadow", "0 4px 10px rgba(0,0,0,.15)");
        if (toggleVal === "uncollapsed") {
            $('.navbar-light').css("padding", "0px 5px 10px");
        } else {
            $('.navbar-light').css("padding", "0px 5px");
        }

        if (toggleVal === "collapsed" || toggleVal === "initial") {
            $('.portfolio-navbar.navbar').css("box-shadow", "0 4px 10px rgba(0,0,0,.15)");
        }
        // if on top 
    } else {
        $('#logo, .portfolio-navbar .navbar-nav .nav-link').css({ "font-size": "" });
        $('#logo, .portfolio-navbar .navbar-nav .nav-link').css({ "color": "" });
        $('.navbar-light').css({ "padding": "" });
        $('.navbar-light').css({ "background": "" });
        $('.navbar-light').css({ "opacity": "" });
        if (toggleVal === "collapsed" || toggleVal === "initial" || toggleVal === "stretchUncollapsed") {
            $('.portfolio-navbar.navbar').css({ "box-shadow": "" });
        } else {
            $('.portfolio-navbar.navbar').css("box-shadow", "0 4px 10px rgba(0,0,0,.15)");
        }
    }
}

// If scrolled
$(document).on('scroll', () => {
	navbarChange(toggleVal);
});

$(document).ready(() => {

	// If collapsed
	$('.navbar').on('hide.bs.collapse', () => {
		toggleVal = "collapsed";
		navbarChange("collapsed");
	});

	// If uncollapsed
	$('.navbar').on('show.bs.collapse', () => {
		toggleVal = "uncollapsed";
		navbarChange("uncollapsed");
	});
});

var loadCarousel = () => {
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 3,
        autoHeight: true,
        autoHeightClass: 'owl-height',
        mouseDrag: true,
        autoplay: false,
        nav: true,
        lazyLoad: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        },
        navText: ["<div class=\"carousel-control-prev\" role=\"button\" data-slide=\"prev\"><div class=\"arrowbox\"><i class=\"fa fa-angle-left align-middle mt-4 mb-4 \"></i></div><span class=\"sr-only\">Previous</span></div>",
            "<div class=\"carousel-control-next\" role=\"button\" data-slide=\"next\"><div class=\"arrowbox\"><i class=\"fa fa-angle-right align-middle mt-4 mb-4 \"></i></div><span class=\"sr-only\">Next</span></div>"]
    }).on("dragged.owl.carousel", function () {
        $('html,body').animate({ scrollTop: $(this).closest('.rect').offset().top - 80 }, 400);
    });

};

var slideCarousel = () => {
    $('.owl-carousel').on('translate.owl.carousel', function () {
        if ($(this).find('button.owl-prev').hasClass('disabled')) {

            // revert to right arrow control dimensions
            $(this).find('.carousel-control-next').css({ "width": "" });
            $(this).find('.carousel-control-next').css({ "bottom": "" });
            $(this).find('.carousel-control-next').css({ "top": "" });
            $(this).find('.arrowbox').css({ "opacity": "" });
            $(this).find('.owl-dots').css({ "opacity": "" });
            // Revert arrowbox to hidden
            $(this).closest('.rect').hover(function () {
                $(this).find('.arrowbox').css({ "opacity": "" });
                $(this).find('.owl-dots').css({ "opacity": "" });
            });

            // revert rect hover to expand
            $(this).closest('.rect:hover').css({ "transform": "" });

        } else {
            // Expand right arrow control
            $(this).find('.carousel-control-next').css("width", "45px");
            $(this).find('.carousel-control-next').css("bottom", "20px");
            $(this).find('.carousel-control-next').css("top", "0");
            $(this).find('.arrowbox').css("opacity", ".4");
            $(this).find('.owl-dots').css("opacity", "1");

            // Unide arrowbox and owldots
            $(this).closest('.rect').hover(function () {
                console.log('hovaa');
                $(this).find('.arrowbox').css("opacity", ".4");
                $(this).find('.owl-dots').css("opacity", "1");
            },
                function () {
                    $(this).find('.arrowbox').css({ "opacity": "" });
                    $(this).find('.owl-dots').css({ "opacity": "" });
                });
            $(this).closest('.rect:hover').css("transform", "scale(1)");
        }
    });
};




