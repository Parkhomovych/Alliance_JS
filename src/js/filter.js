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

  // ❗ ДОРОБИТИ ПРАВИЛЬНУ ЛОГІКУ ЧАСУ ❗
  for (let time = 0; time < 220; time += 5) {
    if (time % 10 === 0) {
      markup += `<option class="filter-opt" value="${time}">${time}</option>`;
    }
    // if (time === 25) {
    //   markup += `<option class="filter-opt" value="${time}">${time}</option>`;
    // }
    // if (time === 55) {
    //   markup += `<option class="filter-opt" value="${time}">${time}</option>`;
    // }
    // if (time === 75) {
    //   markup += `<option class="filter-opt" value="${time}">${time}</option>`;
    // }
    // if (time === 85) {
    //   markup += `<option class="filter-opt" value="${time}">${time}</option>`;
    // }
    // if (time === 105) {
    //   markup += `<option class="filter-opt" value="${time}">${time}</option>`;
    // }
    // if (time === 195) {
    //   markup += `<option class="filter-opt" value="${time}">${time}</option>`;
    // }
    // if (time === 205) {
    //   markup += `<option class="filter-opt" value="${time}">${time}</option>`;
    // }
    // if (time === 50) {
    //   markup += `<option class="filter-opt" value="${time + 1}">${
    //     time + 1
    //   }</option>`;
    // }
    // if (time === 155) {
    //   markup += `<option class="filter-opt" value="${time + 3}">${
    //     time + 3
    //   }</option>`;
    // }
    // if (time === 10) {
    //   markup += `<option class="filter-opt" value="${time + 2}">${
    //     time + 2
    //   }</option>`;
    // }
    // if (time === 25) {
    //   markup += `<option class="filter-opt" value="${time + 2}">${
    //     time + 2
    //   }</option>`;
    // }
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
}
