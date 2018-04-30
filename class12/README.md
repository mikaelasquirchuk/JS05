# JS05 Class 12 - ES2015, AJAX & APIs

## ES2015

### _let_ and _const_

* let is the same as var

```
let x = y;
```

```
const x = y;
```

* But what's wrong with _var_?
  * It can be reassigned
  * It allows shadowing (can be redeclared)
  * It is function scoped (not necessarily a problem)
* _let_ and _const_ are new ways to declare variables that change the style of scoping from _function scoped_ to _block scoped_.
* These protect your code from _shadowing_.
* They protect you from function scoping problems.
* You can choose whether the variable can be reassigned _or not_.

#### _let_

* Block scoped (not function scoped)
  * i.e. curly brackets create scope
* Can be reassigned
* Named with lowerCamelCase
* Temporal dead zone!

#### _const_

* Block scoped (not function scoped)
  * i.e. curly brackets create scope
* Can**not** be reassigned
* Named with lowerCamelCase
* Temporal dead zone!

### Destructuring

#### Object destructuring

* Much more syntactic sugar
* Declaration of object
* Keys of object can be accessed using destructuring

#### Array destructuring

* Same as object destructuring, just more ordered
* That is, the first destructuring is first, the second is second, etc.

### Arrow functions

* A more concise approach to creating functions
* They can have implicit return
* Trade-offs:
* Doesn't have it's own this
* Doesn't have it's own arguments (though that isn't a big deal)
* Don't use them when:
  * you need this to be reassigned
  * you're using event listeners!
  * you need arguments
  * you want your function to have a name
* Also, they are harder to debug

* Other features we will see
  * Default Parameters
  * Classes
  * Spread and Rest Operators
  * Enhanced Object Literals
  * Plus, more...
  * Check these out - they'll make your life easier!
