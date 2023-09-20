const switcher = document.querySelector('.switcher-check');
const mobSwitcher = document.querySelector('.mob-switcher-check');
const body = document.querySelector('body');

const Theme = {
  DARK: 'dark-theme',
  GREEN: 'green-theme',
};

switcher.addEventListener('change', () => {
  const isDarkMode = body.classList.contains(Theme.DARK);

  if (isDarkMode) {
    body.classList.remove(Theme.DARK);
  } else {
    body.classList.add(Theme.DARK);
  }

  // localStorage.setItem('theme', isDarkMode ? Theme.LIGHT : Theme.DARK);
});

// ---------------Mob-Switcher------------------------------

mobSwitcher.addEventListener('change', () => {
  const isDarkMode = body.classList.contains(Theme.DARK);

  if (isDarkMode) {
    body.classList.remove(Theme.DARK);
  } else {
    body.classList.add(Theme.DARK);
  }

  // localStorage.setItem('theme', isDarkMode ? Theme.LIGHT : Theme.DARK);
});
