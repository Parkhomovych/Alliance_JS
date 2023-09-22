import getRefs from './hero-refs';
import { dataArray } from './storage'


const refs = getRefs();
let filterFavoriteCards = dataArray.filter(obj=>obj.favorit).map(elem => elem);

console.log(filterFavoriteCards);

createFilterFavorite();

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
        return;
    };
 
    filterFavoriteCards = dataArray.
        filter(obj => obj.favorit && obj.category === e.target.textContent)
        .map(elem => elem);
    console.log(filterFavoriteCards);

};

export {filterFavoriteCards}

