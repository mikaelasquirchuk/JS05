var baseURL = "https://api.icndb.com";

var path = "/jokes/random";

var parameters ="?limit-to=[nerdy]"

var url = baseURL + path + parameters;

var output = document.querySelector("#output");

function getChuckyJoke() {
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        var joke = data.value.joke;
        var paragraph = document.createElement("p");
        paragraph.innerText = joke;
        output.appendChild(paragraph);
        setTimeout(getChuckyJoke,5000);
    })
}

getChuckyJoke();