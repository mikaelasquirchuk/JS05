// The classic Fizzbuzz Program
// For every number between 1 and 100...

// If the number is evenly divisible by 3, print "Fizz"

// If the number is evenly divisible by 5, print "Buzz"

// If the number is evenly divisible by 3 AND evenly divisible by 5, print "Fizzbuzz"

for (var i = 1; i <=100; i+=1) {
    if (i%15 ===0) {
        console.log("Fizzbuzz");
    } else if (i%3 === 0) {
        console.log("Fizz");
    } else if (i%5 === 0) {
        console.log("Buzz");
    };
}