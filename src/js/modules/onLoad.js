const transitionReady = () => {
  document.firstElementChild.classList.add('transition-ready');
};

const getHeaderHeight = () => {
  const $header = document.querySelector('.header');
  const height = $header.offsetHeight;

  document.documentElement.style.setProperty('--header-height', `${height}px`);
};

window.addEventListener('load', () => {
  transitionReady();
  getHeaderHeight();
});

window.addEventListener('resize', () => {
  getHeaderHeight();
});
