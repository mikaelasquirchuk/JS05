// var somethingGlobal = "GLOBAL";

// function createInnerScope() {
//     var somethingLocal = "LOCAL";
// }

// createInnerScope();


// console.log(somethingGlobal); 
// console.log(somethingLocal); // will error out



// var somethingGlobal = "GLOBAL";

// function createInnerScope() {
//     var somethingLocal = "LOCAL";
//     console.log(somethingLocal); //neither errors out
//     console.log(somethingGlobal); //neither errors out
// }



var global = "Global Scope";

function someFunction() {
    var innerScope = "inner Scope";
    function someInnerFunction() {
        var innerInnerScope = "inner Inner Scope";
        // 3. What can we access from here: everything!
    }
    someInnerFunction();
    //2. What can we access from here: innerScope and global!
}
someFunction();
//1. What can we access from here: only global scope!