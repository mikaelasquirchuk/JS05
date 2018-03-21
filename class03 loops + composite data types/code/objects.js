var emptyObject = {};

var user = {
    firstName: "Bill",
    lastName: "Murray",
    email: "bill.murray@gmail.com",
    blogPosts: [
        "Why would I have a blog?",
        "Famous people things",
        "#famousworldproblems"
    ]
}

var bookSeries = {
    name: "His Dark Materials",
    author: "Philip Pullman",
    books: [
        "The Northern Lights",
        "The Subtle Knife",
        "The Amber Spyglass"
    ]
};

console.log(user)

var firstName = user.firstName;
var lastName = user.lastName;

console.log(firstName);

// OR...
var userEmail = user["email"];

console.log(userEmail);

var movie = {
    name: "Satantango",
    director: "Bela Tarr",
    duration: 432
};

movie.name = "Sátántangó";
movie.director = "Béla Tarr";
movie.duration = 534;

var marxFamily = [
    { name: "Groucho", birthYear: 1890 },
    { name: "Harpo", birthYear: 1888 },
    { name: "Chico", birthYear: 1887 },
    { name: "Zeppo", birthYear: 1901 },
    { name: "Gummo", birthYear: 1893 }
];

for ( var i = 0; i < marxFamily.length; i++ ) {
    var brother = marxFamily[ i ];
    console.log( brother.name, brother.birthYear );
}

