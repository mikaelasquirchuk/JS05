//## Air Conditioning

//- Store the current temperature, whether the A/C is functional, and what the desired temperature is.
    //- If the airconditioner is functional and the current temperature is above the the desired temperature... print "Turn on the A/C Please"
    //- If the airconditioner is non-functional and the current temperature is above the the desired temperature... print "Fix the A/C now!  It's hot!"
    //- If the airconditioner is non-functional and the current temperature is below the the desired temperature... print "Fix the A/C whenever you have the chance...  It's cool..."


    var airConditioningFunction = false;
    var currentTemperature = 40;
    var desiredTemperature = 30;

    if (airConditioningFunction === true && currentTemperature > desiredTemperature) {
        console.log("Turn on the A/C please!");
    } else if (airConditioningFunction === false && currentTemperature > desiredTemperature) {
        console.log("Fix the A/C now! It's hot!");
    } else if (airConditioningFunction === false) {
        console.log("Fix the A/C whenever you have the chance...  It's cool...");
    }
