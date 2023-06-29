function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  while (true) {
    var audio = new Audio("../assets/vine boom.mp3");
    audio.volume = 0.3;
    audio.play();
    await sleep(5000);
  }
}

document.addEventListener("DOMContentLoaded", demo());
