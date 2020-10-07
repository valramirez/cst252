/*Author: Val Ramirez <valeramirez@csumb.edu>
*Created: 6 October
*Special Thanks to :
    * Wes Modes for their resources, here is the base we used to complete the assignment "https://ilearn.csumb.edu/pluginfile.php/1597757/mod_assign/intro/Screen%20Shot%202019-10-06%20at%2011.09.44%20AM.png"
    * Caden Albertson, my lab partner who helped me get through this lab
*/

// depending on length mod 13 (for the spooky szn), these will "return" the movie based on the length of the string
function movieSort(str) {
  len = str.length;
  mod = len % 13;

//here are the conditionals or options that will be assigned to the user
    if (mod == 0) {
      return "absolutely nothing. Try again man."
    }
    else if (mod == 1) {
      return "Tim Burton's The Nightmare Before Christmas!"
    }
    else if (mod == 2) {
      return "The Addams Family!"
    }
    else if (mod == 3) {
      return "Beetlejuice!"
    }
    else if (mod == 4) {
      return "ParaNorman!"
    }
    else if (mod == 5) {
      return "Halloweentown!"
    }
    else if (mod == 6) {
      return "Tim Burton's Corpse Bride!"
    }
    else if (mod == 7) {
      return "Twitches!"
    }
    else if (mod == 8) {
      return "Hocus Pocus!"
    }
    else if (mod == 9) {
      return "Jumanji!"
    }
    else if (mod == 10) {
      return "Ghostbusters!"
    }
    else if (mod == 11) {
      return "Hotel Transylvania!"
    }
    else if (mod == 12) {
      return "Scared Shrekless! Great choice!"
    }
  }

// what will be visible on the page
      var myButton = document.getElementById("mybutton");
      myButton.addEventListener("click", function() {
      var name = document.getElementById("input").value;
          var movie = movieSort(name);
          newText = "<p>Based on the criteria you provided, you should watch " + movie + "</p>";
        document.getElementById("output").innerHTML = newText;
})
