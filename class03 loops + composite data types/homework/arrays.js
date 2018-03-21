// Starting with an empty array called rainbowColors:

// Print "third" by using a dynamic index
// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third

var rainbowColors = [];

rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");
rainbowColors.push("green","blue","indigo","violet");

console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length-1]);
console.log(rainbowColors.indexOf("blue"));

var twoColors = rainbowColors.slice(1,3);

console.log(twoColors);

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

nums.splice(3,3);

console.log(nums);

var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);

console.log(arrOfArrs[1][arrOfArrs[1].length - 1]);

for (var i = 0; i <= arrOfArrs[1].length-1; i+=1) {
    console.log(arrOfArrs[1][i]);
}


// Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".

// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var myFaveDogs = ["mutt","Leonberger","Chihuahua","wolf","Great Dane"];

var ordinals = ["1st","2nd","3rd","4th",'5th'];

for (var i = 0; i < myFaveDogs.length; i+=1) {
    console.log("My "+ordinals[i]+" favourite breed of dog is "+myFaveDogs[i]+".");
}