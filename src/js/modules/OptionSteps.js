let curPage = 0;

const $buttonsNext = document.querySelectorAll('.js-next-page');
const $buttonsPrev = document.querySelectorAll('.js-prev-page');
const $pages = document.querySelectorAll('.js-page'); 

$buttonsNext.forEach($btn => $btn.addEventListener('click', next))
$buttonsPrev.forEach($btn => $btn.addEventListener('click', back))

function next() {
    if (!$pages[curPage + 1]) return;
    curPage++;
    render();
}

function render() {
    $pages.forEach($page => $page.classList.remove('active'));
    $pages[curPage].classList.add('active');
}


function back() {
  if (!$pages[curPage - 1]) return;
  curPage--;
  render();
}