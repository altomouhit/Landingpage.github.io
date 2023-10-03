$(window).on('load', function() {
    $('.body-load').fadeOut(); // fade out the loading animation
    $('.loading').delay(350).fadeOut('slow'); // fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'hide'
    });
});