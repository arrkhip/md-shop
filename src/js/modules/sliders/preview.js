import Swiper from 'swiper/swiper-bundle.min';

const isMobile = window.matchMedia('(max-width: 900px)');

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
      const $pagination = $container.querySelector('.product-preview-slider-pagination');

      const swiper = new Swiper($slider, {
        slidesPerView: 1,
        speed: isMobile.matches ? 300 : 0,
        spaceBetween: 20,
        watchOverflow: true,
        loop: isLoop,
        // loopAdditionalSlides: 5,

        followFinger: isMobile.matches,
        shortSwipes: isMobile.matches,
        longSwipes: isMobile.matches,
        allowTouchMove: isMobile.matches,

        thumbs: {
          swiper: thumbsSlider,
        },

        pagination: {
          el: $pagination,
          clickable: true,
        },

        on: {
          afterInit(swiper) {
            const $modal = document.querySelector('#modal-zoom');

            if ($modal) {
              $modal.modal.openCallback = ($target) => {
                if ($target.closest('.product--video')) {
                  const $modalSlider = $modal.querySelector('.product-preview-slider');

                  if ($modalSlider && $modalSlider.swiper) {
                    const $player = $modalSlider.swiper.slides[swiper.activeIndex].querySelector('.plyr');
                    const $play = $modalSlider.swiper.slides[swiper.activeIndex].querySelector('.j_player-play');

                    if ($player && $player.player) {
                      $player.player.play();
                    } else {
                      $play && $play.click();
                    }
                  }
                }
              };

              $modal.modal.closeCallback = ($target) => {
                const $player = document.querySelector('.plyr');

                if ($player && $player.player) {
                  if (!$player.player.paused) {
                    $player.player.pause();
                  }
                }
              };
            }
          },

          slideChange(swiper) {
            [...swiper.slides].forEach(($slide) => {
              const $player = document.querySelector('.plyr');

              if ($player && $player.player) {
                if (!$player.player.paused) {
                  $player.player.pause();
                }
              }
            });

            const $modal = document.querySelector('#modal-zoom');

            if ($modal) {
              const $modalSlider = $modal.querySelector('.product-preview-slider');

              if ($modalSlider && $modalSlider.swiper) {
                $modalSlider.swiper.slideTo(swiper.activeIndex, 0, true);
              }
            }
          },

          click(swiper, e) {
            const $videoBtn = swiper.clickedSlide.querySelector('.product--video');

            if ($videoBtn) {
              const $modal = document.querySelector('#modal-zoom');

              $modal && $modal.modal.open(e);
            }
          },
        },
      });

      swiper.slideNext();
      swiper.slidePrev();
      swiper.update();

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
