function init() {
  // grab elements once
  const hornSelect = document.getElementById("horn-select");
  const volumeSlider = document.getElementById("volume");
  const playButton = document.querySelector("button");
  const audio = document.getElementById("audio");
  const hornImage = document.getElementById("horn-image");
  const volumeImage = document.getElementById("volume-image");

  hornSelect.addEventListener("change", () => {
    const value = hornSelect.value;

    if (value === "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } 
    else if (value === "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } 
    else if (value === "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  volumeSlider.addEventListener("input", () => {
    const value = volumeSlider.value;

    audio.volume = value / 100;

    if (value == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } 
    else if (value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } 
    else if (value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } 
    else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });

  playButton.addEventListener("click", () => {
    audio.play();

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    } 
  });
}