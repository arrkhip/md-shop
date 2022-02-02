import Plyr from 'plyr';

window.addEventListener('load', () => {
  const $btns = document.querySelectorAll('.j_player-play');

  if ($btns.length) {
    $btns.forEach(($btn) => {
      const $section = $btn.closest('.j_player-wrapper') || $btn.closest('section');
      const $player = $section.querySelector('.j_player');
      const $iframe = $player.querySelector('iframe') || $player;

      const opts = {};

      const autoplay = $iframe.hasAttribute('data-autoplay');

      if (autoplay) {
        opts.autoplay = autoplay;
        opts.muted = true;
        opts.controls = ['mute'];
        opts.loop = {
          active: true,
        };
        opts.clickToPlay = false;
        opts.fullscreen = false;

        load($player, $iframe, opts);

        return;
      }

      $btn.addEventListener('click', () => load($player, $iframe, opts));
    });
  }
});

function load($player, $iframe, opts) {
  const src = $iframe.getAttribute('data-src');
  $iframe.setAttribute('src', src);

  const player = new Plyr($player, opts);

  player.on('ready', () => {
    if (!player.autoplay) {
      player.volume = 1;
    }

    player.play();
  });

  $player.player = player;
}
