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

/* Booking forms */

function openBookingModal(type) {
  const bookingModal = document.querySelector(`#booking-modal-${type}`);
  const bookingModalCloseButton = bookingModal.querySelector('.button_close');
  bookingModalCloseButton.addEventListener('click', () => bookingModal.close());
  bookingModal.showModal();
}

const bookingForm = document.querySelector('#booking-form');
bookingForm.addEventListener('submit', handleBooking);

function handleBooking(event) {
  event.preventDefault();
  const data = new FormData(bookingForm);
  console.log(Object.fromEntries(data.entries()));
  openBookingModal(Object.fromEntries(data.entries()).format);  
  // для открытия модального окна с формой заказа групповой экскурсии вызовите функцию openBookingModal('group')
  // для открытия модального окна с формой заказа экскурсии c распечатанными материалами вызовите функцию openBookingModal('printable')

  const bookingPersonalInfoForm = document.querySelector('dialog[open] .modal_booking__form');
  if (bookingPersonalInfoForm) {
    bookingPersonalInfoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(bookingPersonalInfoForm);
    console.log(Object.fromEntries(data.entries()));
    bookingPersonalInfoForm.reset();
    document.querySelector('dialog[open]').close();
    });
  }
}

/* Calendar */

let today = new Date();
const calendar = new AirDatepicker('#calendar', {
  minDate: today, 
  prevHtml: '<',
  nextHtml: '>',
  onRenderCell({date, cellType}) {
    let avaliableDates = [8, 9, 13, 14, 23, 24, 28, 29, 30],
    isDay = cellType === 'day',
    _date = date.getDate(),
    shouldChangeContent = isDay && avaliableDates.includes(_date);
   
    return {
     classes: shouldChangeContent ? '-available-cell-' : undefined,
    }
  },
  onSelect({date}) {
    document.querySelector('#date-hidden-input').value = date;
  }
});

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