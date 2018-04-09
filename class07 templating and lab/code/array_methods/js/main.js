var letters = ["a","b","c","d","e"];

letters.forEach(function (letter, index, entireArray) {
    var message = `
        Current Letter: ${letter}.
        Index: ${index}.
        Entire array: ${entireArray}.
    `;
    console.log(message);
});



var numbers = ["1","2","3","4","5"];

function displayNum(item,index,all) {
    var counting = `<p>${item} is actually at index ${index}.</p>`
    document.body.innerHTML += counting;
};

numbers.forEach(displayNum);



var nums = [1, 2, 3, 4, 5, 6];

var evens = nums.filter(function(num) {
    return num % 2 === 0;
});

var odds = nums.filter(function(num) {
    return num % 2 === 1;
})

console.log(odds);


var marxBrothers = [
    {name: "Groucho", admin:true },
    {name: "Harpo", admin:false },
    {name: "Gummo", admin:false },
    {name: "Karl", admin:true }
]


var admins = marxBrothers.filter(function(brother) {
    return brother.admin === true;
})

console.log(admins);


var words = ["banana","MANGO","Grapes","Custard Apple","CHICKEN"];
function isWordUpperCase (word) {
    return word === word.toUpperCase();
}
var allUpperCasedWords = words.filter(isWordUpperCase);
console.log(allUpperCasedWords);



var letters = ["a","b","c","d","e"];
var upperCased = letters.map(function(letter) {
    return letter.toUpperCase();
})
console.log(upperCased);


var nums = [1,2,3,4,5];
var doubled = nums.map(function(num) {
    return num*2;
})
console.log(doubled);

function fiveTimes (num) {
    return num * 5;
}
var result = nums.map(fiveTimes);
console.log(result);





// todos
//     .map(function(todo,index) {
//         return `<p>#${index + 1}: ${todo}</p>`;
//     });
//     .forEach(function(markup){
//         document.body.innerHTML += markup;
//     });


var nums = [1, 2, 3, 4, 5, 6];
var total = nums.reduce(function (sum, currentNumber) {
    return sum + currentNumber;
}, 0);    
console.log(total);

var testScores = [76, 92, 48, 95, 100];
var totalScore = testScores.reduce(function(currentTotalScore,score){
    return currentTotalScore + score;
},0);

var average = totalScore / testScores.length;

console.log(average);


// var brothers = [
//     { name: "Groucho" },
//     { name: "Harpo" },
//     { name: "Zeppo" },
//     { name: "Chico" },
//     { name: "Gummo" }
// ];
// function createMarkup(allHTML, brother) {
//     return allHTML + `<li>${brother.name} Marx</li>`;
// }
// var htmlMarkup = brothers.reduce(createMarkup, "");
// document.body.innerHTML += `<ul>${htmlMarkup}</ul>`;

// console.clear();

var todos = [
    "Watch Satantango",
    "Go to plant sale",
    "Stay silent",
    "Buy mango chicken"
];

var allHTML = todos.reduce(function(totalHTML, todo) {
    return totalHTML + `<li>${todo}</li>`;
},"")
document.body.innerHTML += `<ul>${allHTML}</ul>`;



