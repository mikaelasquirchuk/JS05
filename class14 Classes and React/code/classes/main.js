//blueprint

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email; //attaching each property to the instance
    console.log(`You can contact ${name} at ${email}.`);
    console.log(this);
  }
  sayHiTo(name) {
    console.log(
      `Hello ${name}, this is ${this.name}. You can reach me at ${this.email}.`
    );
  }
}

//instance
// This calls the constructor!

const bill = new Person(`Bill`, `bill@ga.co`);
const jane = new Person(`Jane`, `jane@ga.co`);

bill.sayHiTo(`Serge`);
jane.sayHiTo(`Shazza`);

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  read() {
    console.log(`You are currently reading ${this.title} by ${this.author}.`);
  }
}

const gatsby = new Book(`The Great Gatsby`, `F. Scott Fitzgerald`);

gatsby.read();

console.clear();

class User {
  constructor(name, username) {
    this.name = name;
    this.username = username;
    // console.log(`A user logged in`);
  }
  readPost(post) {
    console.log(`${this.username} is reading the post ${post}`);
  }
  commentOnPost(post, comment) {
    console.log(
      `${this.username} just commented on the post ${post}: "${comment}".`
    );
  }
}

const userOne = new User(`Bill`, `billygoat`);

userOne.readPost(`Post 1`);
userOne.commentOnPost(`Post 2`, `Commenting on post 2`);

class Admin extends User {
  constructor(name, username, adminID) {
    super(name, username);
    this.adminID = adminID;
    this.admin = true;
    console.log(`An admin logged in with ID ${adminID}`);
  }
  deletePost(post) {
    console.log(`${this.username} deleted ${post}.`);
  }
}

const admin = new Admin(`Mikky`, `mikky@ga.co`, 1234);

admin.readPost(`adminPost 1`);
admin.commentOnPost(`adminPost 2`, `wow, good work`);
admin.deletePost(`adminPost 3`);
