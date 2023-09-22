import axios from 'axios';
import {
  searchIngredients,
  searchAreas,
} from './createAPI';
import { changeParams, removeParams, showSearchRecipes } from './categories';
import debounce from 'lodash.debounce';

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
elements.time.addEventListener('change', handlerTime);
elements.area.addEventListener('change', handlerArea);
elements.ingredients.addEventListener('change', handlerIngredients);
elements.search.addEventListener(
  'input',
  debounce(() => {
    let search = elements.search.value.trim();
    changeParams('title', search);
    showSearchRecipes();
  }, 300)
);

function handlerForm(evt) {
  evt.preventDefault();
}

function handlerTime(evt) {
  changeParams('time', evt.currentTarget.value);
  showSearchRecipes();
}

function handlerArea(evt) {
  changeParams('area', evt.currentTarget.value);
  showSearchRecipes();
}

function handlerIngredients(evt) {
  changeParams('ingredient', evt.currentTarget.value);
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
  let markup = '';

const select = document.querySelector('.select-time');

// Додаємо опції з цифрами та словом "min" (починаючи з 0)
for (let time = 0; time < 220; time += 5) {
  const option = document.createElement('option');
  option.value = time;
  option.text = `${time} min`;
  select.appendChild(option);
   }
     elements.time.insertAdjacentHTML('beforeend', markup);
}

// ❗ Створення js-reset-filter-btn ❗

elements.resetBtn.addEventListener('click', handlerReset);

function handlerReset(evt) {
  removeParams('time');
  removeParams('area');
  removeParams('ingredient');
  removeParams('title');
  showSearchRecipes();

elements.search.value = ''; // Очистити поле для пошуку
  elements.time.selectedIndex = 0; // Скинути вибір часу на початкове значення
  elements.area.selectedIndex = 0; // Скинути вибір області на початкове значення
  elements.ingredients.selectedIndex = 0; // Скинути вибір інгредієнта на початкове значення
}