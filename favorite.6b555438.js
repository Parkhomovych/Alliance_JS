var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n),n("bUb57"),n("brr8Z");var a=n("fb9GJ"),s=n("5HMam");n("goQqF");var l=n("5uEKZ"),r=n("fAYBR");//зберігаємо та відновлюємо кількість сторінок пагінації (totalItems) у об'єкті options
//використовуємо Notiflix для відображення сповіщень у разі помилок при роботі з localStorage.
// const showFavorite = document.querySelector(".favorite-show");
const o=(0,r.default)();let d=(0,l.dataArray).filter(e=>e.favorit).map(e=>e);const c=document.querySelector(".no-recipe-content"),u=document.querySelector(".box-list"),f=document.querySelector(".favorite-cards");document.querySelector(".favorite-filter");const v=document.querySelector("#tui-pagination-container"),y=document.getElementById("tui-pagination-container");// налаштування початкових значень в залежносты від ширини вьюпорту
let g=window.innerWidth<768?9:12,h=1,p=window.innerWidth<768?2:3;// обєкт налаштувань пагінації
const m={totalItems:l.dataArray.length,itemsPerPage:g,visiblePages:p,page:h,centerAlign:!0};markup=d.reduce((e,t)=>(e.push(t.category),e),[]).filter((e,t,i)=>i.indexOf(e)===t).map(e=>`<li class="favorite-filter-item">${e}</li>`).join(""),o.filterFavorite.insertAdjacentHTML("beforeend",markup),o.filterFavorite.addEventListener("click",function(e){if("All categories"===e.target.textContent){w((d=(0,l.dataArray).filter(e=>e.favorit).map(e=>e)).length);return}w((d=(0,l.dataArray).filter(t=>t.favorit&&t.category===e.target.textContent).map(e=>e)).length),console.log(d)});const L=new(a&&a.__esModule?a.default:a)(y,m),b=(0,l.resizeFavorit)();// запуск пагінації з новими значеннями
// встановлення слухача пагінації, відображення її,
//в аргументах кількість відібраних фаворитів
function w(e){h=1,L.off("afterMove",x),L.reset(e),e>g?(// ставимо слухача на пагінацію
L.on("afterMove",x),v.classList.remove("is-hidden")):v.classList.contains("is-hidden")||v.classList.add("is-hidden"),q(h)}// перемальовка фаворитів при події на пагінації
function x(){q(h=L.getCurrentPage())}// розрахунок першої і останньої картки на цій сторінці
function q(e){let t=(e-1)*g,i=e*g-1;i>=d.length&&(i=d.length-1);let n=d.filter((e,n)=>n>=t&&n<=i);// console.log("favoriteStart", favoriteStart);
// console.log("favoriteEnd",favoriteEnd);
// console.log("------1------>", filterFavoriteCards.length);
// console.log("------2------>", arr.length);
(0,s.renderMarkup)(n)}b>0?(c.classList.contains("visually-hidden")||c.classList.add("visually-hidden"),u.classList.contains("visually-hidden")&&u.classList.remove("visually-hidden"),f.classList.contains("visually-hidden")&&f.classList.remove("visually-hidden")):(c.classList.contains("visually-hidden")&&c.classList.remove("visually-hidden"),u.classList.contains("visually-hidden")||u.classList.add("visually-hidden"),f.classList.contains("visually-hidden")||f.classList.add("visually-hidden")),w(d.length),q(h);//# sourceMappingURL=favorite.6b555438.js.map

//# sourceMappingURL=favorite.6b555438.js.map
