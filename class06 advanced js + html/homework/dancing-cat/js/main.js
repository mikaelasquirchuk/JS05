
// Create a variable to store a reference to the img.
var walkingCat = document.querySelector("img");
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

walkingCat.style.left = 0;

//Find width
var currentWidthAsAString = getComputedStyle(walkingCat).width;
var currentWidth = parseInt(currentWidthAsAString, 10);

var currentLeftAsString = getComputedStyle(walkingCat).left;
    //Convert to integer
var currentLeft = parseInt(currentLeftAsString,10);

function catWalkLTR() {
    //Find current left position
    //Find current left
    var currentLeftAsString = getComputedStyle(walkingCat).left;
    //Convert to integer
    var currentLeft = parseInt(currentLeftAsString,10);
    //Add 10 pixels to make new left
    var newLeft = currentLeft + 10;
    //Assign new left
    walkingCat.style.left = newLeft + "px";
    //Repeat every 10 ms until end of catwalk
    if (currentLeft < (window.innerWidth - currentWidth) && walkingCat.getAttribute("class") != "turned") {
        window.setTimeout(catWalkLTR,50);
    } else {
        walkingCat.style.transform = "rotate(180deg)";
        walkingCat.style.webkitTransition = "-webkit-transform 0.1s ease-in";
        walkingCat.setAttribute("class","turned");
        window.setTimeout(catWalkRTL,50);
    }
}

function catWalkRTL() {
    //Find current left position
    //Find current left
    var currentLeftAsString = getComputedStyle(walkingCat).left;
    //Convert to integer
    var currentLeft = parseInt(currentLeftAsString,10);
    //Add 10 pixels to make new left
    var newLeft = currentLeft - 10;
    //Assign new left
    walkingCat.style.left = newLeft + "px";
    //Repeat every 10 ms until end of catwalk
    if (currentLeft > 0  && walkingCat.getAttribute("class") === "turned") {
        window.setTimeout(catWalkRTL,50);
    } else {
        walkingCat.style.transform = "rotate(360deg)";
        walkingCat.style.webkitTransition = "-webkit-transform 0.1s ease-in";
        walkingCat.removeAttribute("class");
        window.setTimeout(catWalkLTR,50);
    }
}

catWalkLTR();

// if (currentLeft < (window.innerWidth - currentWidth) /*&& *Cat is facing right*/) {
//     catWalkLTR();
// } else {
//     walkingCat.style.transform = "rotate(180deg)";
//     walkingCat.style.webkitTransition = "-webkit-transform 0.5s ease-in";
// } 
// 

// } else if (newLeft === (window.innerWidth - currentWidth)) {
//     catRotate();
// } else if (newLeft < (window.innerWidth - currentWidth) /*&& Cat is facing left*/) {

// } else {

// }


// var currentLeft = parseFloat(currentLeftAsString, 10);
//     var newLeft = currentLeft + 0.1;
//     walkingCat.style.left = newLeft;
//     if (newOpacity <= window.innerWidth) {
//         window.setTimeout(catWalk, 10);
//     }
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.