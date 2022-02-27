import Swiper from 'swiper/swiper-bundle.min';

const $sliders = document.querySelectorAll('.aside-blog__slider');

if ($sliders.length) {
  $sliders.forEach(($slider) => {
    const slider = new Swiper($slider, {
      spaceBetween: 20,
      speed: 500,
      pagination: {
        type: 'bullets',
        el: '.swiper-pagination2',
        clickable: true,
      },
    });
  });
}
