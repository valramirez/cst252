/*
* Author: Val Ramirez <valeramirez@csumb.edu>
* Created: 02 November 2020
* License: Public Domain
* Credit: to Eddie Aleman <ealeman@csumb.edu> for helping me troubleshoot some of the issues that arose while working on this assignment. Aslo credits to w3schools for their resource on toggling buttons using jQuery. Diret link to resource is https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_toggle
*/

// The functions below will change the color of the text when pressed.

  // This changes the "Challenge" section to red.
    $(document).ready(function(){
      $("#challenge-button").click(function(){
          $("#challenge").css({"color": "red"});},
      );
    });

    // This changes the "Problems" section to blue.
      $(document).ready(function(){
        $("#problems-button").click(function(){
            $("#problems").css({"color": "blue"});},
        );
      });

      // This changes the "Results" section to yellow.
        $(document).ready(function(){
          $("#results-button").click(function(){
              $("#results").css({"color": "yellow"});},
          );
        });
