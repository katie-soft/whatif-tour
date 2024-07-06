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

// Product page

const locationSelectData = {
  wrapperSelector: '#select-wrapper-location',
  name: 'location',
  id: 'location',
  mainColor: '#FFFFFF',
  eventName: 'setCustomSelectValue',
  options: [
    {
      name: 'Музей',
      value: 'museum'
    },
    {
      name: 'Город',
      value: 'city'
    },
    {
      name: 'Выставки',
      value: 'expo'
    },
  ],
}

const groupSelectData = {
  wrapperSelector: '#select-wrapper-group',
  name: 'group',
  id: 'group',
  mainColor: '#FFFFFF',
  eventName: 'setCustomSelectValue',
  options: [
    {
      name: 'Взрослые',
      value: 'adults'
    },
    {
      name: 'Дети',
      value: 'children'
    },
    {
      name: 'Все',
      value: 'all'
    },
  ],
}

const formatSelectData = {
  wrapperSelector: '#select-wrapper-format',
  name: 'format',
  id: 'format',
  mainColor: '#FFFFFF',
  eventName: 'setCustomSelectValue',
  options: [
    {
      name: 'Индивидуальная',
      value: 'individual'
    },
    {
      name: 'Групповая',
      value: 'group'
    },
    {
      name: 'В телефоне',
      value: 'printable'
    },
  ],
}