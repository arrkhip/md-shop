import Swiper from 'swiper/swiper-bundle.min';

const $slider = document.querySelector('.banners__slider');
let slider;

if ($slider) {
  const delay = +$slider.getAttribute('data-delay') || 5000;
  const speed = +$slider.getAttribute('data-speed') || 800;

  slider = new Swiper($slider, {
    loop: true,
    effect: 'fade',
    speed: speed,
    autoplay: {
      delay: delay,
    },
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

if (!window.sliders) window.sliders = {};
if (slider) window.sliders.banner = slider;
