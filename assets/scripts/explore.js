// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voices = speechSynthesis.getVoices(); 
  //console.log(voices); 
  let voiceSelect = document.getElementById('voice-select'); 
  console.log(voiceSelect); 

  setTimeout(populateList, 100); 

  function populateList(){
    console.log(voices);
    for(let i = 0; i < voices.length; i++){
      const option = document.createElement('option'); 
  
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option)    
    }
  }


  let readTxt = document.getElementById('text-to-speak'); 
  let faceImg = document.querySelector('img'); 

  //voiceSelect.addEventListener("input", changeVoice); 

  let speakBtn = document.querySelector('button'); 
  speakBtn.addEventListener("click", function(){
    let utterThis = new SpeechSynthesisUtterance(readTxt.value);
    console.log(readTxt.value); 
    utterThis.voice = voices[voiceSelect.selectedIndex - 1];
    console.log(voiceSelect.selectedIndex); 
    speechSynthesis.speak(utterThis);
    faceImg.src = 'assets/images/smiling-open.png' 

    utterThis.addEventListener("end", function(){
      faceImg.src = 'assets/images/smiling.png'
    })
  })
}