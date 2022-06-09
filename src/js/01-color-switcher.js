const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("[data-start]"),
  stopBtn: document.querySelector("[data-stop]")
}

const INTERVAL_DELAY = 1000;
let intervalId = null;

refs.startBtn.addEventListener("click", changeColor);
refs.stopBtn.addEventListener("click", stopChangeColor);
refs.stopBtn.setAttribute("disabled", true);

function changeColor() {
    intervalId = setInterval(() => {
        const newColor = getRandomHexColor();
        refs.body.style.backgroundColor = newColor;
        console.log(newColor)}
   , INTERVAL_DELAY);
   refs.startBtn.setAttribute("disabled", true);
   refs.stopBtn.removeAttribute("disabled");
}

function stopChangeColor() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



