// ## Driving Age

// - Write a function that receives a `userAge` called `canDrive`
// - If the received age is less than 16, print "Sorry, you can't drive yet"
// - If the received age is equal to or over 16, print "Drive away!"
// - Bonus: If the user can't drive yet, tell them how many years they will have to wait. E.g. "Sorry, you have 4 years to wait until you can drive"
// - Bonus: Make a check to see if the user has their "L"s. E.g. If the user is over 16 and they have their "L"s


function canDrive(userAge,hasLPlates) {
    if (userAge > 16 && hasLPlates===true) {
        console.log("Keep practising!");
    } else if (userAge < 16) {
        var years = 16 - userAge;
        console.log("You can't drive yet. You  have "+years+" years to wait unitl you can drive.");
    } else {
        console.log("Drive away!");
    }
}

canDrive(20, true);
canDrive(10);
canDrive(20);