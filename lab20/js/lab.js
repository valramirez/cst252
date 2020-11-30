/*
* Author: Val Ramirez <valeramirez@csumb.edu>
* Created: 29 November 2020
* License: Public Domain
* Credit: Wes Modes via thier Lecture notes via iLearn -> https://ilearn.csumb.edu/pluginfile.php/1597816/mod_resource/content/0/CST252%20-%20Lecture%2022%20-%20JSON%20and%20APIs.pdf

*/


//The information below will use JSON to allow us to link the comic into our webpage
  endpoint="https://xkcd.com/info.0.json"

  // add event listener
$("button").click(function(){
    	$.ajax({
        // The URL for the request
        url: endpoint,
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
      })
      // If the request succeeds
      .done(function( data ) {
          // console.log(data);
          var imageUrl = data.img;
          var title = data.title;
          var alt = data.alt;
          var html = `<div id="imageblock">
              <h2>${title}</h2>
              <img src="${imageUrl}" + title="${alt}"><br>
          </div>`
          //allows it show up on the page
          console.log("My new html: ", html);
          $("#output").html(html);
      })

      // If the request fails
      .fail(function( xhr, status, errorThrown ) {
          console.log(errorThrown + " Status:" + status );
    	})
    })
