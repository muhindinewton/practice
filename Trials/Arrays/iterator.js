/*
Finding a single element that meets a condition => indexOf(), find()
Finding and returning a list of elements that meet a condition => filter()
Modifying each element and returning the modified array => map()
Creating a summary or aggregation of values in an array => reduce()
*/


//! FINDING ARRAY ELEMENTS
//? Array.prototype.indexOf()
/*
Array.prototype.indexOf() is called on an array and takes two arguments: the value you are looking for and an optional start position. It compares each element in turn to the value you're looking for using the strict equality operator (===) and returns the index of the first matching element. If the element isn't contained in the array, it returns -1
*/
// const fruits = ['mango', 'orange', 'banana', 'watermelon', 'apple'];

// console.log(fruits.indexOf('apple'))
// console.log(fruits.indexOf('guava'))
// console.log(fruits.indexOf('mango', 0)) //starts search at 0
// console.log(fruits.indexOf('orange', 2)) // not found from starting index given (it is before)

//? Array.prototype.find()
/* Allows you to execute more complex searches by passing it a callback function. iterates through the array it's called on and, in each iteration, passes three arguments to the callback: the current element of the array, the index of the current element, and the array itself. These arguments can then be captured as parameters in the callback and used inside the function.*/

// function isOdd(element, index, array) {
//     return (element % 2===1);
// }
// determining whether an array of numbers contain any odd values
// console.log([4, 6, 8, 10].find(isOdd));
// console.log([4, 5, 8, 10].find(isOdd)); 
// console.log([4, 5, 7, 8, 10].find(isOdd));
// console.log([4, 7, 5,  8, 10].find(isOdd));
// .find() returns only the fist element that matches the condition


// function findGoldMedalYear(olympics){
//     const win = olympics.find(game => game.medal === 'Gold');
//     return win  ? win.year : undefined; 
// }
// const olympics = [
//     { year: "2020", country: "USA", medal: "Silver" },
//     { year: "2016", country: "USA", medal: "Gold" },
//     { year: "2012", country: "USA", medal: "Bronze" },
//     { year: "2008", country: "USA", medal: "Silver" }
//   ];

// console.log(findGoldMedalYear(olympics));


//! FILTERING ARRAYS
// A filtering array is an array that returns all elements that match a certain condition.
// below is a custom filter function
//=> consider an array of number. we want to extract only even numbers.
// function filterArray(arr, callback) {
//     const result = [];
//     for (const item of arr) {
//         if (callback(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// }
// const numbers = [1,2,3,4,5,6,7,8,9];
// const evenNumbers = filterArray(numbers, num=>num % 2 === 0);
// console.log(evenNumbers);

//? Filtering Objects
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
//   ];
//   const adults = filterArray(users, user => user.age >= 30);
//   console.log(adults)

  //? handling multiple conditions
//   const filteredUsers = filterArray(users, user => user.age >= 30 && user.name.startsWith("C"));
//   console.log(filteredUsers)


//? Using JavaScript's Built-in filter() Method
// const numbers = [1,2,3,4,5,6,7,8,9];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers)

// const oddNumbers =numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers)

//? Filtering objects using filter()
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
//   ];

//   const adults = users.filter(user => user.age >=30)
//   console.log(adults)

//? Pure vs Impure Functions in Filtering
// A pure function always returns the same output for the same input and does not modify external variables.
// example of an impure function.
// function randomMultiplyAndFloor() {
//     return Math.floor(Math.random() *100);
// }
// console.log(randomMultiplyAndFloor());
// console.log(randomMultiplyAndFloor())
// the function is impure because the return value is not predictable

// const ada = {
//     name: "Ada Lovelace",
//     age: 202,
//   };
// function happyBirthday (person) {
//     return `Happy birthday, ${person.name}! You are ${++person.age} years old!`;
// }  
// console.log(happyBirthday(ada));
// console.log(happyBirthday(ada));
// ada;
//the above is impure because it alters the passed-in object.

//? Pure functions
// function pureFilter(arr, callback) {
//     return arr.filter(callback);
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   const filteredNumbers = pureFilter(numbers, num => num > 2);
//   console.log(filteredNumbers); // Output: [3, 4, 5]
//   console.log(numbers); // Original array remains unchanged
//   avoid impure fucntions


//! MAPPING ARRAYS
// .map() transforms every element in an array to another value and returns a new array of the same length
// const squaredNumbers = [1,2,3].map(function (num){
//     return num*num;
// });
// squaredNumbers

//? Using arrow function
// const squaredNumbers = [1,2,3].map(num => num*num)
// squaredNumbers

// const cubedNumbers = [5,7,9,11].map(num => Math.pow(num, 4))
// cubedNumbers

//?using the built-in .map() method

