$(document).ready(function() {

    $(document).on('click', '[js-hamburger]', function() {
        $('.header__links').toggleClass('is-open');
        $(this).toggleClass("is-open");
    });

    $(document).on('click', '.header__link', function() {
        $('.header__links').removeClass('is-open');
        $('[js-hamburger]').removeClass("is-open");
    });

    (function($) {
        'use strict';
        var form = $('.contact__form'),
            message = $('.contact__msg'),
            form_data;
        // Success function
        function done_func(response) {
            $('.success__msg').fadeIn();
            setTimeout(function() {
                message.fadeOut();
            }, 2000);
            form.find('input:not([type="submit"]), textarea').val('');
        }
        // fail function
        function fail_func(data) {
            $('.fail__msg').fadeIn();
            setTimeout(function() {
                message.fadeOut();
            }, 2000);
        }

        form.submit(function(e) {
            e.preventDefault();
            form_data = $(this).serialize();
            $.ajax({
                    type: 'POST',
                    url: form.attr('action'),
                    data: form_data
                })
                .done(done_func)
                .fail(fail_func);
        });

    })(jQuery);

});