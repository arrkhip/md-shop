import Swiper from 'swiper/swiper-bundle.min.js';

const $sliders = document.querySelectorAll('.person-slider');

if ($sliders.length) {
  $sliders.forEach(($slider) => {
    const $navigation = document.querySelector('.person__navigation') || null;
    const $prev = $navigation.querySelector('.person-button-icon--prev') || null;
    const $next = $navigation.querySelector('.person-button-icon--next') || null;
    const $imgContainer = document.querySelector('.j_img-container') || null;
    const $textContainer = document.querySelector('.j_text-container') || null;

    const slider = new Swiper($slider, {
      slidesPerView: 1,
      speed: 600,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        prevEl: $prev,
        nextEl: $next,
      },
      on: {
        afterInit(swiper) {
          onSlideChange(swiper, $imgContainer);
          onSlideChange(swiper, $textContainer);
        },
        slideChange(swiper) {
          onSlideChange(swiper, $imgContainer);
          onSlideChange(swiper, $textContainer);
        },
      },
    });
  });
}

function onSlideChange(swiper, $imgContainer) {
  const $imgs = $imgContainer && [...$imgContainer.children];

  if ($imgs.length) {
    $imgs.forEach(($img) => {
      $img.classList.remove('active');
    });
    $imgs[swiper.activeIndex] && $imgs[swiper.activeIndex].classList.add('active');
  }
}
