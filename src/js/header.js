const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';

const mobMenuOpenBtn = document.querySelector('.js-open-menu');
const mobMenuCloseBtn = document.querySelector('.js-close-menu');
const mobMenuContainer = document.querySelector('.js-menu-container');
const basketButton = document.querySelector('.basket-button');

mobMenuOpenBtn.addEventListener('click', onOpenMenuClick);

function onOpenMenuClick() {
  if (!mobMenuContainer.classList.contains('is-open')) {
    mobMenuContainer.classList.add('is-open');
  }
}

mobMenuCloseBtn.addEventListener('click', onCloseMenuClick);

function onCloseMenuClick() {
  if (mobMenuContainer.classList.contains('is-open')) {
    mobMenuContainer.classList.remove('is-open');
  }
}

// ------------------МОДАЛКА-------------------

basketButton.addEventListener('click', onBasketBtnClick);

function onBasketBtnClick() {
  let instance = basicLightbox.create(
    `
<div class="header-modal">
  <button type="button" class="modal-close-btn js-modal-close-btn">
  </button>
  <h2 class="header-modal-title">ORDER NOW</h2>
  
  <form class="header-form" action="submit">
  <label class="header-form-label" for="name">Name</label>
  <input class="header-form-input" type="text" name="name" placeholder=" " id="name" required />
  <label class="header-form-label" for="phone">Phone number</label>
  <input
    class="header-form-input"
    type="tel"
    name="phone"
    id="phone"
    placeholder=" "
    pattern="+380[0-9]{9}"
    required
  />
  <label class="header-form-label" for="email">Email</label>
  <input
    class="header-form-input"
    type="email"
    name="email"
    id="email"
    placeholder=" "
    required
  />
  <label class="header-form-label" for="comment">Comment </label>
  <textarea
    id="comment"
    class="header-form-input header-form-comment"
    name="comment"
    placeholder=" "
    rows="5"
  ></textarea>
    <button class="header-form-btn" type="submit">Send</button>
  </form>
</div>
`,
    { closable: false }
  );
  document.body.style.overflow = 'hidden';
  instance.show();

  const modalCloseBtn = document.querySelector('.js-modal-close-btn');
  const modal = document.querySelector('.header-modal');

  modal.addEventListener('submit', e => {
    e.preventDefault();
  });

  modalCloseBtn.addEventListener('click', () => {
    document.body.style.overflow = 'auto';

    instance.close();
  });
}

export{onBasketBtnClick}