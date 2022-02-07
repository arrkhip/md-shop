import Swiper from 'swiper/swiper-bundle.min.js';

const $sliders = document.querySelectorAll('.advantages-slider');

if ($sliders.length) {
  $sliders.forEach(($slider) => {
    const slider = new Swiper($slider, {
      slidesPerView: 3,
      speed: 600,
      spaceBetween: 16,
      resizeObserver: false,
      watchSlidesProgress: true,
      watchOverflow: true,
      breakpoints: {
        1025: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 16,
        },
        320: {
          slidesPerView: 1.2,
          spaceBetween: 16,
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
