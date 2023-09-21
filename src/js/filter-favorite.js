import { createMarkupCards } from './favorit-markup-cards'
import getRefs from './hero-refs';
const refs = getRefs();

const cardFavoriteLocal = localStorage.getItem("cardData");
const cardFavorites = JSON.parse(cardFavoriteLocal);

// Дефолтне додавання всіх All  categories

refs.cardsFavorite.innerHTML = createMarkupCards(cardFavorites);

// Перевірка чи є в localStorage Favoriteі

if (cardFavorites.length > 0) {
    createFilterFavorite()
};

// Функція створення фільтра
function createFilterFavorite() {

    markup = markupFilterFavorite(cardFavorites).join('');
    refs.filterFavorite.insertAdjacentHTML('beforeend', markup);

};

// Функція розмальовка фільтра
function markupFilterFavorite(cardFavorites) {

    return cardFavorites.reduce((acc, el) => {
        acc.push(el.category)
        return acc
    }, []).filter((el, i, array) => array.indexOf(el) === i).map(el => {
        return `<li class="favorite-filter-item">${el}</li>`
    });

};

refs.filterFavorite.addEventListener('click', handlerFilterCategory);

function handlerFilterCategory(e) {

    const filterFavoriteCards = cardFavorites.reduce((acc, el) => {

        if (el.category === e.target.textContent) {
            acc.push(el)
        };
        return acc

    }, [])

    if (e.target.textContent === 'All  categories') {
        refs.cardsFavorite.innerHTML = createMarkupCards(cardFavorites);
    };

    cardFavorites.forEach(el => {

        if (el.category === e.target.textContent) {
            refs.cardsFavorite.innerHTML = createMarkupCards(filterFavoriteCards)
        }
    });

};





