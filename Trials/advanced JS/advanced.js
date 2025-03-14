// // Destructuring
// const numbers = [1, 2, 3, 4, 5]
// const [first,second, third, fourth, fifth] = numbers
// console.log (first, second, fourth)

// const numbers = [1, 2, 3, 4, 5]
// const [first, ...rest] = numbers
// console.log (first)
// console.log (...rest)

// const person = {name: 'John', age:22}
// const {name: personNamer, age: personAge} = person
// console.log (personNamer, personAge)
// const {city = "Nairobi"} = person
// console.log (city)

// const user = {
//     id:1,
//     info: {email: "test@gmail.com", address: {city: "Nakuru"}}
// }
// const {info: {email: emailAddress, address: {city}}} = user

// console.log (user)



// Spread Operator (...) => Copying an array
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log (arr2)

// // Spread Operator (...) => merging Arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const merged = [...arr1, ...arr2];

// console.log (merged)

// // Spread Operator (...) => in function arguments
// function sum(a, b, c) {
//     return a+b+c;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

// // Spread Operator (...) => in objects (copying)
// const obj1 = {a:1, b:2};
// const obj2 = {...obj1};

// console.log (obj2)

// // Spread Operator (...) => in objects (merging)
// const obj1 = {a:1, b:2, c:3};
// const obj2 = {d:3, e:4, f:5};
// const merged = {...obj1, ...obj2};

// console.log (merged);

// Advanced Function Parameter Syntax: Default / Rest / Spread

// // Default parameters
// function greet(name = "Guest") {
//     return`Hello, ${name}`
// }
// console.log (greet ("Kamau"))
// console.log (greet())

// // Rest Parameters
// function sum(...numbers) {
//     return numbers.reduce ((a, b) => a+b, 0);
// }
// console.log (sum(1, 2, 3, 4))

// //Spread in Function calls (...spread)
// function multiply(a, b, c){
//     return a*b*c;
// }
// const values = [1, 2, 3];
// console.log(multiply(...values))

//Summary
// Destructuring simplifies extracting values from arrays and objects
//Spread - useful for copying and merging arrays/objects
//Default parameters - prevents errors when argumentsare missing
//Rest parameters - collects multiple arguments into an array
//Spread in Function - expands array values into function arguments