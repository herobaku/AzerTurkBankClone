$(document).ready(() => {
  $(".search").hide();

  $(".header__search-button").click(() => {
    $(".search").slideUp();
  });

  $("li.search_glass").click(() => {
    $(".search").slideDown();
  });

  $("ul#menu__top-right ul").hide();

  $("li.submenu").hover(
    function () {
      $("ul.withmenu", this).stop().slideDown(200);
    },
    function () {
      $("ul.withmenu", this).stop().slideUp(200);
    }
  );

  $(".header__nav").hide();

  let burger = $(".header__menu-burger");
  burger.click(() => {
    burger.show().toggleClass("open");
    $(".section__mob").toggleClass("open")
  });

  $("ul#menu__bottom-left > li > a").click(function (e) {
    e.preventDefault();
    var sectionId = $(this).attr("href");
    var section = $(sectionId);

    // Показать выбранную секцию и скрыть остальные
    $(".header__nav").each(function () {
      if ($(this).is(section)) {
        $(this).slideDown(300);
      } else {
        $(this).hide();
      }
    });
  });

  $(".header__nav-button").click(() => {
    $(".header__nav").slideUp(200);
  });

  $(".section__selected > .select").click(()=>{
    $(".section__selected ul").toggle();
  })


});
