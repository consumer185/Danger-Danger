// on click/tap
// 1. play the next sequencial audio clip
// 2. generate a random number between 0 and 20, use this to display *.svg image with random position and rotation

var nextTrack = 0;
var numberOfTracks = 2;
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

  if (nextTrack === numberOfTracks) {
    nextTrack = 0;
  } else if (nextTrack < numberOfTracks) {
    nextTrack = nextTrack + 1;
  }
}
