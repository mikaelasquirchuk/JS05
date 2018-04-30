// var can be reassigned

var something = true;
something = false;

// var value can be shadowed

var anotherVar = 16;

function someFunction() {
  console.log(anotherVar); // will return undefined _even_ though there is an assignment of 16 in the global scope
  var anotherVar = 14; // variable declarations are "hoisted" or bubbled up to top, but assignment waits until later in the script; hoisting separates assignment and declaration
  console.log(anotherVar);
}

someFunction();
console.log(anotherVar);

// var is function scoped (not necessarily a problem)
// That is, if something is _not_ in a function, it forms part of the global scope
// So a variable within an if statement that doesn't evaluate will still be declared in the global scope
// Why would if and for scope be accessible elsewhere?

if (2 + 2 === 5) {
  var somethingElse = true;
}

console.log(somethingElse); // you shouldn't be able to access somethingElse since the if statement never eventuated

for (var i = 0; i <= 10; i += 1) {}

console.log(i); // returns 11?

var i = undefined;
for (i = 0; i <= 10; i += 1) {}
console.log(i); // stops running code at 11, as soon as i becomes greater than 10, but prints i
//shouldn't be able to access i outside a for loop

// Let can be reassigned
let score = 1000;
score = 1200;

// Let can't be shadowed
let url = "http://fillmurray.com";

function getNickCagePic() {
  let url = "http://placecage.com";
  console.log(url);
}

//let url = "http://placecage.com"; // errors out
getNickCagePic();
console.log(url);

//Let creates a temporal dead zone
// That is, it doesn't hoist variable declarations to the top

console.log(something);
// console.log(tdz); // access before it's defined

var something = true;
let tdz = false;

// Block scoping means curly brackets create a scope
if (false) {
  let DOES_THIS_WORK = true;
}

//console.log(DOES_THIS_WORK);

// Const is block scoped
// Doesn't hoist - temporal dead zone
// Prevents shadowing

// But also no reassigning, rebinding or redeclaring!

const FAV_NUMBER = 42;

FAV_NUMBER = 12;
