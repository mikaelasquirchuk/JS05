// Create a Roll Virtual Dice Function
// Optional: Receive a parameter to decide how many sides the Dice actually has (e.g. a 12-side dice)


function diceRoll(diceSides){
    var num = Math.floor(Math.random() * Math.floor(diceSides));
    console.log(num);
}

diceRoll(12);
diceRoll(12);
diceRoll(12);
diceRoll(12)
