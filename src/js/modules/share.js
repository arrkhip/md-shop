import Helper from './helpers/Helper';

const $share = document.querySelector('.j_product-share');

if ($share) {
  const $button = $share.querySelector('.product-share__button');

  if ($button) {
    $button.addEventListener('click', toggle);
    document.addEventListener('click', hide);
  }
}

function toggle() {
  $share.classList.toggle('active');
}

function hide(e) {
  const isTargetOfChild = Helper.isParentHasClass(e.target, 'product-share__button');

  if (!isTargetOfChild) {
    if ($share.classList.contains('active')) {
      $share.classList.remove('active');
    }
  }
}
