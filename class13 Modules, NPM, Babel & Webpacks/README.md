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

## NPM

### What is NPM?

* The Node Package Manager
* Makes sharing and reusing code easier
* "Use npm to install, share, and distribute code; manage dependencies in your projects"
* It is a command line tool that is installed when you install Node
* It is the largest software registry in the world

### Common Commands

* Start a new Node project: ```npm init`
* Install a package globally
  ```npm install -g PACKAGE_NAME`

- Add a package as a dependency for a project
  ```npm install --save PACKAGE_NAME`

- Add a package as a dev dependency for a project
  ```npm install --save-dev PACKAGE_NAME`

- Run a script you have defined in `package.json`
  ```npm run COMMAND_NAME`

  ### An NPM Project

`` node_modules/` ```package.json `
```package-lock.json`

```
node_modules/

app/
    html/
    css/
    js/

build/

package.json

package-lock.json

CONFIG_FILES
```

* This works with modules
* If you have installed a NPM package, we can then include that code in our project using a require statement

```
// Let's pretend we had p5 installed...
// npm install p5

const p5 = require("p5");

// Let's pretend we had react installed...
// npm install react

const React = require("react");

// This also works with destructuring!
```

## Babel

* Takes ES6 and turns it into old style javascript
* It allows us to deal with incompatibilities easier

### Compilers vs. Transpilers

* Both translate code from one language to another
* Transpiling is when the two languages involved are at a similar level of abstraction
* Compiling is when the translation takes place and the resulting code is at a much lower level of abstraction

### What is Babel?

* Babel is a JavaScript compiler/transpiler
* It allows us to use next-generation JS today
  * e.g. All of the new ES2015 features (plus newer stuff like ES2016, ES2017, ES2018...)
  * Plus, all sorts of other things...
* It translates our "new" code into things that work in browsers

### How do you use Babel?

* We can use Babel through:
* A Command Line Tool
* Its API
* Or through a build system (e.g. Webpack) - this is how we are going to be doing it!

### Babel Concepts

* Presets = ​A whole heap of translations (e.g. all necessary translations for ES2015, or for React etc.)
* Plugins = ​A single translation (e.g. arrow functions -> functions)
* We install both of these things with NPM!

### Configuring Babel

* We create a .babelrc file in the root directory of our project (the preferred method)
  * In this file, we configure with JSON
* Or in package.json

```
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": [">0.25%"]
        }
      }
    ]
  ],
  "plugins": []
}
```

## Webpack

### What is Webpack?

* It is a Build System and a bundler
    * Build system = it automates tasks for us
    * Bundler = it takes our code, transforms and bundles it, then returns a new version of our code
* We need to make sure our code is browser compatible:
    * SCSS -> CSS
    * ES2015 -> JavaScript
* It doesn't do anything by default
* But can be extended to do lots of other things:
  * Minifying and Optimizing Code
  * Minifying Images
  * etc.
* Before this, we have to add lots of scripts if our code is broken up - Webpack brings all of our code together

### Why do you need it?

* It helps structure our code
* It organises and automates the tasks we need to do
* e.g. using Babel
* It saves us from having to combine files ourselves
* It helps us work with larger applications (e.g. by splitting code)
* It can help create our server, can replicate different environments (e.g. development or production) and can add Hot Module Replacement

### Any alternatives?

* Parcel
* FuseBox
* RollUp
* Browserify
* Grunt
* Gulp
* Make
* Using NPM as a Task Runner

### What it needs to know

* The starting point of your application
* What transformations it needs to perform
* The "mode" (whether it is development or production)
* Where it should save your transformed code
* We define all of this in a file called webpack.config.js

### Some Webpack concepts

* entry - ​Where your application starts
* output - ​Where your resulting code goes
* loaders - ​A single transformation/process (e.g. Babel)
* rule - All transformations that need to take place for certain files
* bundle - ​Your transformed code (once it is combined)
* mode - The current environment (development or production)

* webpack.config.js example

```
const config = {
  entry: ["./app/js/index.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
};

module.exports = config;
```

https://gist.github.com/ga-wolf/0e0940210498cfcb9d71880de4e7ba03
