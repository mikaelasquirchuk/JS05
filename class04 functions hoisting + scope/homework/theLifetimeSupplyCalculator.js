// ## The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named ` calculateSupply ` that:

// - Takes 2 arguments: age, amount per day.
// - Calculates the amount consumed for rest of the life (based on a constant max age).
// - Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// - Call that function three times, passing in different values each time.
// - Bonus: Accept floating point values for amount per day, and round the result to a round number.

var maxAge = 100;

function calculateSupply (age, amountPerDay) {
    var result = (maxAge - age) * 365.25 * amountPerDay;
    var response = "You will need "+result+" to last you until the ripe old age of "+maxAge+"."
    console.log(response);
}

calculateSupply(90,100);
calculateSupply(1,1000);
calculateSupply(99,1000);