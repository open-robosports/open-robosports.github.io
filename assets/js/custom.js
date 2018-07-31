$(document).ready(function() {
  $('.showOnReady').each(function(i) {
    $(this).animate({'opacity': '1'}, 1500);
  });
  $(window).scroll(function() {
    /* Check the location of each desired element */
    $('.showOnScroll').each(function(i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height() - 250;

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({'opacity': '1'}, 1500);
      }
    });
  });
});