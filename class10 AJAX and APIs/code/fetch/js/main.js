var baseURL = "http://api.open-notify.org/astros.json";
var div1 = document.createElement("div");
document.body.appendChild(div1);

// To make any AJAX request
    // URL
    // HTTP Method (defaults to GET)
    // data type (defaults to JSON)
    // parameters

fetch(baseURL, {method: "GET"})
   .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        var people = data.people.reduce(function(total,person){
            return total + `<li> ${person.name} in ${person.craft}</li>`
        },"");
        div1.innerHTML += `
            There are ${data.number} people in space:
            <ul>${people}</ul>
        `;  
    });

var div2 = document.createElement("div");
document.body.appendChild(div2);

var baseURL2 = "http://api.open-notify.org/iss-now.json";

fetch(baseURL2, {method: "GET"})
    .then(function(rep){
        return rep.json();
    })
    .then(function(location){
        console.log(location);
        var latitude = location.iss_position.latitude;
        var longitude = location.iss_position.longitude;
        div2.innerHTML += `The ISS is located at latitude ${latitude} and longitude ${longitude}.`
    });


