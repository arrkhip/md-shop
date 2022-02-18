import Swiper from 'swiper/swiper-bundle.min';

const asideSlider = document.querySelector('.aside-blog');
let slider;

if (asideSlider) {
  slider = new Swiper('.aside-blog .swiper', {
    spaceBetween: 20,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

if (!window.sliders) window.sliders = {};
if (slider) window.sliders.asideSlider = slider;
