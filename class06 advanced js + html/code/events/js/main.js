var button = document.querySelector("button");
var eventType = "click";
function onButtonClick() {
    console.log("The button was clicked");
}
button.addEventListener(eventType, onButtonClick);

// Specify target
// Define event type
// Create callback function
// Create event listener

//Anonymous function

// Every time user moves their mouse on top of Bill
// Log out that the mouse moved
// Add a border

var target = document.querySelector("img");
var type = "contextmenu"; // i.e. right click
target.addEventListener(type,function() {
    target.style.border = "10px solid rebeccapurple";
})

//Everytime the browser is resized
//Log out current browser width

window.addEventListener("resize",function() {
    console.log("The browser's width is "+window.innerWidth);
})


var image = document.createElement("img");
image.setAttribute("src","http://placecage.com/200/200");
document.body.appendChild(image);
function nickWasClicked() {
    var width = Math.floor(Math.random()*500)+100;
    var height = Math.floor(Math.random()*500)+100;
    var imageSRC = "http://placecage.com/"+width+"/"+height;
    image.setAttribute("src",imageSRC);
    document.body.appendChild(image);
    console.log("Hummin'bird");
}

image.addEventListener("click",nickWasClicked);


//WHen the element with class create select what was typed in username and what was typed in email

var createAccountButton = document.querySelector(".create");
var eventType = "click";
function createAccount() {
    //console.log("Create an account here!");
    var emailInput = document.querySelector("#email");
    var usernameInput = document.querySelector("#username");
    var email = emailInput.value;
    var username = usernameInput.value;
    var message = email + " " + username;
    console.log(message);
}

createAccountButton.addEventListener("click", createAccount);

var targetInput = document.querySelector(".type");
function onKeyPress(event) {
    var p = document.createElement("p");
    p.innerText = "You typed "+ event.key;
    document.body.appendChild(p);

}

targetInput.addEventListener("keypress",onKeyPress);


window.addEventListener("mousemove",function(e) {
    var xCoord = e.clientX;
    var yCoord = e.clientY;

    var imageToMove = document.querySelector(".move");
    imageToMove.style.left = xCoord + "px";
    imageToMove.style.top = yCoord + "px";
})

// var newImage = document.createElement("img");
// var width = Math.floor(Math.random()*500)+100;
// var height = Math.floor(Math.random()*500)+100;
// image.setAttribute("src","http://fillmurray.com/"+height+"/"+width);
// document.body.appendChild(image);

// function onClick() {

// }

// newImage.addEventListener("click",onClick)


