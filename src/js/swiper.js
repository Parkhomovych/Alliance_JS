/**
  |============================
  | Бібліотека Swiper
  |============================
*/
import  Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
Swiper.use([Pagination]);
import 'swiper/swiper-bundle.css';

import getRefs from './hero-refs';
const refs = getRefs();

const swiper = new Swiper(refs.swiperJs, {
  pagination: {
    el: refs.pagination,
    type: 'bullets',
    clickable:true,
},
  direction: 'horizontal',
  loop: true,
  slidesPerView: "auto",
  noSwiping: true,
  noSwipingClass: "no-swipe",
  speed:700,
  spaceBetween:16,

  });