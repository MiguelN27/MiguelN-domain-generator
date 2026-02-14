import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  const colors = ["Black", "Red", "White", "Green", "Pink"];
  const animals = ["Wolf", "Chicken", "Panther", "Crocodile"];

  for (let colorIndex = 0; colorIndex < colors.length; colorIndex++){
      for (let animalIndex = 0; animalIndex < animals.length; animalIndex++){
        console.log(colors[colorIndex] + " " + animals[animalIndex]);
      }
  }






};
