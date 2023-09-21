!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n);var l=n("lHbjo"),a=n("jzQFI");// import {paginationOn} from './pagination'
let r=(0,l.default)(),o=(0,a.dataArray).filter(e=>e.favorit).map(e=>e);console.log(o),markup=o.reduce((e,t)=>(e.push(t.category),e),[]).filter((e,t,i)=>i.indexOf(e)===t).map(e=>`<li class="favorite-filter-item">${e}</li>`).join(""),r.filterFavorite.insertAdjacentHTML("beforeend",markup),r.filterFavorite.addEventListener("click",function(e){if("All  categories"===e.target.textContent){o=(0,a.dataArray).filter(e=>e.favorit).map(e=>e);// filterFavoriteCards = dataArray;
// refs.cardsFavorite.innerHTML = createMarkupCards(dataArray);
// paginationOn(filterFavoriteCards.length);
return}// paginationOn(filterFavoriteCards.length);
console.log(o=(0,a.dataArray).filter(t=>t.favorit&&t.category===e.target.textContent).map(e=>e));// filterFavoriteCards.forEach((el) => {
//         if (el.category === e.target.textContent) {
//            filterFavoriteCards.push(el)
//         };
//     })
// cardFavorites.forEach(el => {
//     if (el.category === e.target.textContent) {
//         refs.cardsFavorite.innerHTML = createMarkupCards(filterFavoriteCards)
//     }
// });
});var s=n("1VFfL");n("6JpON");var d=n("6eCCw");n("eVaUC");var a=n("jzQFI");console.log("-----------------------------Galya---------------");//зберігаємо та відновлюємо кількість сторінок пагінації (totalItems) у об'єкті options
//використовуємо Notiflix для відображення сповіщень у разі помилок при роботі з localStorage.
// const showFavorite = document.querySelector(".favorite-show");
let c=document.querySelector(".no-recipe-content"),u=document.querySelector(".box-list"),f=document.querySelector(".favorite-cards");document.querySelector(".favorite-filter");let v=document.querySelector("#tui-pagination-container"),y=document.getElementById("tui-pagination-container");console.log(o);// налаштування початкових значень в залежносты від ширини вьюпорту
let g=window.innerWidth<768?9:12,h=1,p=window.innerWidth<768?2:3,m={totalItems:a.dataArray.length,itemsPerPage:g,visiblePages:p,page:h,centerAlign:!0},L=new(s&&s.__esModule?s.default:s)(y,m);//зчитуємо зі сховища кількість фаворитів, прибираемо зайвий контент,
//ініціюэмо пагінацію по кількості відфільтрованих фаворитів
console.log(o);let w=(0,a.resizeFavorit)();// перемальовка фаворитів при події на пагінації
function x(){b(h=L.getCurrentPage())}function b(e){let t=(e-1)*g,i=e*g-1;i>=o.length&&(i=o.length-1);let n=o.filter((e,n)=>n>=t&&n<=i);// console.log("favoriteStart", favoriteStart);
// console.log("favoriteEnd",favoriteEnd);
// console.log("------1------>", filterFavoriteCards.length); 
// console.log("------2------>", arr.length);
(0,d.renderMarkup)(n)}w>0?(c.classList.contains("visually-hidden")||c.classList.add("visually-hidden"),u.classList.contains("visually-hidden")&&u.classList.remove("visually-hidden"),f.classList.contains("visually-hidden")&&f.classList.remove("visually-hidden")):(c.classList.contains("visually-hidden")&&c.classList.remove("visually-hidden"),u.classList.contains("visually-hidden")||u.classList.add("visually-hidden"),f.classList.contains("visually-hidden")||f.classList.add("visually-hidden")),// встановлення слухача пагінації, відображення її, 
//в аргументах кількість відібраних фаворитів
function(e){if(L.reset(e),e>g){// ставимо слухача на пагінацію 
L.on("afterMove",x),v.classList.remove("is-hidden");return}v.classList.contains("is-hidden")||v.classList.add("is-hidden"),e||Notiflix.Notify.info("Вибачте, згідно параметрів пошуку рецептів не знайдено")}(o.length),b(h),// export {paginationOn}
n("i8Q71"),n("2Z7mb")}();//# sourceMappingURL=favorite.b3fd6d38.js.map

//# sourceMappingURL=favorite.b3fd6d38.js.map
