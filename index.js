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

  //get a random number to reference images
  randomNumber = Math.floor(Math.random() * 21);
  imageToDisplay = randomNumber + ".svg";

  // give image random size between 50 and 300
  randomScale = Math.floor(Math.random() * (300 - 50 + 1) + 50);
  const img = new Image(randomScale, randomScale); // width, height
  img.src = "images/" + imageToDisplay;

  // setup as fixed position
  img.style.position = 'fixed';

  // give image random positions according to page size
  randomPositionTop = Math.floor(Math.random() * 1500);
  randomPositionLeft = Math.floor(Math.random() * 865);

  //random rotation
  randomRotation = Math.floor(Math.random() * 360);
  img.style.transform = "rotate("+ randomRotation +"deg)";

  img.style.top = randomPositionTop + 'px';
  img.style.left = randomPositionLeft + 'px';



  //append image to document body
  document.body.appendChild(img);
}


function audioPlay() {
  audioElement.play();
}
