// Burger menu

const languageSelectData = {
  wrapperSelector: '#burger-select-wrapper-language',
  name: 'language',
  id: 'language',
  mainColor: '#AB4141',
  eventName: 'setLanguage',
  options: [
    {
      name: 'Русский',
      value: 'russian'
    },
    {
      name: 'English',
      value: 'english'
    },
    {
      name: 'Español',
      value: 'español'
    },
  ],
}

const currencySelectData = {
  wrapperSelector: '#burger-select-wrapper-currency',
  name: 'currency',
  id: 'currency',
  mainColor: '#AB4141',
  eventName: 'setCurrency',
  options: [
    {
      name: 'Рубль',
      value: 'ruble'
    },
    {
      name: 'Доллар',
      value: 'dollar'
    },
    {
      name: 'Евро',
      value: 'euro'
    },
  ],
}