// const defaults = {
//     title: 'Title not found',
//     description: 'Description not found',
//     thumb: 'https://demofree.sirv.com/nope-not-here.jpg?w=150',
//     rating: 'XX',
// }

import axios from "axios";
const URL = 'https://tasty-treats-backend.p.goit.global/api';
const elem = document.querySelector('.card-list');

const resource = {
    events: '/events',
    recipes: '/recipes',
    categories: '/categories',
    popular: '/recipes/popular',
    ingredients: '/ingredients',
    areas: '/areas',
    orders: '/orders',
}
const searchRecipesFilter = async (category,page,limit,time,area,ingredient) => {
        // Праметри API запиту
    const params = new URLSearchParams({
        
        limit: 6,
        
    });
        const response = await axios.get(`${URL}${resource.recipes}?${params}`);
        return response;
};
window.addEventListener('load', handler);
function handler() { searchRecipesFilter().then(create).catch(error => { console.log(error) }) };
function create(res) {  
  elem.innerHTML = createMarkup(res.data.results);
    console.log(res);
}
function createMarkup(params) {

    return params.map(elem => {
    return `
    <li class="item">
    <div class="photo-card">
    <div class="photo-exp"></div>
        <div class="photo-thumb">
          <img class="photo-img" src="${elem.thumb}" alt="${elem.title}" loading="lazy"/>
        </div>
        <button type="button" class="btn-favorite">
                <svg class="icon-favorite" width="22" height="22">
                  <use href="../images/icons.svg#heart"></use>
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
            <div class="info-rating">
            ${elem.rating}
                <svg width="22" height="22">
                  <use href="images/icons.svg#star"></use>
                </svg>
            </div>
              <button class="info-btn">
                 See recipe
              </button>
              </div>
          </div>
        </div>
    </li>
  `
  }).join("");
}



export { create };
