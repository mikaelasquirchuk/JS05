// Global binding (default) = window

console.log(this);

function sayHi() {
    console.log(this);
}

// Event binding = element being interacted with / target

// var bill = document.querySelector("img");

function onImageClick() {
    console.log(this.src);
    this.style.border = "10px solid black";
};

// bill.addEventListener("click", onImageClick);

// document.querySelector(".cage").addEventListener("click",onImageClick);

var images = document.querySelectorAll("img");
for (var i = 0; i < images.length; i += 1) {
    images[i].addEventListener("click",onImageClick);
}

var input = document.querySelector("input");
function onKeyPress() {
    console.log(this.value);
}
input.addEventListener("keypress",onKeyPress)

// Implicit binding = the object in which it forms a part

// var person = {
//     firstName: "Serge",
//     lastName: "Murray",
//     displayFullName: function() {
//         var fullName = `${this.firstName} ${this.lastName}`;
//         console.log(fullName);
//     }
// }

// person.displayFullName();

// Explicit binding

function sayHello() {
    var greeting =  `${this.name} says hi`;
    console.log(greeting);
}

var groucho = {name: "Groucho"};
var harpo = {name: "Harpo"};

sayHello.call(harpo); // harpo ===this
sayHello.call(groucho); // groucho ===this
sayHello.call({name: "Gummo"}); // gummo ===this

sayHello.apply(groucho);// groucho ===this

console.clear();

var gill = {name: "Gill"};
var gazza = {name:"Gazza"};
var hazza = {name:"Hazza"}

var sayHelloGill = sayHello.bind(gill);

sayHelloGill();

var gazzaSayHi = sayHello.bind(gazza);

gazzaSayHi();

// new Binding = A new empty object that is implicitly returned

var Person = function(name, username, email) {
    this.name = name;
    this.username = username;
    this.email = email;
    console.log(this);
    // => {name:"Roger"}
}

var serge = new Person("Serge", "sergay","serge@ga.co");


var Beer = function(brand,capacity) {
    this.brand = brand;
    this.capacity = capacity;
    this.drink = function() {
        var message = `Someone is drinking a ${this.capacity} ${this.brand}`;
        console.log(message);
    }
}

var vb = new Beer("vb","370mL");

vb.drink();

var carlton = new Beer("carlton","100mL");

carlton.drink();

var snoopies = new Beer("snoopies","370mL");

snoopies.drink();


var Person = function(name,username,email) {
    this.name = name,
    this.username = username,
    this.email = email,
    this.saysHi = function() {
        var message = `${this.name} says hi.`;
        console.log(message)
    }
}

var flea = new Person("Flea", "flea","flea@ga.co");

flea.saysHi();