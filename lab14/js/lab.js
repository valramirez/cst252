/*
* Author: Val Ramirez <valeramirez@csumb.edu>
* Created: 20 October 2020
* License: Public Domain
*/

// declaring the contstructor
    function Vehicle(make, model, year, color) {
      this.color = color;
      this.year = year;
      this.make = make;
      this.model = model;

      this.info = function () {
        return this.make + this.model + this.year + this.color;
      }
    }

// assigning the "Instantiate objects" which are the cars
    var firstCar = new Vehicle(" gray ", 2006, " Hyundai", " Sonota. " );
      document.getElementById("output").innerHTML += "When I was 14, I learned how to drive in a " + firstCar.info();
      document.getElementById("output").innerHTML += "Obviously I was not the best driver since I had crashed into a mud pit withing twenty minutes behind the wheel. " + "</p>";
      console.log(firstCar);


    var faveCar = new Vehicle(" red ",  2000," Volswagon", " Beetle.");
    document.getElementById("output").innerHTML += "My favorite car I owned was a " + faveCar.info() + " I think about this car almost every single day. I used to have the best vibes driving this bad boy around town." + "</p>";
      console.log(faveCar);

    var newCar = new Vehicle(" brown ", 2008, " Suzuki", " Forenza");
      document.getElementById("output").innerHTML += "I currently drive a " + newCar.info() + " covered in anime stickers. Middle School me would have been easily impressed by the car I drive right now. My favorite part about this vehicle is the very iconic Hatsune Miku on my license plate." + "</p>";
      console.log(newCar);
