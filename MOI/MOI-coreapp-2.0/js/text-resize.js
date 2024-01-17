$(document).ready(function() {
	$('#lnkDefault').click(function() {
		location.reload();
	});

    var currFFZoom = 1;
    var currIEZoom = 100;
    $("a[id$=lnkIncrease]").click(function() {
		curSize = parseInt($('.ann-panel-title').css('font-size')) + 1;
        if (curSize <= 18) $('.ann-panel-title').css('font-size', curSize);
		curSize = parseInt($('.ann-panel-text').css('font-size')) + 1;
        if (curSize <= 16) $('.ann-panel-text').css('font-size', curSize);
		curSize = parseInt($('table').css('font-size')) + 1;
        if (curSize <= 14) $('table').css('font-size', curSize);
		curSize = parseInt($('.btn').css('font-size')) + 1;
        if (curSize <= 16) $('.btn').css('font-size', curSize);
		curSize = parseInt($('label').css('font-size')) + 1;
        if (curSize <= 14) $('label').css('font-size', curSize);
		curSize = parseInt($('legend').css('font-size')) + 1;
        if (curSize <= 16) $('legend').css('font-size', curSize);
		curSize = parseInt($('h1').css('font-size')) + 1;
        if (curSize <= 20) $('h1').css('font-size', curSize);
		curSize = parseInt($('.helprint').css('font-size')) + 1;
        if (curSize <= 16) $('.helprint').css('font-size', curSize);
		
		
        curSize = parseInt($('h5').css('font-size')) + 1;
        if (curSize <= 15) $('h5').css('font-size', curSize);
        curSize = parseInt($('h6').css('font-size')) + 2;
        if (curSize <= 16) $('h6').css('font-size', curSize);
        curSize = parseInt($('h3').css('font-size')) + 2;
        if (curSize <= 22) $('h3').css('font-size', curSize);
        curSize = parseInt($('h4').css('font-size')) + 2;
        if (curSize <= 20) $('h4').css('font-size', curSize);
        curSize = parseInt($('font').css('font-size')) + 2;
        if (curSize <= 20) $('font').css('font-size', curSize);
        curSize = parseInt($('h5.bold > input').css('font-size')) + 1;
        if (curSize <= 15) $('h5.bold > input').css('font-size', curSize);
        curSize = parseInt($('div.header-with-image > span.fa').css('font-size')) + 1;
        if (curSize <= 43) $('div.header-with-image > span.fa').css('font-size', curSize);
        curSize = parseInt($('span.fa-3x').css('font-size')) + 1;
        if (curSize <= 45) $('span.fa-3x').css('font-size', curSize);
        //  curSize = parseInt($('div > label.col-sm-3').css('font-size')) + 2;
        //if (curSize <= 20)
        //  $('div > label.col-sm-3').css('font-size', curSize);
        curSize = parseInt($('span > span').css('font-size')) + 2;
        if (curSize <= 18) $('span > span').css('font-size', curSize);
        curSize = parseInt($('span > a > span').css('font-size')) + 2;
        if (curSize <= 20) $('span > a > span').css('font-size', curSize);
        curSize = parseInt($('ul.nav-tabs > li > a').css('font-size')) + 1;
        if (curSize <= 16) {
            $('ul.navbar-nav > li > a').css('font-size', curSize);
            $('li.active, li.clickable').css('font-size', curSize);
        }
        curSize = parseInt($('ol.breadcrumb > li > a').css('font-size')) + 1;
        if (curSize <= 15) {
            $('ol.breadcrumb > li > a').css('font-size', curSize);
            $('ol.breadcrumb > li ').css('font-size', curSize);
        }
        curSize = parseInt($('div.panel-title').css('font-size')) + 2;
        if (curSize <= 18) $('div.panel-title').css('font-size', curSize);
        curSize = parseInt($('div.portal-desc-panel> ul > li > a').css('font-size')) + 1;
        if (curSize <= 17) $('div.portal-desc-panel> ul > li > a').css('font-size', curSize);
        curSize = parseInt($('.dm-welcome-msg').css('font-size')) + 2;
        if (curSize <= 38) $('.dm-welcome-msg').css('font-size', curSize);
        curSize = parseInt($('div.title-panel').css('font-size')) + 2;
        if (curSize <= 20) $('div.title-panel').css('font-size', curSize);
        curSize = parseInt($('input.form-control').css('font-size')) + 1;
        if (curSize <= 16) {
            $('input.form-control').css('font-size', curSize);
            $('select.form-control').css('font-size', curSize);
        }
        curSize = parseInt($('div.panel-default > a').css('font-size')) + 2;
        if (curSize <= 20) $('div.panel-default > a').css('font-size', curSize);
        curSize = parseInt($('div.global-content').css('font-size')) + 2;
        if (curSize <= 20) $('div.global-content').css('font-size', curSize);
        curSize = parseInt($('div.sc-panel-larg').css('font-size')) + 2;
        if (curSize <= 22) $('div.sc-panel-larg').css('font-size', curSize);
        //    curSize = parseInt($('body').css('font-size')) + 2;
        //   if (curSize <= 20)
        //        $('body').css('font-size', curSize);
    });
    $("a[id$=lnkDecrease]").click(function() {
		curSize = parseInt($('.ann-panel-title').css('font-size')) - 1;
        if (curSize >= 14) $('.ann-panel-title').css('font-size', curSize);
		curSize = parseInt($('.ann-panel-text').css('font-size')) - 1;
        if (curSize >= 12) $('.ann-panel-text').css('font-size', curSize);
		curSize = parseInt($('table').css('font-size')) - 1;
        if (curSize >= 10) $('table').css('font-size', curSize);
		curSize = parseInt($('.btn').css('font-size')) - 1;
        if (curSize >= 12) $('.btn').css('font-size', curSize);
		curSize = parseInt($('label').css('font-size')) - 1;
        if (curSize >= 10) $('label').css('font-size', curSize);
		curSize = parseInt($('legend').css('font-size')) - 1;
        if (curSize >= 12) $('legend').css('font-size', curSize);
		curSize = parseInt($('h1').css('font-size')) - 1;
        if (curSize >= 16) $('h1').css('font-size', curSize);
		curSize = parseInt($('.helprint').css('font-size')) - 1;
        if (curSize >= 12) $('.helprint').css('font-size', curSize);
		
		
        curSize = parseInt($('h5').css('font-size')) - 1;
        if (curSize >= 10) $('h5').css('font-size', curSize);
        curSize = parseInt($('h6').css('font-size')) - 2;
        if (curSize >= 6) $('h6').css('font-size', curSize);
        curSize = parseInt($('h4').css('font-size')) - 1;
        if (curSize >= 11) $('h4').css('font-size', curSize);
        curSize = parseInt($('h3').css('font-size')) - 2;
        if (curSize >= 12) $('h3').css('font-size', curSize);
        curSize = parseInt($('font').css('font-size')) - 2;
        if (curSize >= 8) $('font').css('font-size', curSize);
        curSize = parseInt($('div.header-with-image > span.fa').css('font-size')) - 1;
        if (curSize >= 37) $('div.header-with-image > span.fa').css('font-size', curSize);
        curSize = parseInt($('span.fa-3x').css('font-size')) - 1;
        if (curSize >= 39) $('span.fa-3x').css('font-size', curSize);
        curSize = parseInt($('div > label.col-sm-3').css('font-size')) - 2;
        if (curSize >= 8) $('div > label.col-sm-3').css('font-size', curSize);
        curSize = parseInt($('span > span').css('font-size')) - 2;
        if (curSize >= 8) $('span > span').css('font-size', curSize);
        curSize = parseInt($('span > a > span').css('font-size')) - 2;
        if (curSize >= 8) $('span > a > span').css('font-size', curSize);
        curSize = parseInt($('ul.nav-tabs > li > a').css('font-size')) - 1;
        if (curSize >= 10) {
            $('ul.navbar-nav > li > a').css('font-size', curSize);
            $('li.clickable').css('font-size', curSize);
        }
        curSize = parseInt($('ol.breadcrumb > li > a').css('font-size')) - 1;
        if (curSize >= 11) {
            $('ol.breadcrumb > li > a').css('font-size', curSize);
            $('ol.breadcrumb > li ').css('font-size', curSize);
        }
        curSize = parseInt($('div.panel-title, div.panel-title').css('font-size')) - 1;
        if (curSize >= 12) $('div.panel-title, div.panel-title').css('font-size', curSize);
        curSize = parseInt($('div.portal-desc-panel> ul > li > a').css('font-size')) - 1;
        if (curSize >= 12) $('div.portal-desc-panel> ul > li > a').css('font-size', curSize);
        curSize = parseInt($('.dm-welcome-msg').css('font-size')) - 2;
        if (curSize >= 28) $('.dm-welcome-msg').css('font-size', curSize);
        curSize = parseInt($('div.title-panel').css('font-size')) - 2;
        if (curSize >= 10) $('div.title-panel').css('font-size', curSize);
        curSize = parseInt($('div.global-content').css('font-size')) - 2;
        if (curSize >= 8) $('div.global-content').css('font-size', curSize);
        curSize = parseInt($('div.panel-default > a').css('font-size')) - 2;
        if (curSize >= 8) $('div.panel-default > a').css('font-size', curSize);
        curSize = parseInt($('div.sc-panel-larg').css('font-size')) - 2;
        if (curSize >= 8) $('div.sc-panel-larg').css('font-size', curSize);
		
		curSize = parseInt($('input.form-control').css('font-size')) - 1;
        if (curSize >= 12) {
            $('input.form-control').css('font-size', curSize);
            $('select.form-control').css('font-size', curSize);
        }
		
        /* curSize= parseInt($('input.form-control').css('font-size')) - 2;
         if(curSize>=10){
         $('input.form-control').css('font-size', curSize);
         $('select.form-control').css('font-size', curSize);
         }
         
         curSize= parseInt($('body').css('font-size')) - 2;
         if(curSize<=20)
         $('body').css('font-size', curSize);
         
         */
    });
});