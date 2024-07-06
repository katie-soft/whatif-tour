/* Main page */

/* Slider for feedback */

const feedbackSlider = new Swiper('.feedback-swiper', {
  loop: true,

  slidesPerView: 1,
  slidesPerGroup: 1,

  breakpoints: {
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24
    },
  },

  navigation: {
    nextEl: '.feedback__controls .swiper-button-next',
    prevEl: '.feedback__controls .swiper-button-prev',
  },
});

/* Slider for video */

const videoSlider = new Swiper('.video-swiper', {
    slidesPerView: 1,
    
    pagination: {
        el: '.video-swiper__pagination.swiper-pagination',
        clickable: true
    },
});

/* Slider for cards */

const cardSlider = new Swiper('.cards-swiper', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoplay: {
   delay: 2000,
 },

  breakpoints: {
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
      loop: true,
    },
        900: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 24,
      loop: false,
      autoplay: false
    },
  },
    
  navigation: {
    nextEl: '.cards__controls .swiper-button-next',
    prevEl: '.cards__controls .swiper-button-prev',
  },
});