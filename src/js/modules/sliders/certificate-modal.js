import Swiper from 'swiper/swiper-bundle.min.js';

initGallerySliders();
window.initGallerySliders = initGallerySliders;
function initGallerySliders() {
  const isMobile = window.matchMedia('(max-width: 900px)');
  const $sliders = document.querySelectorAll('.gallery-slider');
  const $navigationDown = document.querySelector('.galleryDown-slider-navigation') || null;
  const $prevDown = $navigationDown.querySelector('.swiper-button-prev') || null;
  const $nextDown = $navigationDown.querySelector('.swiper-button-next') || null;
  if ($sliders.length) {
    $sliders.forEach(($slider) => {
      const $modal = $slider.closest('.j_modal') || null;
      const $wrapper = $slider.closest('.gallery-slider-wrapper');
      const $thumbs = $wrapper.querySelector('.gallery-thumbs-slider') || null;
      let thumbsSlider = null;
      if ($thumbs) {
        if ($thumbs.swiper) return;
        thumbsSlider = new Swiper($thumbs, {
          slidesPerView: 'auto',
          speed: 600,
          spaceBetween: 10,
          lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true,
          },
          navigation: {
            nextEl: $nextDown,
            prevEl: $prevDown,
          },
          breakpoints: {
            901: {
              slidesPerView: 12,
              spaceBetween: 20,
            },
          },
        });
      }
      if ($slider.swiper) return;
      const $navigation = $modal.querySelector('.gallery-slider-navigation') || null;
      const $prev = $navigation.querySelector('.button-icon--prev') || null;
      const $next = $navigation.querySelector('.button-icon--next') || null;
      const slider = new Swiper($slider, {
        slidesPerView: 1,
        speed: 600,
        spaceBetween: 0,
        watchOverflow: true,
        followFinger: isMobile.matches,
        shortSwipes: isMobile.matches,
        longSwipes: isMobile.matches,
        allowTouchMove: isMobile.matches,
        effect: isMobile.matches ? 'slide' : 'fade',
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: $next,
          prevEl: $prev,
        },
        lazy: {
          loadPrevNext: true,
        },
        thumbs: {
          swiper: thumbsSlider,
        },
        on: {
          slideChange(swiper) {
            const $previousSlide = swiper.slides[swiper.previousIndex];
            const $video = $previousSlide.querySelector('.plyr');
            if ($video) {
              const player = $video.player;
              if (player.playing) {
                player.pause();
              }
            }
          },
        },
      });
      if ($modal) {
        $modal.modal.openCallback = ($target) => {
          thumbsSlider.slides.forEach((slide, i) => {
            thumbsSlider.lazy.loadInSlide(i);
          });
          const $triggers = [...$target.parentNode.children];
          const index = $triggers.indexOf($target);
          slider.slideTo(index, 0, true);
        };
        $modal.modal.closeCallback = ($target) => {
          slider.slides.forEach(($slide) => {
            const $video = $slide.querySelector('.plyr');
            if ($video) {
              const player = $video.player;
              if (player.playing) {
                player.pause();
              }
            }
          });
        };
      }
    });
  }
}
