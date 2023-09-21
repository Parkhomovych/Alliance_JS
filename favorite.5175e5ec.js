!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequired7c6=a);var n=a("lHbjo"),r=a("jzQFI");// import {paginationOn} from './pagination'
let l=(0,n.default)(),o=(0,r.dataArray).filter(e=>e.favorit).map(e=>e);console.log(o),markup=o.reduce((e,t)=>(e.push(t.category),e),[]).filter((e,t,i)=>i.indexOf(e)===t).map(e=>`<li class="favorite-filter-item">${e}</li>`).join(""),l.filterFavorite.insertAdjacentHTML("beforeend",markup),l.filterFavorite.addEventListener("click",function(e){if("All  categories"===e.target.textContent){o=(0,r.dataArray).filter(e=>e.favorit).map(e=>e);// filterFavoriteCards = dataArray;
// refs.cardsFavorite.innerHTML = createMarkupCards(dataArray);
// paginationOn(filterFavoriteCards.length);
return}// paginationOn(filterFavoriteCards.length);
console.log(o=(0,r.dataArray).filter(t=>t.favorit&&t.category===e.target.textContent).map(e=>e))});var s=a("1VFfL"),d=a("6eCCw");a("eVaUC");var r=a("jzQFI"),n=a("lHbjo");console.log("-----------------------------Galya---------------");//зберігаємо та відновлюємо кількість сторінок пагінації (totalItems) у об'єкті options
//використовуємо Notiflix для відображення сповіщень у разі помилок при роботі з localStorage.
// const showFavorite = document.querySelector(".favorite-show");
let c=(0,n.default)(),f=(0,r.dataArray).filter(e=>e.favorit).map(e=>e),u=document.querySelector(".no-recipe-content"),v=document.querySelector(".box-list"),g=document.querySelector(".favorite-cards");document.querySelector(".favorite-filter");let y=document.querySelector("#tui-pagination-container"),p=document.getElementById("tui-pagination-container");console.log(f);// налаштування початкових значень в залежносты від ширини вьюпорту
let m=window.innerWidth<768?9:12,h=1,L=window.innerWidth<768?2:3,x={totalItems:r.dataArray.length,itemsPerPage:m,visiblePages:L,page:h,centerAlign:!0};markup=f.reduce((e,t)=>(e.push(t.category),e),[]).filter((e,t,i)=>i.indexOf(e)===t).map(e=>`<li class="favorite-filter-item">${e}</li>`).join(""),c.filterFavorite.insertAdjacentHTML("beforeend",markup),c.filterFavorite.addEventListener("click",function(e){if("All categories"===e.target.textContent){console.log(e.target),w((f=(0,r.dataArray).filter(e=>e.favorit).map(e=>e)).length);return}w((f=(0,r.dataArray).filter(t=>t.favorit&&t.category===e.target.textContent).map(e=>e)).length),console.log(f)});let A=new(s&&s.__esModule?s.default:s)(p,x),b=(0,r.resizeFavorit)();// запуск пагінації з новими значеннями
// встановлення слухача пагінації, відображення її, 
//в аргументах кількість відібраних фаворитів
function w(e){h=1,A.off("afterMove",C),A.reset(e),e>m?(// ставимо слухача на пагінацію 
A.on("afterMove",C),y.classList.remove("is-hidden")):y.classList.contains("is-hidden")||y.classList.add("is-hidden"),F(h)}// перемальовка фаворитів при події на пагінації
function C(){F(h=A.getCurrentPage())}// розрахунок першої і останньої картки на цій сторінці
function F(e){let t=(e-1)*m,i=e*m-1;i>=f.length&&(i=f.length-1);let a=f.filter((e,a)=>a>=t&&a<=i);// console.log("favoriteStart", favoriteStart);
// console.log("favoriteEnd",favoriteEnd);
// console.log("------1------>", filterFavoriteCards.length); 
// console.log("------2------>", arr.length);
(0,d.renderMarkup)(a)}b>0?(u.classList.contains("visually-hidden")||u.classList.add("visually-hidden"),v.classList.contains("visually-hidden")&&v.classList.remove("visually-hidden"),g.classList.contains("visually-hidden")&&g.classList.remove("visually-hidden")):(u.classList.contains("visually-hidden")&&u.classList.remove("visually-hidden"),v.classList.contains("visually-hidden")||v.classList.add("visually-hidden"),g.classList.contains("visually-hidden")||g.classList.add("visually-hidden")),w(f.length),F(h),a("i8Q71"),a("2Z7mb")}();//# sourceMappingURL=favorite.5175e5ec.js.map

//# sourceMappingURL=favorite.5175e5ec.js.map
