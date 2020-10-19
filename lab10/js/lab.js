/*Author: Val Ramirez <valeramirez@csumb.edu>
*Created: 5 October // Updated Sun Oct 18, 2020
*Special Thanks to :
    Wes Modes for their lecture notes and resources via JS Fiddle, https://jsfiddle.net/wmodes/1m4v39ge/23/, base was used and I changed the text
    Ashlyn Einhell for their help with troubleshooting and
    Caden Albertson for listenting to me complain about how much I don't understand these assignments.
*/


//here is what will appear in the output section
var button = document.getElementById("myButton");
var input = document.getElementById("input");
var heading = document.getElementById("heading");
var hey = document.getElementById("hey");
var scramble = document.getElementById("scramble");


//getting the button to work
function buttonPress() {

  // get input from field
  var inputText = input.value;

  // add inp
  heading.innerText = "Nice to meet you, " + inputText + "! That's a pretty cool name you got there!";

  // calls attention to user
  hey.innerText = "Hey " + inputText + ", want to see something cool?";

    //sortUserName -  takes user input and sorts the letters of their name
    // taken from Lab 7 via Wes' notes, here is the direct link https://ilearn.csumb.edu/mod/assign/view.php?id=1229873

    function sortUserName() {
    var userName = input.value;
    console.log("username =", userName);

    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
    }

// scrambles the user input
  scramble.innerText = "I did some funky JS magic and now your new name is " + sortUserName();


  // clear field value
  input.value = "";

  input.focus();
}

button.addEventListener("click", buttonPress);
