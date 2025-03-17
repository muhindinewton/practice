//? Destructuring
// let catObj = {
//     name: 'rose'
// }
// let catObj2 = {...catObj, age:9, name:'ted'}
// console.log(catObj)
// console.log(catObj2)

// let {name, age} = catObj2
// console.log(name)
// console.log(age)

// let arr = [1,2,3]
// let arr2 = [...arr, 4]
// console.log(arr)
// console.log (arr2) 
// let [num1, num2, num3] = arr
// console.log(num1)
// console.log(num2)
// console.log(num3)

// let [color1, color2, color3] = ['red', 'blue', 'yellow']
// console.log(color1, color3)
// console.log(color2)

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



//? Spread Operator (...) => Copying an array
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log (arr2)

//? Spread Operator (...) => merging Arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const merged = [...arr1, ...arr2];

// console.log (merged)

//? Spread Operator (...) => in function arguments
// function sum(a, b, c) {
//     return a+b+c;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

//? Spread Operator (...) => in objects (copying)
// const obj1 = {a:1, b:2};
// const obj2 = {...obj1};

// console.log (obj2)

//? Spread Operator (...) => in objects (merging)
// const obj1 = {a:1, b:2, c:3};
// const obj2 = {d:3, e:4, f:5};
// const merged = {...obj1, ...obj2};

// console.log (merged);

// Advanced Function Parameter Syntax: Default / Rest / Spread

//? Default parameters
// function greet(name = "Guest") {
//     return`Hello, ${name}`
// }
// console.log (greet ("Kamau"))
// console.log (greet())

// function discountedPrice(itemPrice, discount=0.25) {
//     return itemPrice - (itemPrice * discount);
// }
// console.log(discountedPrice(100));
// the discount value of 0.25 is defaulted any time a new value is not passed. It is always passed last.

// function discountedPrice(itemPrice, discount=0.25) {
//     return itemPrice - (itemPrice * discount);
// }
// console.log(discountedPrice(100,0.5))


//? Rest Parameters
// function sum(...numbers) {
//     return numbers.reduce ((a, b) => a+b, 0);
// }
// console.log (sum(1, 2, 3, 4))

// function muppetlab(a, b, ...muppets) {
//     console.log(a, `` , b);
//     console.log(muppets);
//     console.log(muppets[0]);
//     console.log(muppets.length);
// }
// muppetlab("Dr. Bunson", "Beaker", "Miss Piggy", "Kermit", "Animal")

// The first two values are stored in a and b, respecively, and the remaining values are stored in the muppets array. If we call muppetLab() and only pass two arguments, the value of muppets will be an empty array.

// Since the rest parameter gathers the "rest" of the arguments given to a function, it should always come at the end of the list of parameters.


































//? Spread in Function calls (...spread)
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