// Timer
const deadline = document.querySelector('.timer__items').getAttribute('data-deadline');

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((t / 1000 / 60) % 60);

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector);
  const days = timer.querySelector('#days');
  const hours = timer.querySelector('#hours');
  const minutes = timer.querySelector('#minutes');
  const timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(endtime);

    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }

    if (t.total < 0) {
      days.innerHTML = '00';
      hours.innerHTML = '00';
      minutes.innerHTML = '00';
    }
  }
}

setClock('.timer__items', deadline);
