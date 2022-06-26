// on click/tap
// 1. play the  audio track
// 2. generate a random number between 0 and 20, use this to display *.svg image with random position and rotation


var audioElement = new Audio('audio/Danger.mp3');
var numberOfImages = 20;


window.addEventListener('touchstart', function() {
  // audioPlay();
  imageDisplay();

  console.log("now displaying the following image: " + imageToDisplay);
});


window.addEventListener('click', function() {
  // audioPlay();
  imageDisplay();

  console.log("now displaying the following image: " + imageToDisplay);
});


function imageDisplay() {
  randomNumber = Math.floor(Math.random() * 21);
  imageToDisplay = randomNumber + ".svg";

  const img = new Image(100, 100); // width, height
  img.src = "images/" + imageToDisplay;
  img.style.position = 'fixed';
  img.style.top = '1px';
img.style.bottom = '1px';
img.style.left = '1px';
img.style.right = '1px';

  document.body.appendChild(img);


}


function audioPlay() {
  audioElement.play();
}
