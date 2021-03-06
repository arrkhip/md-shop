import ClassToggler from './ClassToggler';
export default class Menu extends ClassToggler {
  constructor(options) {
    super(options);
    this.scrollLock = true;
  }
}

const menu = new Menu({
  $el: document.querySelector('.j_menu'),
  $additionalElements: [document.querySelector('.header')],
  $closeBtns: document.querySelectorAll('.j_closeMenu'),
  $openBtns: document.querySelectorAll('.j_openMenu'),
  $toggleBtns: document.querySelectorAll('.j_toggleMenu'),
  closeOnDocumentClick: true,
  noId: true,
});

export { menu };
