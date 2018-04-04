// Working with Users
// Starting with this data...

var users = [
  {
    email: "groucho@ga.co",
    password: "chicken",
    isAdmin: true
  },
  {
    email: "harpo@ga.co",
    password: "elephant",
    isAdmin: false
  },
  {
    email: "gummo@ga.co",
    password: "pinkFairyArmadillo",
    isAdmin: true
  },
  {
    email: "zeppo@ga.co",
    password: "dumboOctopus",
    isAdmin: false
  }
];

// Create a function that receives a user object, and prints out whether they are an admin or not.

function printAdmin(user) {
    var isAdmin = user.isAdmin;
    return isAdmin;
}

console.log(printAdmin(users[1]));

// Create a function that receives an ID (index), an email and a password. If the function was provided with an email and a password that matches up, log "You are logged in". Otherwise, log "Sorry, something went wrong".


// Bonus
// Don't receive an ID! Find the user based on the email
// Make a function that creates an account. e.g. createAccount("chico@gmail.com", "redLippedBatfish", false);
// This should just add another object into the array
// Make a function that deletes an account. e.g. deleteAccount("zeppo@ga.co");
// This should just remove an object from the array
// Bonus: Make this only work if the correct password was provided as a parameter too
// Make a function that updates an account. e.g. updateAccount("harpo@ga.co", "password", "ayeAye");
// Bonus: Instead of receiving two strings to illustrate the change (like above), receive an object so you could potentially change multiple things at once. e.g. updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });
// Bonus: Make this work only if the current password was also provided as a parameter. e.g. updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });
// Add a few extra users and make a search function. I'll let you decide on the interface or the function signature