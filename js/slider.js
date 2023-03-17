$(document).ready(() => {
  $('.slick').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slideToShow: 1,
    slideToScroll: 1,
  })

  $('.slickMobile').slick({
    autoplay: true,
    autoplaySpeed: 10000,
  })
  $window = $(window)
  $adaptiveSlick = $('.section__blog-blog')
  settings = {
    infinite: true,
    arrow: true,
    slideToShow: 1,
  }
  $adaptiveSlick.slick({})

  function size() {
    if ($(window).width() >= 766) {
      $adaptiveSlick.slick('unslick')
    }
  }
  size(this)

  $window.on('resize', function () {
    if ($window.width() > 766) {
      if ($adaptiveSlick.hasClass('slick-initialized'))
        $adaptiveSlick.slick('unslick')
      return
    }
    if (!$adaptiveSlick.hasClass('slick-initialized'))
      return $adaptiveSlick.slick(settings)
  })
})
