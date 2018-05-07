#JS05 Class 14 - Classes + React

## Review

* Modules
* Transpilation + compilation
* Babel
* Webpack

## Classes

### What are classes?

* Syntactic sugar for inheritance in JavaScript
* An ES2015 feature!
* Modular JavaScript is made a little easier with these features
* There are two main things:
  * The class itself (the blueprint)
  * The instances (the actual houses built from it)
* You can extend classes for complex inheritance too!

### How do you create classes?

```
class UpperCamelCase {
    constructor() {
        console.log("A person was just born!");
    }

    sayHiTo(name) {
        console.log(`Hello ${name}`);
    }
}
```

```
class Person {
    constructor(name) {
        this.name = name;
        console.log(`${this.name} was just born!`);
        console.log(this);
    }

    sayHiTo(name) {
        console.log(`Hello ${name}, I'm ${this.name}!`);
    }
}
```

### Then you create instances

```
class Person {
    constructor(name) {
        this.name = name;
        console.log(`${this.name} was just born!`);
    }
    sayHiTo(name) {
        console.log(`Hello ${name}, I'm ${this.name}`);
    }
}

const jane = new Person("Jane");

jane.sayHiTo("Bill");
```

### Inheritance and Classes

```
class Shape {
    constructor(type) {
        this.type = type;
        console.log(`A ${type} was created`);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
```

## React

### What is React?

* A JavaScript library for building user interfaces
* Include it before your own code:
  * Script
  * NPM
* Built by Facebook
* It is a Front-end JavaScript Framework
  * It changes the way we write code
  * Other frameworks: Vue, Angular, Backbone etc.

### The React Ecosystem

* You can go straight ahead and write React code, though it is often written with other technologies:
  * Webpack
  * Babel
  * React (and ReactDOM)
  * JSX (JSX in Depth)

### What is JSX?

* A syntax extension to JavaScript (not a part of ECMAScript or anything though)
* It's almost like HTML in JavaScript
* JSX produces React "elements"
* React doesn't require JSX, but it is suggested
* You can embed expressions in JSX (like interpolation)
* It just makes our lives easier!

### What does React teach?

* Declarative
* Unidirectional Data Flow
* Composition
* Explicit Mutations
* Remember that it is just JavaScript

### Imperative vs. Declarative

Imperative is telling a computer how to do something
Declarative is telling a computer what to do
It relies on the magic
Declarative is all about abstraction
React Components are always declarative

###Advantages

* Really easy to see the structure of your app
* Very good at managing state
* Performant
* Virtual DOM
* Data Binding
* Easy to test
* Isomorphic (can be rendered server-side)
* Agnostic (you can use it with all sorts of other libraries as React is just the view layer)
* Learn once, write everywhere

### Disadvantages

* A big library
* Lots of magic
* It is just the view layer
* Typically requires a transformation step
* A steep learning curve
* It changes incredibly regularly

### Working with Components

A component is one of the fundamental parts of React
Each component represents a small part of a page
And each component manages their own state
You compose your app with lots of different components
