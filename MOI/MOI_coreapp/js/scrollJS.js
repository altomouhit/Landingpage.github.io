jQuery(document).ready(function($) {
  //Ads
  $('.owl-carousel-ads').owlCarousel({
    navigation: false,
    items: 5,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsMobile: [480, 1]
  });
  //News
  //   $('.owl-carousel-news').owlCarousel({
  //    navigation: false, // Show next and prev buttons
  //        autoPlay:true,
  //    slideSpeed: 300,
  // paginationSpeed: 400,
  //        paginationNumbers:true,
  //   singleItem: true
  //  });
  var arr = $(".latest-news-content");
  var outer = $(".owl-carousel-news1");
  counter = 0;
  var cDiv = $("<div/>");
  for (i = 0; i < arr.length; i++) {
    cDiv.append(arr[i])
    counter = counter + 1;
    if (counter == 2) {
      counter = 0;
      outer.prepend(cDiv);
      var cDiv = $("<div/>");
    }
  }
  $('.owl-carousel-news1').owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true
  });
  //  });
});