
// Select H1
var h1 = document.querySelector("h1");
// Print out inner text of that element
var headingText = h1.innerText;

// Create function to update heading text
function updateHeading(text) {
    h1.innerText = text;
}
updateHeading("Updated in JS");


//Select all list items
var allLis = document.querySelectorAll("li");

//Create function that adds a random number to each list item

function updateItems(){
    for (var i = 0; i < allLis.length; i+=1) {
        var currentItem = allLis[i];
        currentItem.innerText += Math.random();
    }
}
updateItems();

//Select the p and a tags
var pTag = document.querySelector("p");
var aTag = document.querySelector("a");

//Get and log out the a tag's href attribute
var href = aTag.getAttribute("href");
console.log(href);

