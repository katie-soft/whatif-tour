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

/* Language */

const selectWrapperLanguage = document.querySelector('#select-wrapper-language');
const optionsListLanguage = document.querySelector('#custom-select-language');
const selectSpanLanguage = document.querySelector('#select-value-language');
const selectForSubmitLanguage = document.querySelector('#select-language');

function openSelectLanguage() {
  selectWrapperLanguage.classList.toggle('select-wrapper_active');
  optionsListLanguage.classList.toggle('custom-select_active');
}

function selectOptionLanguage(event) {
  if (event.target.classList.contains('custom-select__option')) {
    selectSpanLanguage.innerText = event.target.innerText;
    selectForSubmitLanguage.value = event.target.dataset.value;
  }
}

selectWrapperLanguage.addEventListener('click', (event) => {
  openSelectLanguage();
})

optionsListLanguage.addEventListener('click', (event) => {
  selectOptionLanguage(event);
})

/* Currency */

const selectWrapperCurrency = document.querySelector('#select-wrapper-currency');
const optionsListCurrency = document.querySelector('#custom-select-currency');
const selectSpanCurrency = document.querySelector('#select-value-currency');
const selectForSubmitCurrency = document.querySelector('#select-currency');

function openSelectCurrency() {
  selectWrapperCurrency.classList.toggle('select-wrapper_active');
  optionsListCurrency.classList.toggle('custom-select_active');
}

function selectOptionCurrency(event) {
  if (event.target.classList.contains('custom-select__option')) {
    selectSpanCurrency.innerText = event.target.innerText;
    selectForSubmitCurrency.value = event.target.dataset.value;
  }
}

selectWrapperCurrency.addEventListener('click', (event) => {
  openSelectCurrency();
})

optionsListCurrency.addEventListener('click', (event) => {
  selectOptionCurrency(event);
})

document.addEventListener('click', (event) => {
  if (
    selectWrapperLanguage.classList.contains('select-wrapper_active') && 
    !event.target.parentElement.classList.contains('select-wrapper') && 
    !event.target.classList.contains('select-wrapper')) {
      selectWrapperLanguage.classList.remove('select-wrapper_active');
      optionsListLanguage.classList.remove('custom-select_active');
    }
})

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

/* Product page*/

/* Slider for city photos */

const cityPhotosSlider = new Swiper('.city-photos-swiper', {

  slidesPerView: 1,
  slidesPerGroup: 1,

  navigation: {
    nextEl: '.city-photos__controls .swiper-button-next',
    prevEl: '.city-photos__controls .swiper-button-prev',
  },
});

/* Show more button */

const showMoreButton = document.querySelector('#button-more');
const additionalInfoBlock = document.querySelector('#additional-info');
const plusIcon = showMoreButton.querySelectorAll('img')[0];
const minusIcon = showMoreButton.querySelectorAll('img')[1];
const buttonText = showMoreButton.querySelector('#button-text');

function showMore() {
  additionalInfoBlock.classList.add('visible');
  plusIcon.style.display = 'none';
  minusIcon.style.display = 'block';
  buttonText.innerText = 'Скрыть';
}

function hideMore() {
  additionalInfoBlock.classList.remove('visible');
  plusIcon.style.display = 'block';
  minusIcon.style.display = 'none';
  buttonText.innerText = 'Узнать больше';
}

showMoreButton.addEventListener('click', () => {
  additionalInfoBlock.classList.contains('visible') ? hideMore() : showMore();
});

/* Custom select */

const locationSelect = new CustomSelect(locationSelectData);
locationSelect.create();

const groupSelect = new CustomSelect(groupSelectData);
groupSelect.create();

const formatSelect = new CustomSelect(formatSelectData);
formatSelect.create();

/* Modal with booking form */

const bookingModal = document.querySelector('#booking-modal');
const bookingModalCloseButton = bookingModal.querySelector('#booking-close-button');

bookingModalCloseButton.addEventListener('click', () => bookingModal.close());

/* Booking forms */

const bookingForm = document.querySelector('#booking-form');

bookingForm.addEventListener('submit', handleBooking);

function handleBooking(event) {
  event.preventDefault();
  const data = new FormData(bookingForm);
  console.log(Object.fromEntries(data.entries()));
  bookingModal.showModal();
}

/* Modal with feedback form */

const feedbackModal = document.querySelector('#feedback-modal');
const feedbackModalOpenButton = document.querySelector('#feedback-open-button');
const feedbackModalCloseButton = feedbackModal.querySelector('#feedback-close-button');
const fileInput = feedbackModal.querySelector('.feedback-form__file');
const fileList = feedbackModal.querySelector('.feedback-form__uploaded-files');

feedbackModalOpenButton.addEventListener('click', () => feedbackModal.showModal());
feedbackModalCloseButton.addEventListener('click', () => feedbackModal.close());

fileInput.addEventListener('change', () => {
  fileList.innerHTML = '';

  const files = Array.from(fileInput.files);
  files.forEach(file => {
    const listItem = document.createElement('li');
    listItem.textContent = file.name;
    fileList.append(listItem);
  })
})

/* Feedback form */

const feedbackForm = document.getElementById('feedback-form');
const feedbackFormSubmitButton = document.querySelector("#feedback-submit");

function handleFeedbackFormSubmit() {
  const data = new FormData(feedbackForm);
  console.log(Array.from(data.entries()));
  return data;
}

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  handleFeedbackFormSubmit();
  feedbackModal.close();
  feedbackForm.reset();
  fileList.innerHTML = '';
});
