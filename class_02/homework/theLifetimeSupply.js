//## The Lifetime Supply Calculator

//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

//- Store your current age into a variable.
//- Store a maximum age into a variable.
//- Store an estimated amount per day (as a number).
//- Calculate how many you would eat total for the rest of your life.
//- Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
//- Bonus: Get the current year using JavaScript!

var birthYear = 1990;

var currentAge = new Date().getFullYear() - birthYear;

var maxAge = 98;

var chocolatePerDay = 2; //bars per day of chocolate

var totalLifetimeSupply = chocolatePerDay * (98 - currentAge) * 365 

var LifetimeSupplyStatement = 
    "You will need "+
    totalLifetimeSupply+
    " bars of chocolate to last you until the ripe old age of "+
    maxAge+
    "."

console.log(LifetimeSupplyStatement);
