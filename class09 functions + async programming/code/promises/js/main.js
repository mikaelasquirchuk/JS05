//Creating promises

var myPromise = new Promise(function(resolve,reject) {
    resolve("This task has finished running");
});

myPromise.then(function(){
    //console.log("The promise was fulfilled");
});

//Creating promises and HOFs

function createPromise() { //hof
    return new Promise(function(resolve,reject) { //promise
        if (true) {
            resolve("The promise was fulfilled");
        } else {
            reject("The promise was fulfilled");
        }
    })
}

createPromise().then(function(successMessage) {
    console.log(successMessage);
});


// Create a function that makes an abstraction over a set delay

//delay(1000).then(...)

function delay(timeInMS) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("I waited some amount of time for you");
        }, timeInMS);
    });
}

delay(1000).then(function(data){
    console.log(data);
});

// Create a function called makeAPIrequest

function makeAPIRequest() {
    return new Promise(function(good, bad) {
        window.setTimeout(function() {
            if (true) {
                good("We got the data back for you.");
            } else {
                bad("Something went wrong.");
            }
        }, Math.random() * 3000);
    });
}

makeAPIRequest().then(function(message){
    console.log(message);
});


function giveEmployeePhone() {
    return new Promise(function (resolve, reject) {
        var generous = true;
        if (generous === true) {
            resolve("Here is your phone");
        } else {
            reject("No phone for you!");
        }
    });
}

function giveMeTheGoodMessage(message) {
    console.log(message);
};

function sayNo() {
    console.log("no.");
};

giveEmployeePhone().then(giveMeTheGoodMessage).catch(sayNo);

