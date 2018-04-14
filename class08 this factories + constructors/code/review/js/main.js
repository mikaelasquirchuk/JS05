console.log("Hello world");

var todos = ["Todo 1","Todo 2","Eat mango chicken"];

var listItems = todos.reduce(function(currentHTML,todo){
    return currentHTML + `<li> ${todo} </li>`;
},"");
var unorderedList = `<ul>${listItems}</ul>`
document.body.innerHTML += unorderedList;