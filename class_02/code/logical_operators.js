var language = "HTML";

if (language === "HTML" || language === "CSS") {
    console.log("You're talking about a front-end language");
} else {
    console.log("You could be talking about a back-end language.");
}



var userNameExists = true;
var appropriatePassword = true;

if (userNameExists === true && appropriatePassword === true) {
    console.log("You are now logged in.");
} else if (userNameExists === false) {
    console.log("That username doesn't exist");
} else {
    console.log("That's the wrong password!");
}

var hasAccount = false;

if ( !hasAccount ) {
  console.log("You can create an account");
} else {
  console.log("You already have an account");
}



var lang = "HTML";

if (lang === "HTML" || lang === "CSS" || lang === "JS") {
  console.log("You are talking about a frontend language");
} else {
  console.log("It is probably a backend language");
}