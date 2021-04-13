document.getElementById('btn1').addEventListener("click", function(){
  var audio = new Audio ("assets/sound.mp3"); // Directory of the audio.
  audio.play(); // Calling the function.
});

document.getElementById('btn1').addEventListener("click", function(){
  var randomNumber = Math.floor(6*Math.random())+1;   // To generate a random number (b/w 0 - 0.99) and then multiplying the resultant with 6
  var randomImage = randomNumber + ".png"; // To point at the picture (For example: 1.png to 6.png).
  var randomImageSource = "assets/img/" + randomImage; // To point at image with its directory i.e source.

  var images = document.querySelectorAll("img")[0];
  images.setAttribute("src", randomImageSource);

  document.querySelector("h3").innerHTML = "You rolled a " + randomNumber;
});
