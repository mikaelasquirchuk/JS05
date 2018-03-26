// Loops
// 1. Start
// 2. End
// 3. Step/increment/index

for (var i = 0; i < 5; i += 1) {
    console.log(i);
}

while (i < 5) {
    console.log(i);
    i = i + 1;
}

//Arrays
//Ordered, zero-based, accessed by index

var items = ["wallet","glass","jug"];

var firstItem = items[0];
console.log(firstItem);

var lastItem = items[items.length-1];
console.log(lastItem);

items.push("bottle");
console.log(items);
//Objects
// Undordered, key-value pairs, accessed with a key

var explorer = {
    firstName: "Jacques",
    lastName: "Cousteau"
};

var firstName = explorer.firstName;
console.log(firstName);

//Complex item + loops

var marxBrothers = [
    {email: "groucho@ga.co"},
    {email: "harpo@ga.co"},
    {email: "chico@ga.co"}
];

for (var i = 0; i < marxBrothers.length; i += 1) {
    var currentBrother = marxBrothers[i];
    console.log(currentBrother.email);
};


