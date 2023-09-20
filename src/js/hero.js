import { searchEvents, searchAddOrders } from './createAPI';
import callMassageAdd from './hero-message'
import { onBasketBtnClick } from './header'
import markupEvents from './hero-markup-swiper'
import getRefs from './hero-refs';
const refs = getRefs();

// Прослуховувачі подій
window.addEventListener('load', handlerSwiper);
refs.orderBtnHero.addEventListener('click', handlerOrderBtn);

function handlerOrderBtn() {
  onBasketBtnClick();

  const modalMessage = document.querySelector('.header-form');
  callMassageAdd(modalMessage);

};

function handlerSwiper() {

  searchEvents().then(createSwiper).catch(error => { console.log(error) });

};

function createSwiper(res) {

  const markup = markupEvents(res.data);
  refs.markupSwiper.insertAdjacentHTML('afterbegin', markup)

};