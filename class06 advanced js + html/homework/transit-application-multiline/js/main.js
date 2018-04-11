console.log("Welcome to my Transit Application!")

var sydneyTrains = {
    redLine: [
        'Liverpool', 'Warwick Farm', 'Cabramatta', 'Carramar', 'Villawood', 'Leightonfield', 'Chester Hill', 'Sefton', 'Lidcombe', 'Berala', 'Regents Park', 'Birrong', 'Yagoona', 'Bankstown', 'Punchbowl', 'Wiley Park', 'Lakemba', 'Belmore', 'Campsie', 'Canterbury', 'Hurlstone Park', 'Dulwich Hill', 'Marrickville', 'Sydenham', 'St Peters', 'Erskineville', 'Redfern', 'Central', 'Town Hall', 'Wynyard', 'Circular Quay', 'St James', 'Museum'
    ],
    blueLine: [
        'Leppington', 'Edmondson Park', 'Glenfield arr', 'Glenfield dep', 'Casula', 'Liverpool', 'Warwick Farm', 'Cabramatta', 'Canley Vale', 'Fairfield', 'Yennora', 'Guildford', 'Merrylands', 'Parramatta', 'Harris Park', 'Granville', 'Clyde', 'Auburn', 'Lidcombe', 'Flemington', 'Homebush', 'Strathfield', 'Burwood', 'Croydon', 'Ashfield', 'Summer Hill', 'Lewisham', 'Petersham', 'Stanmore', 'Newtown', 'Macdonaldtown', 'Redfern', 'Central', 'Town Hall', 'Wynyard', 'Circular Quay', 'St James', 'Museum'
    ],
    navyLine: [
        'Helensburgh', 'Waterfall', 'Heathcote', 'Engadine', 'Loftus', 'Cronulla', 'Woolooware', 'Caringbah', 'Miranda', 'Gymea', 'Kirrawee', 'Sutherland', 'Jannali', 'Como', 'Oatley', 'Mortdale', 'Penshurst', 'Hurstville', 'Allawah', 'Carlton', 'Kogarah', 'Rockdale', 'Banksia', 'Arncliffe', 'Wolli Creek', 'Tempe', 'Sydenham', 'Redfern', 'Central', 'Town Hall', 'Martin Place', 'Kings Cross', 'Edgecliff', 'Bondi Junction'
    ],
    yellowNorthernLine: [
        'Hornsby', 'Normanhurst', 'Thornleigh', 'Pennant Hills', 'Beecroft', 'Cheltenham', 'Epping', 'Macquarie University', 'Macquarie Park', 'North Ryde', 'Chatswood', 'Eastwood', 'Denistone', 'West Ryde', 'Meadowbank', 'Rhodes', 'Concord West', 'North Strathfield', 'Strathfield', 'Burwood', 'Redfern', 'Central', 'Town Hall', 'Wynyard', 'Milsons Point', 'North Sydney', 'Waverton', 'Wollstonecraft', 'St Leonards', 'Artarmon', 'Chatswood'
    ],
    yellowWesternLine: [
        'Emu Plains', 'Penrith', 'Kingswood', 'Werrington', 'St Marys', 'Mount Druitt', 'Rooty Hill', 'Doonside', 'Richmond', 'East Richmond', 'Clarendon', 'Windsor', 'Mulgrave', 'Vineyard', 'Riverstone', 'Schofields', 'Quakers Hill', 'Marayong', 'Blacktown', 'Seven Hills', 'Toongabbie', 'Pendle Hill', 'Wentworthville', 'Westmead', 'Parramatta', 'Harris Park', 'Granville', 'Clyde', 'Auburn', 'Lidcombe', 'Strathfield', 'Burwood', 'Redfern', 'Central', 'Town Hall', 'Wynyard', 'Milsons Point', 'North Sydney', 'Waverton', 'Wollstonecraft', 'St Leonards', 'Artarmon', 'Chatswood'
    ],
    yellowNorthShoreLine: [
        'Berowra', 'Mount Kuring-gai', 'Mount Colah', 'Asquith', 'Hornsby','Waitara', 'Wahroonga', 'Warrawee', 'Turramurra', 'Pymble', 'Gordon', 'Killara', 'Lindfield', 'Roseville', 'Normanhurst', 'Thornleigh', 'Pennant Hills', 'Beecroft', 'Cheltenham', 'Epping', 'Macquarie University', 'Macquarie Park', 'North Ryde', 'Chatswood', 'Artarmon', 'St Leonards', 'Wollstonecraft', 'Waverton', 'North Sydney', 'Milsons Point', 'Wynyard', 'Town Hall', 'Central', 'Redfern', 'Burwood', 'Strathfield', 'Lidcombe', 'Auburn', 'Clyde', 'Granville', 'Harris Park', 'Parramatta'
    ],
    pinkLine: [
        'Leppington', 'Edmondson Park', 'Glenfield arr', 'Glenfield dep', 'Casula', 'Liverpool', 'Warwick Farm', 'Cabramatta', 'Canley Vale', 'Fairfield', 'Yennora', 'Guildford', 'Merrylands', 'Harris Park', 'Parramatta', 'Westmead', 'Wentworthville', 'Pendle Hill', 'Toongabbie', 'Seven Hills', 'Blacktown arr', 'Blacktown dep', 'Marayong', 'Quakers Hill', 'Schofields', 'Riverstone', 'Vineyard', 'Mulgrave', 'Windsor', 'Clarendon', 'East Richmond', 'Richmond'
    ],
    purpleLine: [
        'Carlingford', 'Telopea', 'Dundas', 'Rydalmere', 'Camellia', 'Rosehill', 'Clyde arr', 'Clyde dep', 'Auburn', 'Lidcombe', 'Strathfield', 'Burwood', 'Redfern', 'Central', 'Town Hall', 'Wynyard', 'Milsons Point', 'North Sydney'
    ],
    greyLine: [
        'Lidcombe', 'Olympic Park'
    ],
    greenLine:[
        'Macarthur', 'Campbelltown', 'Leumeah', 'Minto', 'Ingleburn', 'Macquarie Fields', 'Glenfield arr', 'Glenfield dep', 'Holsworthy', 'East Hills', 'Panania', 'Revesby', 'Padstow', 'Riverwood', 'Narwee', 'Beverly Hills', 'Kingsgrove', 'Bexley North', 'Bardwell Park', 'Turrella', 'Wolli Creek', 'International Airport', 'Domestic Airport', 'Mascot', 'Green Square', 'Sydenham', 'St Peters', 'Redfern', 'Central', 'Museum', 'St James', 'Circular Quay', 'Wynyard', 'Town Hall'
    ]
};

