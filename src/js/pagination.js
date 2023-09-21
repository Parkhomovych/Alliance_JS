import Pagination from 'tui-pagination';

import { Notify } from 'notiflix';

import { renderMarkup } from './markup-card.js';

import { searchCategories } from './createAPI.js';

import {dataArray, resizeFavorit} from './storage.js'

import {filterFavoriteCards} from './filter-favorite.js'

console.log("-----------------------------Galya---------------");
//зберігаємо та відновлюємо кількість сторінок пагінації (totalItems) у об'єкті options
//використовуємо Notiflix для відображення сповіщень у разі помилок при роботі з localStorage.

const noRecipes = document.querySelector(".no-recipe-content");
const showFavorite = document.querySelector(".favorite-show");
const filterFavorite = document.querySelector(".favorite-filter");
const cardsFavorite = document.querySelector(".favorite-cards");
const container = document.getElementById('tui-pagination-container');
console.log(filterFavoriteCards);
// налаштування початкових значень в залежносты від ширини вьюпорту
let perPageFavorites = window.innerWidth < 768 ? 9 : 12;
let currentPage = 1;
let visiblePages = window.innerWidth < 768 ? 2 : 3;
let filter = '';


// обєкт налаштувань пагінації
const options = {
  totalItems: dataArray.length,
  itemsPerPage: perPageFavorites,
  visiblePages: visiblePages,
  page: currentPage,
  centerAlign: true,
};

const pagination = new Pagination(container, options);

const fav = resizeFavorit();
if (fav > 0) {
  noRecipes.classList.add('visually-hidden');
  showFavorite.classList.remove('visually-hidden');
}
paginationOn(fav);

// формування переліку категорій
searchCategories()
  .then(categories => {
  
    filterFavorite.insertAdjacentHTML(
    'beforeend',
    `<li class="categories-list-js"><button type="button" data-set="" class="categories-btn-js">All categories</button></li>`)
  
    filterFavorite.insertAdjacentHTML(
    'beforeend',
      markupCategories(categories)
    );
  })
  .catch(() => { });

// розмітка переліку категорій  
function markupCategories(arr) {
return arr
    .map(({name}) => {
      return `
<li class="categories-list-js"><button type="button" data-set="${name}" class="categories-btn-js">${name}</button></li>`;
    })
    .join('');  
};


// встановлення слухача пагінації, відображення її, 
//в аргументах кількість відібраних фаворитів
function paginationOn(totalFavorites) {
  pagination.reset(totalFavorites);
    if (totalFavorites > perPageFavorites) {
    // ставимо слухача на пагінацію 
    pagination.on('afterMove', onChangePagination);
    // refs.paginationShow.classList.remove('is-hidden');
    return;
  } else {
    // if (!refs.paginationShow.classList.contains('is-hidden')) {
    //   refs.paginationShow.classList.add('is-hidden');
    // }
  }
    if (!totalFavorites) {
    //  або відмальовка попередження
    Notiflix.Notify.info(
      'Вибачте, згідно параметрів пошуку рецептів не знайдено'
      
    );
  }
}

// перемальовка фаворитів при події на пагінації
function onChangePagination() {
  currentPage = pagination.getCurrentPage();

  renderMarkup(dataArray.filter((elem, idx) => {
    idx >= (currentPage - 1) * perPageFavorites &&
      idx <= (currentPage * perPageFavorites - 1)
  }));

  // при зміні параметрів фільтра вираховуємо кількість карток
  function onChangeCategories(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    };
    pagination.off('afterMove', onChangePagination);
    const selectedCategories = evt.target.dataset.set;
    currentPage = 1;
    resizeFavorit();
    if (selectedCategories) {
      arr = dataArray.filter(({category}) => {category === selectedCategories });
      renderMarkup(arr.filter((elem, idx) => {
        idx >= (currentPage-1)*perPageFavorites && idx <= (currentPage*perPageFavorites -1)}));
        paginationOn(arr.length);
        return;
      }
      renderMarkup(dataArray.filter((elem, idx) => {
        idx >= (currentPage-1)*perPageFavorites && idx <= (currentPage*perPageFavorites -1)}));
        paginationOn(dataArray.length);
  };
}