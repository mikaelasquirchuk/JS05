var userAge = 13;
var userPersona ="mature";

if (userAge >=18) {
    console.log("You can view the site.");
} else if (userPersona === "hacker") {
    console.log("Tricksy hobbitzes...");
} else {
    console.log("Visit mylittlepony.com");
}

if (userAge >=18 || userPersona === "mature") {
    console.log("You can view the site.");
} else if (userPersona === "hacker") {
    console.log("Tricksy hobbitzes...");
} else {
    console.log("Visit mylittlepony.com");
}

var userName = "Joel";
var userJob = "stripper";

if (userName === "Joel" && userJob === "teacher") {
    console.log("That's a good choice!");
} else if (userName === "Joel" && userJob==="gardener") {
    console.log("That's a bad choice!");
} else {
    console.log("I'm not sure what's happening");
}