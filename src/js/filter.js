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
import { changeParams, removeParams,showSearchRecipes} from './categories'

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

  console.log(category);

  searchRecipesFilter()
    .then(result => {})
    .catch(err => {});
}
function handlerSearch(evt) {}

function handlerTime(evt) {
  changeParams('time', evt.currentTarget.value);
  showSearchRecipes();
}
  

function handlerArea(evt) {
   changeParams('area', evt.currentTarget.value);
  showSearchRecipes();
}

function handlerIngredients(evt) {
   changeParams('ingredients', evt.currentTarget.value);
  showSearchRecipes();
}

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
    console.log(result.data);
  })
  .catch(err => {});

// ❗ Функція створення розмітки Area ❗

function createArea(arr) {
  return arr
    .map(
      ({ name }) =>
        `<option class="filter-opt" value="${name}">${name}</option>`
    )
    .join('');
}

// ❗ Функція створення розмітки Ingredients ❗

function createIngredients(arr) {
  return arr
    .map(
      ({ name, _id }) =>
        `<option class="filter-opt" value="${_id}">${name}</option>`
    )
    .join('');
}

// ❗ Створення Time ❗

createTime();
function createTime() {
  let markup = "";

  for (let time = 0; time < 160; time += 10) {
    markup +=`<option class="filter-opt" value="${time}">${time}</option>`
  }
   elements.time.insertAdjacentHTML('beforeend',markup);
}

// ❗ Створення js-reset-filter-btn ❗

elements.resetBtn.addEventListener('click', handlerReset);

function handlerReset(evt) {
  removeParams('time');
  removeParams('area');
  removeParams('ingredients');
  showSearchRecipes();
}
