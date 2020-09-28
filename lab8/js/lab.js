/*
 * Author: Val Ramirez <valeramirez@csumb.edu>
 * Created: 27 September
 * License: Public Domain
 */


//  Define functions
function firstThing(test) {
    console.log(test + ": This is the first thing.");
  }

function secondThing(test) {
    console.log(test + ": This is the second thing.<br>");
}

function thirdThing(test) {
    console.log(test + ": This is the third thing.<br>");
}

//testing these bad bois
    firstThing("Test one!");
    secondThing("Test one!");
    thirdThing("Test one!");

//alright gamers it's time for round two
    setTimeout(function() {
      firstThing('Here is Test Two!');
    }, 0);

    setTimeout(function() {
      secondThing('Here is Test Two!');
    }, 0);

    setTimeout(function() {
      thirdThing('Here is Test Two!');
    }, 0);

//Glad this is working!! Here is the ~final~ round
    setTimeout(function() {
      secondThing('Test Three right here!');
    }, 0);

    setTimeout(function() {
      thirdThing('Test Three right here!');
    }, 0);

    setTimeout(function() {
      firstThing('Test Three right here!');
    }, 0);

//
