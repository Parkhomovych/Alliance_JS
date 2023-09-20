const scrollButton = document.querySelector('.btn_scroll');
let isScrolling = false;


scrollButton.addEventListener('click', scrollToTop);
window.addEventListener('scroll', toggleButtonVisibility);


function toggleButtonVisibility() {
  if (window.pageYOffset <= 200 && window.pageYOffset >= 0) {
    scrollButton.style.opacity = '0';
  } else {
    scrollButton.style.opacity = '1';
  }
};


function scrollToTop() {
  if (!isScrolling) {
    isScrolling = true;
    scrollToTopAnimation();
  }
};



