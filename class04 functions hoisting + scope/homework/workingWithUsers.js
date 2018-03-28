// ## Working with Users

// Starting with this data...

// ```js
// var users = [
//   {
//     email: "groucho@ga.co",
//     password: "chicken",
//     isAdmin: true
//   },
//   {
//     email: "harpo@ga.co",
//     password: "elephant",
//     isAdmin: false
//   },
//   {
//     email: "gummo@ga.co",
//     password: "pinkFairyArmadillo",
//     isAdmin: true
//   },
//   {
//     email: "zeppo@ga.co",
//     password: "dumboOctopus",
//     isAdmin: false
//   }
// ];
// ```

// Create a function that receives a user object, and prints out whether they are an admin or not.

// Create a function that receives an ID (index), an email and a password. If the function was provided with an email and a password that matches up, log "You are logged in". Otherwise, log "Sorry, something went wrong".

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

function adminCheck(user) {
    var result = user.isAdmin;
    if (result === true) {
        console.log("User is an admin");
    } else {
        console.log("User is not an admin");
    }
}

adminCheck(users[0]);
adminCheck(users[1]);


function userCheck(email, password, ID){
    for (var i = 0; i < users.length; i += 1) {
        if (email === users[i].email && password === users[i].password) {
            console.log("You are logged in");  
        } else {
            console.log("Sorry, an error occurred.");
        }
    }
}


userCheck("groucho@ga.co","chicken",1111)