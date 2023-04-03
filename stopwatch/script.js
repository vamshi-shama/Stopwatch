const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let startTime, interval;

function startTimer() {
  startTime = Date.now();
  interval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  hours.textContent = '00';
  minutes.textContent = '00';
  seconds.textContent = '00';
}

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  const hoursValue = Math.floor(elapsedTime / 3600000);
  const minutesValue = Math.floor((elapsedTime % 3600000) / 60000);
  const secondsValue = Math.floor((elapsedTime % 60000) / 1000);

  hours.textContent = pad(hoursValue);
  minutes.textContent = pad(minutesValue);
  seconds.textContent = pad(secondsValue);
}

function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