var stations = [
    'Liverpool', 'Warwick Farm', 'Cabramatta', 'Carramar', 'Villawood', 'Leightonfield', 'Chester Hill', 'Sefton', 'Lidcombe', 'Berala', 'Regents Park', 'Birrong', 'Yagoona', 'Bankstown', 'Punchbowl', 'Wiley Park', 'Lakemba', 'Belmore', 'Campsie', 'Canterbury', 'Hurlstone Park', 'Dulwich Hill', 'Marrickville', 'Sydenham', 'St Peters', 'Erskineville', 'Redfern', 'Central', 'Town Hall', 'Wynyard', 'Circular Quay', 'St James', 'Museum',
    'Leppington', 'Edmondson Park', 'Glenfield arr', 'Glenfield dep', 'Casula', 'Liverpool', 'Warwick Farm', 'Cabramatta', 'Canley Vale', 'Fairfield', 'Yennora', 'Guildford', 'Merrylands', 'Parramatta', 'Harris Park', 'Granville', 'Clyde', 'Auburn', 'Lidcombe', 'Flemington', 'Homebush', 'Strathfield', 'Burwood', 'Croydon', 'Ashfield', 'Summer Hill', 'Lewisham', 'Petersham', 'Stanmore', 'Newtown', 'Macdonaldtown', 'Redfern', 'Central', 'Town Hall', 'Wynyard', 'Circular Quay', 'St James', 'Museum',
    'Helensburgh', 'Waterfall', 'Heathcote', 'Engadine', 'Loftus', 'Cronulla', 'Woolooware', 'Caringbah', 'Miranda', 'Gymea', 'Kirrawee', 'Sutherland', 'Jannali', 'Como', 'Oatley', 'Mortdale', 'Penshurst', 'Hurstville', 'Allawah', 'Carlton', 'Kogarah', 'Rockdale', 'Banksia', 'Arncliffe', 'Wolli Creek', 'Tempe', 'Sydenham', 'Redfern', 'Central', 'Town Hall', 'Martin Place', 'Kings Cross', 'Edgecliff', 'Bondi Junction',
    'Hornsby', 'Normanhurst', 'Thornleigh', 'Pennant Hills', 'Beecroft', 'Cheltenham', 'Epping', 'Macquarie University', 'Macquarie Park', 'North Ryde', 'Chatswood', 'Eastwood', 'Denistone', 'West Ryde', 'Meadowbank', 'Rhodes', 'Concord West', 'North Strathfield', 'Strathfield', 'Burwood', 'Redfern', 'Central', 'Town Hall', 'Wynyard', 'Milsons Point', 'North Sydney', 'Waverton', 'Wollstonecraft', 'St Leonards', 'Artarmon', 'Chatswood',
    'Emu Plains', 'Penrith', 'Kingswood', 'Werrington', 'St Marys', 'Mount Druitt', 'Rooty Hill', 'Doonside', 'Richmond', 'East Richmond', 'Clarendon', 'Windsor', 'Mulgrave', 'Vineyard', 'Riverstone', 'Schofields', 'Quakers Hill', 'Marayong', 'Blacktown', 'Seven Hills', 'Toongabbie', 'Pendle Hill', 'Wentworthville', 'Westmead', 'Parramatta', 'Harris Park', 'Granville', 'Clyde', 'Auburn', 'Lidcombe', 'Strathfield', 'Burwood', 'Redfern', 'Central', 'Town Hall', 'Wynyard', 'Milsons Point', 'North Sydney', 'Waverton', 'Wollstonecraft', 'St Leonards', 'Artarmon', 'Chatswood',
    'Berowra', 'Mount Kuring-gai', 'Mount Colah', 'Asquith', 'Hornsby','Waitara', 'Wahroonga', 'Warrawee', 'Turramurra', 'Pymble', 'Gordon', 'Killara', 'Lindfield', 'Roseville', 'Normanhurst', 'Thornleigh', 'Pennant Hills', 'Beecroft', 'Cheltenham', 'Epping', 'Macquarie University', 'Macquarie Park', 'North Ryde', 'Chatswood', 'Artarmon', 'St Leonards', 'Wollstonecraft', 'Waverton', 'North Sydney', 'Milsons Point', 'Wynyard', 'Town Hall', 'Central', 'Redfern', 'Burwood', 'Strathfield', 'Lidcombe', 'Auburn', 'Clyde', 'Granville', 'Harris Park', 'Parramatta',
    'Leppington', 'Edmondson Park', 'Glenfield arr', 'Glenfield dep', 'Casula', 'Liverpool', 'Warwick Farm', 'Cabramatta', 'Canley Vale', 'Fairfield', 'Yennora', 'Guildford', 'Merrylands', 'Harris Park', 'Parramatta', 'Westmead', 'Wentworthville', 'Pendle Hill', 'Toongabbie', 'Seven Hills', 'Blacktown arr', 'Blacktown dep', 'Marayong', 'Quakers Hill', 'Schofields', 'Riverstone', 'Vineyard', 'Mulgrave', 'Windsor', 'Clarendon', 'East Richmond', 'Richmond','Carlingford', 'Telopea', 'Dundas', 'Rydalmere', 'Camellia', 'Rosehill', 'Clyde arr', 'Clyde dep', 'Auburn', 'Lidcombe', 'Strathfield', 'Burwood', 'Redfern', 'Central', 'Town Hall', 'Wynyard', 'Milsons Point', 'North Sydney', 'Lidcombe', 'Olympic Park','Macarthur', 'Campbelltown', 'Leumeah', 'Minto', 'Ingleburn', 'Macquarie Fields', 'Glenfield arr', 'Glenfield dep', 'Holsworthy', 'East Hills', 'Panania', 'Revesby', 'Padstow', 'Riverwood', 'Narwee', 'Beverly Hills', 'Kingsgrove', 'Bexley North', 'Bardwell Park', 'Turrella', 'Wolli Creek', 'International Airport', 'Domestic Airport', 'Mascot', 'Green Square', 'Sydenham', 'St Peters', 'Redfern', 'Central', 'Museum', 'St James', 'Circular Quay', 'Wynyard', 'Town Hall']

