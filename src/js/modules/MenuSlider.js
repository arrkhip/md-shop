import { menu } from '../modules/Menu';

export default class MenuSlider {
  constructor($el) {
    this.$el = $el;
    this.$wrapper = this.$el.closest('.menu-body');
    this.$items = [...this.$el.querySelectorAll('li')];
    this.$buttons = this.$items
      .filter(($item) => $item && $item.firstElementChild)
      .map(($item) => $item.firstElementChild);
    this.$slides = this.$buttons
      .filter(($button) => $button && $button.nextElementSibling)
      .map(($button) => $button.nextElementSibling);
    this.$backs = this.$el.querySelectorAll('.j_menu-back');

    this.init();
  }

  init() {
    this.$buttons.forEach(($button) => $button.addEventListener('click', this.slideTo.bind(this, $button)));

    this.$backs.forEach(($back) => $back.addEventListener('click', this.back.bind(this, $back)));
  }

  slideTo($button) {
    const $slide = $button.nextElementSibling;

    if ($slide) {
      $slide.classList.add('active');
      this.lockScroll($slide);
    }
  }

  back($back) {
    const $slide = $back.closest('ul');

    if ($slide) {
      $slide.classList.remove('active');
      this.unlockScroll($slide);
    }
  }

  backToHome() {
    this.$slides.forEach(($slide) => $slide.classList.remove('active'));
  }

  lockScroll($slide) {
    const $parentSlide = $slide.parentElement.closest('.menu-slider__sublist') || this.$wrapper;

    // $parentSlide.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    // });

    $parentSlide.classList.add('scroll-locked');
  }

  unlockScroll($slide) {
    const $parentSlide = $slide.parentElement.closest('.menu-slider__sublist') || this.$wrapper;

    $parentSlide.classList.remove('scroll-locked');
  }
}

const $menuSlider = document.querySelector('.j_menu-slider');

if ($menuSlider) {
  const menuSlider = new MenuSlider($menuSlider);

  menu.closeCallback = () => {
    menuSlider.backToHome();
  };
}
