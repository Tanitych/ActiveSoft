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