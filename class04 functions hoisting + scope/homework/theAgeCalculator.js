// ## The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named ` calculateAge ` that:

// - Takes 2 arguments: birth year, current year.
// - Calculates the 2 possible ages based on those years.
// - Outputs the result to the screen like so: "You are either NN or NN"
// - Call the function three times with different sets of values.
// - Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var today = new Date()
var currentYear = today.getFullYear();

function calculateAge(birthYear){
    var ageOne = currentYear - birthYear - 1;
    var ageTwo = currentYear - birthYear;
    console.log("You are either "+ageOne+" or "+ageTwo);
}

calculateAge(1990);
calculateAge(1900);
calculateAge(1920);

