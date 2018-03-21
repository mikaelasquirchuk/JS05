// Golf
// Using the condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole

// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5


for (var score = 1; score <=8; score+=1) {
    var par = 5;
    if (score === 1) {
        console.log("Hole in one");
    } else if (score <= par - 2) {
        console.log("Eagle");
    } else if (score === par - 1) {
        console.log("Birdie");
    } else if (score === par) {
        console.log("Par");
    } else if (score === par + 1) {
        console.log("Bogey");
    } else if (score === par + 2) {
        console.log("Double bogey");
    } else if (score >= par + 3) {
        console.log("You lose");
    }
}

for (var par = 3; par <= 5; par+=1) {
    for (var score = 1; score <=8; score+=1) {
        if (score === 1) {
            console.log(score+" on par "+par+" is a Hole in one");
        } else if (score <= par - 2) {
            console.log(score+" on par "+par+" is a Eagle");
        } else if (score === par - 1) {
            console.log(score+" on par "+par+" is a Birdie");
        } else if (score === par) {
            console.log(score+" on par "+par+" is a Par");
        } else if (score === par + 1) {
            console.log(score+" on par "+par+" is a Bogey");
        } else if (score === par + 2) {
            console.log(score+" on par "+par+" is a Double bogey");
        } else if (score >= par + 3) {
            console.log(score+" on par "+par+" is a You lose");
        }
    }
}

