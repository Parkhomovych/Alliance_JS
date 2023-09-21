var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n);var a=n("fAYBR"),l=n("5uEKZ");// import {paginationOn} from './pagination'
const s=(0,a.default)();let o=(0,l.dataArray).filter(e=>e.favorit).map(e=>e);console.log(o),markup=o.reduce((e,t)=>(e.push(t.category),e),[]).filter((e,t,i)=>i.indexOf(e)===t).map(e=>`<li class="favorite-filter-item">${e}</li>`).join(""),s.filterFavorite.insertAdjacentHTML("beforeend",markup),s.filterFavorite.addEventListener("click",function(e){if("All  categories"===e.target.textContent){o=(0,l.dataArray).filter(e=>e.favorit).map(e=>e);// filterFavoriteCards = dataArray;
// refs.cardsFavorite.innerHTML = createMarkupCards(dataArray);
// paginationOn(filterFavoriteCards.length);
return}// paginationOn(filterFavoriteCards.length);
console.log(o=(0,l.dataArray).filter(t=>t.favorit&&t.category===e.target.textContent).map(e=>e));// filterFavoriteCards.forEach((el) => {
//         if (el.category === e.target.textContent) {
//            filterFavoriteCards.push(el)
//         };
//     })
// cardFavorites.forEach(el => {
//     if (el.category === e.target.textContent) {
//         refs.cardsFavorite.innerHTML = createMarkupCards(filterFavoriteCards)
//     }
// });
});var r=n("fb9GJ");n("7Y9D8");var d=n("5HMam");n("goQqF");var l=n("5uEKZ");console.log("-----------------------------Galya---------------");//зберігаємо та відновлюємо кількість сторінок пагінації (totalItems) у об'єкті options
//використовуємо Notiflix для відображення сповіщень у разі помилок при роботі з localStorage.
// const showFavorite = document.querySelector(".favorite-show");
const c=document.querySelector(".no-recipe-content"),u=document.querySelector(".box-list"),f=document.querySelector(".favorite-cards");document.querySelector(".favorite-filter");const v=document.querySelector("#tui-pagination-container"),y=document.getElementById("tui-pagination-container");console.log(o);// налаштування початкових значень в залежносты від ширини вьюпорту
let g=window.innerWidth<768?9:12,h=1,p=window.innerWidth<768?2:3;// обєкт налаштувань пагінації
const m={totalItems:l.dataArray.length,itemsPerPage:g,visiblePages:p,page:h,centerAlign:!0},L=new(r&&r.__esModule?r.default:r)(y,m);//зчитуємо зі сховища кількість фаворитів, прибираемо зайвий контент,
//ініціюэмо пагінацію по кількості відфільтрованих фаворитів
console.log(o);const w=(0,l.resizeFavorit)();// перемальовка фаворитів при події на пагінації
function x(){b(h=L.getCurrentPage())}function b(e){let t=(e-1)*g,i=e*g-1;i>=o.length&&(i=o.length-1);let n=o.filter((e,n)=>n>=t&&n<=i);// console.log("favoriteStart", favoriteStart);
// console.log("favoriteEnd",favoriteEnd);
// console.log("------1------>", filterFavoriteCards.length); 
// console.log("------2------>", arr.length);
(0,d.renderMarkup)(n)}w>0?(c.classList.contains("visually-hidden")||c.classList.add("visually-hidden"),u.classList.contains("visually-hidden")&&u.classList.remove("visually-hidden"),f.classList.contains("visually-hidden")&&f.classList.remove("visually-hidden")):(c.classList.contains("visually-hidden")&&c.classList.remove("visually-hidden"),u.classList.contains("visually-hidden")||u.classList.add("visually-hidden"),f.classList.contains("visually-hidden")||f.classList.add("visually-hidden")),// встановлення слухача пагінації, відображення її, 
//в аргументах кількість відібраних фаворитів
function(e){if(L.reset(e),e>g){// ставимо слухача на пагінацію 
L.on("afterMove",x),v.classList.remove("is-hidden");return}v.classList.contains("is-hidden")||v.classList.add("is-hidden"),e||Notiflix.Notify.info("Вибачте, згідно параметрів пошуку рецептів не знайдено")}(o.length),b(h);// export {paginationOn}
//# sourceMappingURL=favorite.b06244c9.js.map

//# sourceMappingURL=favorite.b06244c9.js.map
