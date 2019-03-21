(function ($) {
    'use strict';

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });


    // Accordions
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
    });

})(jQuery);