const switcher = document.querySelector('.check');
const header = document.querySelector('.header');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
switcher.addEventListener('change', hendler);
function hendler(evt) {
  if (!evt.currentTarget.checked) {
    header.classList.add(Theme.LIGHT);
    header.classList.remove(Theme.DARK);
  } else {
    header.classList.add(Theme.DARK);
    header.classList.remove(Theme.LIGHT);
  }
}
