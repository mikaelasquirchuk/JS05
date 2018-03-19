//## Driving Age

//- Store the user age
//- If age is less than 16, print "Sorry, you can't drive yet"
//- If the age is equal to or over 16, print "Drive away!"
//- Bonus: If the user can't drive yet, tell them how many years they will have to wait. E.g. "Sorry, you have 4 years to wait until you can drive"
//- Bonus: Make a check to see if the user has their "L"s. E.g. If the user is over 16 and they have their "L"s

var userAge = 14;


if (userAge < 16) {
    console.log("Sorry, you can't drive yet. You can drive in "
    + ( 16 - userAge) +
    " years.");
} else {
    console.log("Drive away!");
}