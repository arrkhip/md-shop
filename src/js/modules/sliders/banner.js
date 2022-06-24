import Swiper from 'swiper/swiper-bundle.min.js';

const $slider = document.querySelector('.banners__slider');
let slider;

const controls = $slider.querySelector('.banners-navigation');
const controlsNumber = $slider.querySelector('.banners-pagination');

let effect = 'fade';
let crossFade = true;

const countSlides = $slider.querySelectorAll('.swiper-slide');
if (countSlides.length <= 1) {
  controls.style.display = 'none';
  controlsNumber.style.display = 'none';
  effect = '';
  crossFade = false;
}

if ($slider) {
  const delay = +$slider.getAttribute('data-delay') || 5000;
  const speed = +$slider.getAttribute('data-speed') || 800;

  slider = new Swiper($slider, {
    loop: false,
    effect: effect,
    speed: speed,
    autoplay: {
      delay: delay,
    },
    fadeEffect: {
      crossFade: crossFade,
    },
    pagination: {
      el: '.banners__slider .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.banners__slider .swiper-button-next',
      prevEl: '.banners__slider .swiper-button-prev',
    },
  });
}

if (!window.sliders) window.sliders = {};
if (slider) window.sliders.banner = slider;
