
// this here is a feature we added so the user can play the game in order. The user has to get a key word from a different room in order to proceeed

function itemSort(str) {
  len = str.length;
  mod = len % 9;

//here are the conditionals that are assigned to the user. The correct answer is "photograph"
    if (mod == 0) {
      return "Looks like you didn't write anything. Stop wasting our time and go look!"
    }
    if (mod > 1) {
      return "Hmm.. That doesn't sound right. The item you are searching for is in <b>the kitchen</b>."
    }
    else if (mod == 1) {
      return "That's correct! You may enter the room with caution."
    }
  }

// what will be visible on the page
      var myButton = document.getElementById("mybutton");
      myButton.addEventListener("click", function() {
      var name = document.getElementById("input").value;
          var item = itemSort(name);
          newText = "<p>" + item + "</p>";
        document.getElementById("output").innerHTML = newText;
})
