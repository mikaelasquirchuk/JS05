//Receiving functions as input

function thisRunsRegularly() {
    console.log(`This happens every 1000 ms.`);
}

setInterval(thisRunsRegularly,1000);

//
setTimeout(function() {
    console.log("I was delayed by 2000 ms");
},2000);

//repeat
    // create a fucntion that receives a callback
    // runs it X amount of times

function repeat(numTimes,cb) {
    for (var i = 1; i <= numTimes; i+=1) {
        cb(i);
    }
}

function myCallback(data) {
    console.log(`This is the data: ${data}`);
}

repeat(5, myCallback);

repeat(10, function(enemyNumber) {
    console.log(`A new enemy ${enemyNumber} was created.`);
})

var party = [1,2,3,4,5]

party.forEach(function(item,index,collection) {
    console.log(item,index,collection);
});

// forEach function that receives an array and a callback
// That callback should be provided with:
    //item
    //index
    //entire collection

function forEach(coll, iterator) {
    for (var i = 0; i < coll.length; i+=1) {
        var item = coll[i];
        iterator(item,i,coll);
    }
}

var letters = ["a", "b", "c", "d", "e"];

function printLetter(currentItem, currentIndex, collection){
    console.log(currentItem, currentIndex, collection);
};

forEach(letters,printLetter);


forEach(["Groucho","Harpo","Chico"], function(brothersName){
    console.log(`The current brother is ${brothersName}.`)
})

function map(collection, callback) {
    var mappedArray = [];
    for (var i = 0; i < collection.length; i+=1) {
        var value = collection[i];
        var result = callback(value);
        mappedArray.push(result);
    }
    console.log(mappedArray);
    return mappedArray;
}

map([1,2,3,4,5], function(valueX) {
    console.log(valueX);
})

var coll1 = [1, 2, 3, 4, 5]
function double(x) {
    return x * 2;
}

map(coll1,double);



function creator() {
    console.log("Creator was called");
    return function() {
        console.log("I am the returned function");
    }
}

var returnedFunc = creator();

console.log(returnedFunc);

function createGreeting(greeting) {
    return function(name) {
        console.log(greeting,name);
    }
}

var hi = createGreeting("Hi");

hi("Javascript Jack");

var hello = createGreeting("Hello");

hello("Javascript Jack");

var hohoho = createGreeting("Ho ho ho");

hohoho("Santa");


function createPokemonCharacter(name) {
    return function() {
        console.log(`A new ${name} was created.`);
    };
}

var createPikachu = createPokemonCharacter("Pikachu");

createPikachu();

var createJigglypuff = createPokemonCharacter("Jigglypuff");

createJigglypuff();

var createNinetales = createPokemonCharacter("Ninetales");

// makeAdder
//   var addTen = makeAdder(10);
//   var addTwo = makeAdder(2);
function makeAdder(num1) {
    return function(num2) {
        console.log(`${num1} + ${num2} = ${num1 + num2}.`);
    }
}

var addTen = makeAdder(10);

addTen(2);
addTen(5);

var addTwo = makeAdder(2);

addTwo(12);


