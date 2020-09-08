import $ from "jquery";
import "slick-carousel";

$(".showcase__slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  adaptiveHeight: true,
  cssEase: "linear",
  fade: true,
  swipe: true,
  initialSlide: 1,
});

document.querySelector(".form__btn").onclick = function (e) {
  e.preventDefault();
};
