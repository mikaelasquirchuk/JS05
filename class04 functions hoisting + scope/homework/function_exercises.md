# Exercises: Functions

These exercises are based on the variables exercises, so you may start from your solutions or start from scratch.

Note that if you think the data would be best stored in another way (i.e. using arrays or objects) - go right ahead! e.g. the World Translator might have some data that looks like this: 

```js
var translations = {
  eng: "Hello World",
  fr: "Bonjour le Monde"
  // ...
};
```

http://madebyknight.com/javascript-scope/




## The Rest

Turn any of the other exercises [here](https://gist.github.com/ga-wolf/8eb6b2bcb9356a0e6346ccac35a836eb) into functions!



### Bonus

* Don't receive an ID! Find the user based on the email
* Make a function that creates an account. e.g. `createAccount("chico@gmail.com", "redLippedBatfish", false);`
  * This should just add another object into the array
* Make a function that deletes an account. e.g. `deleteAccount("zeppo@ga.co");`
  * This should just remove an object from the array
  * Bonus: Make this only work if the correct password was provided as a parameter too
* Make a function that updates an account. e.g. `updateAccount("harpo@ga.co", "password", "ayeAye");`
  * Bonus: Instead of receiving two strings to illustrate the change (like above), receive an object so you could potentially change multiple things at once. e.g. `updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });`
  * Bonus: Make this work only if the current password was also provided as a parameter. e.g. `updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });`
* Add a few extra users and make a search function. I'll let you decide on the interface or the _function signature_

## A Transit Application

Start with this data...

```js
var stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
```

Create a function called `travelFrom` that receives a start station and an end station.

* Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
* Print out the names of the stations on separate lines (e.g. log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")

### Bonus

* Make this work if you want to go backwards! e.g. You want to travel from "Redfern" to "St. James"
* Make it error-tolerant. E.g.:
  * Make it case-insensitive - there should be no difference between "redfern", "Redfern" and "REDFERN"
  * If someone passes in a station that doesn't exist, tell them
* Make it work across lines! I'll leave it up to you to create the data you need - but create arrays of multiple train lines in Sydney, and try it to get to print out the same things as above - but also things like "Swap lines at ....."
  * This will be very, very difficult! Don't feel like you have to add in all the lines, just a few to prove that it is working
  * Look at the hints below

#### Hints 

* You can receive the name of the line! (e.g. `travelFrom("t2", "Circular Quay", "t3", "Canterbury")`)
* Find the common station! (e.g. t2 and t3 both have "Central")
  * Maybe drawing out the lines is a good approach!
* One of the easiest approaches to this is to treat a trip across lines as two separate trips
* An object with arrays stored under the name of the train lines might be a good way to approach it (e.g. `var sydneyTrains = { t1: [], t2: [] };`
  * Note that if you want to use a variable to decide which line to access - dot notation won't work on an object! You'll have to think of another way...
* Ask me questions about this if you want though!
* Work together as well - even if it is just in the planning stages
  