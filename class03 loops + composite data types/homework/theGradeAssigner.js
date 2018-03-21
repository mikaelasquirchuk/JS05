// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.


for (var userScore = 60; userScore <= 100; userScore += 1) {
    if (userScore >= 85) {
        console.log("For "+userScore+", you got an A.");
    } else if (userScore >= 75) {
        console.log("For "+userScore+", you got an B.");
    } else if (userScore >= 65) {
        console.log("For "+userScore+", you got an C.");
    } else if (userScore >= 50) {
        console.log("For "+userScore+", you got an D.");
    } else {
        console.log("For "+userScore+", you got an F.");
    }
}