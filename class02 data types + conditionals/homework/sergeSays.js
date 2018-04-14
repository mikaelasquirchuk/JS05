
//## Serge Says

//Store a user message
//Print 'Sure.' if you ask a question (e.g. the message ends in ?).
//Print 'Woah, chill out!' if you yell (e.g. your message is in all capitals).
//Print 'Fine. Be that way!' if you don't say anything (e.g. your message is empty).
//Print 'Whatever.' to anything else.
//Bonus: If the message is all spaces, also print "Fine. Be that way!"

var userMessage = "HeLlo";

if (userMessage.endsWith("?")) {
    console.log("Sure.");
} else if (userMessage === "") {
    console.log("Fine, be that way!");
} else if (/^\s+$/.test(userMessage)) {
    console.log("Fine, be that way!");
} else if (userMessage === userMessage.toUpperCase()) {
     console.log("Woah, chill out!");
} else {
    console.log("Whatever.");
}
