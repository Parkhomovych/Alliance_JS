const scrollButton = document.querySelector('.btn_scroll');

window.addEventListener('scroll', toggleButtonVisibility);
function toggleButtonVisibility() {
  if (window.pageYOffset <= 200 && window.pageYOffset >= 0) {
    scrollButton.style.opacity = '0';
    scrollButton.style.pointerEvents = 'none';
  } else {
    scrollButton.style.opacity = '1';
    scrollButton.style.pointerEvents = 'all';
  }
}
