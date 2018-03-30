// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

var nickname = document.querySelector("#nickname");
nickname.innerText = "Kael";

var favorites = document.querySelector("#favorites");
favorites.innerText = "dogs, all dogs, my dogs";

var hometown = document.querySelector("#hometown");
hometown.innerText = "Annandale, NSW";

var listitems = document.querySelectorAll("li");
for (var i = 0; i < listitems.length; i+=1) {
    listitems[i].setAttribute("class","listitem");
    listitems
    [i].style.color = "red"
};

var pictureOfMe = document.createElement("img");

pictureOfMe.setAttribute("src","img/image.jpeg");
pictureOfMe.setAttribute("width","100px");

document.body.appendChild(pictureOfMe);












