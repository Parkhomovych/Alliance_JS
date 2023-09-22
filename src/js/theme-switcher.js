const switcher = document.querySelector('.switcher-check');
const mobSwitcher = document.querySelector('.mob-switcher-check');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme ',
  DARK: 'dark-theme',
  GREEN: 'green-theme',
};

switcher.addEventListener('change', () => {
  const isDarkMode = body.classList.contains(Theme.DARK);

  mobSwitcher.checked = switcher.checked;

  if (isDarkMode) {
    body.classList.remove(Theme.DARK);
  } else {
    body.classList.add(Theme.DARK);
  }

  localStorage.setItem('theme', isDarkMode ? Theme.LIGHT : Theme.DARK);
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

  localStorage.setItem('theme', isDarkMode ? Theme.LIGHT : Theme.DARK);
});
const savedTheme = localStorage.getItem('theme');
const switcherCheked = document.querySelector('.switcher-check');
// Встановити тему за замовчуванням, якщо вона не збережена в localStorage
if (savedTheme === 'dark-theme') {
  switcherCheked.checked = true;
  body.classList.add(savedTheme);
}
