import $ from "jquery";
import "slick-carousel";

$(".showcase__slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  cssEase: "linear",
  adaptiveHeight: true,
  initialSlide: 1,
});
