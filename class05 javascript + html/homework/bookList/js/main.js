var books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
      image: 'img/theDesignOfEverdayThings.jpeg',
      link: 'http://google.com'
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      image:'img/theMostHumanHuman.jpeg',
      link: 'http://google.com'
    }
];

var list = document.createElement("ul");

document.body.appendChild(list);

for (var i = 0; i < books.length; i+=1) {
    var text = books[i].title + " by " + books[i].author;
    var link = books[i].link;
    var book = document.createElement("li");
    //book.innerHTML = text;
    document.body.appendChild(book);
    //var imageURL = books[i].image;
    book.innerHTML = "<a href='" + link + "'>" + text + "<br><img src='" +books[i].image+"'/></a>";
    if (books[i].alreadyRead){
        book.style.backgroundColor = "grey";  
    } else {
        book.style.backgroundColor = "white";
    };
}



// // Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// // Bonus: Use a ul and li to display the books.
// // Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// // Bonus: Change the style of the book depending on whether you have read it or not.