function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  // Populate the voice dropdown
  function loadVoices() {
    voices = speechSynthesis.getVoices();
    // Clear existing options except the placeholder
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // Voices load asynchronously in most browsers
  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  // Talk button handler
  talkButton.addEventListener('click', function () {
    const text = textArea.value.trim();
    if (!text) return;
    if (voiceSelect.value === 'select') return;

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[parseInt(voiceSelect.value)];

    // Switch image to talking while speaking
    faceImage.src = 'assets/images/smiling-open.png';
    faceImage.alt = 'Talking face';

    utterance.addEventListener('end', function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    speechSynthesis.speak(utterance);
  });
}

window.addEventListener('DOMContentLoaded', init);