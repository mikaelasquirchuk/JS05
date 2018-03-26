function square (x) {
    var result = x * x; 
    return(result);
}

var squareofFour = square(4);
console.log(squareofFour); //16

var squareofTwelve = square(12);
console.log(squareofTwelve); //144

console.log(square(4)+square(12)); //160
// console.log(square(4)+144); //160
// console.log(16+144); //160
// console.log(160); //160


var userOne = {
    password: "chicken"
}

var userTwo = {
    password: "zebra"
}


//Predicate function -> always returns a boolean
function isPasswordChicken (user) {
    if (user.password === "chicken") {
        return true;
    } else {
        return false;
    }
}

isPasswordChicken(userTwo);



// // STORE the current left position as currentLeft
// //     STORE the new left position, as desiredLeft, by adding 100px to currentLeft
// //     UPDATE the left position of the provided element to be desiredLeft

// function moveToLeft (element) {
    
//     var desiredLeft = currentLeft + 100 px;

// }

var users = [
    {
        username: "kookslams",
        admin: true
    },
    {
        username:"sydneyga",
        admin: true
    },
    {
        username:"ga_sydney",
        admin: false
    }
]

// function isAdmin (user) {
//     if (user.admin) {
//         return "User is an admin";
//     } else {
//         return "User is not an admin";
//     }
// }

// for (var i = 0; i < users.length; i += 1) {
//     console.log(isAdmin(users[i]))
// }

function isAdmin(user) {
    return user.admin === true;
}
for (var i = 0; i < users.length; i += 1) {
    var currentUser = users[i];
    var isUserAdmin = isAdmin(currentUser);
    console.log(isUserAdmin);
}

function cube(num) {
    return Math.pow(num, 3);
}

function double(num) {
    return num * 2;
}

var result = double(cube(2));

console.log(result)


function delayed() {
    console.log("I was delayed");
}

setTimeout(delayed,1000); //sets a delay
// setInterval(delayed,1000) //sets an interval


var person = {
    firstName: "Jeff",
    sayHi: function () {
        console.log("Jeff says hi");
    }
}
person.sayHi();