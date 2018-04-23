var API_KEY = `665936c7`;

function turnIntoJSON(response) {
    return response.json();
}

function displayMovie(data) {
    if (data.Error) {
        throw new Error(data.Error);
    }
    var posterSource = data.Poster;
    var plot = data.Plot;
    var title = data.Title;
    var year = data.Year;
    var elementHTML = (`
        <img src="${posterSource}">
        <div class="right">
            <h2>${title} (${year}):</h2>
            <p>${plot}</p>
        </div>
    `);
    var div = document.querySelector("#output");
    div.innerHTML = elementHTML;
}

function errorHandler(errorMessage) {
    var html = `<h2>${errorMessage}</h2>`;
    var targetDiv = document.querySelector("#output");
    targetDiv.innerHTML = html;
}

var form = document.querySelector("form");

form.addEventListener("submit",function(event) {
    event.preventDefault(); //don't refresh the page
    var input = document.querySelector(".movieTitle");
    var title = input.value;
    getMovie(title)
        .then(turnIntoJSON)
        .then(displayMovie)
        .catch(errorHandler);
})

function getMovie(title) {
    var baseURL = `http://www.omdbapi.com/`; 
    var parameters = `?apikey=${API_KEY}&t=${title}&plot=full`;
    var url = baseURL + parameters;
    return fetch(url)
}

