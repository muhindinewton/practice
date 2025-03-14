// // use of console.log
// const number = 10;

// function addTwoNumbers(a, b) {
//   a + b;
// }

// function multiplyByTwo(n) {
//   number * 2;
// }

// console.log(multiplyByTwo(addTwoNumbers(1, 3)));

// // desmonstration of console.error()
// console.error('You are doomed for good.') //=> used for printing out an error to the console.

// // demonstration of console.warn()
// console.warn ("this is a warning message") //=> less severe t console.error()

// // Demonstrate console.table
// const family = {
//     mother: {
//       firstName: "Susan",
//       lastName: "Doyle",
//       age: 32,
//     },
//     father: {
//       firstName: "John",
//       lastName: "Doyle",
//       age: 33,
//     },
//     daughter: {
//       firstName: "Lily",
//       lastName: "Doyle",
//       age: 5,
//     },
//     son: {
//       firstName: "Mike",
//       lastName: "Doyle",
//       age: 8,
//     },
//   };

//   console.table(family)

/*JavaScrip loops
 => focus on for and while loops
1. FOR STATEMENTS
- We have for... loop, for...of and for...in
 */

//i. for... loop
/*
=> Initialization (counter)
- Variable declared when the loop begins. runs once
=> condition
- stop condition. tells loop to continue or stop
=> statement
- what happens during each iteration and finally
*/
// let books = ["Kidagaa Kimemwozea", "Tumbo lisiloshiba", "Bible", "kamusi", "atlas"]
// function loopThroughBooks (books) {
// //     for(let i = 1; i<books.length; i++) {
// //         console.log (i);
// //     }
// // }
// // loopThroughBooks(books)

// for(let book of books){ //=> loops through each item of an array and for every item in that array we console.log the value of that item
//     console.log (book)
// }
// }
// loopThroughBooks (books);

// //for...in
// let oneBook = {
//     title: 'Eloquent JavaScript',
//     author: 'Newton Muhindi',
//     publisher: 'No strach press'
// }
// function loopThroughObj(obj) {
//     for (let key in obj){
//         console.log(key)
//         console.log(obj[key]) // dot notation doesnt work. reason: we can access values in our object using bracket notation and a string

//     }
        
// }
// loopThroughObj(oneBook)

// let vacationSpots = ['Diani', 'Watamu', 'Malindi', 'Kilifi'];
// console.log(vacationSpots[0])
