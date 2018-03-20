//## The Pluralizer

//Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible (e.g. use the rules described [here](http://blog.writeathome.com/index.php/2011/12/how-to-make-nouns-plural/))


var noun = "day";
var num = 2;

if (num === 1) {
    console.log(num+ " "+noun);
} else if (
    noun.endsWith("s") || 
    noun.endsWith("x") || 
    noun.endsWith("z") || 
    noun.endsWith("ch") || 
    noun.endsWith("sh")) {
        console.log(num+" "+noun+"es");
} else if (
    noun.endsWith("y") && 
    (noun.charAt(noun.length - 2) != "a" &&
    noun.charAt(noun.length - 2)  != "e" &&
    noun.charAt(noun.length - 2) != "i" &&
    noun.charAt(noun.length - 2) != "o" &&
    noun.charAt(noun.length - 2) != "u")) {
        console.log(num+" "+noun.slice(0,(noun.length - 1))+"ies");
} else {
    console.log(num+" "+noun+"s");
}

//Normal nouns are made plural simply by adding an s. 

//Nouns that end in s, x, z, ch, or sh are made plural by adding es. 

//Nouns that end in y, preceded by a consonant, are made plural by replacing the y with ies.

//Nouns that end in y, preceded by a vowel, are treated like normal nouns: just add s.




//Some nouns that end in o, preceded by a 
// Other nouns that end in o and are preceded by a consonant are made plural by just adding s. If in doubt, check a dictionary.

// Still other nouns ending in o and preceded by a consonant have both recognized plural forms: add either s or es. If in doubt, check a dictionary.

//Some nouns that end in f or fe become plural by changing the f or fe to ves.
//Other nouns that end in f or fe are treated as normal nouns: just add s.
// A small group of nouns that end in f can be made plural either way:

//Some nouns ending in us are made plural by changing the us to i.
//Some nouns ending in is are made plural by changing the is to es.
// Some nouns ending in ix or ex are made plural by changing the ix to ices.
// Some nouns ending in eau are made plural by changing the eau to eaux.
//Some nouns become plural by changing the ending to en.
//Some nouns become plural by changing the ending to a.
// Some nouns become plural by changing oo to ee.
// Some nouns become plural by changing the ending a to ae.
//Some nouns become plural by replacing ouse with ice.
// Some nouns don’t change at all between singular and plural forms.

//Some nouns only have a plural form.
//Some nouns have only a singular form in ordinary usage (some of these, like money, cotton, and sugar can be plural when talking about particular kinds).
//Some nouns naming animals have two plural forms.
//Compound nouns are usually made plural by making the first noun part plural.