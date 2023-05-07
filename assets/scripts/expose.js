// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornTypes = document.getElementById('horn-select'); 
  let hornImg = document.querySelector('img'); 
  var hornAudio = document.querySelector('audio'); 

  //default image and audio are set to airhorn with 50% volume
  hornImg.src = "assets/images/air-horn.svg"; 
  hornAudio.src = 'assets/audio/air-horn.mp3'; 
  hornAudio.volume = 0.5; 

  //change horn image and audio element if option is changed
  hornTypes.addEventListener("input", changeHorn); 
  function changeHorn(){
    if(hornTypes.value == 'air-horn'){
      hornImg.src = "assets/images/air-horn.svg"; 
      hornAudio.src = 'assets/audio/air-horn.mp3';
    } else if(hornTypes.value == 'car-horn'){
      hornImg.src = "assets/images/car-horn.svg";
      hornAudio.src = 'assets/audio/car-horn.mp3';
    } else {
      hornImg.src = "assets/images/party-horn.svg"; 
      hornAudio.src = 'assets/audio/party-horn.mp3';
    }
  }

  let volumeSlider = document.getElementById('volume');
  let volumeImg = document.querySelector('div img');

  //changes volume img and volume of audio element if volume slider is changed.
  volumeSlider.addEventListener("input", changeVolume); 
  function changeVolume(){
    if(volumeSlider.value == 0){
      volumeImg.src = 'assets/icons/volume-level-0.svg'; 
      hornAudio.volume = volumeSlider.value / 100; 
    } else if(volumeSlider.value >= 1 && volumeSlider.value < 33){
      volumeImg.src = 'assets/icons/volume-level-1.svg';
      hornAudio.volume = volumeSlider.value / 100;
    } else if(volumeSlider.value >= 33 && volumeSlider.value < 67){
      volumeImg.src = 'assets/icons/volume-level-2.svg';
      hornAudio.volume = volumeSlider.value / 100;
    } else {
      volumeImg.src = 'assets/icons/volume-level-3.svg';
      hornAudio.volume = volumeSlider.value / 100;
    } 
  }

  //plays audio and adds confetti when the play button is clicked. 
  let playBtn = document.querySelector('button'); 
  const jsConfetti = new JSConfetti()

  playBtn.addEventListener("click", function(){
    if(hornTypes.value=='party-horn'){
      hornAudio.play(); 
      jsConfetti.addConfetti()
    } else {
      hornAudio.play(); 
    }
  }); 
} 

