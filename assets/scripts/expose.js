window.addEventListener('load', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.getElementById("horn-image");
  const audio = document.getElementById("audio");

  hornSelect.addEventListener("change", () => {
  const value = hornSelect.value;

  if (value === "air-horn") {
    hornImage.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  } else if (value === "car-horn") {
    hornImage.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  } else if (value === "party-horn") {
    hornImage.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  }
});
const volumeSlider = document.getElementById("volume");
const volumeImage = document.getElementById("volume-image");

volumeSlider.addEventListener("input", () => {
  const value = volumeSlider.value;

  // update volume (0–1)
  audio.volume = value / 100;

  // update icon
  if (value == 0) {
    volumeImage.src = "assets/icons/volume-level-0.svg";
  } else if (value < 33) {
    volumeImage.src = "assets/icons/volume-level-1.svg";
  } else if (value < 67) {
    volumeImage.src = "assets/icons/volume-level-2.svg";
  } else {
    volumeImage.src = "assets/icons/volume-level-3.svg";
  }
});
const playButton = document.querySelector("button");
const jsConfetti = new JSConfetti();

playButton.addEventListener("click", () => {
  audio.play();

  if (hornSelect.value === "party-horn") {
    jsConfetti.addConfetti();
  }
});
}