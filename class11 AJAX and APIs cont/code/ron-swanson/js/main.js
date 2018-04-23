var baseURL = "http://ron-swanson-quotes.herokuapp.com/";

var path = "v2/quotes";

var url = baseURL + path;

var output = document.querySelector("#output");

function getRonQuote() {
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        var quote = data[0];
        var paragraph = document.querySelector("p");
        paragraph.innerText = quote;
        setTimeout(getRonQuote,5000);
    })
}

getRonQuote();