var bill =  document.querySelector("img");

bill.style.position = "fixed";
bill.style.top = "0px"
bill.style.right = "0px";

// Create a function to animate bill
    // Access current top property
    // Add 10 to current top property + set to new top
    // Update Bil's top style to new top
    // Call function again after 15 ms

// Call function


function animateBill() {
    var topStr = getComputedStyle(bill).top;
    var currentTop = parseInt(topStr,10);
    var heightStr = getComputedStyle(bill).height;
    var currentHeight = parseInt(heightStr,10);
    var newTop = currentTop + 10;
    bill.style.top = newTop + "px";
    if (newTop + currentHeight < window.innerHeight) {
        window.setTimeout(animateBill,30);
    }
}

bill.addEventListener("click",animateBill);