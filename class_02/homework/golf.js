

//## Golf

//Write an if statement that gives a user the nickname of their score, based on par.

var score = 4;
var par = 2;

if (score === 1) {
    console.log("Hole in one");
} else if (score <= par - 2) {
    console.log("Eagle");
} else if (score === par - 1) {
    console.log("Birdie");
} else if (score === par) {
    console.log("Par");
} else if (score === par + 1) {
    console.log("Bogey");
} else if (score === par + 2) {
    console.log("Double bogey");
} else if (score >= par + 3) {
    console.log("You lose");
}