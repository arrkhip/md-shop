import Swiper from 'swiper/swiper-bundle.min';

const $containers = document.querySelectorAll('.product-preview');

if ($containers.length) {
  $containers.forEach(($container) => {
    const $thumbsSlider = $container.querySelector('.product-thumbs-slider');

    let thumbsSlider = null;
    let isLoop = false;

    if ($thumbsSlider) {
      const $wrapper = $container.querySelector('.product-thumbs-slider-wrapper');
      const $navigation = $container.querySelector('.product-thumbs-slider-navigation');
      const $prevEl = $navigation.querySelector('.button-icon--prev');
      const $nextEl = $navigation.querySelector('.button-icon--next');

      const $thumbsSlides = $thumbsSlider.querySelectorAll('.swiper-slide');

      isLoop = $thumbsSlides.length > 4;

      thumbsSlider = new Swiper($thumbsSlider, {
        slidesPerView: 4,
        direction: 'vertical',
        spaceBetween: 20,
        speed: 400,
        watchOverflow: true,
        watchSlidesVisibility: true,
        loop: isLoop,
        loopAdditionalSlides: 5,

        navigation: {
          nextEl: $nextEl,
          prevEl: $prevEl,
        },

        breakpoints: {
          501: {
            slidesPerView: 5,
          },
        },

        on: {
          afterInit(swiper) {
            checkNagigation(swiper, $wrapper);
          },
          transitionStart(swiper) {
            checkNagigation(swiper, $wrapper);
          },
        },
      });
    }

    const $slider = $container.querySelector('.product-preview-slider');

    if ($slider) {
      const swiper = new Swiper($slider, {
        slidesPerView: 1,
        speed: 0,
        spaceBetween: 20,
        watchOverflow: true,
        loop: isLoop,
        loopAdditionalSlides: 5,

        followFinger: false,
        shortSwipes: false,
        longSwipes: false,
        allowTouchMove: false,

        thumbs: {
          swiper: thumbsSlider,
        },
      });

      thumbsSlider.update();
    }
  });
}

function checkNagigation(swiper, $navigation) {
  if (swiper.isEnd) {
    $navigation.classList.add('is-end');
  } else {
    $navigation.classList.remove('is-end');
  }

  if (swiper.isBeginning) {
    $navigation.classList.add('is-start');
  } else {
    $navigation.classList.remove('is-start');
  }
}
