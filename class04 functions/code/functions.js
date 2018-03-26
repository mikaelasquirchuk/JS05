// Function Declaration 

function doSomething() {
    console.log("The doSomething function was called");
}

doSomething();

//Function Expression

var logSomething = function() {
    console.log("The logSomething function was called");
}

logSomething();


function squareFive() {
    console.log(Math.pow(5,2));
}

squareFive();


function greetPerson(name) {
    var message = "Hello "+name;
    console.log(message);
}

greetPerson("Clarice")

function addTogether (x, y) {
    console.log(x + y);
}
addTogether(1,2);
addTogether(1202093,32019310239);



function squareNum(num) {
    var result = Math.pow(num,2);
    console.log(result)
}
squareNum(3);
squareNum(1489324098124);

function pow(base,power) {
    var result = 1;
    for (var i = 1; i <= power; i+=1) {
        result *= base;
    }
    console.log(result);
}

pow(2,3);

function thirded(base) {
    var result=1;
    for (var i = 1; i<=3; i+=1) {
        result *= base;
    }
    console.log(result);
}

thirded(2);

function multiplyTogether(x,y) {
    return x * y;
}


function greet(start,name){
    var message = start + ", " + name;
    console.log(message);
}

greet("Howdi","partner!");
greet("Hello","Clarice");

function changeTheme (darkTheme) {
    if (!darkTheme) {
        console.log("background: white; text-color: black;");
    } else {
        console.log("background: black; text-color: white;");
    }
}

changeTheme(true);
changeTheme(0);


function showMenu (isOpen) {
    if (isOpen) {
        console.log("Close the menu");
    } else {
        console.log("Show the menu");
    }
}

showMenu(0);
showMenu(true);
