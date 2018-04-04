function dealingWithTime() {
    console.log("I'm melting");
}

setInterval(dealingWithTime,1000);

// SELECT and STORE the image as bill

// CREATE a function called fadeBillAway
//   GET the current opacity and store as currentOpacityAsString
//   GET the current opacity as a number and store as currentOpacity
//   CREATE newOpacity by subtracting 0.01 from currentOpacity
//   UPDATE bill opacity to be newOpacity
//   IF the currentOpacity is >= 0
//     CALL fadeBillAway in 10ms

// CALL fadeBillAway to start the animation

var bill = document.querySelector("img");

function fadeBillAway() {
    var currentOpacityAsString = getComputedStyle(bill).opacity;
    var currentOpacity = parseFloat(currentOpacityAsString, 10);
    var newOpacity = currentOpacity - 0.001;
    bill.style.opacity = newOpacity;
    if (newOpacity >= 0) {
        window.setTimeout(fadeBillAway, 10);
    }
}


fadeBillAway();

var nick = document.querySelector(".nick");

function makeNickWider() {
    var currentWidthAsAString = getComputedStyle(nick).width;
    var currentWidth = parseInt(currentWidthAsAString, 10);
    var newWidth = currentWidth + 1;
    nick.style.width = newWidth + "px";
    if (newWidth <=window.innerWidth) {
        window.setTimeout(makeNickWider,1000/60);
    }
}

makeNickWider();