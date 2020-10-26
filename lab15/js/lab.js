/*
* Author: Val Ramirez <valeramirez@csumb.edu>
* Created: 20 October 2020
* License: Public Domain
* Credit to: Tyler Wilson <tylwilson@csumb.edu> for the code they provided via Slack General Channel. https://repl.it/@Rumus/Object-Oriented-Design#index.js
*/

// declaring the contstructor
class Car {
  constructor(brand, model, year, color) {
    this.carname = brand;
    this.carmodel = model;
    this.caryear = year;
    this.carcolor = color;
  }
  info() {
    return "I have a " + this.carname + " " + this.carmodel + " " + this.caryear + " " + this.carcolor + ".";
  }
}

// adding the car information to the class constructor
  mycar = new Car("Suzuki", "Forenza", "2008", "Brown");
  document.getElementById("output").innerHTML += "<p>" + mycar.info() + "</p>";

//use mycar.info() to call the function, below is what will return when you enter  this in the console log.
    // mycar.info()
    // << ""I have a Suzuki Forenza 2008 Brown."


// ------------------- Task 2: Design an OOP Design for Hangman -------------------

document.getElementById("output").innerHTML += "<p>" + "To view the second task for this lab, click on the link below." + "</p>";

// ok so here is my ~attempt~ at trying to make this work using the lecture notes as a reference. I only made it up to part 4 because I was a bit confused on which ways we could implement it in our code.

      // set up the game
          // create player
          // create game board

      // start the game loop [Hangman]
          // render the board
          // render alphabet
          // Player selects letters to play the game
              // if player guesses letters correctly then game ends
              // stop looping
          // Else
              // Keep looping until Player reaches max amount of tries
              // End Screen with a big old "You Lose :("
              // Switch to next player and continue looping
