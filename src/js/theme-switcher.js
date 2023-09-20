const switcher = document.querySelector('.switcher-check');
const mobSwitcher = document.querySelector('.mob-switcher-check');
const mobMenu = document.querySelector('.js-menu-container');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const recipesAll = document.querySelector('.recipes-all');
const popularChangeJs = document.querySelector('.popular-item-js');
const categBtn = document.querySelector('.categories-btn-js');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
  GREEN: 'green-theme',
};

switcher.addEventListener('change', () => {
  const isDarkMode = body.classList.contains(Theme.DARK);

  if (isDarkMode) {
    body.classList.remove(Theme.DARK);
    header.classList.remove(Theme.DARK);
    recipesAll.classList.remove(Theme.DARK);
    popularChangeJs.remove(Theme.DARK);
    categBtn.remove(Theme.DARK);
    mobMenu.classList.remove(Theme.DARK);
  } else {
    body.classList.add(Theme.DARK);
    header.classList.add(Theme.DARK);
    recipesAll.classList.add(Theme.DARK);
    popularChangeJs.add(Theme.DARK);
    categBtn.remove(Theme.DARK);
    mobMenu.classList.add(Theme.DARK);
  }

  // localStorage.setItem('theme', isDarkMode ? Theme.LIGHT : Theme.DARK);
});

// ---------------Mob-Switcher------------------------------

mobSwitcher.addEventListener('change', () => {
  const isDarkMode = body.classList.contains(Theme.DARK);

  if (isDarkMode) {
    body.classList.remove(Theme.DARK);
    header.classList.remove(Theme.DARK);
    mobMenu.classList.remove(Theme.DARK);
  } else {
    body.classList.add(Theme.DARK);
    header.classList.add(Theme.DARK);
    mobMenu.classList.add(Theme.DARK);
  }

  // localStorage.setItem('theme', isDarkMode ? Theme.LIGHT : Theme.DARK);
});
