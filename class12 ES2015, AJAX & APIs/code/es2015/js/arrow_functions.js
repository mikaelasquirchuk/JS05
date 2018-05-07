const sayHi = () => {
  console.log("Hello there!");
};

const greetPerson = name => {
  console.log(`Hello ${name}`);
};

greetPerson("darkness");

const add = (x, y) => {
  console.log(x + y);
};

add(4, 5);

const multiply = (x, y) => x * y;

const nums = [1, 2, 3, 4, 5];

const evens = nums.filter(number => number % 2 === 0);

console.log(evens);

const multipliedByFive = nums.map(number => number * 5);

console.log(multipliedByFive);

//.map multiply every item in nums by 5

console.log([1, 2, 3].reduce((sum, num) => sum + num, 0));
