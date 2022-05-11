import Swiper from 'swiper/swiper-bundle.min.js';

const $topicSlider = document.querySelector('.js_similar__slider');
if ($topicSlider) {
  const similarSlider = new Swiper('.js_similar__slider', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    watchOverflow: true,
    breakpoints: {
      480: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}
