!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n),n("i8Q71"),n("2Z7mb");var a=n("1VFfL"),l=n("6eCCw"),s=n("jzQFI"),r=n("lHbjo");//зберігаємо та відновлюємо кількість сторінок пагінації (totalItems) у об'єкті options
//використовуємо Notiflix для відображення сповіщень у разі помилок при роботі з localStorage.
// const showFavorite = document.querySelector(".favorite-show");
let d=(0,r.default)(),o=(0,s.dataArray).filter(e=>e.favorit).map(e=>e),c=document.querySelector(".no-recipe-content"),u=document.querySelector(".box-list"),f=document.querySelector(".favorite-cards"),v=document.querySelector("#tui-pagination-container"),y=document.getElementById("tui-pagination-container"),h=window.innerWidth<768?9:12,g=1,p=window.innerWidth<768?2:3,L={totalItems:s.dataArray.length,itemsPerPage:h,visiblePages:p,page:g,centerAlign:!0};// Функція створення фільтра
(function(){let e=o.reduce((e,t)=>(e.push(t.category),e),[]).filter((e,t,i)=>i.indexOf(e)===t).map(e=>`<li class="favorite-filter-item">${e}</li>`).join("");d.filterFavorite.insertAdjacentHTML("beforeend",e);// console.log(markupFilter);
})(),d.filterFavorite.addEventListener("click",//накладання фільтру в залежності від обраної категорії
function(e){(0,s.resizeFavorit)(),// console.log(filterFavoriteCards);
// createFilterFavorite();
b((o="All categories"===e.target.textContent?(0,s.dataArray).filter(e=>e.favorit).map(e=>e):(0,s.dataArray).filter(t=>t.favorit&&t.category===e.target.textContent).map(e=>e)).length)});let m=new(a&&a.__esModule?a.default:a)(y,L),w=(0,s.resizeFavorit)();// запуск пагінації з новими значеннями
// встановлення слухача пагінації, відображення її,
//в аргументах кількість відібраних фаворитів
function b(e){g=1,m.off("afterMove",x),m.reset(e),//візуалізація строки пагінації
function(e){if(e>h){v.classList.contains("visually-hidden")&&v.classList.remove("visually-hidden");return}v.classList.contains("visually-hidden")||v.classList.add("visually-hidden")}(e),e>h&&m.on("afterMove",x),A(g),F(s.dataArray.length)}// перемальовка фаворитів при події на пагінації
function x(){A(g=m.getCurrentPage())}// розрахунок першої і останньої картки на цій сторінці
function A(e){let t=(e-1)*h,i=e*h-1;i>=o.length&&(i=o.length-1);let n=o.filter((e,n)=>n>=t&&n<=i);(0,l.renderMarkup)(n)}// прибирання-додавання элементів, коли нема, або є фаворити
function F(e){// console.log(favorits);
e>0?(c.classList.contains("visually-hidden")||c.classList.add("visually-hidden"),u.classList.contains("visually-hidden")&&u.classList.remove("visually-hidden"),f.classList.contains("visually-hidden")&&f.classList.remove("visually-hidden")):(c.classList.contains("visually-hidden")&&c.classList.remove("visually-hidden"),u.classList.contains("visually-hidden")||u.classList.add("visually-hidden"),f.classList.contains("visually-hidden")||f.classList.add("visually-hidden"))}F(w),b(o.length),A(g)}();//# sourceMappingURL=favorite.7919a7d8.js.map

//# sourceMappingURL=favorite.7919a7d8.js.map