// example of converting fareinheight to degrees
// const fareinheitTemps = [0, 30, 42, 78, 63,111].map(temp=> Math.floor(temp * 9/5) +32);
// fareinheitTemps;

//example on creating a list of HTML <li> elements
// const fruits = ['apple', 'orange', 'bananas', 'plums'];

// const fruitList = fruits.map(fruit => `<li>${fruit}</li>`);
// console.log(fruitList)

//? use of for...of in place of .map()
// const eggSeller = ["Jack", "Fridah", "Jere", "Nick", "Furaha"];
// const rollCall = [];

// for (const names of eggSeller) {
//     rollCall.push(names + " msee wa mayai" );
// }

// rollCall;

//? map() with a function declaration
// function eggSellerRollCall(eggseller) {
//   return eggseller + " msee wa mayai";

// };
// const names = ["Jack", "Fridah", "Jere", "Nick", "Furaha"];
// const rollCall = names.map(eggSellerRollCall);

// rollCall;

//? map() wit function expression
// const names =  ["Jack", "Fridah", "Jere", "Nick", "Furaha"];
// const rollCall = names.map(function (student) {
//   return student + " msee wa mayai";
// });
// rollCall;

//? map() with an arrow function
// const names =  ["Jack", "Fridah", "Jere", "Nick", "Furaha"]
// const rollCall = names.map(student => student + " msee wa mayai")

// rollCall

//! ARRAY REDUCE METHOD
//reduces lists to a single value; either a string, number or boolean
//how the reduce method works
// example: Let's say we have a bunch of grocery items in our basket and we want to calculate the total price.

// const products = [
//   { name: "Shampoo", price: 4.99 },
//   { name: "Donuts", price: 7.99 },
//   { name: "Cookies", price: 6.49 },
//   { name: "Bath Gel", price: 13.99 },
// ];
// function getTotalAmountForProducts(products) {
//   let totalPrice = 0;

//   for (const product of products) {
//     totalPrice += product.price;
//   }
//   return totalPrice;
// }
// console.log (getTotalAmountForProducts(products));

// const couponLocations = [

//   { room: "Living room", amount: 5 },
//   { room: "Kitchen", amount: 2 },
//   { room: "Bathroom", amount: 1 },
//   { room: "Master bedroom", amount: 7 },
// ];

// function getTotalAmountOfCoupons(couponLocations) {
//   let totalCoupons = 0;

//   for (const couponLocation of couponLocations) {
//     totalCoupons += couponLocation.amount;
//   }
//   return totalCoupons
// }
// const totalCoupons = getTotalAmountOfCoupons(couponLocations)
// console.log(totalCoupons)

//? writing a custom reduce function
// function ourReduce(arr, reducer, init) {
//   let accum = init;
//   for (const element of arr) {
//     accum = reducer(accum, element);
//   }
//   return accum;
// }

//we can use it to count coupons in different rooms
// const couponLocations = [
//   { room: "Living room", amount: 5 },
//   { room: "Kitchen", amount: 2 },
//   { room: "Bathroom", amount: 1 },
//   { room: "Master bedroom", amount: 7 },
// ];

// function couponCounter(total, location) {
//   return total + location.amount;
// }
// console.log(ourReduce(couponLocations, couponCounter, 0))
/* 
The ourReduce() function:
=> Takes an array, a reducer function, and an initial value.
=> Iterates through the array, applying the reducer function.
=> Returns the final accumulated value.
*/

//? Using JavaScript’s Built-in reduce()
// const couponLocations = [
//   { room: "Living room", amount: 5 },
//   { room: "Kitchen", amount: 2 },
//   { room: "Bathroom", amount: 1 },
//   { room: "Master bedroom", amount: 7 },
// ];
// function couponCounter(total, location) {
//   return total + location.amount;
// }
// console.log(couponLocations.reduce(couponCounter, 0))

// doubling and summing numbers
// const doubledAndSummed = [1,2,3,4,5].reduce((acc, num) => acc + num*2, 0);
// console.log(doubledAndSummed)
// ensure to alwasy include an initial value

//? using reduce() to return an object
//counting names in an array
// const names = ['james', 'kamau', 'maingi','ann', 'kamau', 'jere'];
// const namesCount = names.reduce((countObj, name) => {
//   countObj[name] = (countObj[name] || 0 ) + 1;
//   return countObj
// }, {}); //Initialize the accumulator as an empty object


// console.log(namesCount);

//! forEach: The Iterator of No Return
// it doesnt have a built in return value
// oppressedWorkers = [  
//   "Dopey",
//   "Sneezy",
//   "Happy",
//   "Angry",
//   "Doc",
//   "Lemonjello",
//   "Sleepy",
// ];

// oppressedWorkers.forEach(worker => {
//   console.log(`${worker} wants to form a union`);
// });
//the callback we pass to it can contain whatever functionality we like.