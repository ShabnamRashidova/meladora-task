$(".owl-carousel").owlCarousel({
  loop: true,
  dots: false,
  margin: 20,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

/*preloader*/
const done = () => {
  $(".preloader-content").hide();
};
$(window).scroll(() => {
  $(this).scrollTop() >= 30
    ? $(".header-upper").addClass("header-scroll")
    : $(".header-upper").removeClass("header-scroll");
});
$(window).scroll(() => {
  $(this).scrollTop() >= 30
    ? $(".scroll-top-btn").addClass("show")
    : $(".scroll-top-btn").removeClass("show");
});
function topFunction() {
  $('html').scrollTop(0);
}
/*search menu*/
$(".search-btn").on("click", () => {
  $(".search-menu").addClass("search-menu-open");
});
$(".close-search-btn").on("click", () => {
  $(".search-menu").removeClass("search-menu-open");
});
$(".menu-button").on("click", () => {
  $(".main-menu-content").addClass("main-menu-content-show");
});
$(".close-main-menu-btn").on("click", () => {
  $(".main-menu-content").removeClass("main-menu-content-show");
});
