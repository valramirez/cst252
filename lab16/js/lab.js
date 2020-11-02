/*
* Author: Val Ramirez <valeramirez@csumb.edu>
* Created: 02 November 2020
* License: Public Domain
* Credit: I got help from W3Schools after being stuck on this for awhile, here is the link I used to figure this out. https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_click_trigger
*/

//This function triggers an alert when the button is pressed.
$(document).ready(function(){
  $("button").click(function(){
    alert("WOAHHHHH. Did you expect this? I sure did.");
  });
});

//This will turn the button green.
$("button").css("color","green");
