document.getElementById("magicButton").addEventListener("click", () => {
  alert("Hi There, WELCOMEE!");
});

const playPauseButton = document.getElementById("play-pause-button");
const backgroundAudio = document.getElementById("background-audio");

playPauseButton.addEventListener("click", () => {
  if (backgroundAudio.paused) {
    backgroundAudio.play();
    playPauseButton.textContent = "Pause";
  } else {
    backgroundAudio.pause();
    playPauseButton.textContent = "Play";
  }
});


