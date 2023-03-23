
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
console.log(startBtn)
const stopBtn = document.querySelector('button[data-stop]');
console.log(stopBtn)
const bodyEl = document.querySelector('body')
console.log(bodyEl)

function startChangeColor(event) {
    
timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  

};

function stopChangeColor(event){
clearInterval(timerId);
};

startBtn.addEventListener("click", startChangeColor)
stopBtn.addEventListener("click", stopChangeColor)
