//this.todos = []
//this.add = function(){}
//this.render = function(){}

function TodoApp(todos){
    // make this a new empty object
    this.todos = ["Todo One","Todo Two"];
    this.addTodo = function(todo) {
        this.todos.push(todo);
    };
    this.render = function() {
        var todoMarkup = this.todos.reduce(function(currentHTML, todo) {
            return currentHTML + `<li>${todo}</li>`
        },"");
        var target = document.querySelector(".todos");
        target.innerHTML = `<ul>${todoMarkup}</ul>`
    };
    //return this (object)
};

var myTodoApp = new TodoApp();

var button = document.querySelector("button");
var input = document.querySelector('input');

var eventType = "click";

button.addEventListener(eventType,function() {
    if (input.value === "") {
        alert("Enter a todo");
        button.style.border = "2px red solid";
    } else {
        myTodoApp.addTodo(input.value);
        myTodoApp.render();
    }
})

// button.addEventListener("click",myTodoApp.addTodo);

myTodoApp.render();




