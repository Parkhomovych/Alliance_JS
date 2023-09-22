// Імпорт для модалки
const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import { searchRecipesId } from './createAPI';
import {
  renderStarModal,
  createIngredientsModal,
  createTagsModal,
} from './render-modal-function';
import { addFavorit, offFavorit, resizeFavorit, classFavorit } from './storage';
const URL = 'https://tasty-treats-backend.p.goit.global/api';
const elem = document.querySelector('.card-list');
const elemClick = document.querySelector('#card-list');

let totalCards;
if (375 >= window.outerWidth) {
  totalCards = 6;
} else if (768 >= window.outerWidth) {
  totalCards = 8;
} else {
  totalCards = 9;
}

elemClick.addEventListener('click', onClickList);

function onClickList(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    const selectedModal = evt.target.dataset.set;
    if (selectedModal) {
      // запуск модалки по кнопці
      openRecipeModalPopular(evt.target.dataset.set);
    }
  }
  if (evt.target.nodeName === 'svg') {
    const selectedFavorits = evt.target.dataset.set;
    if (selectedFavorits) {
      const favoritDOM = elem.querySelector(
        `svg[data-set="${selectedFavorits}"]`
      );
      addFavorit(selectedFavorits);
      favoritDOM.classList.add('add-fill');
    }
  }
  if (evt.target.nodeName === 'path') {
    const selectedFavorits = evt.target.farthestViewportElement.dataset.set;
    if (selectedFavorits) {
      const favoritDOM = elem.querySelector(
        `svg[data-set="${selectedFavorits}"]`
      );
      offFavorit(selectedFavorits);
      favoritDOM.classList.remove('add-fill');
    }
  }
}

function renderMarkup(res) {
  elem.innerHTML = createMarkup(res);
  renderStar();
}
function renderStar() {
  const stars = document.querySelectorAll('.box-star');
  stars.forEach(element => {
    const p = element.previousElementSibling;
    const rating = Math.round(p.textContent);
    const stars = [...element.children];
    stars.forEach((element, index) => {
      if (index < rating) {
        element.classList.add('yellow-star');
      }
    });
  });
}
function createMarkup(params) {
  resizeFavorit();
  return params
    .map(elem => {
      return `
    <li class="card-item">
    <div class="photo-card">
        <div class="photo-thumb">
          <img class="photo-img" src="${elem.thumb}" alt="${
        elem.title
      }" loading="lazy"/>
        </div>
        <button type="button" class="btn-favorite" >
                <svg class="icon-favorite${classFavorit(elem._id)}" data-set="${
        elem._id
      }" viewBox="0 0 32 32">
<path d="M15.992 6.848c-2.666-3.117-7.111-3.955-10.451-1.101s-3.81 7.625-1.187 11c2.181 2.806 8.781 8.725 10.944 10.641 0.242 0.214 0.363 0.321 0.504 0.364 0.123 0.037 0.258 0.037 0.381 0 0.141-0.042 0.262-0.149 0.504-0.364 2.163-1.916 8.763-7.834 10.944-10.641 2.623-3.375 2.21-8.177-1.187-11.001s-7.785-2.015-10.451 1.101z"></path>
                </svg>
        </button>
        <div class="info">
            <p class="info-title">
                  ${elem.title}
            </p>
            <p class="info-text">
                ${elem.description}
            </p>
            <div class="info-bottom">
            <div class="info-div">
            <p class="info-rating">${elem.rating.toFixed(1)}</p>
            <div class="box-star">
                <svg class="info-star" viewBox="0 0 32 32">
<path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
                </svg>
                <svg class="info-star" viewBox="0 0 32 32">
<path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
                </svg>
                <svg class="info-star" viewBox="0 0 32 32">
<path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
                </svg>
                <svg class="info-star" viewBox="0 0 32 32">
<path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
                </svg>
                <svg class="info-star" viewBox="0 0 32 32">
<path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
                </svg>
                </div>
          </div>
              <button id="${elem._id}" class="info-btn" data-set="${elem._id}">
                 See recipe
              </button>
              </div>
          </div>
        </div>
    </li>
  `;
    })
    .join('');
}

//  Модалка з рецептом

function openRecipeModalPopular(popularRecept) {
  searchRecipesId(popularRecept)
    .then(res => {
      markupModalRecipe(res);
      const simple = document.querySelector('.basicLightbox');
      simple.classList.add('correct-recipe');
    })
    .catch(error => {
      console.log(error);
    });
}

function markupModalRecipe(elem) {
  const {
    data: {
      title,
      youtube,
      thumb,
      rating,
      time,
      ingredients,
      tags,
      instructions,
    },
  } = elem;
  // Заміна шляху до відео youtube
  const videoBackend = youtube;
  const changeHttpVideo = videoBackend.replace(
    'https://www.youtube.com/watch?v=',
    'https://www.youtube.com/embed/'
  );
  let instance = basicLightbox.create(
    `<div class="card-modal">
  <button type="button" class="modal-close-btn js-card-close-btn"></button>
  <iframe id="player" class="modal-card-video"
  src="${
    changeHttpVideo || thumb
  }" style="border: none" allowfullscreen title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
  <h2 class="modal-card-title">${title}</h2>
  <div class="info-div-modal">
    <p class="info-rating grey">${rating.toFixed(1)}</p>
    <div class="box-stars">
      <svg class="star" viewBox="0 0 32 32">
        <path
          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
        ></path>
      </svg>
      <svg class="star" viewBox="0 0 32 32">
        <path
          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
        ></path>
      </svg>
      <svg class="star" viewBox="0 0 32 32">
        <path
          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
        ></path>
      </svg>
      <svg class="star" viewBox="0 0 32 32">
        <path
          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
        ></path>
      </svg>
      <svg class="star" viewBox="0 0 32 32">
        <path
          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
        ></path>
      </svg>
    </div>
    <p class="info-time">${time}min</p>
  </div>
  <ul class="modal-card-list">
  </ul>
  <ul class="modal-card-tags">
  </ul>
  <p class="modal-card-instructions">${instructions}</p>
  <button type="button" class="favorite-modal-btn">Add to favorite</button>
</div>
`,

    {
      onShow: instance => {
        document.addEventListener('keydown', registrationEventKey);
      },
    },
    {
      closeShow: instance => {
        document.removeEventListener('keydown', registrationEventKey);
      },
    }
  );
  instance.show();
  function registrationEventKey(e) {
    if (e.code === 'Escape') return instance.close();
  }

  // Функції розмітки та рейтингу модалки
  createTagsModal(tags);
  createIngredientsModal(ingredients);
  renderStarModal(rating);
  document.body.style.overflow = 'hidden';
  const modalCardCloseBtn = document.querySelector('.js-card-close-btn');
  const divModal = document.querySelector('.card-modal');
  modalCardCloseBtn.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    instance.close();
  });
}

export { renderMarkup, createMarkup, openRecipeModalPopular, renderStar };
