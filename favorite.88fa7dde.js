!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},c={},l=t.parcelRequired7c6;// import { createMarkupCards } from './favorit-markup-cards'
// import getRefs from './hero-refs';
// const refs = getRefs();
// const cardFavoriteLocal = localStorage.getItem("cardData");
// const cardFavorites = JSON.parse(cardFavoriteLocal);
// let filterFavoriteCards =[];
// // Дефолтне додавання всіх All  categories
// refs.cardsFavorite.innerHTML = createMarkupCards(cardFavorites);
// // Перевірка чи є в localStorage Favoriteі
// if (cardFavorites.length > 0) {
//     createFilterFavorite()
// };
// // Функція створення фільтра
// function createFilterFavorite() {
//     markup = markupFilterFavorite(cardFavorites).join('');
//     refs.filterFavorite.insertAdjacentHTML('beforeend', markup);
// };
// // Функція розмальовка фільтра
// function markupFilterFavorite(cardFavorites) {
//     return cardFavorites.reduce((acc, el) => {
//         acc.push(el.category)
//         return acc
//     }, []).filter((el, i, array) => array.indexOf(el) === i).map(el => {
//         return `<li class="favorite-filter-item">${el}</li>`
//     });
// };
// refs.filterFavorite.addEventListener('click', handlerFilterCategory);
// function handlerFilterCategory(e) {
//     if (e.target.textContent === 'All  categories') {
//         refs.cardsFavorite.innerHTML = createMarkupCards(cardFavorites);
//     };
//      cardFavorites.forEach((el) => {
//         if (el.category === e.target.textContent) {
//            filterFavoriteCards.push(el)
//         };
//     })
//     // cardFavorites.forEach(el => {
//     //     if (el.category === e.target.textContent) {
//     //         refs.cardsFavorite.innerHTML = createMarkupCards(filterFavoriteCards)
//     //     }
//     // });
// };
//     console.log(filterFavoriteCards);
// export {filterFavoriteCards}
function i(t){return t.map(t=>`
      <li class="card-item">
      <div class="photo-card">
          <div class="photo-thumb">
            <img class="photo-img" src="${t.thumb}" alt="${t.title}" loading="lazy"/>
          </div>
          <button type="button" class="btn-favorite" >
                  <svg class="icon-favorite${t._id}" data-set="${t._id}" viewBox="0 0 32 32">
  <path d="M15.992 6.848c-2.666-3.117-7.111-3.955-10.451-1.101s-3.81 7.625-1.187 11c2.181 2.806 8.781 8.725 10.944 10.641 0.242 0.214 0.363 0.321 0.504 0.364 0.123 0.037 0.258 0.037 0.381 0 0.141-0.042 0.262-0.149 0.504-0.364 2.163-1.916 8.763-7.834 10.944-10.641 2.623-3.375 2.21-8.177-1.187-11.001s-7.785-2.015-10.451 1.101z"></path>
                  </svg>
          </button>
          <div class="info">
              <p class="info-title">
                    ${t.title}
              </p>
              <p class="info-text">
                  ${t.description}
              </p>
              <div class="info-bottom">
              <div class="info-div">
              <p class="info-rating">${t.rating.toFixed(1)}</p>
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
                <button id=${t._id} class="info-btn" data-set="${t._id}">
                   See recipe
                </button>
                </div>
            </div>
          </div>
      </li>
    `).join("")}null==l&&((l=function(t){if(t in a)return a[t].exports;if(t in c){var l=c[t];delete c[t];var i={id:t,exports:{}};return a[t]=i,l.call(i.exports,i,i.exports),i.exports}var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(t,a){c[t]=a},t.parcelRequired7c6=l);var e=l("lHbjo"),s=l("jzQFI");let o=(0,e.default)(),r=[];// const cardFavoriteLocal = localStorage.getItem("cardData");
// const cardFavorites = JSON.parse(cardFavoriteLocal);
// Дефолтне додавання всіх All  categories
o.cardsFavorite.innerHTML=i(s.dataArray),s.dataArray.length>0&&(markup=s.dataArray.reduce((t,a)=>(t.push(a.category),t),[]).filter((t,a,c)=>c.indexOf(t)===a).map(t=>`<li class="favorite-filter-item">${t}</li>`).join(""),o.filterFavorite.insertAdjacentHTML("beforeend",markup)),o.filterFavorite.addEventListener("click",function(t){"All  categories"===t.target.textContent&&(o.cardsFavorite.innerHTML=i(s.dataArray)),(0,s.dataArray).forEach(a=>{a.category===t.target.textContent&&r.push(a)});// cardFavorites.forEach(el => {
//     if (el.category === e.target.textContent) {
//         refs.cardsFavorite.innerHTML = createMarkupCards(filterFavoriteCards)
//     }
// });
})}();//# sourceMappingURL=favorite.88fa7dde.js.map

//# sourceMappingURL=favorite.88fa7dde.js.map
