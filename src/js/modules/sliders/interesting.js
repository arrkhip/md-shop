import Swiper from 'swiper/swiper-bundle.min';

const $sliders = document.querySelectorAll('.pre_interesting-slider');

if ($sliders.length) {
  $sliders.forEach(($slider) => {
    const $navigation = document.querySelector('.pre_interesting__navigation') || null;
    const $prev = $navigation.querySelector('.pre_interesting-button-icon--prev') || null;
    const $next = $navigation.querySelector('.pre_interesting-button-icon--next') || null;

    const slider = new Swiper($slider, {
      slidesPerView: 1,
      speed: 600,
      spaceBetween: 20,
      loop: true,
      autoHeight: true,

      resizeObserver: true,

      navigation: {
        prevEl: $prev,
        nextEl: $next,
      },

      pagination: {
        type: 'bullets',
        clickable: true,
        el: '.pre_interesting__pagination',
      },

      breakpoints: {
        901: {
          slidesPerView: 1.51,
          spaceBetween: 40,
          autoHeight: false,
        },
      },
    });
  });
}
