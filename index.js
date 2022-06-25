// on click/tap
// 1. play the next sequencial audio clip
// 2. generate a random number between 1 and 21, use this to display *.svg image with random position and rotation

var nextTrack = 0;
var numberOfTracks = 2;


window.addEventListener('touchstart', function() {
  console.log(nextTrack);
  audioPlay();
});


window.addEventListener('click', function() {
  // alert("the user touched the screen!!");
  console.log(nextTrack);
  audioPlay();
});


function randomImageNumber() {

}


function audioPlay() {
  if (nextTrack === numberOfTracks) {
    nextTrack = 0;
  } else if (nextTrack < numberOfTracks) {
    nextTrack = nextTrack + 1;
  }
}
