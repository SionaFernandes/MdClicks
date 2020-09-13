import "./swiper";

var tabs = document.querySelector(".tabs-buttons .swiper-wrapper");

let tabButtons = new Swiper(".tabs-buttons", {
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: ".swiper-scrollbar",
  mousewheelControl: true,
  onTap: function (swiper, event) {
    if (
      event.target.classList.contains("swiper-slide") &&
      !event.target.classList.contains("active-tab")
    ) {
      event.target.parentElement
        .querySelector(".active-tab")
        .classList.remove("active-tab");
      event.target.classList.add("active-tab");
      tabContent.slideTo(swiper.clickedIndex);
    }
  },
});

let tabContent = new Swiper(".tabs-content", {
  onSlideChangeStart: function (swiper, event) {
    tabs.children[swiper.previousIndex].classList.remove("active");
    tabs.children[swiper.activeIndex].classList.add("active");
  },
});
