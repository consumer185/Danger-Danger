// on click/tap
// 1. play the  audio track
// 2. generate a random number between 0 and 20, use this to display *.svg image with random position and rotation


var audioElement = new Audio('audio/Danger.mp3');
var numberOfImages = 20;


window.addEventListener('touchstart', function() {
  audioPlay();
  imageDisplay();
  console.log("now playing the following audio: " + nextTrack);
  console.log("now displaying the following image: " + imageToDisplay);
});


window.addEventListener('click', function() {
  audioPlay();
  imageDisplay();
  console.log("now playing the following audio: " + nextTrack);
  console.log("now displaying the following image: " + imageToDisplay);
});


function imageDisplay() {
  randomNumber = Math.floor(Math.random() * 21);
imageToDisplay = randomNumber + ".svg";


}


function audioPlay() {
  audioElement.play();
}
