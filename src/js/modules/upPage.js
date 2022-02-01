(function() {
  'use strict';

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.button__up');
  if(goTopBtn) {
    goTopBtn.addEventListener('click', backToTop);
  }
})();
