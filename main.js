function adjustNavDisplay() {
  $(window).on("resize", function () {
    if ($(window).width() > 767) {
      $(".nav, .nav__submenu").removeAttr("style");
      $(".nav__item").off("click");
      toggleSubmenu();
    } else {
      $(".nav").css("display", "none");
    }
  });
}

function toggleSubmenu() {
  $(".nav__item").on("click", function (e) {
    if ($(window).width() <= 767) {
      $(this).children(".nav__submenu").slideToggle();
      $(this).siblings().find(".nav__submenu").slideUp();
      e.preventDefault();
    }
  });
}

function toggleMenu() {
  $(".header__menu-toggle").on("click", function () {
    $(".header__nav").slideToggle();
  });
}

function accordion() {
  $(".accordion__title").on("click", function () {
    $(this).next(".accordion__description").slideToggle();
    $(this).parent().siblings().find(".accordion__description").slideUp();
  });
}

$(document).ready(function () {
  adjustNavDisplay();
  toggleMenu();
  accordion();
  toggleSubmenu();
});
