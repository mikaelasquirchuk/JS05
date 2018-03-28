// ## The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named ` tellFortune ` that:

// - Takes 4 arguments: number of children, partner's name, geographic location, job title.
// - Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// - Call that function 3 times with 3 different values for the arguments.

function tellFortune(numKids, partnersName, geoLocation, jobTitle) {
    var fortune = "You will be a "+jobTitle+" in "+geoLocation+", and married to "+partnersName+" with "+numKids + " kids."
    console.log(fortune);
}

tellFortune(23,"Bill Murray","Timbuktu","preacherman");
tellFortune("no","Olivia Basheer","Sydney","Operations Manager");
tellFortune(2,"Happy Gilmore","Ohio","farmer");