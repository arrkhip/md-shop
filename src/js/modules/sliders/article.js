import Swiper from 'swiper/swiper-bundle.min.js';

const $sliders = document.querySelectorAll('.article-slider');

if ($sliders.length) {
  $sliders.forEach(($slider) => {
    const slider = new Swiper($slider, {
      slidesPerView: 3,
      speed: 600,
      spaceBetween: 40,
      resizeObserver: false,
      watchSlidesProgress: true,
      watchOverflow: true,
      autoHeight: true,
      breakpoints: {
        1025: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        365: {
          slidesPerView: 2.2,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
      },
    });
  });

  window.addEventListener('resize', () => {
    $sliders.forEach((element) => {
      element.swiper.update();
    });
  });
}
