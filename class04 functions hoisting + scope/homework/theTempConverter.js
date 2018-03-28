// ## The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called ` celsiusToFahrenheit `:

// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called ` fahrenheitToCelsius `:

// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(temp){
    var result = temp*1.8 + 32;
    var response = temp+"°C is "+result+"°F.";
    console.log(response);
};
function fahrenheitToCelsius(temp){
    var result = (temp - 32)/1.8;
    var response = temp+"°C is "+result+"°F.";
    console.log(response);
};

celsiusToFahrenheit(0);
celsiusToFahrenheit(40);
fahrenheitToCelsius(32);
fahrenheitToCelsius(90);