/(function ($) {

  function showRegion() {
    // Hide every section
    $('.content-region')
      .removeClass('show')
      .addClass('hide')
      .hide();

    // Remove active state from menu
    $('.main-menu a').removeClass('active');

    // Get the section from the URL
    var region = location.hash || $('.main-menu a:first').attr('href');

    // Make sure the requested section actually exists
    if ($(region).length) {
      $(region)
        .removeClass('hide')
        .addClass('show')
        .show();

      // Highlight the matching main navigation link
      $('.main-menu a[href="' + region + '"]').addClass('active');
    }
  }

  $(window).on('load hashchange', showRegion);

})(jQuery);
