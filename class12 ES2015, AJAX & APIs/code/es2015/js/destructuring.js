const PERSON = {
  firstName: "Bill",
  lastName: "Murray",
  email: "bill@ga.co"
};

// const firstName = PERSON.firstName;
// const lastName = PERSON.lastName;
// const email = PERSON.email;

const { firstName, lastName, email } = PERSON;

console.log(firstName);

const explorer = {
  first: "Jacques",
  last: "Cousteau"
};

const { first, last } = explorer;
console.log(first, last);

const triangle = {
  sideOne: 3,
  sideTwo: 4,
  sideThree: 5
};

const { sideThree: hypotenuse } = triangle;

console.log(hypotenuse);

function calculateArea({ width, height }) {
  //   var rectangleWidth = rectangle.width;
  //   var rectangleHeight = rectangle.height;
  //   var area = rectangleWidth * rectangleHeight;
  //   console.log(area);
  var area = width * height;
  console.log(area);
}

calculateArea({ width: 20, height: 40 });

const details = ["kookslams", "kookslams@gmail.com", 1000000];

// var username = details[0];
// var email = details[1];
// var followers = details[2];

const [username, emailAddress, followers] = details;

console.log(username, followers, emailAddress);
