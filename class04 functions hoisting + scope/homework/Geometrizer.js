// ## The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called ` calcCircumference `:

// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called ` calcArea `:

// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius) {
    var result = radius * 2 * Math.PI;
    var response = "The circumference is "+result+".";
    console.log(response);
}

function calcArea(radius) {
    var result = radius * radius * Math.PI;
    var response = "The area is "+result+".";
    console.log(response);
}

calcCircumference(10);
calcArea(10);