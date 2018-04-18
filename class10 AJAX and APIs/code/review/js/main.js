function getUsers() {
    var users = '';
    //var users = ["Bill", "Jill", "Phil"];
    return new Promise(function(resolve,reject){
        if (users !== '') {
            resolve(users);
        } else {
            reject("There are no users to return.");
        }
    });
};

function logUsers (users) {
    console.log(users);
}

function errorUsers (errorMessage) {
    console.warn(errorMessage);
}

getUsers().then(logUsers).catch(errorUsers)