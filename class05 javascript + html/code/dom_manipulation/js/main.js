//document.querySelector("CSS SELECTOR");
//Traverse the DOM and return the first DOM node that passes a given CSS Selector

var h1 = document.querySelector("h1");
var p = document.querySelector("p");
var li = document.querySelector("li");

console.log(h1,p,li);

var firstImage = document.querySelector("img");

console.log(firstImage);

//document.querySelectorAll("CSS SELECTOR");
//Traverse the Dom and return all the DOM nodes that pass a given CSS selector

var allImages = document.querySelectorAll("img");

console.log(allImages);

//DOM traversal
var list = document.querySelector("ul");

var children = list.children;
var parent = list.parentNode;
var siblings = list.parentNode.children;


//Get attribute - 
//node.getAttribute("ATTRIBUTE NAME")
//returns the current attribute value

var firstImage = document.querySelector('img');
var src = firstImage.getAttribute("src");
var alt = firstImage.getAttribute("alt");

console.log(src);
console.log(alt);

var link = document.querySelector('a');
var href = link.getAttribute('href');

console.log(href);

// Set attribute - 
//node.setAttribute("ATTRIBUTE NAME","VALUE")
//assigns or changes attribute + value

var firstImage = document.querySelector('img');

firstImage.setAttribute("src","http://placepuppy.net/300/300");
firstImage.setAttribute("alt","A picture of a puppy");
firstImage.setAttribute("title","A puppy")

console.log(firstImage);

var aTag = document.querySelector('a');

aTag.setAttribute("href","http://bing.com");
aTag.innerText = "Ask Jeeves";

//Accessing the current Text or HTML
//node.innerText OR node.innerHTML

var h1 = document.querySelector('h1');
console.log(h1.innerText);

var ul = document.querySelector("ul");
console.log(ul.innerHTML);

//Changing the current Text or HTML
//Reassign node.innerText or node.innerHTML

var p = document.querySelector("p");
p.innerText += "- CMND + OPTION + J";

p.innerText = "Updated with JS";

var body = document.body;
//var body = document.querySelector("body")

body.innerHTML += "<h2> Added with JS </h2>"

//Getting user values

var input = document.querySelector("input")

input.getAttribute("placeholder");
input.value;

var currentValue = input.value;

//Assigning user value

input.value = "Somethign else";

//Getting styles

var heading = document.querySelector("h1");

var currentStyles = getComputedStyle(heading);
//have to get all current styles first

var fontSize = currentStyles.fontSize;

// textdecoration, border + color
var aTag = document.querySelector("a");

var styles = getComputedStyle(aTag);

var textDecoration = styles.textDecoration;
var border = styles.border;
var color = styles.color;

console.log(textDecoration, border, color);

//Setting styles
//node.style.cssProperty = "newvalue";

var h1 = document.querySelector("h1");

//var h1Styles = getComputedStyle(h1);

h1.style.fontSize = "50px";
h1.style.textDecoration = 'underline';


var aTag = document.querySelector('a');

aTag.style.color = 'red';
aTag.style.textDecoration = "underline";
aTag.style.fontFamily = "monospace";