//## The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

var temp1Cel = 10;

var temp1Far = temp1Cel * 9/5 + 32;

var converterCtoF = 
    temp1Cel+
    "°C is "+
    temp1Far+
    "°F."

console.log(converterCtoF);

var temp2Far = 50;

var temp2Cel = (temp2Far - 32) * 5/9;

var converterFtoC = 
    temp2Far+
    "°F is "+
    temp2Cel+
    "°C.";

console.log(converterFtoC);