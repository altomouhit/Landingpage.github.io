function alertSuccess(message) {
	let alert = $('<div class="alert alert-success d-flex align-items-center" role="alert">\n' + 
		'<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>' + 
	'<div>' + message + '</div></div>');
	alert.appendTo("#alert");
	alert.slideDown("slow").delay(1000).fadeOut(1000, function() {
		$(this).remove();
	});
}

function alertInformation(message) {
	let alert = $('<div class="alert alert-primary d-flex align-items-center" role="alert">\n' + 
		'<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>' + 
	'<div>' + message + '</div></div>');
	alert.appendTo("#alert");
	alert.slideDown("slow").delay(1000).fadeOut(1000, function() {
		$(this).remove();
	});
}

function alertWarning(message) {
	let alert = $('<div class="alert alert-warning d-flex align-items-center" role="alert">\n' + 
		'<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>' + 
	'<div>' + message + '</div></div>');
	alert.appendTo("#alert");
	alert.slideDown("slow").delay(1000).fadeOut(1000, function() {
		$(this).remove();
	});
}

function alertFail(message) {
	let alert = $('<div class="alert alert-danger d-flex align-items-center" role="alert">\n' + 
		'<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>' + 
	'<div>' + message + '</div></div>');
	alert.appendTo("#alert");
	alert.slideDown("slow").delay(1000).fadeOut(1000, function() {
		$(this).remove();
	});
}