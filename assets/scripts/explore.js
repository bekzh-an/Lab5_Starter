// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById("voice-select");

  function loadVoices() {
  const voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const option = document.createElement("option");
    option.textContent = voice.name;
    option.value = voice.name;
    voiceSelect.appendChild(option);
  });
  const speakButton = document.getElementById("speak");
const textArea = document.getElementById("text-to-speak");
const face = document.querySelector("img");

speakButton.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(textArea.value);

  const voices = speechSynthesis.getVoices();
  const selectedVoice = voices.find(v => v.name === voiceSelect.value);
  utterance.voice = selectedVoice;

  utterance.onstart = () => {
    face.src = "assets/images/smiling-open.png";
  };

  utterance.onend = () => {
    face.src = "assets/images/smiling.png";
  };

  speechSynthesis.speak(utterance);
});
}

speechSynthesis.addEventListener("voiceschanged", loadVoices);
}