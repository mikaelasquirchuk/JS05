const makeTranslateRequest = require("./API");

console.log(makeTranslateRequest("make a request"));

const { add, subtract, PI } = require("./Math");

console.log(add(21932, 58153));
console.log(subtract(10, 2));
console.log(PI);

const { listen, speak } = require("./Speech");

console.log(listen("words"));
console.log(speak("words"));
