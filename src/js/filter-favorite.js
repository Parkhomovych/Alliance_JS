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
import {dataArray} from './storage'
const refs = getRefs();
let filterFavoriteCards =[];
// const cardFavoriteLocal = localStorage.getItem("cardData");
// const cardFavorites = JSON.parse(cardFavoriteLocal);

// Дефолтне додавання всіх All  categories

refs.cardsFavorite.innerHTML = createMarkupCards(dataArray);

// Перевірка чи є в localStorage Favoriteі

if (dataArray.length > 0) {
    createFilterFavorite()
};

// Функція створення фільтра
function createFilterFavorite() {

    markup = markupFilterFavorite(dataArray).join('');
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
        // filterFavoriteCards = dataArray;
        refs.cardsFavorite.innerHTML = createMarkupCards(dataArray);

    };


dataArray.forEach((el) => {

        if (el.category === e.target.textContent) {
           filterFavoriteCards.push(el)
        };
    })

    // cardFavorites.forEach(el => {

    //     if (el.category === e.target.textContent) {
    //         refs.cardsFavorite.innerHTML = createMarkupCards(filterFavoriteCards)
    //     }
    // });
    
};



export {filterFavoriteCards}

