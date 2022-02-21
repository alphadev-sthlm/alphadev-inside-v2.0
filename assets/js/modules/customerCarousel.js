function customerCarousel() {
  var mySwiper = new Swiper('.customer-swiper', {
    loop: true,
    speed: 3000,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
    },
  })
}

export default customerCarousel;