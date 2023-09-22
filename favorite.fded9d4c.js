function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o.register("bUb57",function(e,n){t(e.exports,"onBasketBtnClick",function(){return f}),o("9B8F0");var r=o("9Eedl"),i=o("9B8F0");// ********************************************************
let a=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),l=document.querySelector(".js-menu-container"),u=document.querySelector(".basket-button");function f(){let t=i.create(`
<div class="header-modal">
  <button type="button" class="modal-close-btn js-modal-close-btn">
  </button>
  <h2 class="header-modal-title">ORDER NOW</h2>
  
  <form class="header-form" action="submit">
  <label class="header-form-label" for="name">Name</label>
  <input class="header-form-input" type="text" name="name" id="name" minlength="3" required placeholder="Bob" title="Enter your name"  />
  <label class="header-form-label" for="phone">Phone number</label>
  <input
    class="header-form-input"
    type="tel"
    name="phone"
    id="phone"
    pattern="^+380d{3}d{2}d{2}d{2}$"
    title="Enter your phone number"
    placeholder="+380111113121"
    minlength="13"
    required
  />
  <label class="header-form-label" for="email">Email</label>
  <input
    class="header-form-input"
    type="email"
    name="email"
    id="email"
    pattern=".+@globex.com"
    placeholder="test@mail.com"
    title="Enter your email" 
    required
  />
  <label class="header-form-label" for="comment">Comment </label>
  <textarea
    id="comment"
    class="header-form-input header-form-comment"
    name="comment"
    placeholder="Enter your message"
    rows="5"
  ></textarea>
    <button class="header-form-btn" type="submit">Send</button>
  </form>
</div>
`,{onShow:t=>{document.addEventListener("keydown",a)}},{onClose:t=>{document.body.style.overflow="auto",document.removeEventListener("keydown",a)}});document.body.style.overflow="hidden",t.show();let e=document.querySelector(".header-form");(0,r.default)(e);let n=document.querySelector(".js-modal-close-btn"),o=document.querySelector(".header-modal");function a(e){if("Escape"===e.code)return t.close()}o.addEventListener("submit",e=>{e.preventDefault(),document.body.style.overflow="auto",t.close()}),n.addEventListener("click",()=>{document.body.style.overflow="auto",t.close()})}a.addEventListener("click",function(){l.classList.contains("is-open")||l.classList.add("is-open")}),s.addEventListener("click",function(){l.classList.contains("is-open")&&l.classList.remove("is-open")}),// ------------------МОДАЛКА-------------------
u.addEventListener("click",f)}),o.register("9B8F0",function(t,e){t.exports=(function t(e,n,r){function o(a,s){if(!n[a]){if(!e[a]){var l=void 0;if(!s&&l)return l(a,!0);if(i)return i(a,!0);var u=Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}};e[a][0].call(f.exports,function(t){return o(e[a][1][t]||t)},f,f.exports,t,e,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o})({1:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},o=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=i,n.create=function(t,e){var n=function(t,e){var n=r('\n		<div class="basicLightbox '.concat(e.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	')),i=n.querySelector(".basicLightbox__placeholder");t.forEach(function(t){return i.appendChild(t)});var a=o(i,"IMG"),s=o(i,"VIDEO"),l=o(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw Error("Content must be a DOM element/node or string");return!0===e?Array.from(r(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw Error("Property `onClose` must be a function");return t}(e)),a=function(t){var r;return!1!==e.onClose(s)&&(r=function(){if("function"==typeof t)return t(s)},n.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===i(n)||n.parentElement.removeChild(n),r()},410),!0)};!0===e.closable&&n.addEventListener("click",function(t){t.target===n&&a()});var s={element:function(){return n},visible:function(){return i(n)},show:function(t){var r;return!1!==e.onShow(s)&&(r=function(){if("function"==typeof t)return t(s)},document.body.appendChild(n),setTimeout(function(){requestAnimationFrame(function(){return n.classList.add("basicLightbox--visible"),r()})},10),!0)},close:a};return s}},{}]},{},[1])(1)}),o.register("9Eedl",function(e,n){t(e.exports,"default",function(){return a});// Визов функції відправлення messages on backend
var r=o("iQIUW"),i=o("goQqF");function a(t){t.addEventListener("submit",function(t){t.preventDefault();let{name:e,phone:n,email:r,comment:o}=t.currentTarget.elements,a={name:e.value,phone:n.value,email:r.value,comment:o.value};(0,i.searchAddOrders)(a).then(s).catch(t=>{console.log(t)})})}function s(t){"Success"===t.data.message?(0,r.Notify).success("Your order has been accepted!"):(0,r.Notify).warning("Sorry, orders are not accepted at this time!")}}),o.register("iQIUW",function(t,n){var r,o;r=void 0!==e?e:"undefined"!=typeof window?window:t.exports,o=function(t){// COMMON: SSR check: begin
if(void 0===t&&void 0===t.document)return!1;// COMMON: Variables: end
// NOTIFY: Default Settings: begin
var e,n={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},o=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},i=function(e){return e||(e="head"),null!==t.document[e]||(o('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},a=function(e,n){// check doc head
if(!i("head"))return!1;// internal css
if(null!==e()&&!t.document.getElementById(n)){var r=t.document.createElement("style");r.id=n,r.innerHTML=e(),t.document.head.appendChild(r)}},s=function(){// variables
var t={},e=!1,n=0;// loop through each object and conduct a merge
for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);n<arguments.length;n++)!function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e&&"[object Object]"===Object.prototype.toString.call(n[r])?t[r]=s(t[r],n[r]):t[r]=n[r])}(arguments[n]);return t},l=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,c=function(o,a,u,c){// check doc body
if(!i("body"))return!1;e||d.Notify.init({});// create a backup for new settings
var p=s(!0,e,{});// check callbackOrOptions and options: begin
if("object"==typeof u&&!Array.isArray(u)||"object"==typeof c&&!Array.isArray(c)){// new options
var h={};"object"==typeof u?h=u:"object"==typeof c&&(h=c),// extend new settings with the new options
e=s(!0,e,h)}// check callbackOrOptions and options: end
// notify type
var m=e[o.toLocaleLowerCase("en")];// notify counter
f++,"string"!=typeof a&&(a="Notiflix "+o),e.plainText&&(a=l(a)),!e.plainText&&a.length>e.messageMaxLength&&(// extend settings for error massege
e=s(!0,e,{closeButton:!0,messageMaxLength:150}),// error message
a='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),a.length>e.messageMaxLength&&(a=a.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(m.fontAwesomeIconColor=m.background),e.cssAnimation||(e.cssAnimationDuration=0);// if cssAnimaion is false => duration: end
// notify wrap: begin
var g=t.document.getElementById(r.wrapID)||t.document.createElement("div");// wrap position: end
// if background overlay is true: begin
if(g.id=r.wrapID,g.style.width=e.width,g.style.zIndex=e.zindex,g.style.opacity=e.opacity,"center-center"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.top=e.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===e.position?(g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.left="auto"):"left-top"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===e.position?(g.style.left=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=e.distance,g.style.top=e.distance,g.style.left="auto",g.style.bottom="auto"),e.backOverlay){var y=t.document.getElementById(r.overlayID)||t.document.createElement("div");y.id=r.overlayID,y.style.width="100%",y.style.height="100%",y.style.position="fixed",y.style.zIndex=e.zindex-1,y.style.left=0,y.style.top=0,y.style.right=0,y.style.bottom=0,y.style.background=m.backOverlayColor||e.backOverlayColor,y.className=e.cssAnimation?"nx-with-animation":"",y.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(y)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(g);// notify wrap: end
// notify content: begin
var b=t.document.createElement("div");b.id=e.ID+"-"+f,b.className=e.className+" "+m.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof u?"nx-with-close-button":"")+" "+("function"==typeof u?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),b.style.fontSize=e.fontSize,b.style.color=m.textColor,b.style.background=m.background,b.style.borderRadius=e.borderRadius,b.style.pointerEvents="all",e.rtl&&(b.setAttribute("dir","rtl"),b.classList.add("nx-rtl-on")),// rtl: end
// font-family: begin
b.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(b.style.animationDuration=e.cssAnimationDuration+"ms");// use css animation: end
// close button element: begin
var v="";// close buttpon element: end
// use icon: begin
if(e.closeButton&&"function"!=typeof u&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+m.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon){// use font awesome
if(e.useFontAwesome)b.innerHTML='<i style="color:'+m.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+m.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+a+"</span>"+(e.closeButton?v:"");else{var x="";o===n.Success?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':o===n.Failure?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':o===n.Warning?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':o===n.Info&&(x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),b.innerHTML=x+'<span class="nx-message nx-with-icon">'+a+"</span>"+(e.closeButton?v:"")}}else b.innerHTML='<span class="nx-message">'+a+"</span>"+(e.closeButton?v:"");// use icon: end
// notify content: end
// notify append or prepend: begin
if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(r.wrapID);w.insertBefore(b,w.firstChild)}else t.document.getElementById(r.wrapID).appendChild(b);// notify append or prepend: end
// remove by timeout or click: begin
var E=t.document.getElementById(b.id);if(E){// hide notify elm and hide overlay: begin
var _,N,B=function(){E.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&g.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(_)},A=function(){if(E&&null!==E.parentNode&&E.parentNode.removeChild(E),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(N)};// if callbackOrOptions or click to close: end
// else auto remove: begin
if(e.closeButton&&"function"!=typeof u&&t.document.getElementById(b.id).querySelector("span.nx-close-button").addEventListener("click",function(){B();var t=setTimeout(function(){A(),clearTimeout(t)},e.cssAnimationDuration)}),("function"==typeof u||e.clickToClose)&&E.addEventListener("click",function(){"function"==typeof u&&u(),B();var t=setTimeout(function(){A(),clearTimeout(t)},e.cssAnimationDuration)}),!e.closeButton&&"function"!=typeof u){// auto remove: begin
var O=function(){_=setTimeout(function(){B()},e.timeout),N=setTimeout(function(){A()},e.timeout+e.cssAnimationDuration)};O(),e.pauseOnHover&&(E.addEventListener("mouseenter",function(){E.classList.add("nx-paused"),clearTimeout(_),clearTimeout(N)}),E.addEventListener("mouseleave",function(){E.classList.remove("nx-paused"),O()}));// pause auto remove: end
}// else auto remove: end
}// remove by timeout or click: end
// notify - show only the last one: begin
if(e.showOnlyTheLastOne&&f>0)for(var S=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+f+"])"),C=0;C<S.length;C++){var T=S[C];null!==T.parentNode&&T.parentNode.removeChild(T)}// notify - show only the last one: end
// extend new settings with the backup settings
e=s(!0,e,p)},d={Notify:{// Init
init:function(t){// extend options
e=s(!0,r,t),// internal css if exist
a(u,"NotiflixNotifyInternalCSS")},// Merge First Init
merge:function(t){// if initialized already
if(!e)return o("You have to initialize the Notify module before call Merge function."),!1;e=s(!0,e,t)},// Success
success:function(t,e,r){c(n.Success,t,e,r)},// Failure
failure:function(t,e,r){c(n.Failure,t,e,r)},// Warning
warning:function(t,e,r){c(n.Warning,t,e,r)},// Info
info:function(t,e,r){c(n.Info,t,e,r)}}};return"object"==typeof t.Notiflix?s(!0,t.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],function(){return o(r)}):"object"==typeof t.exports?t.exports=o(r):r.Notiflix=o(r)}),o.register("goQqF",function(e,n){t(e.exports,"searchEvents",function(){return s}),t(e.exports,"searchCategories",function(){return l}),t(e.exports,"searchRecipesPopular",function(){return u}),t(e.exports,"searchRecipesId",function(){return f}),t(e.exports,"searchIngredients",function(){return c}),t(e.exports,"searchAreas",function(){return d}),t(e.exports,"searchAddOrders",function(){return p}),t(e.exports,"searchRecipesFlexFilter",function(){return h}),o("2shzp");var r=o("bRlFp");// Головний URL
let i="https://tasty-treats-backend.p.goit.global/api",a={events:"/events",recipes:"/recipes",categories:"/categories",popular:"/recipes/popular",ingredients:"/ingredients",areas:"/areas",orders:"/orders/add"},s=async()=>{let t=await (0,r.default).get(`${i}${a.events}`);return t},l=async()=>{let t=await (0,r.default).get(`${i}${a.categories}`);return t},u=async()=>{let t=await (0,r.default).get(`${i}${a.popular}`);return t},f=async t=>{let e=await (0,r.default).get(`${i}${a.recipes}/${t}`);return e},c=async()=>{let t=await (0,r.default).get(`${i}${a.ingredients}`);return t},d=async()=>{let t=await (0,r.default).get(`${i}${a.areas}`);return t},p=async t=>{let e=await (0,r.default).post(`${i}${a.orders}`,t);return e},h=async t=>{let e=await (0,r.default).get(`${i}${a.recipes}?${t}`);return e}}),o.register("2shzp",function(e,n){t(e.exports,"default",function(){return o("bRlFp").default});var r=o("bRlFp");// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
let{Axios:i,AxiosError:a,CanceledError:s,isCancel:l,CancelToken:u,VERSION:f,all:c,Cancel:d,isAxiosError:p,spread:h,toFormData:m,AxiosHeaders:g,HttpStatusCode:y,formToJSON:b,getAdapter:v,mergeConfig:x}=r.default}),o.register("bRlFp",function(e,n){t(e.exports,"default",function(){return E});var r=o("2bBga"),i=o("djt5d"),a=o("6zSb1"),s=o("d0EKm"),l=o("hqlPG"),u=o("4bmvb"),f=o("83xK9"),c=o("2sjhC"),d=o("ksuZT"),p=o("50GW0"),h=o("aewVa"),m=o("121rJ"),g=o("av9gA"),y=o("gNhGc"),b=o("gbTL1"),v=o("enpjQ"),x=o("jd7iQ");// Create the default instance to be exported
let w=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let n=new a.default(e),o=(0,i.default)(a.default.prototype.request,n);return(// Copy axios.prototype to instance
(0,r.default).extend(o,a.default.prototype,n,{allOwnKeys:!0}),// Copy context to instance
(0,r.default).extend(o,n,null,{allOwnKeys:!0}),// Factory for creating new instances
o.create=function(n){return t((0,s.default)(e,n))},o)}(l.default);// Expose Axios class to allow class inheritance
w.Axios=a.default,// Expose Cancel & CancelToken
w.CanceledError=f.default,w.CancelToken=c.default,w.isCancel=d.default,w.VERSION=p.VERSION,w.toFormData=h.default,// Expose AxiosError class
w.AxiosError=m.default,// alias for CanceledError for backward compatibility
w.Cancel=w.CanceledError,// Expose all/spread
w.all=function(t){return Promise.all(t)},w.spread=g.default,// Expose isAxiosError
w.isAxiosError=y.default,// Expose mergeConfig
w.mergeConfig=s.default,w.AxiosHeaders=b.default,w.formToJSON=t=>(0,u.default)((0,r.default).isHTMLForm(t)?new FormData(t):t),w.getAdapter=v.default.getAdapter,w.HttpStatusCode=x.default,w.default=w;var E=w}),o.register("2bBga",function(n,r){t(n.exports,"default",function(){return F});var i,a,s=o("djt5d");// utils is a library of generic helper functions non-specific to axios
let{toString:l}=Object.prototype,{getPrototypeOf:u}=Object,f=(i=Object.create(null),t=>{let e=l.call(t);return i[e]||(i[e]=e.slice(8,-1).toLowerCase())}),c=t=>(t=t.toLowerCase(),e=>f(e)===t),d=t=>e=>typeof e===t,{isArray:p}=Array,h=d("undefined"),m=c("ArrayBuffer"),g=d("string"),y=d("function"),b=d("number"),v=t=>null!==t&&"object"==typeof t,x=t=>{if("object"!==f(t))return!1;let e=u(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},w=c("Date"),E=c("File"),_=c("Blob"),N=c("FileList"),B=c("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function A(t,e,{allOwnKeys:n=!1}={}){let r,o;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),p(t))for(r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else{let o;// Iterate over object keys
let i=n?Object.getOwnPropertyNames(t):Object.keys(t),a=i.length;for(r=0;r<a;r++)o=i[r],e.call(null,t[o],o,t)}}}function O(t,e){let n;e=e.toLowerCase();let r=Object.keys(t),o=r.length;for(;o-- >0;)if(e===(n=r[o]).toLowerCase())return n;return null}let S=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:e,C=t=>!h(t)&&t!==S,T=(a="undefined"!=typeof Uint8Array&&u(Uint8Array),t=>a&&t instanceof a),k=c("HTMLFormElement"),I=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),R=c("RegExp"),L=(t,e)=>{let n=Object.getOwnPropertyDescriptors(t),r={};A(n,(n,o)=>{let i;!1!==(i=e(n,o,t))&&(r[o]=i||n)}),Object.defineProperties(t,r)},P="abcdefghijklmnopqrstuvwxyz",M="0123456789",U={DIGIT:M,ALPHA:P,ALPHA_DIGIT:P+P.toUpperCase()+M},j=c("AsyncFunction");var F={isArray:p,isArrayBuffer:m,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&y(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||y(t.append)&&("formdata"===(e=f(t))||// detect form-data instance
"object"===e&&y(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&m(t.buffer)},isString:g,isNumber:b,isBoolean:t=>!0===t||!1===t,isObject:v,isPlainObject:x,isUndefined:h,isDate:w,isFile:E,isBlob:_,isRegExp:R,isFunction:y,isStream:t=>v(t)&&y(t.pipe),isURLSearchParams:B,isTypedArray:T,isFileList:N,forEach:A,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function t(){let{caseless:e}=C(this)&&this||{},n={},r=(r,o)=>{let i=e&&O(n,o)||o;x(n[i])&&x(r)?n[i]=t(n[i],r):x(r)?n[i]=t({},r):p(r)?n[i]=r.slice():n[i]=r};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&A(arguments[t],r);return n},extend:(t,e,n,{allOwnKeys:r}={})=>(A(e,(e,r)=>{n&&y(e)?t[r]=(0,s.default)(e,n):t[r]=e},{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,r)=>{let o,i,a;let s={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(i=(o=Object.getOwnPropertyNames(t)).length;i-- >0;)a=o[i],(!r||r(a,t,e))&&!s[a]&&(e[a]=t[a],s[a]=!0);t=!1!==n&&u(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype)return e},kindOf:f,kindOfTest:c,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;let r=t.indexOf(e,n);return -1!==r&&r===n},toArray:t=>{if(!t)return null;if(p(t))return t;let e=t.length;if(!b(e))return null;let n=Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{let n;let r=t&&t[Symbol.iterator],o=r.call(t);for(;(n=o.next())&&!n.done;){let r=n.value;e.call(t,r[0],r[1])}},matchAll:(t,e)=>{let n;let r=[];for(;null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:k,hasOwnProperty:I,hasOwnProp:I,reduceDescriptors:L,freezeMethods:t=>{L(t,(e,n)=>{// skip restricted props in strict mode
if(y(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;let r=t[n];if(y(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},toObjectSet:(t,e)=>{let n={};return(t=>{t.forEach(t=>{n[t]=!0})})(p(t)?t:String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,n){return e.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:O,global:S,isContextDefined:C,ALPHABET:U,generateString:(t=16,e=U.ALPHA_DIGIT)=>{let n="",{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&y(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),n=(t,r)=>{if(v(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;let o=p(t)?[]:{};return A(t,(t,e)=>{let i=n(t,r+1);h(i)||(o[e]=i)}),e[r]=void 0,o}}return t};return n(t,0)},isAsyncFn:j,isThenable:t=>t&&(v(t)||y(t))&&y(t.then)&&y(t.catch)}}),o.register("djt5d",function(e,n){t(e.exports,"default",function(){return r});function r(t,e){return function(){return t.apply(e,arguments)}}}),o.register("6zSb1",function(e,n){t(e.exports,"default",function(){return h});var r=o("2bBga"),i=o("2RNjJ"),a=o("5Dm7L"),s=o("eQ5d8"),l=o("d0EKm"),u=o("1ZTQa"),f=o("6zj0X"),c=o("gbTL1");let d=f.default.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class p{constructor(t){this.defaults=t,this.interceptors={request:new a.default,response:new a.default}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let n,o;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=(0,l.default)(this.defaults,e);let{transitional:i,paramsSerializer:a,headers:u}=e;void 0!==i&&(0,f.default).assertOptions(i,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),null!=a&&((0,r.default).isFunction(a)?e.paramsSerializer={serialize:a}:(0,f.default).assertOptions(a,{encode:d.function,serialize:d.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let p=u&&(0,r.default).merge(u.common,u[e.method]);u&&(0,r.default).forEach(["delete","get","head","post","put","patch","common"],t=>{delete u[t]}),e.headers=(0,c.default).concat(p,u);// filter out skipped interceptors
let h=[],m=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(m=m&&t.synchronous,h.unshift(t.fulfilled,t.rejected))});let g=[];this.interceptors.response.forEach(function(t){g.push(t.fulfilled,t.rejected)});let y=0;if(!m){let t=[(0,s.default).bind(this),void 0];for(t.unshift.apply(t,h),t.push.apply(t,g),o=t.length,n=Promise.resolve(e);y<o;)n=n.then(t[y++],t[y++]);return n}o=h.length;let b=e;for(y=0;y<o;){let t=h[y++],e=h[y++];try{b=t(b)}catch(t){e.call(this,t);break}}try{n=(0,s.default).call(this,b)}catch(t){return Promise.reject(t)}for(y=0,o=g.length;y<o;)n=n.then(g[y++],g[y++]);return n}getUri(t){t=(0,l.default)(this.defaults,t);let e=(0,u.default)(t.baseURL,t.url);return(0,i.default)(e,t.params,t.paramsSerializer)}}// Provide aliases for supported request methods
(0,r.default).forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/p.prototype[t]=function(e,n){return this.request((0,l.default)(n||{},{method:t,url:e,data:(n||{}).data}))}}),(0,r.default).forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(n,r,o){return this.request((0,l.default)(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}p.prototype[t]=e(),p.prototype[t+"Form"]=e(!0)});var h=p}),o.register("2RNjJ",function(e,n){t(e.exports,"default",function(){return s});var r=o("2bBga"),i=o("hz3Ym");/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function a(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(t,e,n){let o;/*eslint no-param-reassign:0*/if(!e)return t;let s=n&&n.encode||a,l=n&&n.serialize;if(o=l?l(e,n):(0,r.default).isURLSearchParams(e)?e.toString():new(0,i.default)(e,n).toString(s)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}}),o.register("hz3Ym",function(e,n){t(e.exports,"default",function(){return l});var r=o("aewVa");/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function i(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function a(t,e){this._pairs=[],t&&(0,r.default)(t,this,e)}let s=a.prototype;s.append=function(t,e){this._pairs.push([t,e])},s.toString=function(t){let e=t?function(e){return t.call(this,e,i)}:i;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var l=a}),o.register("aewVa",function(e,n){t(e.exports,"default",function(){return d});var r=o("2bBga"),i=o("121rJ"),a=o("1gvAv"),s=o("ihoyg").Buffer;/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function l(t){return(0,r.default).isPlainObject(t)||(0,r.default).isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function u(t){return(0,r.default).endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function f(t,e,n){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=u(t),!n&&e?"["+t+"]":t)}).join(n?".":""):e}let c=(0,r.default).toFlatObject(r.default,{},null,function(t){return/^is[A-Z]/.test(t)});var d=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(t,e,n){if(!(0,r.default).isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new(a.default||FormData),// eslint-disable-next-line no-param-reassign
n=(0,r.default).toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!(0,r.default).isUndefined(e[t])});let o=n.metaTokens,d=n.visitor||b,p=n.dots,h=n.indexes,m=n.Blob||"undefined"!=typeof Blob&&Blob,g=m&&(0,r.default).isSpecCompliantForm(e);if(!(0,r.default).isFunction(d))throw TypeError("visitor must be a function");function y(t){if(null===t)return"";if((0,r.default).isDate(t))return t.toISOString();if(!g&&(0,r.default).isBlob(t))throw new i.default("Blob is not supported. Use a Buffer instead.");return(0,r.default).isArrayBuffer(t)||(0,r.default).isTypedArray(t)?g&&"function"==typeof Blob?new Blob([t]):s.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function b(t,n,i){let a=t;if(t&&!i&&"object"==typeof t){if((0,r.default).endsWith(n,"{}"))// eslint-disable-next-line no-param-reassign
n=o?n:n.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var s;if((0,r.default).isArray(t)&&(s=t,(0,r.default).isArray(s)&&!s.some(l))||((0,r.default).isFileList(t)||(0,r.default).endsWith(n,"[]"))&&(a=(0,r.default).toArray(t)))return(// eslint-disable-next-line no-param-reassign
n=u(n),a.forEach(function(t,o){(0,r.default).isUndefined(t)||null===t||e.append(!0===h?f([n],o,p):null===h?n:n+"[]",y(t))}),!1)}}return!!l(t)||(e.append(f(i,n,p),y(t)),!1)}let v=[],x=Object.assign(c,{defaultVisitor:b,convertValue:y,isVisitable:l});if(!(0,r.default).isObject(t))throw TypeError("data must be an object");return function t(n,o){if(!(0,r.default).isUndefined(n)){if(-1!==v.indexOf(n))throw Error("Circular reference detected in "+o.join("."));v.push(n),(0,r.default).forEach(n,function(n,i){let a=!((0,r.default).isUndefined(n)||null===n)&&d.call(e,n,(0,r.default).isString(i)?i.trim():i,o,x);!0===a&&t(n,o?o.concat(i):[i])}),v.pop()}}(t),e}}),o.register("121rJ",function(e,n){t(e.exports,"default",function(){return l});var r=o("2bBga");/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function i(t,e,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}(0,r.default).inherits(i,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:(0,r.default).toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let a=i.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{s[t]={value:t}}),Object.defineProperties(i,s),Object.defineProperty(a,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
i.from=(t,e,n,o,s,l)=>{let u=Object.create(a);return(0,r.default).toFlatObject(t,u,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),i.call(u,t.message,e,n,o,s),u.cause=t,u.name=t.name,l&&Object.assign(u,l),u};var l=i}),o.register("1gvAv",function(e,n){t(e.exports,"default",function(){return r});// eslint-disable-next-line strict
var r=null}),o.register("ihoyg",function(e,n){t(e.exports,"Buffer",function(){return r},function(t){return r=t}),t(e.exports,"INSPECT_MAX_BYTES",function(){return i},function(t){return i=t});var r,i,a=o("hqZtu"),s=o("5WQj6");let l="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function u(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,f.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function f(t,e,n){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return p(t)}return c(t,e,n)}function c(t,e,n){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!f.isEncoding(e))throw TypeError("Unknown encoding: "+e);let n=0|y(t,e),r=u(n),o=r.write(t,e);return o!==n&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(r=r.slice(0,o)),r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(D(t,Uint8Array)){let e=new Uint8Array(t);return m(e.buffer,e.byteOffset,e.byteLength)}return h(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(D(t,ArrayBuffer)||t&&D(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(D(t,SharedArrayBuffer)||t&&D(t.buffer,SharedArrayBuffer)))return m(t,e,n);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return f.from(r,e,n);let o=function(t){var e;if(f.isBuffer(t)){let e=0|g(t.length),n=u(e);return 0===n.length||t.copy(n,0,0,e),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?u(0):h(t):"Buffer"===t.type&&Array.isArray(t.data)?h(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return f.from(t[Symbol.toPrimitive]("string"),e,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function d(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return d(t),u(t<0?0:0|g(t))}function h(t){let e=t.length<0?0:0|g(t.length),n=u(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function m(t,e,n){let r;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),f.prototype),r)}function g(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function y(t,e){if(f.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||D(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;// Use a for loop to avoid recursion
let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return U(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return j(t).length;default:if(o)return r?-1:U(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function b(t,e,n){let r=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(n>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,n){let r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let o="";for(let r=e;r<n;++r)o+=z[t[r]];return o}(this,e,n);case"utf8":case"utf-8":return E(this,e,n);case"ascii":return function(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}(this,e,n);case"latin1":case"binary":return function(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}(this,e,n);case"base64":var o,i;return o=e,i=n,0===o&&i===this.length?a.fromByteArray(this):a.fromByteArray(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,n){let r=t.slice(e,n),o="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<r.length-1;t+=2)o+=String.fromCharCode(r[t]+256*r[t+1]);return o}(this,e,n);default:if(r)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function v(t,e,n){let r=t[e];t[e]=t[n],t[n]=r}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function x(t,e,n,r,o){var i;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(i=n=+n// Coerce to Number.
)!=i&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return -1;n=t.length-1}else if(n<0){if(!o)return -1;n=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=f.from(e,r)),f.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:w(t,e,n,r,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):w(t,[e],n,r,o);throw TypeError("val must be string, number or Buffer")}function w(t,e,n,r,o){let i,a=1,s=t.length,l=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return -1;a=2,s/=2,l/=2,n/=2}function u(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){let r=-1;for(i=n;i<s;i++)if(u(t,i)===u(e,-1===r?0:i-r)){if(-1===r&&(r=i),i-r+1===l)return r*a}else -1!==r&&(i-=i-r),r=-1}else for(n+l>s&&(n=s-l),i=n;i>=0;i--){let n=!0;for(let r=0;r<l;r++)if(u(t,i+r)!==u(e,r)){n=!1;break}if(n)return i}return -1}function E(t,e,n){n=Math.min(t.length,n);let r=[],o=e;for(;o<n;){let e=t[o],i=null,a=e>239?4:e>223?3:e>191?2:1;if(o+a<=n){let n,r,s,l;switch(a){case 1:e<128&&(i=e);break;case 2:(192&(n=t[o+1]))==128&&(l=(31&e)<<6|63&n)>127&&(i=l);break;case 3:n=t[o+1],r=t[o+2],(192&n)==128&&(192&r)==128&&(l=(15&e)<<12|(63&n)<<6|63&r)>2047&&(l<55296||l>57343)&&(i=l);break;case 4:n=t[o+1],r=t[o+2],s=t[o+3],(192&n)==128&&(192&r)==128&&(192&s)==128&&(l=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&s)>65535&&l<1114112&&(i=l)}}null===i?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
i=65533,a=1):i>65535&&(// encode to utf16 (surrogate pair dance)
i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i),o+=a}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function _(t,e,n){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>n)throw RangeError("Trying to access beyond buffer length")}function N(t,e,n,r,o,i){if(!f.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(n+r>t.length)throw RangeError("Index out of range")}function B(t,e,n,r,o){R(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n++]=i,i>>=8,t[n++]=i,i>>=8,t[n++]=i,i>>=8,t[n++]=i;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=a,a>>=8,t[n++]=a,a>>=8,t[n++]=a,a>>=8,t[n++]=a,n}function A(t,e,n,r,o){R(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n+7]=i,i>>=8,t[n+6]=i,i>>=8,t[n+5]=i,i>>=8,t[n+4]=i;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=a,a>>=8,t[n+2]=a,a>>=8,t[n+1]=a,a>>=8,t[n]=a,n+8}function O(t,e,n,r,o,i){if(n+r>t.length||n<0)throw RangeError("Index out of range")}function S(t,e,n,r,o){return e=+e,n>>>=0,o||O(t,e,n,4,34028234663852886e22,-34028234663852886e22),s.write(t,e,n,r,23,4),n+4}function C(t,e,n,r,o){return e=+e,n>>>=0,o||O(t,e,n,8,17976931348623157e292,-17976931348623157e292),s.write(t,e,n,r,52,8),n+8}r=f,i=50,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */f.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/f.from=function(t,e,n){return c(t,e,n)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/f.alloc=function(t,e,n){return(d(t),t<=0)?u(t):void 0!==e?"string"==typeof n?u(t).fill(e,n):u(t).fill(e):u(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */f.allocUnsafe=function(t){return p(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */f.allocUnsafeSlow=function(t){return p(t)},f.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==f.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},f.compare=function(t,e){if(D(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),D(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(t)||!f.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){let n;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);if(void 0===e)for(n=0,e=0;n<t.length;++n)e+=t[n].length;let r=f.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){let e=t[n];if(D(e,Uint8Array))o+e.length>r.length?(f.isBuffer(e)||(e=f.from(e)),e.copy(r,o)):Uint8Array.prototype.set.call(r,e,o);else if(f.isBuffer(e))e.copy(r,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=e.length}return r},f.byteLength=y,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
f.prototype._isBuffer=!0,f.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)v(this,e,e+1);return this},f.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)v(this,e,e+3),v(this,e+1,e+2);return this},f.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)v(this,e,e+7),v(this,e+1,e+6),v(this,e+2,e+5),v(this,e+3,e+4);return this},f.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?E(this,0,t):b.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(t){if(!f.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){let t="",e=i;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},l&&(f.prototype[l]=f.prototype.inspect),f.prototype.compare=function(t,e,n,r,o){if(D(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return -1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,o>>>=0,this===t)return 0;let i=o-r,a=n-e,s=Math.min(i,a),l=this.slice(r,o),u=t.slice(e,n);for(let t=0;t<s;++t)if(l[t]!==u[t]){i=l[t],a=u[t];break}return i<a?-1:a<i?1:0},f.prototype.includes=function(t,e,n){return -1!==this.indexOf(t,e,n)},f.prototype.indexOf=function(t,e,n){return x(this,t,e,n,!0)},f.prototype.lastIndexOf=function(t,e,n){return x(this,t,e,n,!1)},f.prototype.write=function(t,e,n,r){var o,i,a,s,l,u,f,c;// Buffer#write(string)
if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-e;if((void 0===n||n>d)&&(n=d),t.length>0&&(n<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let p=!1;for(;;)switch(r){case"hex":return function(t,e,n,r){let o;n=Number(n)||0;let i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;let a=e.length;for(r>a/2&&(r=a/2),o=0;o<r;++o){let r=parseInt(e.substr(2*o,2),16);if(r!=r)break;t[n+o]=r}return o}(this,t,e,n);case"utf8":case"utf-8":return o=e,i=n,F(U(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return a=e,s=n,F(function(t){let e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(t),this,a,s);case"base64":// Warning: maxLength not taken into account in base64Write
return l=e,u=n,F(j(t),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f=e,c=n,F(function(t,e){let n,r;let o=[];for(let i=0;i<t.length&&!((e-=2)<0);++i)r=(n=t.charCodeAt(i))>>8,o.push(n%256),o.push(r);return o}(t,this.length-f),this,f,c);default:if(p)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),p=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.slice=function(t,e){let n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);let r=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(r,f.prototype),r)},f.prototype.readUintLE=f.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||_(t,e,this.length);let r=this[t],o=1,i=0;for(;++i<e&&(o*=256);)r+=this[t+i]*o;return r},f.prototype.readUintBE=f.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||_(t,e,this.length);let r=this[t+--e],o=1;for(;e>0&&(o*=256);)r+=this[t+--e]*o;return r},f.prototype.readUint8=f.prototype.readUInt8=function(t,e){return t>>>=0,e||_(t,1,this.length),this[t]},f.prototype.readUint16LE=f.prototype.readUInt16LE=function(t,e){return t>>>=0,e||_(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUint16BE=f.prototype.readUInt16BE=function(t,e){return t>>>=0,e||_(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUint32LE=f.prototype.readUInt32LE=function(t,e){return t>>>=0,e||_(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUint32BE=f.prototype.readUInt32BE=function(t,e){return t>>>=0,e||_(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readBigUInt64LE=q(function(t){L(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&P(t,this.length-8);let r=e+256*this[++t]+65536*this[++t]+16777216*this[++t],o=this[++t]+256*this[++t]+65536*this[++t]+16777216*n;return BigInt(r)+(BigInt(o)<<BigInt(32))}),f.prototype.readBigUInt64BE=q(function(t){L(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&P(t,this.length-8);let r=16777216*e+65536*this[++t]+256*this[++t]+this[++t],o=16777216*this[++t]+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(o)}),f.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||_(t,e,this.length);let r=this[t],o=1,i=0;for(;++i<e&&(o*=256);)r+=this[t+i]*o;return r>=(o*=128)&&(r-=Math.pow(2,8*e)),r},f.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||_(t,e,this.length);let r=e,o=1,i=this[t+--r];for(;r>0&&(o*=256);)i+=this[t+--r]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},f.prototype.readInt8=function(t,e){return(t>>>=0,e||_(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},f.prototype.readInt16LE=function(t,e){t>>>=0,e||_(t,2,this.length);let n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},f.prototype.readInt16BE=function(t,e){t>>>=0,e||_(t,2,this.length);let n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},f.prototype.readInt32LE=function(t,e){return t>>>=0,e||_(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return t>>>=0,e||_(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readBigInt64LE=q(function(t){L(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&P(t,this.length-8);let r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24// Overflow
);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),f.prototype.readBigInt64BE=q(function(t){L(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&P(t,this.length-8);let r=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+n)}),f.prototype.readFloatLE=function(t,e){return t>>>=0,e||_(t,4,this.length),s.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return t>>>=0,e||_(t,4,this.length),s.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return t>>>=0,e||_(t,8,this.length),s.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return t>>>=0,e||_(t,8,this.length),s.read(this,t,!1,52,8)},f.prototype.writeUintLE=f.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;N(this,t,e,n,r,0)}let o=1,i=0;for(this[e]=255&t;++i<n&&(o*=256);)this[e+i]=t/o&255;return e+n},f.prototype.writeUintBE=f.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;N(this,t,e,n,r,0)}let o=n-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+n},f.prototype.writeUint8=f.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||N(this,t,e,1,255,0),this[e]=255&t,e+1},f.prototype.writeUint16LE=f.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||N(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeUint16BE=f.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||N(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeUint32LE=f.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||N(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},f.prototype.writeUint32BE=f.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||N(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeBigUInt64LE=q(function(t,e=0){return B(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),f.prototype.writeBigUInt64BE=q(function(t,e=0){return A(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),f.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){let r=Math.pow(2,8*n-1);N(this,t,e,n,r-1,-r)}let o=0,i=1,a=0;for(this[e]=255&t;++o<n&&(i*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/i>>0)-a&255;return e+n},f.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){let r=Math.pow(2,8*n-1);N(this,t,e,n,r-1,-r)}let o=n-1,i=1,a=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/i>>0)-a&255;return e+n},f.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||N(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||N(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||N(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||N(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},f.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||N(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeBigInt64LE=q(function(t,e=0){return B(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),f.prototype.writeBigInt64BE=q(function(t,e=0){return A(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),f.prototype.writeFloatLE=function(t,e,n){return S(this,t,e,!0,n)},f.prototype.writeFloatBE=function(t,e,n){return S(this,t,e,!1,n)},f.prototype.writeDoubleLE=function(t,e,n){return C(this,t,e,!0,n)},f.prototype.writeDoubleBE=function(t,e,n){return C(this,t,e,!1,n)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
f.prototype.copy=function(t,e,n,r){if(!f.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);let o=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
f.prototype.fill=function(t,e,n,r){let o;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!f.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===t.length){let e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<n)throw RangeError("Out of range index");if(n<=e)return this;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{let i=f.isBuffer(t)?t:f.from(t,r),a=i.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<n-e;++o)this[o+e]=i[o%a]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let T={};function k(t,e,n){T[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function I(t){let e="",n=t.length,r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function R(t,e,n,r,o,i){if(t>n||t<e){let r;let o="bigint"==typeof e?"n":"";throw r=i>3?0===e||e===BigInt(0)?`>= 0${o} and < 2${o} ** ${(i+1)*8}${o}`:`>= -(2${o} ** ${(i+1)*8-1}${o}) and < 2 ** ${(i+1)*8-1}${o}`:`>= ${e}${o} and <= ${n}${o}`,new T.ERR_OUT_OF_RANGE("value",r,t)}L(o,"offset"),(void 0===r[o]||void 0===r[o+i])&&P(o,r.length-(i+1))}function L(t,e){if("number"!=typeof t)throw new T.ERR_INVALID_ARG_TYPE(e,"number",t)}function P(t,e,n){if(Math.floor(t)!==t)throw L(t,n),new T.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new T.ERR_BUFFER_OUT_OF_BOUNDS;throw new T.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}k("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),k("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),k("ERR_OUT_OF_RANGE",function(t,e,n){let r=`The value of "${t}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>4294967296?o=I(String(n)):"bigint"==typeof n&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=I(o)),o+="n"),r+=` It must be ${e}. Received ${o}`},RangeError);// HELPER FUNCTIONS
// ================
let M=/[^+/0-9A-Za-z-_]/g;function U(t,e){let n;e=e||1/0;let r=t.length,o=null,i=[];for(let a=0;a<r;++a){// is surrogate component
if((n=t.charCodeAt(a))>55295&&n<57344){// last char was a lead
if(!o){// no lead yet
if(n>56319||a+1===r){// unexpected trail
(e-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=n;continue}// 2 leads in a row
if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}// valid surrogate pair
n=(o-55296<<10|n-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return i}function j(t){return a.toByteArray(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(M,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function F(t,e,n,r){let o;for(o=0;o<r&&!(o+n>=e.length)&&!(o>=t.length);++o)e[o+n]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function D(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let z=function(){let t="0123456789abcdef",e=Array(256);for(let n=0;n<16;++n){let r=16*n;for(let o=0;o<16;++o)e[r+o]=t[n]+t[o]}return e}();// Return not function with Error if BigInt not supported
function q(t){return"undefined"==typeof BigInt?$:t}function $(){throw Error("BigInt not supported")}}),o.register("hqZtu",function(e,n){t(e.exports,"toByteArray",function(){return r},function(t){return r=t}),t(e.exports,"fromByteArray",function(){return o},function(t){return o=t}),r=function(t){var e,n,r=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var n=t.indexOf("=");-1===n&&(n=e);var r=n===e?0:4-n%4;return[n,r]}(t),o=r[0],i=r[1],l=new s((o+i)*3/4-i),u=0,f=i>0?o-4:o;for(n=0;n<f;n+=4)e=a[t.charCodeAt(n)]<<18|a[t.charCodeAt(n+1)]<<12|a[t.charCodeAt(n+2)]<<6|a[t.charCodeAt(n+3)],l[u++]=e>>16&255,l[u++]=e>>8&255,l[u++]=255&e;return 2===i&&(e=a[t.charCodeAt(n)]<<2|a[t.charCodeAt(n+1)]>>4,l[u++]=255&e),1===i&&(e=a[t.charCodeAt(n)]<<10|a[t.charCodeAt(n+1)]<<4|a[t.charCodeAt(n+2)]>>2,l[u++]=e>>8&255,l[u++]=255&e),l},o=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,n=t.length,r=n%3// if we have 1 byte left, pad 2 bytes
,o=[],a=0,s=n-r;a<s;a+=16383// must be multiple of 3
)o.push(function(t,e,n){for(var r,o=[],a=e;a<n;a+=3)o.push(i[(r=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]))>>18&63]+i[r>>12&63]+i[r>>6&63]+i[63&r]);return o.join("")}(t,a,a+16383>s?s:a+16383));return 1===r?o.push(i[(e=t[n-1])>>2]+i[e<<4&63]+"=="):2===r&&o.push(i[(e=(t[n-2]<<8)+t[n-1])>>10]+i[e>>4&63]+i[e<<2&63]+"="),o.join("")};for(var r,o,i=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,f=l.length;u<f;++u)i[u]=l[u],a[l.charCodeAt(u)]=u;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63}),o.register("5WQj6",function(e,n){var r,o;t(e.exports,"read",function(){return r},function(t){return r=t}),t(e.exports,"write",function(){return o},function(t){return o=t}),r=function(t,e,n,r,o){var i,a,s=8*o-r-1,l=(1<<s)-1,u=l>>1,f=-7,c=n?o-1:0,d=n?-1:1,p=t[e+c];for(c+=d,i=p&(1<<-f)-1,p>>=-f,f+=s;f>0;i=256*i+t[e+c],c+=d,f-=8);for(a=i&(1<<-f)-1,i>>=-f,f+=r;f>0;a=256*a+t[e+c],c+=d,f-=8);if(0===i)i=1-u;else{if(i===l)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,r),i-=u}return(p?-1:1)*a*Math.pow(2,i-r)},o=function(t,e,n,r,o,i){var a,s,l,u=8*i-o-1,f=(1<<u)-1,c=f>>1,d=23===o?5960464477539062e-23:0,p=r?0:i-1,h=r?1:-1,m=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,a=f):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?e+=d/l:e+=d*Math.pow(2,1-c),e*l>=2&&(a++,l/=2),a+c>=f?(s=0,a=f):a+c>=1?(s=(e*l-1)*Math.pow(2,o),a+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,o),a=0));o>=8;t[n+p]=255&s,p+=h,s/=256,o-=8);for(a=a<<o|s,u+=o;u>0;t[n+p]=255&a,p+=h,a/=256,u-=8);t[n+p-h]|=128*m}}),o.register("5Dm7L",function(e,n){t(e.exports,"default",function(){return i});var r=o("2bBga"),i=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(t){this.handlers[t]&&(this.handlers[t]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(t){(0,r.default).forEach(this.handlers,function(e){null!==e&&t(e)})}}}),o.register("eQ5d8",function(e,n){t(e.exports,"default",function(){return c});var r=o("bhEpd"),i=o("ksuZT"),a=o("hqlPG"),s=o("83xK9"),l=o("gbTL1"),u=o("enpjQ");/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function f(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new s.default(null,t)}function c(t){f(t),t.headers=(0,l.default).from(t.headers),// Transform request data
t.data=(0,r.default).call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=(0,u.default).getAdapter(t.adapter||a.default.adapter);return e(t).then(function(e){return f(t),// Transform response data
e.data=(0,r.default).call(t,t.transformResponse,e),e.headers=(0,l.default).from(e.headers),e},function(e){return!(0,i.default)(e)&&(f(t),e&&e.response&&(e.response.data=(0,r.default).call(t,t.transformResponse,e.response),e.response.headers=(0,l.default).from(e.response.headers))),Promise.reject(e)})}}),o.register("bhEpd",function(e,n){t(e.exports,"default",function(){return s});var r=o("2bBga"),i=o("hqlPG"),a=o("gbTL1");function s(t,e){let n=this||i.default,o=e||n,s=(0,a.default).from(o.headers),l=o.data;return(0,r.default).forEach(t,function(t){l=t.call(n,l,s.normalize(),e?e.status:void 0)}),s.normalize(),l}}),o.register("hqlPG",function(e,n){t(e.exports,"default",function(){return d});var r=o("2bBga"),i=o("121rJ"),a=o("2wfLM"),s=o("aewVa"),l=o("5tcKT"),u=o("hdo0R"),f=o("4bmvb");let c={transitional:a.default,adapter:u.default.isNode?"http":"xhr",transformRequest:[function(t,e){let n;let o=e.getContentType()||"",i=o.indexOf("application/json")>-1,a=(0,r.default).isObject(t);a&&(0,r.default).isHTMLForm(t)&&(t=new FormData(t));let u=(0,r.default).isFormData(t);if(u)return i&&i?JSON.stringify((0,f.default)(t)):t;if((0,r.default).isArrayBuffer(t)||(0,r.default).isBuffer(t)||(0,r.default).isStream(t)||(0,r.default).isFile(t)||(0,r.default).isBlob(t))return t;if((0,r.default).isArrayBufferView(t))return t.buffer;if((0,r.default).isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(a){if(o.indexOf("application/x-www-form-urlencoded")>-1)return(0,l.default)(t,this.formSerializer).toString();if((n=(0,r.default).isFileList(t))||o.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return(0,s.default)(n?{"files[]":t}:t,e&&new e,this.formSerializer)}}return a||i?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,n){if((0,r.default).isString(t))try{return(0,JSON.parse)(t),(0,r.default).trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||c.transitional,n=e&&e.forcedJSONParsing,o="json"===this.responseType;if(t&&(0,r.default).isString(t)&&(n&&!this.responseType||o)){let n=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!n&&o){if("SyntaxError"===t.name)throw(0,i.default).from(t,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:u.default.classes.FormData,Blob:u.default.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};(0,r.default).forEach(["delete","get","head","post","put","patch"],t=>{c.headers[t]={}});var d=c}),o.register("2wfLM",function(e,n){t(e.exports,"default",function(){return r});var r={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}}),o.register("5tcKT",function(e,n){t(e.exports,"default",function(){return s});var r=o("2bBga"),i=o("aewVa"),a=o("hdo0R");function s(t,e){return(0,i.default)(t,new a.default.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,o){return a.default.isNode&&(0,r.default).isBuffer(t)?(this.append(e,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}}),o.register("hdo0R",function(e,n){let r;t(e.exports,"default",function(){return f});var i=o("9matH"),a=o("eN04z"),s=o("2J1oD");/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */let l=("undefined"==typeof navigator||"ReactNative"!==(r=navigator.product)&&"NativeScript"!==r&&"NS"!==r)&&"undefined"!=typeof window&&"undefined"!=typeof document,u="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var f={isBrowser:!0,classes:{URLSearchParams:i.default,FormData:a.default,Blob:s.default},isStandardBrowserEnv:l,isStandardBrowserWebWorkerEnv:u,protocols:["http","https","file","blob","url","data"]}}),o.register("9matH",function(e,n){t(e.exports,"default",function(){return i});var r=o("hz3Ym"),i="undefined"!=typeof URLSearchParams?URLSearchParams:r.default}),o.register("eN04z",function(e,n){t(e.exports,"default",function(){return r});var r="undefined"!=typeof FormData?FormData:null}),o.register("2J1oD",function(e,n){t(e.exports,"default",function(){return r});var r="undefined"!=typeof Blob?Blob:null}),o.register("4bmvb",function(e,n){t(e.exports,"default",function(){return i});var r=o("2bBga"),i=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if((0,r.default).isFormData(t)&&(0,r.default).isFunction(t.entries)){let e={};return(0,r.default).forEachEntry(t,(t,n)=>{!function t(e,n,o,i){let a=e[i++],s=Number.isFinite(+a),l=i>=e.length;if(a=!a&&(0,r.default).isArray(o)?o.length:a,l)return(0,r.default).hasOwnProp(o,a)?o[a]=[o[a],n]:o[a]=n,!s;o[a]&&(0,r.default).isObject(o[a])||(o[a]=[]);let u=t(e,n,o[a],i);return u&&(0,r.default).isArray(o[a])&&(o[a]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,n;let r={},o=Object.keys(t),i=o.length;for(e=0;e<i;e++)r[n=o[e]]=t[n];return r}(o[a])),!s}((0,r.default).matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),n,e,0)}),e}return null}}),o.register("gbTL1",function(e,n){t(e.exports,"default",function(){return d});var r=o("2bBga"),i=o("9cPEm");let a=Symbol("internals");function s(t){return t&&String(t).trim().toLowerCase()}function l(t){return!1===t||null==t?t:(0,r.default).isArray(t)?t.map(l):String(t)}let u=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function f(t,e,n,o,i){if((0,r.default).isFunction(o))return o.call(this,e,n);if(i&&(e=n),(0,r.default).isString(e)){if((0,r.default).isString(o))return -1!==e.indexOf(o);if((0,r.default).isRegExp(o))return o.test(e)}}class c{constructor(t){t&&this.set(t)}set(t,e,n){let o=this;function a(t,e,n){let i=s(e);if(!i)throw Error("header name must be a non-empty string");let a=(0,r.default).findKey(o,i);a&&void 0!==o[a]&&!0!==n&&(void 0!==n||!1===o[a])||(o[a||e]=l(t))}let f=(t,e)=>(0,r.default).forEach(t,(t,n)=>a(t,n,e));return(0,r.default).isPlainObject(t)||t instanceof this.constructor?f(t,e):(0,r.default).isString(t)&&(t=t.trim())&&!u(t)?f((0,i.default)(t),e):null!=t&&a(e,t,n),this}get(t,e){if(t=s(t)){let n=(0,r.default).findKey(this,t);if(n){let t=this[n];if(!e)return t;if(!0===e)return function(t){let e;let n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=r.exec(t);)n[e[1]]=e[2];return n}(t);if((0,r.default).isFunction(e))return e.call(this,t,n);if((0,r.default).isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=s(t)){let n=(0,r.default).findKey(this,t);return!!(n&&void 0!==this[n]&&(!e||f(this,this[n],n,e)))}return!1}delete(t,e){let n=this,o=!1;function i(t){if(t=s(t)){let i=(0,r.default).findKey(n,t);i&&(!e||f(n,n[i],i,e))&&(delete n[i],o=!0)}}return(0,r.default).isArray(t)?t.forEach(i):i(t),o}clear(t){let e=Object.keys(this),n=e.length,r=!1;for(;n--;){let o=e[n];(!t||f(this,this[o],o,t,!0))&&(delete this[o],r=!0)}return r}normalize(t){let e=this,n={};return(0,r.default).forEach(this,(o,i)=>{let a=(0,r.default).findKey(n,i);if(a){e[a]=l(o),delete e[i];return}let s=t?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,n)=>e.toUpperCase()+n):String(i).trim();s!==i&&delete e[i],e[s]=l(o),n[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return(0,r.default).forEach(this,(n,o)=>{null!=n&&!1!==n&&(e[o]=t&&(0,r.default).isArray(n)?n.join(", "):n)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let n=new this(t);return e.forEach(t=>n.set(t)),n}static accessor(t){let e=this[a]=this[a]={accessors:{}},n=e.accessors,o=this.prototype;function i(t){let e=s(t);n[e]||(function(t,e){let n=(0,r.default).toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(t,n,o){return this[r].call(this,e,t,n,o)},configurable:!0})})}(o,t),n[e]=!0)}return(0,r.default).isArray(t)?t.forEach(i):i(t),this}}c.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),// reserved names hotfix
(0,r.default).reduceDescriptors(c.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[n]=t}}}),(0,r.default).freezeMethods(c);var d=c}),o.register("9cPEm",function(e,n){t(e.exports,"default",function(){return a});var r=o("2bBga");// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
let i=(0,r.default).toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */a=t=>{let e,n,r;let o={};return t&&t.split("\n").forEach(function(t){r=t.indexOf(":"),e=t.substring(0,r).trim().toLowerCase(),n=t.substring(r+1).trim(),!e||o[e]&&i[e]||("set-cookie"===e?o[e]?o[e].push(n):o[e]=[n]:o[e]=o[e]?o[e]+", "+n:n)}),o}}),o.register("ksuZT",function(e,n){t(e.exports,"default",function(){return r});function r(t){return!!(t&&t.__CANCEL__)}}),o.register("83xK9",function(e,n){t(e.exports,"default",function(){return a});var r=o("121rJ");/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function i(t,e,n){// eslint-disable-next-line no-eq-null,eqeqeq
(0,r.default).call(this,null==t?"canceled":t,r.default.ERR_CANCELED,e,n),this.name="CanceledError"}(0,o("2bBga").default).inherits(i,r.default,{__CANCEL__:!0});var a=i}),o.register("enpjQ",function(e,n){t(e.exports,"default",function(){return u});var r=o("2bBga"),i=o("1gvAv"),a=o("9VVcb"),s=o("121rJ");let l={http:i.default,xhr:a.default};(0,r.default).forEach(l,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});var u={getAdapter:t=>{let e,n;t=(0,r.default).isArray(t)?t:[t];let{length:o}=t;for(let i=0;i<o&&(e=t[i],!(n=(0,r.default).isString(e)?l[e.toLowerCase()]:e));i++);if(!n){if(!1===n)throw new s.default(`Adapter ${e} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error((0,r.default).hasOwnProp(l,e)?`Adapter '${e}' is not available in the build`:`Unknown adapter '${e}'`)}if(!(0,r.default).isFunction(n))throw TypeError("adapter is not a function");return n},adapters:l}}),o.register("9VVcb",function(e,n){t(e.exports,"default",function(){return v});var r=o("2bBga"),i=o("1TQad"),a=o("kTwUV"),s=o("2RNjJ"),l=o("1ZTQa"),u=o("g3yOT"),f=o("2wfLM"),c=o("121rJ"),d=o("83xK9"),p=o("8wMQb"),h=o("hdo0R"),m=o("gbTL1"),g=o("5OiBb");function y(t,e){let n=0,r=(0,g.default)(50,250);return o=>{let i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,l=r(s),u=i<=a;n=i;let f={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0,event:o};f[e?"download":"upload"]=!0,t(f)}}let b="undefined"!=typeof XMLHttpRequest;var v=b&&function(t){return new Promise(function(e,n){let o,g=t.data,b=(0,m.default).from(t.headers).normalize(),v=t.responseType;function x(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}(0,r.default).isFormData(g)&&(h.default.isStandardBrowserEnv||h.default.isStandardBrowserWebWorkerEnv?b.setContentType(!1):b.setContentType("multipart/form-data;",!1));let w=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";b.set("Authorization","Basic "+btoa(e+":"+n))}let E=(0,l.default)(t.baseURL,t.url);function _(){if(!w)return;// Prepare the response
let r=(0,m.default).from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),o=v&&"text"!==v&&"json"!==v?w.response:w.responseText,a={data:o,status:w.status,statusText:w.statusText,headers:r,config:t,request:w};(0,i.default)(function(t){e(t),x()},function(t){n(t),x()},a),// Clean up request
w=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(w.open(t.method.toUpperCase(),(0,s.default)(E,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
w.timeout=t.timeout,"onloadend"in w?w.onloadend=_:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(_)},// Handle browser request cancellation (as opposed to a manual cancellation)
w.onabort=function(){w&&(n(new c.default("Request aborted",c.default.ECONNABORTED,t,w)),// Clean up request
w=null)},// Handle low level network errors
w.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
n(new c.default("Network Error",c.default.ERR_NETWORK,t,w)),// Clean up request
w=null},// Handle timeout
w.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||f.default;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new c.default(e,r.clarifyTimeoutError?c.default.ETIMEDOUT:c.default.ECONNABORTED,t,w)),// Clean up request
w=null},h.default.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||(0,u.default)(E))&&t.xsrfCookieName&&(0,a.default).read(t.xsrfCookieName);e&&b.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===g&&b.setContentType(null),"setRequestHeader"in w&&(0,r.default).forEach(b.toJSON(),function(t,e){w.setRequestHeader(e,t)}),(0,r.default).isUndefined(t.withCredentials)||(w.withCredentials=!!t.withCredentials),v&&"json"!==v&&(w.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&w.addEventListener("progress",y(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",y(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
o=e=>{w&&(n(!e||e.type?new d.default(null,t,w):e),w.abort(),w=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));let N=(0,p.default)(E);if(N&&-1===(0,h.default).protocols.indexOf(N)){n(new c.default("Unsupported protocol "+N+":",c.default.ERR_BAD_REQUEST,t));return}// Send the request
w.send(g||null)})}}),o.register("1TQad",function(e,n){t(e.exports,"default",function(){return i});var r=o("121rJ");function i(t,e,n){let o=n.config.validateStatus;!n.status||!o||o(n.status)?t(n):e(new r.default("Request failed with status code "+n.status,[r.default.ERR_BAD_REQUEST,r.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}}),o.register("kTwUV",function(e,n){t(e.exports,"default",function(){return i});var r=o("2bBga"),i=o("hdo0R").default.isStandardBrowserEnv?{write:function(t,e,n,o,i,a){let s=[];s.push(t+"="+encodeURIComponent(e)),(0,r.default).isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),(0,r.default).isString(o)&&s.push("path="+o),(0,r.default).isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}),o.register("1ZTQa",function(e,n){t(e.exports,"default",function(){return a});var r=o("iUwU6"),i=o("91vFE");function a(t,e){return t&&!(0,r.default)(e)?(0,i.default)(t,e):e}}),o.register("iUwU6",function(e,n){t(e.exports,"default",function(){return r});function r(t){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}}),o.register("91vFE",function(e,n){t(e.exports,"default",function(){return r});function r(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}}),o.register("g3yOT",function(e,n){t(e.exports,"default",function(){return i});var r=o("2bBga"),i=o("hdo0R").default.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function o(t){let r=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=o(window.location.href),function(e){let n=(0,r.default).isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}}),o.register("8wMQb",function(e,n){t(e.exports,"default",function(){return r});function r(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}}),o.register("5OiBb",function(e,n){t(e.exports,"default",function(){return r});var r=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let n;t=t||10;let r=Array(t),o=Array(t),i=0,a=0;return e=void 0!==e?e:1e3,function(s){let l=Date.now(),u=o[a];n||(n=l),r[i]=s,o[i]=l;let f=a,c=0;for(;f!==i;)c+=r[f++],f%=t;if((i=(i+1)%t)===a&&(a=(a+1)%t),l-n<e)return;let d=u&&l-u;return d?Math.round(1e3*c/d):void 0}}}),o.register("d0EKm",function(e,n){t(e.exports,"default",function(){return s});var r=o("2bBga"),i=o("gbTL1");let a=t=>t instanceof i.default?t.toJSON():t;function s(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let n={};function o(t,e,n){return(0,r.default).isPlainObject(t)&&(0,r.default).isPlainObject(e)?(0,r.default).merge.call({caseless:n},t,e):(0,r.default).isPlainObject(e)?(0,r.default).merge({},e):(0,r.default).isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function i(t,e,n){return(0,r.default).isUndefined(e)?(0,r.default).isUndefined(t)?void 0:o(void 0,t,n):o(t,e,n)}// eslint-disable-next-line consistent-return
function s(t,e){if(!(0,r.default).isUndefined(e))return o(void 0,e)}// eslint-disable-next-line consistent-return
function l(t,e){return(0,r.default).isUndefined(e)?(0,r.default).isUndefined(t)?void 0:o(void 0,t):o(void 0,e)}// eslint-disable-next-line consistent-return
function u(n,r,i){return i in e?o(n,r):i in t?o(void 0,n):void 0}let f={url:s,method:s,data:s,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(t,e)=>i(a(t),a(e),!0)};return(0,r.default).forEach(Object.keys(Object.assign({},t,e)),function(o){let a=f[o]||i,s=a(t[o],e[o],o);(0,r.default).isUndefined(s)&&a!==u||(n[o]=s)}),n}}),o.register("6zj0X",function(e,n){t(e.exports,"default",function(){return l});var r=o("50GW0"),i=o("121rJ");let a={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{a[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});let s={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */a.transitional=function(t,e,n){function o(t,e){return"[Axios v"+r.VERSION+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}// eslint-disable-next-line func-names
return(n,r,a)=>{if(!1===t)throw new i.default(o(r," has been removed"+(e?" in "+e:"")),i.default.ERR_DEPRECATED);return e&&!s[r]&&(s[r]=!0,// eslint-disable-next-line no-console
console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,a)}};var l={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,n){if("object"!=typeof t)throw new i.default("options must be an object",i.default.ERR_BAD_OPTION_VALUE);let r=Object.keys(t),o=r.length;for(;o-- >0;){let a=r[o],s=e[a];if(s){let e=t[a],n=void 0===e||s(e,a,t);if(!0!==n)throw new i.default("option "+a+" must be "+n,i.default.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new i.default("Unknown option "+a,i.default.ERR_BAD_OPTION)}},validators:a}}),o.register("50GW0",function(e,n){t(e.exports,"VERSION",function(){return r});let r="1.5.0"}),o.register("2sjhC",function(e,n){t(e.exports,"default",function(){return a});var r=o("83xK9");/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class i{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let n=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let r=new Promise(t=>{n.subscribe(t),e=t}).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t(function(t,o,i){n.reason||(n.reason=new r.default(t,o,i),e(n.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new i(function(e){t=e});return{token:e,cancel:t}}}var a=i}),o.register("av9gA",function(e,n){t(e.exports,"default",function(){return r});function r(t){return function(e){return t.apply(null,e)}}}),o.register("gNhGc",function(e,n){t(e.exports,"default",function(){return i});var r=o("2bBga");function i(t){return(0,r.default).isObject(t)&&!0===t.isAxiosError}}),o.register("jd7iQ",function(e,n){t(e.exports,"default",function(){return o});let r={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(r).forEach(([t,e])=>{r[e]=t});var o=r}),o.register("brr8Z",function(t,e){let n=document.querySelector(".switcher-check"),r=document.querySelector(".mob-switcher-check"),o=document.querySelector("body"),i={LIGHT:"light-theme ",DARK:"dark-theme"};n.addEventListener("change",()=>{let t=o.classList.contains(i.DARK);r.checked=n.checked,t?o.classList.remove(i.DARK):o.classList.add(i.DARK),localStorage.setItem("theme",t?i.LIGHT:i.DARK)}),// ---------------Mob-Switcher------------------------------
r.addEventListener("change",()=>{let t=o.classList.contains(i.DARK);n.checked=r.checked,t?o.classList.remove(i.DARK):o.classList.add(i.DARK),localStorage.setItem("theme",t?i.LIGHT:i.DARK)})}),o.register("5HMam",function(e,n){t(e.exports,"openRecipeModalPopular",function(){return c}),t(e.exports,"renderMarkup",function(){return f}),// Імпорт для модалки
o("9B8F0");var r=o("goQqF"),i=o("4xLKq"),a=o("5uEKZ"),s=o("9B8F0");let l=document.querySelector(".card-list"),u=document.querySelector("#card-list");function f(t){l.innerHTML=((0,a.resizeFavorit)(),t.map(t=>`
    <li class="card-item">
    <div class="photo-card">
        <div class="photo-thumb">
          <img class="photo-img" src="${t.thumb}" alt="${t.title}" loading="lazy"/>
        </div>
        <button type="button" class="btn-favorite" >
                <svg class="icon-favorite${(0,a.classFavorit)(t._id)}" data-set="${t._id}" viewBox="0 0 32 32">
<path d="M15.992 6.848c-2.666-3.117-7.111-3.955-10.451-1.101s-3.81 7.625-1.187 11c2.181 2.806 8.781 8.725 10.944 10.641 0.242 0.214 0.363 0.321 0.504 0.364 0.123 0.037 0.258 0.037 0.381 0 0.141-0.042 0.262-0.149 0.504-0.364 2.163-1.916 8.763-7.834 10.944-10.641 2.623-3.375 2.21-8.177-1.187-11.001s-7.785-2.015-10.451 1.101z"></path>
                </svg>
        </button>
        <div class="info">
            <p class="info-title">
                  ${t.title}
            </p>
            <p class="info-text">
                ${t.description}
            </p>
            <div class="info-bottom">
            <div class="info-div">
            <p class="info-rating">${t.rating.toFixed(1)}</p>
            <div class="box-star">
                <svg class="info-star" viewBox="0 0 32 32">
<path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
                </svg>
                <svg class="info-star" viewBox="0 0 32 32">
<path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
                </svg>
                <svg class="info-star" viewBox="0 0 32 32">
<path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
                </svg>
                <svg class="info-star" viewBox="0 0 32 32">
<path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
                </svg>
                <svg class="info-star" viewBox="0 0 32 32">
<path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
                </svg>
                </div>
          </div>
              <button id="${t._id}" class="info-btn" data-set="${t._id}">
                 See recipe
              </button>
              </div>
          </div>
        </div>
    </li>
  `).join("")),function(){let t=document.querySelectorAll(".box-star");t.forEach(t=>{let e=t.previousElementSibling,n=Math.round(e.textContent),r=[...t.children];r.forEach((t,e)=>{e<n&&t.classList.add("yellow-star")})})}()}//  Модалка з рецептом
function c(t){(0,r.searchRecipesId)(t).then(t=>{(function(t){let{data:{title:e,youtube:n,thumb:r,rating:o,time:a,ingredients:l,tags:u,instructions:f}}=t,c=n.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/"),d=s.create(`<div class="card-modal">
  <button type="button" class="modal-close-btn js-card-close-btn"></button>
  <iframe id="player" class="modal-card-video"
  src="${c||r}" style="border: none" allowfullscreen title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
  <h2 class="modal-card-title">${e}</h2>
  <div class="info-div-modal">
    <p class="info-rating grey">${o.toFixed(1)}</p>
    <div class="box-stars">
      <svg class="star" viewBox="0 0 32 32">
        <path
          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
        ></path>
      </svg>
      <svg class="star" viewBox="0 0 32 32">
        <path
          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
        ></path>
      </svg>
      <svg class="star" viewBox="0 0 32 32">
        <path
          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
        ></path>
      </svg>
      <svg class="star" viewBox="0 0 32 32">
        <path
          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
        ></path>
      </svg>
      <svg class="star" viewBox="0 0 32 32">
        <path
          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
        ></path>
      </svg>
    </div>
    <p class="info-time">${a}min</p>
  </div>
  <ul class="modal-card-list">
  </ul>
  <ul class="modal-card-tags">
  </ul>
  <p class="modal-card-instructions">${f}</p>
  <button type="button" class="favorite-modal-btn">Add to favorite</button>
</div>
`,{onShow:t=>{document.addEventListener("keydown",p)}},{closeShow:t=>{document.removeEventListener("keydown",p)}});function p(t){if("Escape"===t.code)return d.close()}d.show(),// Функції розмітки та рейтингу модалки
(0,i.createTagsModal)(u),(0,i.createIngredientsModal)(l),(0,i.renderStarModal)(o),document.body.style.overflow="hidden";let h=document.querySelector(".js-card-close-btn");document.querySelector(".card-modal"),h.addEventListener("click",()=>{document.body.style.overflow="auto",d.close()})})(t);let e=document.querySelector(".basicLightbox");e.classList.add("correct-recipe")}).catch(t=>{console.log(t)})}375>=window.outerWidth||window.outerWidth,u.addEventListener("click",function(t){if("BUTTON"===t.target.nodeName){let e=t.target.dataset.set;e&&c(t.target.dataset.set)}if("svg"===t.target.nodeName){let e=t.target.dataset.set;if(e){let t=l.querySelector(`svg[data-set="${e}"]`);(0,a.addFavorit)(e),t.classList.add("add-fill")}}if("path"===t.target.nodeName){let e=t.target.farthestViewportElement.dataset.set;if(e){let t=l.querySelector(`svg[data-set="${e}"]`);(0,a.offFavorit)(e),t.classList.remove("add-fill")}}})}),o.register("4xLKq",function(e,n){// Фунуція для рейтенгу
function r(t){let e=document.querySelector(".box-stars"),n=[...e.children],r=Math.round(t);n.forEach((t,e)=>{e<r&&t.classList.add("yellow-star")})}// Функція для інгредієнтів
function o(t){let e=document.querySelector(".modal-card-list");e.innerHTML=t.map(t=>`<li class="modal-card-item">
    <p class="name-ingredient">${t.name}</p>
    <p class="measure-ingredient">${t.measure}</p>
    </li>`).join("")}// Функція для Tags
function i(t){let e=document.querySelector(".modal-card-tags");e.innerHTML=t.map(t=>`<li class="modal-card-tag">#${t}</li>`).join("")}t(e.exports,"renderStarModal",function(){return r}),t(e.exports,"createIngredientsModal",function(){return o}),t(e.exports,"createTagsModal",function(){return i})}),o.register("5uEKZ",function(e,n){t(e.exports,"dataArray",function(){return a}),t(e.exports,"addFavorit",function(){return l}),t(e.exports,"offFavorit",function(){return u}),t(e.exports,"resizeFavorit",function(){return f}),t(e.exports,"classFavorit",function(){return c});var r=o("goQqF");// зберігання даних в локальному сховищі
let i=(t,e)=>{try{let n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){// обробка помилки при збереженні даних
console.error("Set state error: ",t.message),Notify.failure("Something went wrong. Please try again")}},a=[],s=(t=>{try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){// Обробка помилки при завантаженні даних
console.error("Get state error: ",t.message),Notify.failure("Something went wrong. Please try again")}})("cardData");// додати фаворіта
function l(t){let e=a.findIndex(({_id:e})=>e===t);e<0&&//перезаписуємо сховище
(0,r.searchRecipesId)(t).then(({data:t})=>(t.favorit=!0,a.push(t),a)).then(t=>{i("cardData",t)}).catch(()=>{console.log(error)})}// деактивувати фаворіта
function u(t){let e=a.findIndex(({_id:e})=>e===t);e>-1&&(a[e].favorit=!1),0>a.findIndex(({favorit:t})=>t)&&i("cardData",a=[])}// перечитка/перезапис фаворита,коли були зміни, повертає кількість фаворитів
function f(){let t=a.filter(({favorit:t})=>t);return t.length!=a.length&&i("cardData",a=t),a.length}// атрибут класу для фавориту
function c(t){let e=a.findIndex(({_id:e})=>e===t);return e>-1&&a[e].favorit?" add-fill":""}s?a=s:i("cardData",a)}),o.register("fb9GJ",function(t,e){window,t.exports=/******/function(t){/******/// The module cache
/******/var e={};/******//******/// The require function
/******/function n(r){/******//******/// Check if module is in cache
/******/if(e[r])/******/return e[r].exports;/******/// Create a new module (and put it into the cache)
/******/var o=e[r]={/******/i:r,/******/l:!1,/******/exports:{}};/******//******/// Return the exports of the module
/******/return(/******//******/// Execute the module function
/******/t[r].call(o.exports,o,o.exports,n),/******//******/// Flag the module as loaded
/******/o.l=!0,o.exports);/******/}/******//******//******/// Load entry module and return exports
/******/return(/******//******//******/// expose the modules object (__webpack_modules__)
/******/n.m=t,/******//******/// expose the module cache
/******/n.c=e,/******//******/// define getter function for harmony exports
/******/n.d=function(t,e,r){/******/n.o(t,e)||/******/Object.defineProperty(t,e,{enumerable:!0,get:r});/******/},/******//******/// define __esModule on exports
/******/n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),/******/Object.defineProperty(t,"__esModule",{value:!0});/******/},/******//******/// create a fake namespace object
/******/// mode & 1: value is a module id, require it
/******/// mode & 2: merge all properties of value into the ns
/******/// mode & 4: return value when already ns object
/******/// mode & 8|1: behave like require
/******/n.t=function(t,e){/******/if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;/******/var r=Object.create(null);/******/if(/******/n.r(r),/******/Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,(function(e){return t[e]}).bind(null,o));/******/return r;/******/},/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/n.n=function(t){/******/var e=t&&t.__esModule?/******/function(){return t.default}:/******/function(){return t};/******/return /******/n.d(e,"a",e),e;/******/},/******//******/// Object.prototype.hasOwnProperty.call
/******/n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},/******//******/// __webpack_public_path__
/******/n.p="dist",n(n.s=10));/******/}([/* 0 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * @module object
 *//**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */function(t,e){var n,r,o,i,a=Object.prototype.hasOwnProperty;for(o=1,i=arguments.length;o<i;o+=1)for(r in n=arguments[o])a.call(n,r)&&(t[r]=n[r]);return t};/***/},/* 1 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */function(t){return void 0===t;// eslint-disable-line no-undefined
};/***/},/* 2 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is an instance of Array or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is an instance of Array or not.
 * If the given variable is an instance of Array, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is array instance?
 * @memberof module:type
 */function(t){return t instanceof Array};/***/},/* 3 *//***/function(t,e,n){/**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(2),o=n(17),i=n(6);t.exports=/**
 * @module collection
 *//**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property(or The value of the element)
 *  2) The name of the property(or The index of the element)
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEach([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * var array = Array.prototype.slice.call(arrayLike); // change to array
 * forEach(array, function(value){
 *     sum += value;
 * });
 */function(t,e,n){r(t)?o(t,e,n):i(t,e,n)};/***/},/* 4 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */function(t){return"string"==typeof t||t instanceof String};/***/},/* 5 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */function(t){return t instanceof Function};/***/},/* 6 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break};/***/},/* 7 *//***/function(t,e,n){/**
 * @fileoverview
 * This module provides a function to make a constructor
 * that can inherit from the other constructors like the CLASS easily.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(18),o=n(0);t.exports=/**
 * @module defineClass
 *//**
 * Help a constructor to be defined and to inherit from the other constructors
 * @param {*} [parent] Parent constructor
 * @param {Object} props Members of constructor
 *  @param {Function} props.init Initialization method
 *  @param {Object} [props.static] Static members of constructor
 * @returns {*} Constructor
 * @memberof module:defineClass
 * @example
 * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
 *
 * //-- #2. Use property --//
 * var Parent = defineClass({
 *     init: function() { // constuructor
 *         this.name = 'made by def';
 *     },
 *     method: function() {
 *         // ...
 *     },
 *     static: {
 *         staticMethod: function() {
 *              // ...
 *         }
 *     }
 * });
 *
 * var Child = defineClass(Parent, {
 *     childMethod: function() {}
 * });
 *
 * Parent.staticMethod();
 *
 * var parentInstance = new Parent();
 * console.log(parentInstance.name); //made by def
 * parentInstance.staticMethod(); // Error
 *
 * var childInstance = new Child();
 * childInstance.method();
 * childInstance.childMethod();
 */function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n};/***/},/* 8 *//***/function(t,e,n){/* eslint-disable complexity *//**
 * @fileoverview Returns the first index at which a given element can be found in the array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(2);t.exports=/**
 * @module array
 *//**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof module:array
 * @example
 * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
 *
 * var arr = ['one', 'two', 'three', 'four'];
 * var idx1 = inArray('one', arr, 3); // -1
 * var idx2 = inArray('one', arr); // 0
 */function(t,e,n){var o,i;if(n=n||0,!r(e))return -1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(i=e.length,o=n;n>=0&&o<i;o+=1)if(e[o]===t)return o;return -1};/***/},/* 9 *//***/function(t,e,n){var r=n(29),o=n(30),i=n(5);t.exports={/**
   * Capitalize first letter
   * @param {string} str - String to change
   * @returns {string} Changed string
   */capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},/**
   * Check the element is contained
   * @param {HTMLElement} find - Target element
   * @param {HTMLElement} parent - Wrapper element
   * @returns {boolean} Whether contained or not
   */isContained:function(t,e){return!!e&&(t===e||e.contains(t))},/**
   * Create an new element by template literals.
   * @param {string|function} tmpl - template
   * @param {Object} context - context
   * @returns {HTMLElement}
   */createElementByTemplate:function(t,e){var n=document.createElement("div"),o=i(t)?t(e):r(t,e);return n.innerHTML=o,n.firstChild},/**
   * Create a new function that, when called, has its this keyword set to the provided value.
   * @param {function} fn A original function before binding
   * @param {*} obj context of function in arguments[0]
   * @returns {function} A new bound function with context that is in arguments[1]
   */bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},/**
   * Send hostname for GA
   * @ignore
   */sendHostName:function(){o("pagination","UA-129987462-1")}};/***/},/* 10 *//***/function(t,e,n){/**
 * @fileoverview The entry file of Pagination components
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 */n(11),t.exports=n(12);/***/},/* 11 *//***/function(t,e,n){// extracted by mini-css-extract-plugin
/***/},/* 12 *//***/function(t,e,n){var r=n(13),o=n(7),i=n(0),a=n(1),s=n(20),l=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},f=o(/** @lends Pagination.prototype */{init:function(t,e){/**
       * Option object
       * @type {object}
       * @private
       */this._options=i({},u,e),/**
       * Current page number
       * @type {number}
       * @private
       */this._currentPage=0,/**
       * View instance
       * @type {View}
       * @private
       */this._view=new s(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},/**
     * Set current page
     * @param {number} page - Current page
     * @private
     */_setCurrentPage:function(t){this._currentPage=t||this._options.page},/**
     * Get last page number
     * @returns {number} Last page number
     * @private
     */_getLastPage:function(){return Math.ceil(this._options.totalItems/this._options.itemsPerPage)||1},/**
     * Index of list in total lists
     * @param {number} pageNumber - Page number
     * @returns {number} Page index or number
     * @private
     */_getPageIndex:function(t){return this._options.centerAlign?Math.min(Math.max(t-Math.floor(this._options.visiblePages/2),1),this._getLastPage()-this._options.visiblePages+1):Math.ceil(t/this._options.visiblePages)},/**
     * Get relative page
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Relative page number
     * @private
     */_getRelativePage:function(t){var e=this.getCurrentPage();return"prev"===t?e-1:e+1},/**
     * Get more page index
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Page index
     * @private
     */_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},/* eslint-enable complexity *//**
     * Get available page number from over number
     * If total page is 23, but input number is 30 => return 23
     * @param {number} page - Page number
     * @returns {number} Replaced pgae number
     * @private
     */_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.min(t=Math.max(t,1),e)},/**
     * Create require view set, notify view to update
     * @param {number} page - Page number
     * @private
     */_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},/**
     * Create and get view data
     * @param {number} page - Page number
     * @returns {object} view data
     * @private
     */_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),o=this._getPageIndex(n),i=this._getEdge(t);return e.leftPageNumber=i.left,e.rightPageNumber=i.right,e.prevMore=r>1,e.nextMore=r<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},/**
     * Get each edge page
     * @param {object} page - Page number
     * @returns {{left: number, right: number}} Edge page numbers
     * @private
     */_getEdge:function(t){var e,n,r=this._getLastPage(),o=this._options.visiblePages,i=this._getPageIndex(t);return this._options.centerAlign?(n=(e=Math.max(t-Math.floor(o/2),1))+o-1)>r&&(e=Math.max(r-o+1,1),n=r):(e=(i-1)*o+1,n=Math.min(n=i*o,r)),{left:e,right:n}},/**
     * Pagelist click event hadnler
     * @param {?string} buttonType - Button type
     * @param {?number} page - Page number
     * @private
     *//* eslint-disable complexity */_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},/* eslint-enable complexity *//**
     * Reset pagination
     * @param {*} totalItems - Redraw page item count
     * @example
     * pagination.reset();
     * pagination.reset(100);
     */reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},/**
     * Move to specific page, redraw list.
     * Before move fire beforeMove event, After move fire afterMove event.
     * @param {Number} targetPage - Target page
     * @example
     * pagination.movePageTo(10);
     */movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),/**
       * @event Pagination#afterMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('afterMove', (event) => {
       *      const currentPage = event.page;
       *      console.log(currentPage);
       * });
       */this.fire("afterMove",{page:t}))},/**
     * Set total count of items
     * @param {number} itemCount - Total item count
     */setTotalItems:function(t){this._options.totalItems=t},/**
     * Set count of items per page
     * @param {number} itemCount - Item count
     */setItemsPerPage:function(t){this._options.itemsPerPage=t},/**
     * Get current page
     * @returns {number} Current page
     */getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(f),t.exports=f;/***/},/* 13 *//***/function(t,e,n){/**
 * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(0),o=n(14),i=n(4),a=n(16),s=n(2),l=n(5),u=n(3),f=/\s+/g;/**
 * @class
 * @example
 * // node, commonjs
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
 */function c(){/**
     * @type {HandlerItem[]}
     */this.events=null,/**
     * only for checking specific context event was binded
     * @type {object[]}
     */this.contexts=null}/**
 * Mixin custom events feature to specific constructor
 * @param {function} func - constructor
 * @example
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * var model;
 * function Model() {
 *     this.name = '';
 * }
 * CustomEvents.mixin(Model);
 *
 * model = new Model();
 * model.on('change', function() { this.name = 'model'; }, this);
 * model.fire('change');
 * alert(model.name); // 'model';
 */c.mixin=function(t){r(t.prototype,c.prototype)},/**
 * Get HandlerItem object
 * @param {function} handler - handler function
 * @param {object} [context] - context for handler
 * @returns {HandlerItem} HandlerItem object
 * @private
 */c.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},/**
 * Get event object safely
 * @param {string} [eventName] - create sub event map if not exist.
 * @returns {(object|array)} event object. if you supplied `eventName`
 *  parameter then make new array and return it
 * @private
 */c.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},/**
 * Get context array safely
 * @returns {array} context array
 * @private
 */c.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},/**
 * Get index of context
 * @param {object} ctx - context that used for bind custom event
 * @returns {number} index of context
 * @private
 */c.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return -1},/**
 * Memorize supplied context for recognize supplied object is context or
 *  name: handler pair object when off()
 * @param {object} ctx - context object to memorize
 * @private
 */c.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},/**
 * Forget supplied context object
 * @param {object} ctx - context object to forget
 * @private
 */c.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},/**
 * Bind event handler
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * @private
 */c.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},/**
 * Bind event handlers
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 Basic Usage
 * CustomEvents.on('onload', handler);
 *
 * // # 2.2 With context
 * CustomEvents.on('onload', handler, myObj);
 *
 * // # 2.3 Bind by object that name, handler pairs
 * CustomEvents.on({
 *     'play': handler,
 *     'pause': handler2
 * });
 *
 * // # 2.4 Bind by object that name, handler pairs with context object
 * CustomEvents.on({
 *     'play': handler
 * }, myObj);
 */c.prototype.on=function(t,e,n){var r=this;i(t)?u(// [syntax 1, 2]
t=t.split(f),function(t){r._bindEvent(t,e,n)}):a(t)&&(// [syntax 3, 4]
n=e,u(t,function(t,e){r.on(e,t,n)}))},/**
 * Bind one-shot event handlers
 * @param {(string|{name:string,handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {function|object} [handler] - handler function or context
 * @param {object} [context] - context for binding
 */c.prototype.once=function(t,e,n){var r=this;if(a(t)){n=e,u(t,function(t,e){r.once(e,t,n)});return}this.on(t,function o(){e.apply(n,arguments),r.off(t,o,n)},n)},/**
 * Splice supplied array by callback result
 * @param {array} arr - array to splice
 * @param {function} predicate - function return boolean
 * @private
 */c.prototype._spliceMatches=function(t,e){var n,r=0;if(s(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},/**
 * Get matcher for unbind specific handler events
 * @param {function} handler - handler function
 * @returns {function} handler matcher
 * @private
 */c.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},/**
 * Get matcher for unbind specific context events
 * @param {object} context - context
 * @returns {function} object matcher
 * @private
 */c.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},/**
 * Get matcher for unbind specific hander, context pair events
 * @param {function} handler - handler function
 * @param {object} context - context
 * @returns {function} handler, context matcher
 * @private
 */c.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var o=t===r.handler,i=e===r.context,a=o&&i;return a&&n._forgetContext(r.context),a}},/**
 * Unbind event by event name
 * @param {string} eventName - custom event name to unbind
 * @param {function} [handler] - handler function
 * @private
 */c.prototype._offByEventName=function(t,e){var n=this,r=l(e),o=n._matchHandler(e);u(t=t.split(f),function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,o):(u(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},/**
 * Unbind event by handler function
 * @param {function} handler - handler function
 * @private
 */c.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),function(t){e._spliceMatches(t,n)})},/**
 * Unbind event by object(name: handler pair object or context object)
 * @param {object} obj - context or {name: handler} pair object
 * @param {function} handler - handler function
 * @private
 */c.prototype._offByObject=function(t,e){var n,r=this;0>this._indexOfContext(t)?u(t,function(t,e){r.off(e,t)}):i(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),function(t){r._spliceMatches(t,n)})):(n=this._matchContext(t),u(this._safeEvent(),function(t){r._spliceMatches(t,n)}))},/**
 * Unbind custom events
 * @param {(string|object|function)} eventName - event name or context or
 *  {name: handler} pair object or handler function
 * @param {(function)} handler - handler function
 * @example
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 off by event name
 * CustomEvents.off('onload');
 *
 * // # 2.2 off by event name and handler
 * CustomEvents.off('play', handler);
 *
 * // # 2.3 off by handler
 * CustomEvents.off(handler);
 *
 * // # 2.4 off by context
 * CustomEvents.off(myObj);
 *
 * // # 2.5 off by context and handler
 * CustomEvents.off(myObj, handler);
 *
 * // # 2.6 off by context and event name
 * CustomEvents.off(myObj, 'onload');
 *
 * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
 * CustomEvents.off({
 *   'play': handler,
 *   'pause': handler2
 * });
 *
 * // # 2.8 off the all events
 * CustomEvents.off();
 */c.prototype.off=function(t,e){i(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(// [syntax 8]
this.events={},this.contexts=[])},/**
 * Fire custom event
 * @param {string} eventName - name of custom event
 */c.prototype.fire=function(t){this.invoke.apply(this,arguments)},/**
 * Fire a event and returns the result of operation 'boolean AND' with all
 *  listener's results.
 *
 * So, It is different from {@link CustomEvents#fire}.
 *
 * In service code, use this as a before event in component level usually
 *  for notifying that the event is cancelable.
 * @param {string} eventName - Custom event name
 * @param {...*} data - Data for event
 * @returns {boolean} The result of operation 'boolean AND'
 * @example
 * var map = new Map();
 * map.on({
 *     'beforeZoom': function() {
 *         // It should cancel the 'zoom' event by some conditions.
 *         if (that.disabled && this.getState()) {
 *             return false;
 *         }
 *         return true;
 *     }
 * });
 *
 * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
 *     // if true,
 *     // doSomething
 * }
 */c.prototype.invoke=function(t){var e,n,r,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(o=e[r]).handler.apply(o.context,n))return!1;r+=1}return!0},/**
 * Return whether at least one of the handlers is registered in the given
 *  event name.
 * @param {string} eventName - Custom event name
 * @returns {boolean} Is there at least one handler in event name?
 */c.prototype.hasListener=function(t){return this.getListenerLength(t)>0},/**
 * Return a count of events registered.
 * @param {string} eventName - Custom event name
 * @returns {number} number of event
 */c.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=c;/***/},/* 14 *//***/function(t,e,n){/**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(1),o=n(15);t.exports=/**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/function(t){return!r(t)&&!o(t)};/***/},/* 15 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */function(t){return null===t};/***/},/* 16 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is an object or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is an object or not.
 * If the given variable is an object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is object?
 * @memberof module:type
 */function(t){return t===Object(t)};/***/},/* 17 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Execute the provided callback once for each element present
 * in the array(or Array-like object) in ascending order.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the element
 *  2) The index of the element
 *  3) The array(or Array-like object) being traversed
 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachArray([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */function(t,e,n){var r=0,o=t.length;for(n=n||null;r<o&&!1!==e.call(n,t[r],r,t);r+=1);};/***/},/* 18 *//***/function(t,e,n){/**
 * @fileoverview Provide a simple inheritance in prototype-oriented.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(19);t.exports=/**
 * Provide a simple inheritance in prototype-oriented.
 * Caution :
 *  Don't overwrite the prototype of child constructor.
 *
 * @param {function} subType Child constructor
 * @param {function} superType Parent constructor
 * @memberof module:inheritance
 * @example
 * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
 *
 * // Parent constructor
 * function Animal(leg) {
 *     this.leg = leg;
 * }
 * Animal.prototype.growl = function() {
 *     // ...
 * };
 *
 * // Child constructor
 * function Person(name) {
 *     this.name = name;
 * }
 *
 * // Inheritance
 * inherit(Person, Animal);
 *
 * // After this inheritance, please use only the extending of property.
 * // Do not overwrite prototype.
 * Person.prototype.walk = function(direction) {
 *     // ...
 * };
 */function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n};/***/},/* 19 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Create a new object with the specified prototype object and properties.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * @module inheritance
 *//**
 * Create a new object with the specified prototype object and properties.
 * @param {Object} obj This object will be a prototype of the newly-created object.
 * @returns {Object}
 * @memberof module:inheritance
 */function(t){function e(){}// eslint-disable-line require-jsdoc
return e.prototype=t,new e};/***/},/* 20 *//***/function(t,e,n){var r=n(3),o=n(7),i=n(21),a=n(22),s=n(24),l=n(25),u=n(0),f=n(4),c=n(28),d=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],m=["prev","next"],g=o(/** @lends View.prototype */{init:function(t,e,n){/**
       * Root element
       * @type {HTMLElement}
       * @private
       */this._containerElement=null,/**
       * First item's class name
       * @type {string}
       * @private
       */this._firstItemClassName=e.firstItemClassName,/**
       * Last item's class name
       * @type {string}
       * @private
       */this._lastItemClassName=e.lastItemClassName,/**
       * Default template
       * @type {object.<string, string|function>}
       * @private
       */this._template=u({},p,e.template),/**
       * Map of buttons
       * @type {object.<string, HTMLElement>}
       * @private
       */this._buttons={},/**
       * Enabled page elements list
       * @type {array}
       * @private
       */this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},/* eslint-enable complexity *//**
     * Set root element
     * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
     * @private
     */_setRootElement:function(t){if(f(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!c(t))throw Error("The container element is invalid.");this._containerElement=t},/**
     * Assign move buttons to option
     * @private
     */_setMoveButtons:function(){r(h,function(t){this._buttons[t]=d.createElementByTemplate(this._template.moveButton,{type:t})},this)},/**
     * Assign disabled move buttons to option
     * @private
     */_setDisabledMoveButtons:function(){r(h,function(t){var e="disabled"+d.capitalizeFirstLetter(t);this._buttons[e]=d.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},/**
     * Assign more buttons to option
     * @private
     */_setMoreButtons:function(){r(m,function(t){this._buttons[t+"More"]=d.createElementByTemplate(this._template.moreButton,{type:t})},this)},/* eslint-enable camelcase *//**
     * Get container element
     * @returns {HTMLElement} Container element
     * @private
     */_getContainerElement:function(){return this._containerElement},/**
     * Append first button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},/**
     * Append previous button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},/**
     * Append next button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},/**
     * Append last button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},/**
     * Append previous more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendPrevMoreButton:function(t){var e;t.prevMore&&(l(e=this._buttons.prevMore,this._firstItemClassName),this._getContainerElement().appendChild(e))},/**
     * Append next more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */_appendNextMoreButton:function(t){var e;t.nextMore&&(l(e=this._buttons.nextMore,this._lastItemClassName),this._getContainerElement().appendChild(e))},/**
     * Append page number elements on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */// eslint-disable-next-line complexity
_appendPages:function(t){var e,n,r=t.leftPageNumber,o=t.rightPageNumber;for(n=r;n<=o;n+=1)n===t.page?e=d.createElementByTemplate(this._template.currentPage,{page:n}):(e=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||l(e,this._firstItemClassName),n!==o||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},/**
     * Attach click event
     * @param {function} callback - Callback function
     * @private
     */_attachClickEvent:function(t){a(this._getContainerElement(),"click",function(e){var n,r,o=i(e);s(e),(r=this._getButtonType(o))||(n=this._getPageNumber(o)),t(r,n)},this)},/**
     * Get button type to move button elements
     * @param {HTMLElement} targetElement - Each move button element
     * @returns {?string} Button type
     * @private
     */_getButtonType:function(t){var e;return r(this._buttons,function(n,r){return!d.isContained(t,n)||(e=r,!1)},this),e},/* eslint-enable no-lonely-if *//**
     * Get number to page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {?number} Page number
     * @private
     */_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},/**
     * Find target element from page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {HTMLElement} Found element
     * @ignore
     */_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],d.isContained(t,e))return e;return null},/**
     * Reset container element
     * @private
     */_empty:function(){this._enabledPageElements=[],r(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},/**
     * Update view
     * @param {object} viewData - View data to render pagination
     * @ignore
     */update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g;/***/},/* 21 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Get a target element from an event object.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Get a target element from an event object.
 * @param {Event} e - event object
 * @returns {HTMLElement} - target element
 * @memberof module:domEvent
 */function(t){return t.target||t.srcElement};/***/},/* 22 *//***/function(t,e,n){/**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(4),o=n(3),i=n(23);/**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @private
 */function a(t,e,n,r){var a,s;/**
     * Event handler
     * @param {Event} e - event object
     */function l(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,l):"attachEvent"in t&&t.attachEvent("on"+e,l),a=i(t,e),s=!1,o(a,function(t){return t.handler!==n||(s=!0,!1)}),s||a.push({handler:n,wrappedHandler:l})}t.exports=/**
 * Bind DOM events.
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
 * @example
 * var div = document.querySelector('div');
 * 
 * // Bind one event to an element.
 * on(div, 'click', toggle);
 * 
 * // Bind multiple events with a same handler to multiple elements at once.
 * // Use event names splitted by a space.
 * on(div, 'mouseenter mouseleave', changeColor);
 * 
 * // Bind multiple events with different handlers to an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * on(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Set a context for handler method.
 * var name = 'global';
 * var repository = {name: 'CodeSnippet'};
 * on(div, 'drag', function() {
 *  console.log(this.name);
 * }, repository);
 * // Result when you drag a div: "CodeSnippet"
 */function(t,e,n,i){if(r(e)){o(e.split(/\s+/g),function(e){a(t,e,n,i)});return}o(e,function(e,r){a(t,r,e,n)})};/***/},/* 23 *//***/function(t,e,n){/**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r="_feEventKey";t.exports=/**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 * @private
 */function(t,e){var n,o=t[r];return o||(o=t[r]={}),(n=o[e])||(n=o[e]=[]),n};/***/},/* 24 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Prevent default action
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Prevent default action
 * @param {Event} e - event object
 * @memberof module:domEvent
 */function(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=!1};/***/},/* 25 *//***/function(t,e,n){/**
 * @fileoverview Add css class to element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(3),o=n(8),i=n(26),a=n(27);t.exports=/**
 * domUtil module
 * @module domUtil
 *//**
 * Add css class to element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to add
 * @memberof module:domUtil
 */function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,l=[];if(s){r(n,function(e){t.classList.add(e)});return}(e=i(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,function(t){0>o(t,l)&&l.push(t)}),a(t,l)};/***/},/* 26 *//***/function(t,e,n){/**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(1);t.exports=/**
 * Get HTML element's design classes.
 * @param {(HTMLElement|SVGElement)} element target element
 * @returns {string} element css class name
 * @memberof module:domUtil
 */function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""};/***/},/* 27 *//***/function(t,e,n){/**
 * @fileoverview Set className value
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(2),o=n(1);t.exports=/**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */function(t,e){if(e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)){t.className=e;return}t.className.baseVal=e};/***/},/* 28 *//***/function(t,e,n){t.exports=/**
 * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 *//**
 * Check whether the given variable is a instance of HTMLNode or not.
 * If the given variables is a instance of HTMLNode, return true.
 * @param {*} html - Target for checking
 * @returns {boolean} Is HTMLNode ?
 * @memberof module:type
 */function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!!(t&&t.nodeType)};/***/},/* 29 *//***/function(t,e,n){/**
 * @fileoverview Convert text by binding expressions with context.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(8),o=n(3),i=n(2),a=n(4),s=n(0),l=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,f=/\[\s?|\s?\]/,c=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,p=/^["']\w+["']$/,h=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:/**
 * Helper function for "if". 
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
 * @param {object} context - context
 * @returns {string}
 * @private
 */function(t,e,n){var r,i,a,s,l=(r=[t],i=[],a=0,s=0,// eslint-disable-next-line complexity
o(e,function(t,n){0===t.indexOf("if")?a+=1:"/if"===t?a-=1:a||0!==t.indexOf("elseif")&&"else"!==t||(r.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(s,n)),s=n+1)}),i.push(e.slice(s)),{exps:r,sourcesInsideIf:i}),u=!1,f="";return o(l.exps,function(t,e){return(u=v(t,n))&&(f=x(l.sourcesInsideIf[e],n)),!u}),f},each:/**
 * Helper function for "each".
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
 * @param {object} context - context
 * @returns {string}
 * @private
 */function(t,e,n){var r=v(t,n),a=i(r)?"@index":"@key",l={},u="";return o(r,function(t,r){l[a]=r,l["@this"]=t,s(n,l),u+=x(e.slice(),n)}),u},with:/**
 * Helper function for "with ... as"
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
 * @param {object} context - context
 * @returns {string}
 * @private
 */function(t,e,n){var o=r("as",t),i=t[o+1],a=v(t.slice(0,o),n),l={};return l[i]=a,x(e,s(n,l))||""}},y=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,o=[],i=0;for(e.global||(e=RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,o.push(t.slice(i,r)),i=r+n[0].length,n=e.exec(t);return o.push(t.slice(i)),o};/**
 * Find value in the context by an expression.
 * @param {string} exp - an expression
 * @param {object} context - context
 * @returns {*}
 * @private
 */// eslint-disable-next-line complexity
function b(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:p.test(t)?r=t.replace(h,""):u.test(t)?r=b((n=t.split(f))[0],e)[b(n[1],e)]:c.test(t)?r=b((n=t.split(d))[0],e)[n[1]]:m.test(t)&&(r=parseFloat(t)),r}/**
 * Helper function for "custom helper".
 * If helper is not a function, return helper itself.
 * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
 * @param {object} context - context
 * @returns {string}
 * @private
 */function v(t,e){var n,r,i=b(t[0],e);return i instanceof Function?(n=t.slice(1),r=[],o(n,function(t){r.push(b(t,e))}),i.apply(null,r)):i}/**
 * Get a result of compiling an expression with the context.
 * @param {Array.<string>} sources - array of sources split by regexp of expression.
 * @param {object} context - context
 * @returns {Array.<string>} - array of sources that bind with its context
 * @private
 */function x(t,e){for(var n,r,o,i=1,s=t[1];a(s);)g[r=(n=s.split(" "))[0]]?(o=/**
 * Handle block helper function
 * @param {string} helperKeyword - helper keyword (ex. if, each, with)
 * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
 * @param {object} context - context
 * @returns {Array.<string>}
 * @private
 */function(t,e,n){for(var r,o,i,s=g[t],l=1,u=2,f=e[2];l&&a(f);)0===f.indexOf(t)?l+=1:0===f.indexOf("/"+t)&&(l-=1,i=u),u+=2,f=e[u];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=s(e[0].split(" ").slice(1),(r=i,(o=e.splice(1,r-0)).pop(),o),n),e}(r,t.splice(i,t.length-i),e),t=t.concat(o)):t[i]=v(n,e),i+=2,s=t[i];return t.join("")}t.exports=/**
 * Convert text by binding expressions with context.
 * <br>
 * If expression exists in the context, it will be replaced.
 * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
 * An array or object can be accessed using bracket and dot notation.
 * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
 * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
 * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
 * <br>
 * If replaced expression is a function, next expressions will be arguments of the function.
 * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
 * <br>
 * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
 * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
 * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
 * 3) 'with ... as ...' provides an alias.
 * @param {string} text - text with expressions
 * @param {object} context - context
 * @returns {string} - text that bind with its context
 * @memberof module:domUtil
 * @example
 * var template = require('tui-code-snippet/domUtil/template');
 * 
 * var source = 
 *     '<h1>'
 *   +   '{{if isValidNumber title}}'
 *   +     '{{title}}th'
 *   +   '{{elseif isValidDate title}}'
 *   +     'Date: {{title}}'
 *   +   '{{/if}}'
 *   + '</h1>'
 *   + '{{each list}}'
 *   +   '{{with addOne @index as idx}}'
 *   +     '<p>{{idx}}: {{@this}}</p>'
 *   +   '{{/with}}'
 *   + '{{/each}}';
 * 
 * var context = {
 *   isValidDate: function(text) {
 *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
 *   },
 *   isValidNumber: function(text) {
 *     return /^\d+$/.test(text);
 *   }
 *   title: '2019-11-25',
 *   list: ['Clean the room', 'Wash the dishes'],
 *   addOne: function(num) {
 *     return num + 1;
 *   }
 * };
 * 
 * var result = template(source, context);
 * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
 */function(t,e){return x(y(t,l),e)};/***/},/* 30 *//***/function(t,e,n){/**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(1),o=n(31);t.exports=/**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */function(t,e){var n=location.hostname,i="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(i);// skip if the flag is defined and is set to false explicitly
(r(window.tui)||!1!==window.tui.usageStatistics)&&(!a||new Date().getTime()-a>6048e5)&&(window.localStorage.setItem(i,new Date().getTime()),setTimeout(function(){("interactive"===document.readyState||"complete"===document.readyState)&&o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3))};/***/},/* 31 *//***/function(t,e,n){/**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */var r=n(6);t.exports=/**
 * @module request
 *//**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *     v: 1,
 *     t: 'event',
 *     tid: 'trackingid',
 *     cid: 'cid',
 *     dp: 'dp',
 *     dh: 'dh'
 * });
 */function(t,e){var n=document.createElement("img"),o="";return r(e,function(t,e){o+="&"+e+"="+t}),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n};/***/}])}),o.register("fAYBR",function(e,n){t(e.exports,"default",function(){return r});function r(){return{swiperJs:document.querySelector(".swiper"),pagination:document.querySelector(".swiper-pagination"),eventSwiper:document.querySelector(".hero-swiper"),markupSwiper:document.querySelector(".swiper-wrapper"),orderBtnHero:document.querySelector(".btn-hero"),message:document.querySelector(".header-form"),btnMessage:document.querySelector(".header-form-btn"),filterFavorite:document.querySelector(".favorite-filter-list"),filterCategory:document.querySelector(".favorite-filter-item"),cardsFavorite:document.querySelector(".card-favorite-list")}}});//# sourceMappingURL=favorite.fded9d4c.js.map

//# sourceMappingURL=favorite.fded9d4c.js.map
