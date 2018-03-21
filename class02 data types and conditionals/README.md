# JS05 Class 02 - Data Types + Conditionals

## Review
* Type node in CMD will allow you to type JS directly into CMD = Read Execute Print Loop = REPL
* Control D will leave REPL.

## Data Types
* Building blocks of language - types of information
 * **Primitive data types** = immutable (strings, numbers, Boolean, undefined)
    * _Strings_ = pieces of text = "hello world"; 'a';
    * _Numbers_ = integers or floats = 4; 2.6;
    * _Booleans_ = true or false = false; 0;
    * Undefined = hasn't been assigned a value = undefined;
    * Null = non-existent = null;
    * Symbol (added in ES6) = anonymous data = Symbol("hello");
 * **Composite data types** = mutable (arrays, lists) = collections of primitive or other composite data types
    * _Objects_ = collection of data = {name: "Jane"}
    * _Arrays_ = ordered collection of data = [ 4 , 2.6 ]
    * _Functions_ = a callable subprogram = function hi () {}

### Primitive data types
Inheritence = Whenever you create a primitive datatype, you get two things: properties and methods.
    * Property = attribute of the datatype, e.g. "A String".length;
    * Method = callable function of the data type, e.g. "A String".toUppercase;
* Predicate methods will return true or false, e.g. "hello".startsWith("h");

#### Strings 
``` 
"";
"A piece of text";
'These are all strings';
"Jane's bag";
'Bill\'s guitar';
"Hello " + "World"; // Concatenation (use addition operator to combine two strings)
```
 
#### Numbers
``` 
4; 
4.12; 
-20.20202;
0.002;
NaN 
```
* Numbers in JS are integers, floats (decimals), negative, positive, some other weird things...
* Arithmetic in JS
    * 4 + 8;   // Addition
    * 12 - 4;  // Subtraction
    * 4 * 5;   // Multiplication
    * 8 / 4;   // Division
    * 9 % 4;   // Remainder 

#### Booleans
``` 
true;
false; 
```

* A logical data type that can only have the value _true_ or _false_.
* They are used primarily to determine which sections of code to execute (e.g. the **if conditional**) or which sections of code to repeat (e.g. the **for loop**).

#### Undefined

 ``` undefined;```

* A data type meaning that there is no value.
* This often pops up when:
    * A variable has just been declared and hasn't been assigned a value
    * You attempt to access an object's property and it has no associated value
    * You receive a parameter in a function, but no argument has been provided for that parameter 
* This is what the browser sets automatically.

#### Null

```null```

