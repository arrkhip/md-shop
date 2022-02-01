import 'blowup/lib/blowup';

if (window.$) {
  const $scale = document.querySelector('[data-blowup-scale]');

  const scale = $scale && +$scale.getAttribute('data-blowup-scale');

  window.$(document).ready(function() {
    const $imgs = document.querySelectorAll('.j_blowup');

    if ($imgs.length) {
      $imgs.forEach(($img) => {
        const $video = $img.closest('.product--video');

        if ($video) return;

        window.$($img).blowup({
          cursor: false,
          width: 192,
          height: 192,
          scale: scale || 1,
          border: '2px solid #231F20',
        });
      });
    }
  });
}
