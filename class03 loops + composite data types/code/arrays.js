// Arrays 
// - Ordered
// - Access data with an index (number)
// - Index is zero-based

var emptyArr = [];

var randomNumbers = [12, 42, 0.8, 16, 100, 48];

var dataTypes = [ true, null, 14, "string" ];

var weirdInstruments = [
    "Badgermin",
    "The Great Stalacpipe Organ",
    "Stylophone",
    "Ondes Martenot",
    "Sharpischord",
    "Hydraulophone",
    "Pyrophone"
];

weirdInstruments[0]; //"Badgermin"
weirdInstruments[5]; //"Hydraulophone"
weirdInstruments[ weirdInstruments.length - 1 ]; //"Pyrophone"

var weirdInstruments = [
    "Badgermin",
    "The Great Stalacpipe Organ",
    "Stylophone",
    "Ondes Martenot",
    "Sharpischord",
    "Hydraulophone",
    "Pyrophone"
];

weirdInstruments[0] = "Roli Seaboard";
weirdInstruments[5] = "Makey Makey Banana Piano";
weirdInstruments[ weirdInstruments.length - 1 ] = "OP1";

console.log(weirdInstruments);

// [ 'Roli Seaboard',
//   'The Great Stalacpipe Organ',
//   'Stylophone',
//   'Ondes Martenot',
//   'Sharpischord',
//   'Makey Makey Banana Piano',
//   'OP1' ]

var ordinals = [
    "Zeroth",
    "First",
    "Second",
    "Third"
];

ordinals[0]; //Zeroth
ordinals[1]; //First
ordinals[2]; //Second
ordinals[3]; //Third

// Fair bit of consistency there!

for ( var index = 0; index <= 3; index += 1 ) {
    var currentElement = ordinals[index];
    console.log( currentElement );
}

for ( var index = 0; index <= ordinals.length; index += 1 ) {
    var currentElement = ordinals[index];
    console.log( currentElement );
}

//New ordinals list

var ordinals = [
    "First",
    "Second",
    "Third"
];

ordinals.length; // => 3

ordinals.pop(); // Remove the last element
ordinals.push( "Third" ); // Add "Third" to the end

ordinals.shift(); // Remove the first element
ordinals.unshift( "First" ); // Add "First" to the start

ordinals.indexOf( "Second" ); // Get the index of "Second" => 1

var weirdArray = [true, 1, undefined, null, 5, ["hello","goodbye","pick-me"]];

console.log(weirdArray[5][2]);