
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

for (var i = 100; i>=1; i-=1) {
    if (i>1) {
        console.log(i+" bottles of beer on the wall; "+i+" bottles of beer; take one down, pass it around... "+(i-1)+" bottles of beer on the wall!");
    } else if (i===1) {
        console.log(i+" bottle of beer on the wall; "+i+" bottle of beer; take one down, pass it around... No more bottles of beer on the wall!");
    }
}