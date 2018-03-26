// The Recipe Card
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var faveRecipe = {
    title: "Chocolate Pear Pudding",
    servings: "1 for Kael, 4 for regular people",
    ingredients: ["tinned pears", "cocoa", "sugar"]
}

console.log("Title: "+faveRecipe.title);
console.log("Servings: "+faveRecipe.servings);
console.log("Ingredients: ");
for (var i = 0; i < faveRecipe.ingredients.length; i += 1) {
    console.log(faveRecipe.ingredients[i]);
}