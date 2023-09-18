import axios from 'axios';
import {
  searchEvents,
  searchCategories,
  searchRecipesFilter,
  searchRecipesPopular,
  searchRecipesId,
  searchRecipesIdRating,
  searchIngredients,
  searchAreas,
  searchAddOrders,
  searchRecipesFlexFilter,
} from './createAPI';

const elements = {
  form: document.querySelector('.js-form-search'),
  search: document.querySelector('.js-search'),
  time: document.querySelector('.js-time'),
  area: document.querySelector('.js-area'),
  ingredients: document.querySelector('.js-ingredients'),
  category: document.querySelector('.categories-js'),
  resetBtn: document.querySelector('.js-reset-filter-btn'),
};

// ❗ Слухачі подій ❗

elements.form.addEventListener('submit', handlerForm);
elements.search.addEventListener('input', handlerSearch);
elements.time.addEventListener('change', handlerTime);
elements.area.addEventListener('change', handlerArea);
elements.ingredients.addEventListener('change', handlerIngredients);

function handlerForm(evt) {
  evt.preventDefault();
  searchRecipesFilter()
    .then(result => {})
    .catch(err => {});
}
function handlerSearch(evt) {}

function handlerTime(evt) {}

function handlerArea(evt) {}

function handlerIngredients(evt) {}

// ❗ Створення відмальовки в DOM Area ❗

searchAreas()
  .then(result => {
    elements.area.innerHTML = createArea(result.data);
  })
  .catch(err => {
    console.log(err);
  });

// ❗ Створення відмальовки в DOM Ingredients ❗

searchIngredients()
  .then(result => {
    elements.ingredients.innerHTML = createIngredients(result.data);
  })
  .catch(err => {});

// ❗ Функція створення розмітки Area ❗

function createArea(arr) {
  return arr
    .map(
      ({ name, id }) =>
        `<option class="filter-opt" value="${id}">${name}</option>`
    )
    .join('');
}

// ❗ Функція створення розмітки Ingredients ❗

function createIngredients(arr) {
  return arr
    .map(
      ({ name, id }) =>
        `<option class="filter-opt" value="${id}">${name}</option>`
    )
    .join('');
}

// ❗ Створення Time ❗

createTime();
function createTime() {
  let currentTime = 0;

  for (let i = 0; i < 16; i += 1) {
    elements.time.insertAdjacentHTML(
      'beforeend',
      `<option class="filter-opt" value="">${(currentTime += 10)}</option>`
    );
  }
}

// ❗ Створення js-reset-filter-btn ❗

elements.resetBtn.addEventListener('click', handlerReset);

function handlerReset(evt) {}
