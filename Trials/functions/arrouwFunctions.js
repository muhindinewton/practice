//! ARROW FUNCTIONS
// This is a concise way to write fuction expressions. good for simple functions that you use only once.
//=> (parameters) => some code

// function hello() {
//     console.log("hello");
// }
// hello(); //this is how i call the function 

//? using a function expression:
// const hello = function () {
//     console.log("hello");
// }
// hello()

//? using an arrow function
// const hello = () => console.log('hello'); 
// hello ();
// the empty () are the parameters
// console.log('hello') is the code i want to run

// const greet = (name) => console.log(`hello ${name}`);
// greet("Kamau");

//? to include more than one statement, you need to include a set of curly braces.
// const greeet = (name) => {
//     console.log(`Hello ${name}`);
//     console.log(`you are old`)
// }
// greeet ('bro')

//? We can add more than one argument
// const gret = (name, age) => {
//     console.log(`Hello ${name}`);
//     console.log(`you are ${age} years old`)
// }
// gret ('bro', 25)

// setTimeout(hello, 3000);
// function hello() {
//     console.log('God loves you')
// }

//? using arrow function
// setTimeout( () => console.log('God loves you'), 3000);

// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((accumulator, element) => accumulator + element)
// console.log(cubes)
// console.log(evenNums)
// console.log(oddNums)
// console.log(total)

