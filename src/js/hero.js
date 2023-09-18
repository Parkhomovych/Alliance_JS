
import {searchEvents} from './createAPI';
import markupEvents from './hero-markup-swiper'
import getRefs from './refs-hero';
const refs = getRefs();

// Прослуховувачі подій
window.addEventListener('load',handlerSwiper);

function handlerSwiper() {
    searchEvents().then(createSwiper).catch(error => { console.log(error) });  
};

function createSwiper(res) {
const markup = markupEvents(res.data);
    refs.markupSwiper.insertAdjacentHTML('afterbegin',markup)
};
