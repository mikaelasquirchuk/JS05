# JS05 Class 02 - Data Types, Loops + Conditionals

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
 ``` "";```
 ``` "A piece of text";```
 ``` 'These are all strings';```
 ``` "Jane's bag";```
 ``` 'Bill\'s guitar';```
 ``` "Hello " + "World"; // Concatenation (use addition operator to combine two strings)```
 
#### Numbers
``` 4; ```
``` 4.12; ```
``` -20.20202; ```
``` 0.002; ```
``` NaN ```
* Numbers in JS are integers, floats (decimals), negative, positive, some other weird things...
* Arithmetic in JS
    * 4 + 8;   // Addition
    * 12 - 4;  // Subtraction
    * 4 * 5;   // Multiplication
    * 8 / 4;   // Division
    * 9 % 4;   // Remainder 

#### Booleans
``` true; ```
``` false; ```
* A logical data type that can only have the value _true_ or _false_.
* They are used primarily to determine which sections of code to execute (e.g. the **if conditional**) or which sections of code to repeat (e.g. the **for loop**).

#### Undefined
* A data type meaning that there is no value. 
 ``` undefined;```
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
* Named containers for storing, and accessing, data.
* Variables are ways to store information in memory.
* You assign a name to a certain piece of data or collection of code. Think of them as named buckets.


## Loops


## Conditionals

