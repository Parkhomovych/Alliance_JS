const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
// ****************************************************
import callMassageAdd from './hero-message';
// ********************************************************
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
  <input class="header-form-input" type="text" name="name" id="name" minlength="3" required placeholder="Bob" />
  <label class="header-form-label" for="phone">Phone number</label>
  <input
    class="header-form-input"
    type="tel"
    name="phone"
    id="phone"
    pattern="^+380\d{3}\d{2}\d{2}\d{2}$"
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
    pattern=".+@globex\.com"
    placeholder="test@mail.com"
    required
  />
  <label class="header-form-label" for="comment">Comment </label>
  <textarea
    id="comment"
    class="header-form-input header-form-comment"
    name="comment"
    
    rows="5"
  ></textarea>
    <button class="header-form-btn" type="submit">Send</button>
  </form>
</div>
`,

    {
      onShow: instance => {
        document.addEventListener('keydown', registrationEventKey);
      },
    },
    {
      onClose: instance => {
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', registrationEventKey);
      },
    }
  );

  document.body.style.overflow = 'hidden';
  instance.show();

  const modalMessage = document.querySelector('.header-form');
  callMassageAdd(modalMessage);

  const modalCloseBtn = document.querySelector('.js-modal-close-btn');
  const modalSendBtn = document.querySelector('.header-form-btn');
  const modal = document.querySelector('.header-modal');

  modal.addEventListener('submit', e => {
    e.preventDefault();
    document.body.style.overflow = 'auto';
    instance.close();
  });

  function registrationEventKey(e) {
    if (e.code === 'Escape') return instance.close();
  }

  modalCloseBtn.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    instance.close();
  });
}

export { onBasketBtnClick };
