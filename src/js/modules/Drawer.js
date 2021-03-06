import ClassToggler from './ClassToggler';

const _instances = {};

export default class Drawer extends ClassToggler {
  constructor(options) {
    // Обязательные опции
    options = Object.assign({}, defaultOptions, options);
    super(options);

    // Кастомные опции (свойства необходимые только для этого класса)
    this.openOnLoad = options.$el.hasAttribute('data-open-on-load') || options.openOnLoad;
    this.openOnFocus = options.$el.hasAttribute('data-open-on-focus') || options.openOnFocus;
    this.$el = options.$el;
    this._zIndex = 9;
    this.init();
  }

  init() {
    if (this.openOnLoad) this.open();

    this.$el.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        this.close();
      }
    });

    _instances[this.id] = this;
  }

  open(e) {
    super.open();

    if (this.openOnFocus) {
      setTimeout(() => this.$el.querySelector('.input').focus(), 100);
    }

    this._incZIndex();
  }

  close() {
    super.close();

    this._normilizeZIndex();
  }

  _incZIndex() {
    const zIndexArray = [];

    Object.keys(_instances).forEach((key, i) => (zIndexArray[i] = _instances[key]._zIndex));

    const biggestZindex = Math.max.apply(null, zIndexArray);

    this.$el.style.zIndex = biggestZindex + 1;
    this._zIndex = biggestZindex + 1;
  }

  _normilizeZIndex() {
    this.$el.style.zIndex = '';
    this._zIndex = 9;
  }

  static initAll() {
    const $drawers = document.querySelectorAll('.j_drawer');

    $drawers.forEach(($drawer) => {
      const id = $drawer.getAttribute('id');
      const $triggers = document.querySelectorAll(`[data-drawer-target="#${id}"]`);

      // eslint-disable-next-line no-new
      new Drawer({
        id: id,
        $toggleBtns: $triggers,
        $closeBtns: $drawer.querySelectorAll('.j_closeDrawer'),
        $el: $drawer,
      });
    });
  }

  static closeAll() {
    for (const id in _instances) {
      _instances[id].close();
    }
  }

  static open(id) {
    _instances[id].open();
  }

  static close(id) {
    _instances[id].close();
  }

  static setCloseCallback(id, callback) {
    _instances[id].closeCallback = callback;
  }

  static setOpenCallback(id, callback) {
    _instances[id].openCallback = callback;
  }
}

const defaultOptions = {
  scrollLock: true,
  openOnLoad: false,
  openOnFocus: false,

  closeCallback: function() {},

  openCallback: function(target) {},
};

Drawer.initAll();

window.Drawer = Drawer;
