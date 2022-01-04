jQuery(window).on('scroll', function () {
    if ($(".about").offset().top < jQuery(this).scrollTop()) {
        jQuery('.header_inner').addClass('change-color');
        } else {
        jQuery('.header_inner').removeClass('change-color');
      }
    });