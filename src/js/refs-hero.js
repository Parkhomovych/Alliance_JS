/**
  |============================
  | Refs hero
  |============================
*/
export default function getRefs() {
    return{
        swiperJs:document.querySelector('.swiper'),
        pagination:document.querySelector('.swiper-pagination'),
        eventSwiper:document.querySelector('.hero-swiper'),
        markupSwiper:document.querySelector('.swiper-wrapper')
    }
};