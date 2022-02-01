import Swiper from 'swiper/swiper-bundle.min.js';

const $sliders = document.querySelectorAll('.pre_certificate-slider');

if ($sliders.length) {
  $sliders.forEach(($slider) => {
    const $navigation = document.querySelector('.pre_certificate__navigation') || null;
    const $prev = $navigation.querySelector('.pre_certificate-button-icon--prev') || null;
    const $next = $navigation.querySelector('.pre_certificate-button-icon--next') || null;

    const slider = new Swiper($slider, {
      slidesPerView: 3,
      speed: 600,
      spaceBetween: 16,
      resizeObserver: true,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        prevEl: $prev,
        nextEl: $next,
      },

      pagination: {
        type: 'bullets',
        clickable: true,
        el: '.pre_certificate__pagination',
      },

      // breakpoints: {
      //   901: {
      //     slidesPerView: 1.51,
      //     spaceBetween: 40,
      //     autoHeight: false,
      //   },
      // },
    });
  });
}