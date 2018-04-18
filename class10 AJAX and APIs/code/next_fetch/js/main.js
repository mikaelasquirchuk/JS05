var baseURL = "https://randomuser.me/api?results=100";

var httpOptions = {
    method: "GET"
};

function turnJSONIntoObject(response){
    return response.json();
}

function handleData(data) {
    var allThePeople = data.results.reduce(function (people,person) {
        return people + `<p>${person.name.first} ${person.name.last} - ${person.email}</p>`
    },"");
    document.body.innerHTML += allThePeople;
}

function loading() {
    document.body.innerHTML = "Loading..."
}

loading();

fetch(baseURL, httpOptions)
    .then(turnJSONIntoObject)
    .then(handleData)

