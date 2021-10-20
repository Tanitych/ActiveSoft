$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(function () {
    $("#phone").mask("+7(999) 999-9999");
});

$(function () {
    $("#phone2").mask("+7(999) 999-9999");
});

$(function () {
    $("#phone3").mask("+7(999) 999-9999");
});

$(function () {
    $("#phone4").mask("+7(999) 999-9999");
});

$(function () {
    $("#phone5").mask("+7(999) 999-9999");
});

$(function () {
    $("#phone6").mask("+7(999) 999-9999");
});

$(function () {
    $("#phone7").mask("+7(999) 999-9999");
});

$(function () {
    $("#phone8").mask("+7(999) 999-9999");
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider2').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 800,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// Set the date we're counting down to
var countDownDate = new Date("Oct 22, 2021 09:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + ":" + hours + ":"
        + minutes + ":" + seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

