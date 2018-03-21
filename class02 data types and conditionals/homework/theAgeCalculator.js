//## The Age Calculator

//Forgot how old someone is? Calculate it!

//- Store the current year in a variable.
//- Store their birth year in a variable.
//- Calculate their 2 possible ages based on the stored values.
//- Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2018

var birthYear = 2000

var age1 = currentYear - birthYear - 1
var age2 = currentYear - birthYear

var currentAge =
    "They are either "+
    age1+
    " or "+
    age2+
    "."

console.log(currentAge)