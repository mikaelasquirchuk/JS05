//## The Rest

//* Implement a Rock, Paper, Scissors single game
//* Implement a Rock, Paper, Scissors best of three game
//* Anything else you can think of!

// rock = 0
// scissors = 1
// paper = 2

var playerHand = "rock";

var computerHand = Math.floor(Math.random() * 2);

var computerHand2

if (computerHand === 0) {
    computerHand2 = "rock";
} else if (computerHand === 1) {
    computerHand2 = "scissors";
} else if (computerHand === 2) {
    computerHand2 = "paper";
}

console.log("Computer plays "+computerHand2)
console.log("You play "+playerHand)

if (playerHand === computerHand2) {
    console.log("It's a draw!");
} else if (
    (playerHand === "rock" && computerHand2 === "scissors") ||
    (playerHand === "paper" && computerHand2 === "rock") ||
    (playerHand === "scissors" && computerHand2 === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("Computer wins.");
    }
