# JS05 Class 12 - Modules, NPM, Babel & Webpacks

## Modules

### What are modules?

* An approach to making our code modular
* It's an approach for organising code
* It adds structure to our projects!
* Each file is considered a module:
* ​That can export contents
* And can require dependencies
* I try and break down my files into single responsibilities

### Exporting just one thing

```
const greetings = name => `Hello ${name}`;

module.exports = greetings;
```

### Exporting multiple things

```
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

module.exports = {
  add: add,
  subtract: subtract
};
```

Or, with Enhanced Object Literals...

```
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

module.exports = {
  add,
  subtract
};
```

### Requiring data

```
const math = require("./math");
const greetings = require("./greetings");

console.log(math, greetings);
```

```
const { add } = require("./math");

console.log(add);
```
