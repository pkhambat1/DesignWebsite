// Global vars
var toggleVal = "initial";

$(document).ready(() => {
    typing();
});


function typing(){
    $("#typing").typed({
        strings: ["", "", "", "", " with design...", "", " with software...", "", " with code..."],
        typeSpeed: 30,
        loop: true
    });
};

// Being extremely nitpicky here
$(window).on("resize", function(){
    if ($(this).width() >= 992 && toggleVal == "uncollapsed") {
        toggleVal = "stretchUncollapsed";
        navbarChange("stretchUncollapsed");
    } else if ($(this).width() < 992 && toggleVal == "stretchUncollapsed") {
        toggleVal = "uncollapsed";
        navbarChange("uncollapsed");
    }
});

var navbarChange = function (toggleVal) {
    // if scrolled down
    if ($(this).scrollTop() > $('.fixed-top').height()) {
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





