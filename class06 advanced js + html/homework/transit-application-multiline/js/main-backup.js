console.log("Welcome to my Transit Application!")

var sydneyTrains = {
    redLine: [
        "Museum", 
        "St James", 
        "Circular Quay", 
        "Wynyard", 
        "Townhall", 
        "Central", 
        "Redfern",
        "Erskineville"
    ],
    blueLine: [
        "Museum", 
        "St James", 
        "Circular Quay", 
        "Wynyard", 
        "Townhall", 
        "Central", 
        "Redfern", 
        "Macdonaldtown", 
        "Newtown"
    ],
    yellowLine: [
        "Wynyard", 
        "Townhall", 
        "Central", 
        "Redfern"
    ],
    navyLine: [
        "Tempe",
        "Sydenham",
        "Redfern",
        "Central",
        "Town Hall",
        "Martin Place",
        "Kings Cross",
        "Edgecliff",
        "Bondi Junction",
    ]
};


var redLine = sydneyTrains.redLine;
var blueLine = sydneyTrains.blueLine;
var yellowLine = sydneyTrains.yellowLine;
var navyLine = sydneyTrains.navyLine;

//Function to capitalise firstletters
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Create a function called travelFrom that receives a start station and an end station.
function travelFrom(startStation,endStation) {
    // var startingLine = sydneyTrains.startLine; (and change all refs from startLine to startingLine)
    // var endingLine = sydneyTrains.endLine; (and change all refs from endLine to endingLine and comment out var redLine.... etc above)
    var start = capitaliseFirstLetter(startStation.toLowerCase());
    var end = capitaliseFirstLetter(endStation.toLowerCase());
    // Check if stations exists on the lines entered
    if (!startLine.includes(start) || !endLine.includes(end)) {
        console.log("Something went wrong and the stations you entered don't exist on those lines");
    } else if (startLine === endLine) {
        var numberofStops = Math.abs(endLine.indexOf(end) - startLine.indexOf(start));
        var message = "To go from "+start+" to "+end+" - you will need to go through "+numberofStops+" stops.";
        console.log(message);
    } else if (endLine.includes(startStation) || startLine.includes(endStation)) {
       //Tell person to switch to the line.
        if (endLine.includes(startStation)) {
            var correctLine = endLine;
            console.log("Go to the "+correctLine+" instead. ");
        } else {
            var correctLine = startLine;
            console.log("Go to the "+correctLine+" instead. ");
        }
        var numberofStops = Math.abs(endLine.indexOf(end) - startLine.indexOf(start));
        var message = "To go from "+start+" to "+end+" - you will need to go through "+numberofStops+" stops.";
        console.log(message);
    } else {
        //Find first station that matches both startLine and endLine = switchingStation
        var switchingStation = endLine.find(function(item) {
            return startLine.includes(item);
        });
        //Tell person how many stops from startStation to switchingStation
        //Tell person where to switch (switchingStation)
        //Tell person how many stops from switchingStation to endStation
        var numberofStops1 = Math.abs(startLine.indexOf(switchingStation) - startLine.indexOf(start));
        var numberofStops2 = Math.abs(endLine.indexOf(switchingStation) - endLine.indexOf(end));
        var message = "To go from "+start+" to "+end+" - you will need to take "+startLine+" for "+numberofStops1+" stops, switch at "+switchingStation+" to "+endLine+", then go through "+numberofStops2+" stops.";
        console.log(message);
    }
    

    // if (startLine.includes(start) && endLine.includes(end)) {
    //     //calculate ab value of number of stops
    //     var numberofStops = Math.abs(endLine.indexOf(end) - startLine.indexOf(start));
    //     //create + print message
    //     var message = "To go from "+start+" to "+end+" - you will need to go through "+numberofStops+" stops.";
    //     console.log(message);
    // } else {
    //     //tell tehm to check their stations
    //     console.log("Check yo' stations. One of them isn't existing yet!");
    // }
};



station1 = "Macdonaldtown";
line1 = blueLine;
station2 = "Tempe";
line2 = navyLine;

travelFrom(line1,station1,line2,station2);


// station3 = "XYZ";
// station4 = "Museum";
// travelFrom(station3, station4);



// Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
// Print out the names of the stations on separate lines (e.g. log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")
// Bonus
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
