// import { createMarkupCards } from './favorit-markup-cards'
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


import { createMarkupCards } from './favorit-markup-cards'
import getRefs from './hero-refs';
import { dataArray } from './storage'
// import {paginationOn} from './pagination'

const refs = getRefs();
let filterFavoriteCards = dataArray.filter(obj=>obj.favorit).map(elem => elem);

console.log(filterFavoriteCards);

createFilterFavorite();

// const cardFavoriteLocal = localStorage.getItem("cardData");
// const cardFavorites = JSON.parse(cardFavoriteLocal);

// Дефолтне додавання всіх All  categories

// refs.cardsFavorite.innerHTML = createMarkupCards(dataArray);

// Перевірка чи є в localStorage Favoriteі

// if (dataArray.length > 0) {
//     createFilterFavorite()
// };


// Функція створення фільтра
function createFilterFavorite() {
    markup = markupFilterFavorite(filterFavoriteCards).join('');
    refs.filterFavorite.insertAdjacentHTML('beforeend', markup);
};

// Функція розмальовка фільтра
function markupFilterFavorite(dataArray) {

    return dataArray.reduce((acc, el) => {
        acc.push(el.category)
        return acc
    }, []).filter((el, i, array) => array.indexOf(el) === i).map(el => {
        return `<li class="favorite-filter-item">${el}</li>`
    });

};

refs.filterFavorite.addEventListener('click', handlerFilterCategory);

function handlerFilterCategory(e) {
    
    if (e.target.textContent === 'All  categories') {
        filterFavoriteCards = dataArray.filter(obj => obj.favorit).map(elem => elem);
        // filterFavoriteCards = dataArray;
        // refs.cardsFavorite.innerHTML = createMarkupCards(dataArray);
     
        // paginationOn(filterFavoriteCards.length);
        return;
    };
 
    filterFavoriteCards = dataArray.
        filter(obj => obj.favorit && obj.category === e.target.textContent)
        .map(elem => elem);
    
    // paginationOn(filterFavoriteCards.length);
    console.log(filterFavoriteCards);

};
// filterFavoriteCards.forEach((el) => {

//         if (el.category === e.target.textContent) {
//            filterFavoriteCards.push(el)
//         };
//     })

    // cardFavorites.forEach(el => {

    //     if (el.category === e.target.textContent) {
    //         refs.cardsFavorite.innerHTML = createMarkupCards(filterFavoriteCards)
    //     }
    // });
    



export {filterFavoriteCards}

