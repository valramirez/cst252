/*
 * Author: Val Ramirez <valeramirez@csumb.edu>
 * Created: 20 September
 * License: Public Domain (?)
 */



//Define Variables
myTransport = ['car', ' bus', ' walk', ' bike']

myMainRide = {
    make: "Suzuki",
    model : "Forenza",
    color : "Brown",
    year : 2007,
}


/* Output Borrowed from
* Author: Wes Modes <wmodes@csumb.edu>
* Created: 13 September
* License: Public Domain
* Hyperlink: <a href="https://wmodes.github.io/cst252/lab6/js/lab6.js"
 */
// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
