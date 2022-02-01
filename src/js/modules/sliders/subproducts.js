import Swiper from 'swiper/swiper-bundle.min';

const $sliders = document.querySelectorAll('.product-subslider');

if ($sliders.length) {
  $sliders.forEach(($slider) => {
    const $section = $slider.closest('section') || document;
    const $navigation = $section.querySelector('.product-subslider-navigation') || null;
    const $prev = $navigation.querySelector('.pre_interesting-button-icon--prev') || null;
    const $next = $navigation.querySelector('.pre_interesting-button-icon--next') || null;

    const slider = new Swiper($slider, {
      slidesPerView: 4,
      speed: 600,
      spaceBetween: 16,
      watchOverflow: true,

      navigation: {
        prevEl: $prev,
        nextEl: $next,
      },

      breakpoints: {},
    });
  });
}
