import Pagination from 'tui-pagination';

import { Notify } from 'notiflix';

//зберігаємо та відновлюємо кількість сторінок пагінації (totalItems) у об'єкті options
//використовуємо Notiflix для відображення сповіщень у разі помилок при роботі з localStorage.
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
    Notify.failure('Something went wrong. Please try again');
  }
};


const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
    Notify.failure('Something went wrong. Please try again');
  }
};


const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove item error: ', error.message);
    Notify.failure('Something went wrong. Please try again');
  }
};

let storedData = load('cardData');
let length = 0;
if (storedData) {
  length = storedData.length;
}

const container = document.getElementById('pagination');

const options = {
  totalItems: length,
  itemsPerPage: 12,
  visiblePages: window.innerWidth < 768 ? 2 : 3,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn current-page">{{page}}</a>',
    currentPage: '<span class="tui-page-btn tui-is-selected">{{page}}</span>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);