var lines = Object.keys(sydneyTrains);

var button = document.querySelector("#button");

var answer = document.querySelector("#answer");

//Function to capitalise firstletters
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function findLine(station) {
    if (sydneyTrains.blueLine.includes(station)) {
        return "blueLine";
    } else if (sydneyTrains.redLine.includes(station)) {
        return "redLine";
    } else if (sydneyTrains.navyLine.includes(station)){
        return "navyLine";
    } else if (sydneyTrains.yellowNorthernLine.includes(station)){
        return "yellowNorthernLine";
    } else if (sydneyTrains.yellowWesternLine.includes(station)){
        return "yellowWesternLine";
    } else if (sydneyTrains.yellowNorthShoreLine.includes(station)){
        return "yellowNorthShoreLine";
    } else if (sydneyTrains.pinkLine.includes(station)){
        return "pinkLine";
    } else if (sydneyTrains.pinkLine.includes(station)){
        return "purpleLine";
    } else if (sydneyTrains.greyLine.includes(station)) {
        return "greyLine";
    } else if (sydneyTrains.greenLine.includes(station)) {
        return "greenLine";
    }
};

// Create a function called travelFrom that receives a start station and an end station.
function travelFrom() {
    var startStationInput = document.querySelector("#startStation");
    var startStation = startStationInput.value;
    var endStationInput = document.querySelector("#endStation");
    var endStation = endStationInput.value;
    var start = capitaliseFirstLetter(startStation.toLowerCase());
    var end = capitaliseFirstLetter(endStation.toLowerCase());var startLine = findLine(start);
    var endLine = findLine(end);
    var startLineArray = sydneyTrains[startLine];
    var endLineArray = sydneyTrains[endLine];
    // Check if stations exists on the lines entered
    if (!stations.includes(start) ||
    !stations.includes(end)) {
        var message = ("Something went wrong and the stations you entered don't exist on those lines");
    } 
    else if (endLineArray.includes(start) || startLineArray.includes(end)) {
       //Tell person to switch to the line.
        if (endLineArray.includes(start)) {
            var correctLine = endLine;
        } else {
            var correctLine = startLine;
        }
        var numberofStops = Math.abs(endLineArray.indexOf(end) - startLineArray.indexOf(start));
        var message = "To go from "+start+" to "+end+" - you will need to go through "+numberofStops+" stops on the "+correctLine+".";
    } else {
        //Find first station that matches both startLine and endLine = switchingStation
        var switchingStation = endLineArray.find(function(item) {
            return startLineArray.includes(item);
        });
        //Tell person how many stops from startStation to switchingStation
        //Tell person where to switch (switchingStation)
        //Tell person how many stops from switchingStation to endStation
        var numberofStops1 = Math.abs(startLineArray.indexOf(switchingStation) - startLineArray.indexOf(start));
        var numberofStops2 = Math.abs(endLineArray.indexOf(switchingStation) - endLineArray.indexOf(end));
        var message = "To go from "+start+" to "+end+" - you will need to take "+startLine+" for "+numberofStops1+" stops, switch at "+switchingStation+" to "+endLine+", then go through "+numberofStops2+" stops.";
    };
    answer.innerText = message;
};

button.addEventListener("click",travelFrom);