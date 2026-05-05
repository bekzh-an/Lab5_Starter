window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const volumeSlider = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const audio = document.querySelector("audio");

  const jsConfetti = new JSConfetti();

  // 🎺 horn change
  hornSelect.addEventListener("change", () => {
    if (hornSelect.value === "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (hornSelect.value === "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (hornSelect.value === "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  // 🔊 volume
  volumeSlider.addEventListener("input", () => {
    const value = volumeSlider.value;
    audio.volume = value / 100;

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

  // ▶️ play
  playButton.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}