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
        category: `${'Beef'}`,
        page: 1,
        limit: 6,
        time: `${160}`,
        area: `${'Irish'}`,
        ingredient: `${'640c2dd963a319ea671e3796'}`,
    });
        const response = await axios.get(`${URL}${resource.recipes}?${params}`);
        return response;
};
window.addEventListener('load', handler);
function handler() { searchRecipesFilter().then(create).catch(error => { console.log(error) }) };
function create(res) {
  
  elem.innerHTML = createMarkup(res.data);
const imgGradient = document.querySelector('.photo-img');
  console.log(imgGradient);
  imgGradient.style.background = "#050505"; // як приклад замість градієнту, щоб побачити, що працює

    console.log(res);
}
function createMarkup(params) {

    return  `
    <li>
    <div class="photo-card">
        <div class="photo-thumb">
          <img class="photo-img" src="${params.results[0].thumb}" alt="${params.results[0].title}" loading="lazy" />
        </div>
        <button type="button" class="btn-favorite">
                <svg class="icon-favorite" width="22" height="22">
                  <use href="images/icons.svg#heart"></use>
                </svg>
        </button>
        <div class="info">
            <p class="info-title">
                  ${params.results[0].title}
            </p>
            <p class="info-text">
                ${params.results[0].description}
            </p>
            <div class="info-bottom">
            <div class="info-rating">
            ${params.results[0].rating}
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
      ;
};



export { create };
