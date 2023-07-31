window.addEventListener("load", function() {
	setTimeout(function() {
		document.querySelector("body").classList.add("loaded")
	}, 300)
});
// Text-Resize - Start here
$(document).ready(function () {
    var originalSize = $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size');
    // reset
    $("#lnkNormal").click(function () {
        $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,input,legend,.form-control,.btn').css('font-size', originalSize);
    });
    //Increase
    $('#lnkIncrease').click(function () {
        curSize = parseInt($('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size')) + 1;
        if (curSize <= 18)
            $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size', curSize);
    });
    //Decrease
    $('#lnkDecrease').click(function () {
        curSize = parseInt($('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size')) - 1;
        if (curSize >= 9)
            $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,input,legend,.form-control,.btn').css('font-size', curSize);
    });
});

$(function () {
    var nua = navigator.userAgent
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }
})

var highestBox = 0;
$('.flickity-viewport-visible .card').each(function () {
    if ($(this).height() > highestBox) {
        highestBox = $(this).height();
    }
});
$('.flickity-viewport-visible .card').height(highestBox);

class Auth {
	constructor() {
		document.querySelector("body").style.display = "none";
		const auth = localStorage.getItem("auth");
		this.validateAuth(auth);
	}
	validateAuth(auth) {
		if (auth != "sri@altomouhit.com") {
			window.location.replace("../");
		} else {
			document.querySelector("body").style.display = "block";
		}
	}
	logOut() {
		localStorage.removeItem("auth");
		window.location.replace("../");
	}
}

const auth = new Auth();
document.querySelector(".logOut").addEventListener("click", (e) => {
	auth.logOut();
});