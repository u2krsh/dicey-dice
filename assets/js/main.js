var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate Random randomNumber

var randomDiceImage = randomNumber1 + ".png"; // To Select Image based on Random Number

var randomImageSource = "assets/" + "img/" + randomDiceImage //Image Source img/1.png - img/6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
