$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    fade: true,
  });

  $(".slider2").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    appendDots: ".slider2-dots",
    // fade:true
  });
});

const triggers = document.querySelectorAll(".menu-trigger");

console.log(triggers);

for (let i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("is-open");
  });
}

const container = document.getElementById("js-container");
const highlight = document.getElementById("js-highlight");
var containerHeight;

window.onscroll = function () {
  containerHeight = container.offsetHeight - window.innerHeight;
  containerPos = container.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  progressPercentage = (diff / containerHeight) * 100;
  cssWidth = Math.floor(100 - progressPercentage);
  highlight.style.width = cssWidth + "%";
};
