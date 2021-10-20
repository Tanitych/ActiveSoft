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

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        autoplay: false,
        speed: 1000,
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