// Select, manipulate, admire
// Select element and store a reference
// Manipulate the element(optional)
// Admire

// Select
var h1 = document.querySelector('h1');

// Manipulate
h1.innerText = "Updated with JS";
h1.style.color = "hotpink";
h1.style.textDecoration = "underline";
h1.style.fontSize = "28px";

// Admire...


//Create, manipulate, inject

// Create element as a reference
// Manipulate the element (optional)
// Inject

function addLorem() {
    // Create
    var lorem = document.createElement("p");
    // Manipulate
    lorem.innerText = "Lorem ipsum is about to go down.";
    lorem.style.color = "rebeccapurple";
    lorem.style.textDecoration = "line-through";
    // Inject
    document.body.appendChild(lorem);
}

for (var i = 1; i <= 10; i+=1) {
    addLorem();
}



// Create

// Manipulate


// Inject



// Have a function that creates an img element using Unsplash and adds it to the end of the body tag

// Bonus: Get the width and height to be random
// Bonus: Make it happen every second
// Bonus: Make it happen whenever there is a click

function addImage() {
    var image = document.createElement("img");
    randomNum = Math.floor(Math.random()*500)+100
    randomSizePic = "https://picsum.photos/"+randomNum;
    image.setAttribute("src",randomSizePic);
    document.body.appendChild(image);
    //setTimeout(addImage,1000);
}

//document.addEventListener("click", addImage);

addImage();

function changeImage() {
    var image = document.querySelector("img");
    randomNum = Math.floor(Math.random()*500)+100
    randomSizePic = "https://picsum.photos/"+randomNum;
    image.setAttribute("src",randomSizePic);
}
document.addEventListener("click", changeImage);


