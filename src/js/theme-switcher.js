const switcher = document.querySelector('.switcher-check');
const mobSwitcher = document.querySelector('.mob-switcher-check');
const body = document.querySelector('body');

const Theme = {
  DARK: 'dark-theme',
  GREEN: 'green-theme',
};

switcher.addEventListener('change', () => {
  const isDarkMode = body.classList.contains(Theme.DARK);

  localStorage.setItem('theme', isDarkMode ? Theme.DARK : Theme.LIGHT);
  mobSwitcher.checked = switcher.checked;

  if (isDarkMode) {
    body.classList.remove(Theme.DARK);
  } else {
    body.classList.add(Theme.DARK);
  }
});

// ---------------Mob-Switcher------------------------------

mobSwitcher.addEventListener('change', () => {
  const isDarkMode = body.classList.contains(Theme.DARK);

  switcher.checked = mobSwitcher.checked;

  if (isDarkMode) {
    body.classList.remove(Theme.DARK);
  } else {
    body.classList.add(Theme.DARK);
  }

  localStorage.setItem('theme', isDarkMode ? Theme.DARK : Theme.LIGHT);
});
