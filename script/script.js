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

/* Custom select: Language & Currency */

const languageSelect = new CustomSelect(languageSelectData);
languageSelect.create();
languageSelect.addEventListener(languageSelectData.eventName, () => console.log(languageSelect.hiddenInput.value));

const currencySelect = new CustomSelect(currencySelectData);
currencySelect.create();
currencySelect.addEventListener(currencySelectData.eventName, () => console.log(currencySelect.hiddenInput.value));