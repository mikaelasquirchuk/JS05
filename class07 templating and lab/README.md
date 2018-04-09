# JS05 Class 07 - Templating + Lab

## Review

* JavaScript DOM manipulation patterns:
    * Select, manipulate, admire;
    * Create, manipulate, add to the page.
* Events 
    * Event needs to have: 
        * a target = DOM node or window object [browser];
        * a type = always lower case, e.g. mousemove, click, dblclick;
        * a callback function = subset of higher order functions;
    * Creating event handlers
    * Using the event parameter
* Animations

## Templating

### ECMAScript
* ES is the standard syntax of JS
* ES1, ES2... ES5... then changed to year notation
* ES2015 allows you to create strings with backticks

### Strings with backticks
* You can also create strings with backticks (``)
* This allows for:
    * Multi-line strings
    * Interpolation
* It is a new feature of JavaScript!

#### Interpolation
* The process of inserting a value into a string
* Almost like substitution
* We can run any JavaScript code with interpolation. For example, call functions.

```
var myString = `Creating strings!`;

var favNumber = 42;

var message = `Favourite Number: ${favNumber}`;

var str = `4 * 2 = ${4 * 2}`;
```

## Functional array methods

* Two main styles of programming = Imperative vs. Declarative
    1. An Imperative Approach to Programming
        * Describes the "HOW". You explain every single thing in the program
        * e.g. for (...) {}
    2. A Declarative Approach to Programming
        * Describes the "WHAT". You describe a pattern
        * e.g. forEach
        * Declarative Programming leads to:
            * More readable code
            * Often more efficient code
        * You'll spend less time trying to understand your program, and more time figuring out the higher-level logic
        * Declarative programming uses the magic and hides the complexity

### `forEach`
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
    * The .forEach method allows us to iterate through each item in a collection
    * We provide a callback function that will be provided with the current item, the current index and the entire collection

```
ARR.forEach(function (ITEM, INDEX, ARR) {

});
```

```
var letters = ["a", "b", "c", "d", "e"];

letters.forEach(function (letter, index) {
    console.log(
        `Current Letter: ${letter}. Index: ${index}`
    );
});
```

### `filter`
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    * The .filter method allows us to iterate through each item in a collection
    * It will return a new collection
    * We provide a callback function that will be provided with the current item, the current index and the entire collection
    * If the callback function returns true, the item will be stored in the returned collection. Otherwise, it won't be. The callback must be a predicate!

```
ARR.filter(function (ITEM, INDEX, ARR) {
    // Must return a boolean!
});
```
```
var numbers = [1, 2, 3, 4, 5, 6];

var evens = numbers.filter(function (num) {
    return num % 2 === 0;
});

console.log(evens);
```

### `map`
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    * The .map method allows us to iterate through each item in a * collection
    It will return a new collection
    * We provide a callback function that will be provided with the current item, the current index and the entire collection
    * The callback must return a value! The value that you return will be stored in the new collection
    * Essentially it transforms each item!

```
ARR.map(function (ITEM, INDEX, ARR) {
    // Must return a boolean!
});
```
```
var letters = ["a", "b", "c", "d", "e"];

var upperCased = letters.map(function (letter) {
    return letter.toUpperCase();
});

console.log(upperCased);
```
```
var numbers = [1, 2, 3, 4, 5, 6];

var multiplied = numbers.map(function (num) {
    return num * 5;
});

console.log(multiplied);
```

### `reduce`
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    * The .map method allows us to iterate through each item in a collection
    * It will return a new collection
    * We provide a callback function that will be provided with the running total and the current value, as well as a starting value
    * The callback must return a value! The value that you return will be stored as the running total value for the next iteration
    * Often called inject
```
ARR.reduce(function (TOTAL_VALUE, CURRENT_VALUE) {
    // Must return a value! This will be set to TOTAL_VALUE
}, STARTING_VALUE);
```
```
var nums = [1, 2, 3, 4, 5, 6];

var total = nums.reduce(function (sum, currentNumber) {
    return sum + currentNumber;
}, 0);

console.log(total);
```

```
var brothers = [
    { name: "Groucho" },
    { name: "Harpo" },
    { name: "Zeppo" },
    { name: "Chico" },
    { name: "Gummo" }
];

function createMarkup(allHTML, brother) {
    return allHTML + `<li>${brother.name} Marx</li>`;
}

var htmlMarkup = brothers.reduce(createMarkup, "");

document.body.innerHTML += `<ul>${htmlMarkup}</ul>`;
```

* Create a glossary - https://gist.github.com/ga-wolf/bf38af1d3e82fe96d2ba34e378e06532
