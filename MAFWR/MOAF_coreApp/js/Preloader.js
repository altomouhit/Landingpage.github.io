$(document).ready(function() {
	// preloader
	$(window).load(function() {
		$('#loader').fadeOut(); // fade out the loading animation
		$('#loader-wrapper').delay(350).fadeOut('slow'); // fade out the white DIV that covers the website.
		$('body').delay(350).css({
			'overflow': 'hide'
		});
	})
});