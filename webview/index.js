// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function demo() {
//   while (true) {
//     var audio = new Audio("../assets/vine boom.mp3");
//     audio.volume = 0.3;
//     audio.play();
//     await sleep(5000);
//   }
// }

// document.addEventListener("DOMContentLoaded", demo());

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let int = null;

function displayTimer() {
  milliseconds += 100;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;
  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

function runTimer() {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 100);
}
