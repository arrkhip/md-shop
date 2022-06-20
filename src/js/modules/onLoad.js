// const transitionReady = () => {
//   document.firstElementChild.classList.add('transition-ready');
// };

// const getHeaderHeight = () => {
//   const $header = document.querySelector('.header');
//   const height = $header.offsetHeight;

//   document.documentElement.style.setProperty('--header-height', `${height}px`);
// };

// window.addEventListener('load', () => {
//   transitionReady();
//   getHeaderHeight();
// });

// window.addEventListener('resize', () => {
//   getHeaderHeight();
// });

const getHeaderHeight = () => {
  const $header = document.querySelector('.header');
  if ($header) {
    const height = $header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${height}px`);
  }
};
const addReadyClass = () => {
  document.firstElementChild.classList.add('transition-ready');
};
function getDeviceHeight() {
  // We execute the same script as before
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
const onLoad = () => {
  addReadyClass();
  getHeaderHeight();
  getDeviceHeight();
};
const onResize = () => {
  getHeaderHeight();
  getDeviceHeight();
};
window.addEventListener('load', onLoad);
window.addEventListener('resize', onResize);
export { getHeaderHeight };
