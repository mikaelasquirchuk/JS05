// // Add a click listener to an image
// // Bonus: Log the width of that image
// // Bonus: Make the same function work for all images
// // Bonus: Add a border to the clicked images

// var images = document.querySelectorAll("img");

// var eventType = "click";

// function logWidth(event) {
//     console.log(event.width);
// }

// for (var i = 0; i < images.length; i+=0) {
//     var imageClicked = images[i];
//     imageClicked.addEventListener(eventType,logWidth);
// }

var images = document.querySelectorAll(".image")

var type = "click";

for (var i = 0; i < images.length; i++) {
    var target = images[i];
    function logWidthAndBorder() {
        var getWidth = getComputedStyle(this).width;
        console.log(getWidth);
        this.style.border = "2px black solid";
    }
    target.addEventListener(type,logWidthAndBorder);
}


// // Add a keypress listener on an input
// // Bonus: Log the key that was pressed

var targetInput = document.querySelector('input');

eventType = "keypress"

function logKey(event) {
    console.log(event.key);
}

targetInput.addEventListener(eventType,logKey);
