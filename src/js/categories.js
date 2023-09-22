import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import Notiflix from 'notiflix';
import { renderMarkup, openRecipeModalPopular } from './markup-card.js';

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

// посилання на Dom
const refs = {
  allCategiries: document.querySelector('.categories-btn-all-js'),
  categories: document.querySelector('.categories-js'),
  popular: document.querySelector('.popular-change-js'),
  paginationShow: document.querySelector('#tui-pagination-container'),
  pagination: document.getElementById('tui-pagination-container'),
};

// налаштування початкових значень в залежносты від ширини вьюпорту
let perPageRecipes = getPerPageRecipes();
let currentPage = 1;
let visiblePages = window.innerWidth < 768 ? 2 : 3;

// екземпляр класу з параметрами для запиту рецептів по філтру
const paramsRecepies = new URLSearchParams({
  page: currentPage,
  limit: perPageRecipes,
});

// об'єкт параметрів для пагінації
const optionsPagination = {
  totalItems: 0,
  itemsPerPage: perPageRecipes,
  visiblePages: visiblePages,
  page: currentPage,
};

const paginationRecipes = new Pagination(refs.pagination, optionsPagination);

// слухачі подій
refs.allCategiries.addEventListener('click', onClickAllCategories);
refs.categories.addEventListener('click', onClickCategories);
refs.popular.addEventListener('click', onClickPopular);

// прибирання слухачів подій
window.addEventListener("unload", function () {
refs.allCategiries.removeEventListener('click', onClickAllCategories);
refs.categories.removeEventListener('click', onClickCategories);
refs.popular.removeEventListener('click', onClickPopular);
paginationRecipes.off('afterMove', onMovePagination);
  
});

// формування переліку категорій
searchCategories()
.then(categories => {
  refs.categories.insertAdjacentHTML(
    'beforeend',
    makeMarkupCategories(categories)
    );
  })
  .catch(() => {});

//перша відмальовка блоку рецептів  
showSearchRecipes();

// запит переліку популярних рецептів
searchRecipesPopular()
.then(popular => {
  refs.popular.insertAdjacentHTML(
    'beforeend',
    makeMarkupPopular(popular.data)
  );
  // слухачі подій на популярних рецептах
  const popularBtn = refs.popular.querySelectorAll(".popular-button-js");
  popularBtn.forEach((elem) => {
    elem.addEventListener('click', onClickPopular)
  });
})
.catch(() => {});
  
// формування розмітки переліку категорій
 function makeMarkupCategories(obj) {
   const { data } = obj;
   const markup = data
      .map(({ name }) => {
        return `<li class="categories-list-js"><button type="button" data-set="${name}" class="categories-btn-js">${name}</button></li>`;
      })
      .join('');
    return markup;
};

// перемальовка блоку рецептів після зміни параметрів запиту з 1 сторынки з перемальовкою пагінації

function showSearchRecipes() {
  paginationRecipes.off('afterMove', onMovePagination);
  changeParams('page', 1);
  searchRecipesFlexFilter(paramsRecepies)
    .then(recipes => {
      renderMarkup(recipes.data.results);
      paginationListenerOn(recipes.data.totalPages);
    })
    .catch(() => {});
};

// перемальовка блоку рецептів після змщення пагінації 
function reShowSearchRecipes() {
  searchRecipesFlexFilter(paramsRecepies)
    .then(recipes => {
      renderMarkup(recipes.data.results);
    })
    .catch(() => {});
};

// встановлення слухача пагінації, відображення її
function paginationListenerOn(totalPages) {
  paginationRecipes.off('afterMove', onMovePagination);
  paginationRecipes.reset(totalPages * perPageRecipes);
  paginationVisualy(totalPages);
  if (totalPages > 1) {
    paginationRecipes.on('afterMove', onMovePagination);
    return;
  } 
  if (!totalPages) {
    Notiflix.Notify.info(
     'Sorry, no recipes were found according to the search parameters'
    );

  };
  
  function paginationVisualy(totalPages) {
    if (totalPages > 1) {
      if (refs.paginationShow.classList.contains('visually-hidden')) {
        refs.paginationShow.classList.remove('visually-hidden');
      }
      return;
    }
    if (!refs.paginationShow.classList.contains('visually-hidden')) {
      refs.paginationShow.classList.add('visually-hidden');
    }; 
}

// перемальовка рецептів при зміщенні пагінації
function onMovePagination() {
  currentPage = paginationRecipes.getCurrentPage();
  changeParams('page', currentPage);
  reShowSearchRecipes();
};

// вибір "всіх категорій" по натисканню "AllCategories"
function onClickAllCategories() {
  unselectCategories();
  refs.allCategiries.classList.add('is-active');
  removeParams('category');
  showSearchRecipes();
};

// вибір конкретної категорії
function onClickCategories(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  };
  unselectAllCategories();
  unselectCategories();
  evt.target.classList.add('is-active');
  const selectedCategories = evt.target.dataset.set;
  changeParams('category', selectedCategories);
  showSearchRecipes();
};

// знімаємо помітку з кнопки "AllCategories"
function unselectAllCategories() {
  if (refs.allCategiries.classList.contains('is-active')) {
    refs.allCategiries.classList.remove('is-active');
  };
};

// знімаємо помітку з активної категорії
function unselectCategories() {
  const oldSelect = refs.categories.querySelector('.is-active');
  if (oldSelect) {
    oldSelect.classList.remove('is-active');
  };
};

// обробка вибору популярного рецепту
function onClickPopular(evt) {
  if (evt.currentTarget.nodeName !== 'BUTTON') {
    return;
  };
  const selectedId = evt.currentTarget.dataset.set;
  openRecipeModalPopular(selectedId);
};

// додавання/зміна параметру в об'єкт для пошуку рецепту
function changeParams(key, value) {
  if (paramsRecepies.has(key)) {
    paramsRecepies.delete(key);
  };
  paramsRecepies.append(key, value);
};

// вилучення параметра в об'єкті пошуку рецепту
function removeParams(key) {
  while (paramsRecepies.has(key)) {
    paramsRecepies.delete(key);
  };
};

// кількість карток реціптів в залежності від вьюпорту
function getPerPageRecipes() {
  if (window.innerWidth < 768) {
    return 6;
  };
  if (window.innerWidth < 1280) {
    return 8;
  };
  return 9;
};

// розмітка блоку популярних рецептів
function makeMarkupPopular(arr) {
  return arr
    .map(elem => {
      return `
     <li class="popular-item-js">
        <button type="button" class="popular-button-js" data-set="${elem._id}">
          <div class="popular-card-js">
            <div class="popular-tumb-js">
            <img class="popular-img" src="${elem.preview}" alt="${elem.title}" loading="lazy"/>
            </div>
            <div class="popular-recipes-info-js">
              <p class="popular-recipes-name-js">${elem.title}</p>
              <p class="popular-recipes-text-js">${elem.description}</p>
              </div>
          </div>
        </button>
        </li> `;
    })
    .join('');
}

export { changeParams, removeParams, showSearchRecipes, paramsRecepies }