// Function level scope
// function outer(greeting, msg = "It's a fine day to learn") {
//     // 2
//     const innerFunction = function (name, lang = "Python") {
//       // 3
//       return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//     };
//     return innerFunction("omustudent", "JabaScript"); // 5
//   }

//  Global Scope => accessible in every scope
// const myCat = 'Rose'
// console.log ('global' , myCat)
// let globalVar = 'I am global';

// function testFunction () {
//   console.log (globalVar); 
// }

// testFunction();
// console.log (globalVar)

// // Function scope => accessible within a function only

// function myFunc () {
//   const myVar = 42;
//   return myVar *2;
// }
// console.log (myFunc())

// //example
// function Math() {
// let a=2;
// let b=4;

// return a+b;
// }
// console.log (Math());

// //example
// function add() {
// let a=2;
// let b=4;

// }
// return a+b; 
// console.log (add())

// // Block scope => accessible within the block
// {
//   let blockVar = 'Inside block';
//   console.log (blockVar) //=> accessible inside block
// }
// console.log(blockVar); //=> not accessible ourside the block

// Scope chain
// let globalVar = "Global";

// function outerFunction() {
//   let  outerVar = "Outer";

//   function innerFunction() {
//     let innerVar = "Inner";

//     console.log(innerVar);
//     console.log(outerVar);
//     console.log(globalVar);
//   }
//   innerFunction();
// }
// outerFunction();
// Use local scope to avoid unintended changes to global variable (adeclared in function)

//example 1a
// const fruit = 'Apple';

// function first () {
//   const vegetable = 'Brocolli';
//   console.log(fruit);
//   console.log (vegetable);
//   console.log (legume); //=> not accessible
// }

// function second() {
//   const legume = 'Peanut';
//   console.log (fruit);
//   console.log (legume);
//   console.log (vegetable); //=> not accessible
// }

//=> 🔹 first() and second() both access fruit (global), but first() cannot access legume, and second() cannot access vegetable.

// Example 1b
// console.log(myVar);
// const myVar = 42;
//🔹 Even though JavaScript knows myVar exists (compilation phase), it hasn't been assigned a value yet.

// Example 1c
// const myVar = 42;
// function myFunc () {
//   const myVar = 9001;
//   return myVar;
// }
// console.log(myFunc())
// 🔹 myFunc() has its own myVar, so the global myVar is ignored.

//Lexical scope
//Example 1d
// const myVar = "Foo";
// function first() {
//     console.log("Inside first()");
//     console.log("myVar is currently equal to:", myVar);

// }
// function second() {
//     const myVar = "Bar";
//     first();
// }
// second();

// console.log("myVar is currently equal to:", myVar)

// Even though second() has its own myVar = "Bar", it does not affect first() because first() wasn't defined inside second().

// Example 1e
// const myVar = "Foo";
// function first() {
//     console.log("Inside first()");
//     console.log("myVar is currently equal to:", myVar);

// }
// function second() {
//     function first(){
//         console.log("Inside first()");
//         console.log("myVar is currently equal to:", myVar);   
//     }
//     const myVar = "Bar";
//     first();
// }
// second();

