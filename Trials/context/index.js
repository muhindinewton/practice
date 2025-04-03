//! Understanding context in JavaScript

//! 1. What is Execution Context?
/*
Execution context is an environment in which JavaScript code is executed. It defines:

- What variables and functions are accessible at any given point.
- How the this keyword is determined.
- How functions execute and access their surrounding scope.
*/

//! types of execution contexts
//? 1. Global execution context
/*
- This is created when the JavaScript code first runs.
- It contains global variables and functions.
- The this keyword in this context refers to the global object (window in browsers, global in Node.js).
*/

//? 2. Function exectuion context
/*
- Created whenever a function is called.
- Each function has its own execution context, containing:
    - Local variables.
    - Function-specific arguments.
- Access to the outer scope (Lexical Environment).
*/

//? 3. Eval Execution context
/*
- Created when eval() is used (not commonly used due to security concerns).
*/

//! Execution context lifecycle
// Execution context follows three phases

//? 1. Creation phase
/*
- Memory is allocated for variables and function declarations
- The this keyword is assigned
- A scope chain is created
*/

//? 2. Execution phase
/*
- JavaScript runs the code line by line
*/

//? 3. Destruction phase
// When execution is complete, the execution context is removed from the stack.

//! 2. Understanding this in JS
// - The this keyword refers to the current execution context. Its value is determined by how a function is called, not where it is called.

//? Different rules for this

/*
Context	                                        Value of this
Global scope	                    window (browser) or global (Node.js)
Function (non-strict mode)	        window (browser) or global (Node.js)
Function (strict mode)	            undefined
Method inside an object	            The object calling the method
Arrow function	                    Inherits this from the surrounding lexical scope
Constructor function	            The new instance created by new
Event listener	                    The element that fired the event
call(), apply(), bind()	            Explicitly sets this 
*/

//> Examples
//. 1. Global Scope
// console.log(this); //, window(in browsers)

//. 2. Object method
// const person = {
//     name: "newton",
//     greet: function () {
//         console.log(this.name);
//     }
// };
// person.greet ()

//, person is an object with a property name: "Newton" and a method greet

//calling person.greet()
//, The function inside greet, this refers to the object that called the function, which is person
//, therefore, this.name is equivalent to person.name, which is newton
//, the console.log(this.name); outputs "newton"

//. Arrow function
// const obj = {
//     name: "newton",
//     greet: () => {
//         console.log(this.name); //, (inherits `this` from global scope)
//     }
// };
// obj.greet()

//! The Call, Apply, and Bind methods
// JS provides three methods to control the value of this in function execution

//? call() method
// Calls a function with a specific this value and individual arguments.

// function greet(message) {
//     console.log(`${message}, ${this.name}`);
// }
// const user = {name: "Newton"};
// greet.call(user, "Hello")

//, greet is a regular function that expects a message parameter.
//, user is a simple object with a single property: {name: "Newton"}
//, call calls the function but explicitly sets this to the first argument(user)
//, "Hello" is passed as the message argument to the function
//, since this inside greet is now set to user, this.name refers to "Newton"
//, The function executes console.log("Hello, Newton") => Hello, Newton

//? apply() Method
// Similar to call(), but takes arguments as an array

// function greet(message) {
//     console.log(`${message}, ${this.name}`);
// }
// const user = {name: "Newton"};
// greet.apply(user, ["Hello"])

//? bind() Method
// Returns a new function with this permanently set
// const person = {
//   name: "Albert"
// }
// function introduce(age, city) {
//   console.log(`I am ${this.name}, ${age} years old from ${city}`)
// }
// const boundFunction = introduce.bind(person, 15, "Naivasha")
// boundFunction ()

//! Record-Oriented programming
//

