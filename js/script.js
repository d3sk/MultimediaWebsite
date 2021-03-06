var elem = document.querySelector('.carousel');
var instance = M.Carousel.init(elem, fullwidth = true);

setInterval(function() {
    $('.carousel').carousel('next');
}, 5000);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

// Animates the preloader spinning circle with a fade out as the Carousel wasnt loading on time
document.addEventListener("DOMContentLoaded", function() {
    $('.preloader-background').delay(1500).fadeOut('slow');

    $('.preloader-wrapper')
        .delay(1500)
        .fadeOut();
});

// ALl the adjustments for a smooth scroll jquery plugin that was needed for the parallax to look good.
$("html").easeScroll({
    frameRate: 30,
    animationTime: 500,
    stepSize: 40,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 10,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true,
    dist: 0
});

// Makes the Carousel button to move right one picture work
$('.moveNextCarousel').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

// Makes the Carousel button to move left one picture work
$('.movePrevCarousel').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});

$(document).ready(function () {
    $('#contactForm').validate({ // initialize the plugin
        rules: {
            message: {
                maxlength: 120
            },
            onkeyup: true,
        },
    });
});

$(document).ready(function () {
    $('#newsForm').validate({ // initialize the plugin
        rules: {
            message: {
                maxlength: 120
            },
            number: {
                
            },
            onkeyup: true,
        },
    });
});

function formSubmit() {
    document.getElementById('newsForm').reset();
    document.getElementById('contactForm').reset();
    $('input:checkbox').removeAttr('checked');

}

$(document).ready(function(){
    $('.sidenav').sidenav();
  });