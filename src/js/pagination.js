import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderMarkup } from './markup-card.js';
import { dataArray, resizeFavorit } from './storage.js';
import getRefs from './hero-refs';

//зберігаємо та відновлюємо кількість сторінок пагінації (totalItems) у об'єкті options
//використовуємо Notiflix для відображення сповіщень у разі помилок при роботі з localStorage.
// const showFavorite = document.querySelector(".favorite-show");

const refs = getRefs();
let filterFavoriteCards = dataArray
  .filter(obj => obj.favorit)
  .map(elem => elem);

const noRecipes = document.querySelector('.no-recipe-content');
const boxList = document.querySelector('.box-list');
const cardsFavorite = document.querySelector('.favorite-cards');
const containerShow = document.querySelector('#tui-pagination-container');
const container = document.getElementById('tui-pagination-container');

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
createFilterFavorite();

refs.filterFavorite.addEventListener('click', handlerFilterCategory);

const pagination = new Pagination(container, options);

//зчитуємо зі сховища кількість фаворитів, прибираемо зайвий контент,
//ініціюэмо пагінацію по кількості відфільтрованих фаворитів

const fav = resizeFavorit();
hideShowFavorit(fav);
paginationOn(filterFavoriteCards.length);
showPageFavorites(currentPage);

// запуск пагінації з новими значеннями
// встановлення слухача пагінації, відображення її,
//в аргументах кількість відібраних фаворитів
function paginationOn(totalFavorites) {
  currentPage = 1;
  pagination.off('afterMove', onChangePagination);
  pagination.reset(totalFavorites);
  paginationVisualy(totalFavorites);
  if (totalFavorites > perPageFavorites) {
    // ставимо слухача на пагінацію
    pagination.on('afterMove', onChangePagination);
  }
  showPageFavorites(currentPage);
  hideShowFavorit(dataArray.length);
}

// перемальовка фаворитів при події на пагінації
function onChangePagination() {
  currentPage = pagination.getCurrentPage();
  showPageFavorites(currentPage);
}

// розрахунок першої і останньої картки на цій сторінці
function showPageFavorites(page) {
  const favoriteStart = (page - 1) * perPageFavorites;
  let favoriteEnd = page * perPageFavorites - 1;
  if (favoriteEnd >= filterFavoriteCards.length) {
    favoriteEnd = filterFavoriteCards.length - 1;
  }
  const arr = filterFavoriteCards.filter(
    (elem, idx) => idx >= favoriteStart && idx <= favoriteEnd
  );
  renderMarkup(arr);
}

// прибирання-додавання элементів, коли нема, або є фаворити
function hideShowFavorit(favorits) {
  // console.log(favorits);
  if (favorits > 0) {
    if (!noRecipes.classList.contains('visually-hidden')) {
      noRecipes.classList.add('visually-hidden');
    }
    if (boxList.classList.contains('visually-hidden')) {
      boxList.classList.remove('visually-hidden');
    }
    if (cardsFavorite.classList.contains('visually-hidden')) {
      cardsFavorite.classList.remove('visually-hidden');
    }
  } else {
    if (noRecipes.classList.contains('visually-hidden')) {
      noRecipes.classList.remove('visually-hidden');
    }
    if (!boxList.classList.contains('visually-hidden')) {
      boxList.classList.add('visually-hidden');
    }
    if (!cardsFavorite.classList.contains('visually-hidden')) {
      cardsFavorite.classList.add('visually-hidden');
    }
  }
}

//візуалізація строки пагінації
function paginationVisualy(totalFavorites) {
    if (totalFavorites > perPageFavorites) {
      if (containerShow.classList.contains('visually-hidden')) {
        containerShow.classList.remove('visually-hidden');
      };
      return;
  };
    if (!containerShow.classList.contains('visually-hidden')) {
      containerShow.classList.add('visually-hidden');
    }; 
};

//накладання фільтру в залежності від обраної категорії
function handlerFilterCategory(e) {
  resizeFavorit();
  if (e.target.textContent === 'All categories') {
    filterFavoriteCards = dataArray
      .filter(obj => obj.favorit)
      .map(elem => elem);      
    }else{      
      filterFavoriteCards = dataArray
      .filter(obj => obj.favorit && obj.category === e.target.textContent)
      .map(elem => elem);
  }
  // console.log(filterFavoriteCards);
  // createFilterFavorite();
  paginationOn(filterFavoriteCards.length);
};

// Функція створення фільтра
function createFilterFavorite() {
 const markupFilter = markupFilterFavorite(filterFavoriteCards).join('');
  refs.filterFavorite.insertAdjacentHTML('beforeend', markupFilter);
  // console.log(markupFilter);
}

// Функція розмальовка фільтра
function markupFilterFavorite(dataArray) {
  return dataArray
    .reduce((acc, el) => {
      acc.push(el.category);
      return acc;
    }, [])
    .filter((el, i, array) => array.indexOf(el) === i)
    .map(el => {
      return `<li class="favorite-filter-item">${el}</li>`;
    });
}
