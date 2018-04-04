// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

var line = document.createElement("p");

line.innerText = "99 bottles of beer on the wall";

function songWriter(number) {
    return number+" bottles of beer on the wall; "+number+" bottles of beer; take one down, pass it around... "+(number-1)+" bottles of beer on the wall!"
}

for (var i = 100; i>=1; i-=1) {
    if (i>1) {
        var text = songWriter(i);
        var line = document.createElement("p");
        line.innerText = text;
        document.body.appendChild(line); 
    } else if (i===1) {
        var last = i+" bottle of beer on the wall; "+i+" bottle of beer; take one down, pass it around... No more bottles of beer on the wall!";
        var line = document.createElement("p");
        line.innerText = last;
        document.body.appendChild(line); 
    }
}

// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

