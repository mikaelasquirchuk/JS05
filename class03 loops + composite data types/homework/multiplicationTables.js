// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var i = 0; i <=10; i+=1) {
    console.log(i+" * 9 = "+(i*9));
}
for (var m = 0; m <=100; m+=1) {
    for (var i = 0; i <=10; i+=1) {
        console.log(i+" * "+m+" = "+(i*m));
    }
}

