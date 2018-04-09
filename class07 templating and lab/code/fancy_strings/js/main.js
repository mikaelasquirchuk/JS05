var basicStr = `Hello World`;

var noEscape = `Jane's bag`;

var favNumber = 12;
var myFave = `My favourite number is ${favNumber}.`;

var multiplication = `4 * 2 = ${4 * 2}`
var capitalisation = `Take this string and make it ${"Uppercase".toUpperCase()}.`


// Can be use for templating 
var username = "kookslams";
var postCount = 673;
var description = "Curated kook slammage.";
var htmlMarkUp = `
    <h1>${username}</h1>
    <p>${description}</p>
    <h3>
        Posts: ${postCount}. 
    </h3>
`;

document.body.innerHTML += htmlMarkUp;
