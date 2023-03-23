

const startBtn = document.querySelector('button[data-start]');
console.log(startBtn)
const stopBtn = document.querySelector('button[data-stop]');
console.log(stopBtn)
const bodyEl = document.querySelector('body')
console.log(bodyEl)

let timerId = null;

function startChangeColor(event) {
  if (timerId) {
    return;
  }
timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
}, 1000);
  isStartBtnActive()
  
};

function stopChangeColor(event){
  timerId = clearInterval(timerId);
  
  isStopBtnActive()
};

function isStartBtnActive() {
  if (startChangeColor) { startBtn.disabled = true;  
  }
  stopBtn.disabled = false;
}

function isStopBtnActive() {
  if (stopChangeColor) { stopBtn.disabled = true;  
  }
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener("click", startChangeColor)
stopBtn.addEventListener("click", stopChangeColor)
