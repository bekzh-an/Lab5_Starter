const jsConfetti = new JSConfetti();

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const hornImage = document.querySelector('#expose img');
  const volumeIcon = document.querySelector('#volume-controls img');

  // Set initial volume on the audio element (slider starts at 50)
  audio.volume = volumeSlider.value / 100;

  // Horn selection handler
  hornSelect.addEventListener('change', function () {
    const selected = hornSelect.value;

    // Update image
    hornImage.src = `assets/images/${selected}.svg`;
    hornImage.alt = selected.replace('-', ' ');

    // Update audio source
    audio.src = `assets/audio/${selected}.mp3`;
  });

  // Volume slider handler
  volumeSlider.addEventListener('input', function () {
    const vol = parseInt(volumeSlider.value);

    // Update audio volume (0–1 range)
    audio.volume = vol / 100;

    // Update volume icon
    if (vol === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  // Play button handler
  playButton.addEventListener('click', function () {
    if (!hornSelect.value || hornSelect.value === 'select') return;

    // Rewind and play
    audio.currentTime = 0;
    audio.play();

    // Confetti for party horn
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}

window.addEventListener('DOMContentLoaded', init);