/* Burger menu */

const burgerIcon = document.querySelector('#burger-icon');
const closeBurgerIcon = document.querySelector('#close-burger');
const burgerMenu = document.querySelector('#burger-menu');

burgerIcon.addEventListener('click', openBurgerMenu);
closeBurgerIcon.addEventListener('click', closeBurgerMenu);

function openBurgerMenu() {
  burgerMenu.classList.add('burger-menu_opened')
}

function closeBurgerMenu() {
  burgerMenu.classList.remove('burger-menu_opened')
}

/* Custom select */

const selectWrapper = document.querySelector('#select-wrapper');
const optionsList = document.querySelector('#custom-select');
const selectSpan = document.querySelector('#select-value');
const selectForSubmit = document.querySelector('#select');

selectWrapper.addEventListener('click', () => {
  selectWrapper.classList.toggle('select-wrapper_active');
  optionsList.classList.toggle('custom-select_active');
})

optionsList.addEventListener('click', (event) => {
  if (event.target.classList.contains('custom-select__option')) {
    selectSpan.innerText = event.target.innerText;
    selectForSubmit.value = event.target.dataset.value;
  }
})

document.addEventListener('click', (event) => {
  if (
    selectWrapper.classList.contains('form__select-wrapper_active') && 
    !event.target.parentElement.classList.contains('form__select-wrapper') && 
    !event.target.classList.contains('form__select-wrapper')) {
      selectWrapper.classList.remove('form__select-wrapper_active');
      optionsList.classList.remove('custom-select_active');
    }
})

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