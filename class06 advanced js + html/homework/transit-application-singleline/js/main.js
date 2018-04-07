
var sydneyTrains = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
// {
//     redLine: ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern",'Erskineville'],
//     blueLine: ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"],
//     yellowLine: ["Wynyard", "Townhall", "Central", "Redfern"]
// };

//Function to capitalise firstletters
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Create a function called travelFrom that receives a start station and an end station.
function travelFrom(startStation,endStation) {
    var start = capitaliseFirstLetter(startStation.toLowerCase());
    var end = capitaliseFirstLetter(endStation.toLowerCase());
    //check if stations exist
    if (sydneyTrains.includes(start) && sydneyTrains.includes(end)) {
        var numberofStops = Math.abs(sydneyTrains.indexOf(end) - sydneyTrains.indexOf(start));
        var message = "To go from "+start+" to "+end+" - you will need to go through "+numberofStops+" stops.";
        console.log(message);
    } else {
        console.log("Check yo' stations. One of them isn't existing yet!");
    }
};



station1 = "Macdonaldtown";
station2 = "Museum";

travelFrom(station1,station2);


station3 = "XYZ";
station4 = "Museum";
travelFrom(station3, station4);



// Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
// Print out the names of the stations on separate lines (e.g. log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")
// Bonus
// Make this work if you want to go backwards! e.g. You want to travel from "Redfern" to "St. James"
// Make it work across lines! I'll leave it up to you to create the data you need - but create arrays of multiple train lines in Sydney, and try it to get to print out the same things as above - but also things like "Swap lines at ....."
// This will be very, very difficult! Don't feel like you have to add in all the lines, just a few to prove that it is working
// Look at the hints below
// Hints
// You can receive the name of the line! (e.g. travelFrom("t2", "Circular Quay", "t3", "Canterbury"))
// Find the common station! (e.g. t2 and t3 both have "Central")
// Maybe drawing out the lines is a good approach!
// One of the easiest approaches to this is to treat a trip across lines as two separate trips
// An object with arrays stored under the name of the train lines might be a good way to approach it (e.g. var sydneyTrains = { t1: [], t2: [] };
// Note that if you want to use a variable to decide which line to access - dot notation won't work on an object! You'll have to think of another way...
