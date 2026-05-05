// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const speakButton = document.getElementById("speak");
  const textArea = document.getElementById("text-to-speak");
  const face = document.querySelector("img");

  function loadVoices(){
    const voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = "";

    voices.forEach(voice =>{
      const option = document.createElement("option");
      option.textContent = `${voice.name}(${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }
  speechSynthesis.addEventListener("voiceschanged",loadVoices);

  speakButton.addEventListener("click",()=>{
    const text = textArea.value;

    if(!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(v => v.name === voiceSelect.value);
    if(selectedVoice){
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => {
      face.src = "assets/images/smiling-open.png";
    };

    utterance.onend = () => {
      face.src = "assets/images/smiling.png";
    };

    speechSynthesis.speak(utterance);
  });
}