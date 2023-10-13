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