* A null value represents having no data stored
* It, just like undefined, means there is no value
* The difference? Null is often intentional, or explicit (e.g. you store this value in a variable); Undefined is set by the browser (e.g. when you don't give a variable a value)

### Variables
* Named containers for storing, and accessing, data in memory.
* You assign a name to a certain piece of data or collection of code. Think of them as named buckets.
* To create a variable =
    * the **var** keyword
    * a JavaScript identifier (i.e. name of the bucket)
    * a single equals sign (_assignment_)
    * a value

``` var myVariable = "some data"; ```

* Or... =
    * the **var** keyword
    * a JavaScript identifier

``` var myVariable;```

#### Naming conventions
* The JavaScript identifier:
    * Must be one word
    * Must consist only of letters, numbers, the dollar sign and underscores
    * Must not start with a number
    * Must not be one of these reserved words:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
    * Is case sensitive
* Camel-casing
    * When you create a variable, pick a name based on clarity and meaning. Be descriptive!
    * If you need to use two or more words in your JS identifier, use camel-casing! This is where you capitalize all words after the first word

``` var camelCasing = true; ```

``` var dataTypes = true; ```

``` var playerOneMove = "Rock"; ```

* **Note**: Don't use the var keyword after the first time. This is because the variable has already been declared.
* JavaScript can change datatypes:

#### Static vs. Loose Typing
* Static typing (also called strong typing, or strict typing):
    * You have to declare what type a variable is going to be (e.g. this variable is always going to be a string).
* Loose typing (also called weak typing, or dynamic typing):
    * The data stored in a variable can change.
* What typing does JavaScript have?
    * Loose typing

## Conditionals
* JavaScript is an asynchronous programming language: it reads line by line from the top, and starts the execution of each line in order (but won't wait for each line to complete)
* Conditional statements execute or skip parts of a program based on the value of an expression
* These are the decision points of your code, or the "branches"
* They rely quite heavily on boolean(ish) values

* Why do we use them?
    * To make decisions with code
    * To allow "state" to change how our program runs
    * To make part of our code optional

#### If Statement
* This is the fundamental control statement that allows JavaScript to make decisions. It adds logic to the language
* It requires:
    * The if keyword
    * Parentheses with a condition in the middle 
    * Curly brackets to identify what code should execute
* This is roughly how it runs: https://dorey.github.io/JavaScript-Equality-Table/#if-statement


```
if ( CONDITION GOES HERE ) {
 // CODE TO EXECUTE IF THE CONDITION EVALUATES TO TRUE
}
```

#### If / Else Statement
```
if ( CONDITION GOES HERE ) {
    CODE TO EXECUTE IF THE CONDITION EVALUATES TO TRUE

} else {
    
    // CODE TO EXECUTE IF THE CONDITION EVALUATES TO FALSE

}
```

#### If / Else If / Else Statement

```
if ( FIRST CONDITION ) {
    // CODE TO EXECUTE IF FIRST
    // CONDITION EVALUATES TO TRUE
} else if ( SECOND CONDITION ) {
    // CODE TO EXECUTE IF SECOND
    // CONDITION EVALUATES TO TRUE
} else {
    // CODE TO EXECUTE IF NEITHER 
    // CONDITION EVALUATES TO TRUE
}
```

* You can create as many else if statements as you need.
* JavaScript will run the code in only the first passing condition's curly brackets.

## Operators

* In JavaScript, we have comparison operators and logical operators:
    * Comparison operators compare two values (e.g. equal, greater than).
    * Logical operators are used to make more complex conditionals - for example, deciding based on two different facts (e.g. this AND that, this OR that).

| Operator | Meaning | Example |
| --- |:---:|---:|
| == | Loose equality | 4 == "4" |
| === | Strict equality | 4 === 4 |
| != | Loose inequality | 4 != "5" |
| !== | Strict inequality | 4 !== 2 |
| > | Greater than | 14 > 10 |
| >= | Greater than or equal to | 19 >= 14|
| < | Less than | 10 < 30 |
| <= | Less than or equal to | 2093 <= 3440|

##### == vs. ===
* What is the difference between == and ===? The answer is based on something called type coercion.
* When you use the threequals sign, it demands the values are the same AND the types are the same.
* When you use the double equals, it demands that the values can be the same (it will coerce the types for you).
* So, type coercion is when a data type is converted into a different type (e.g. 2 into "2")

#### Comparison Operators

| Operator | Meaning | Example |
| --- |:---:|---:|
| && | AND | 3 === 3 && 2 === 2 |
| \|\| | OR | 4 === 1 \|\| 4 === 4 |
| ! | NOT | !false |


#### && (AND) Truth Table

| CONDITION 1 | CONDITION 2 | RESULT |
| --- |:---:|---:|
| false | false | false |
| true | false | false |
| false | true | false |
| true | true | true |

The && (AND) Logical Operator requires the conditions on BOTH sides to evaluate to true in order to pass.

#### || (OR) Truth Table

| CONDITION 1 | CONDITION 2 | RESULT |
| --- |:---:|---:|
| false | false | false |
| true | false | true |
| false | true | true |
| true | true | true |

The /|/| (OR) Logical Operator requires the conditions on AT LEAST ONE side to evaluate to true in order to pass.

#### ! (NOT) Truth Table

VALUE | RESULT
---|:---|
false | true
true | false

The ! (NOT) Logical Operator takes one value and turns it into the opposite boolean representation
