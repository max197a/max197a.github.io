$(document).ready(function() {

    $(document).on('click', '[js-hamburger]', function() {
        $('.header__links').toggleClass('is-open');
        $(this).toggleClass("is-open");
    });

    $(document).on('click', '.header__link', function() {
        $('.header__links').removeClass('is-open');
        $('[js-hamburger]').removeClass("is-open");
    });

});