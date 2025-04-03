//! using fetch()
/*
- The fetch() function retrieves data. It's a global method on the window object. That means you can use it simply by calling fetch() and passing in a path to a resource as an argument. To use the data that is returned by the fetch(), we need to chain on the then() method. it looks as below:
*/

//fetch("String representing a URL to a data source") //fetches required data ////from the server
 // .then(function (response) {
    // we use .json method of the response interface to render the server's response as json
 //   return response.json();
//  })
 // .then(function (data) {
    // prints the javascript object to our console
    //use the data from the response to do a DOM manipulation
 // });

/*
  Here we are calling `fetch()` and passing a URL to a data source as the
  argument. The function call returns a Promise object that represents what the data
  source sent back. It does *not* return the actual content. (More about this
  later.)
*/

//fetch("String representing a URL to a data source")
  /*
    Next, we call the `then()` method on the Promise object returned by calling
    `fetch()`. `then()` takes one argument: a callback function. 
    (More on Promises later!)

    Inside the callback function, we do whatever processing we need on the
    object, in this case, converting it from JSON using the built-in `json()`
    method. (Another commonly-used method is `text()`, which will convert the
    response into plain text.) The `json()` method returns a Promise, which we
    return from our callback function.

    Note that we *have to return* the content that we've gotten out of the
    response and converted from JSON in order to use the data in the next then()
    method call.

    This first callback function is usually only one line: returning the 
    content from the response after converting it into the format we need.
  */
  // .then(function (response) {
  //   return response.json();
  // })
  /*
        This time, the `then()` method is receiving the object that we returned from the
        first call to `then()` (our parsed JSON object). We capture the object in the
        parameter `data` and pass it into a second callback function, where we will
        write code to do DOM manipulation using the data returned from the server
      */
  //.then(function (data) {
    // Use the actual data to do DOM manipulation
 // });

//? Top Tip: As always, we can name the parameters being used in our callback functions anything we like, but you will often see response (or resp) and data used.

//!CONTEXT IN JAVASCRIPT
/* 
        1. Execution context
              - Types of execution context
              - Phases of execution context
        2. Context and implicit in JS
        3. context and explicit in JS
      */

//? Execution context in JS
/*
- environment into which the js code is going to be executed and evaluated. It defines the scope, functions, variables and the objects that are accessible during the execution
      */

//? Types of execution context
/*
1. Global Execution context (GEC)
  - creted when the JS script starts execution
2. Function execution context (FEC)
  - created when a function is executed
  - each function has its own execution context
3. Eval Execution context
*/

//? phases of execution context
/*
1. Creation phase(memory allocation)
  - variables and functions are stored within the memory
2. Execution phase
  - happens when we are running our code
*/

//?context and implicit in JS
/*
context - more of who calls the function (this)=> instant of this particular function
We have:
  1. global context - refers to window and global object. window- instant of the window object of a global scope
  - 

*/

// function functionName () {arg1, arg2, ...} {
//   //function body
// }
// functionName.call(thisArg, arg2, ...)

// function introduce(greeting) {
//   console.log(`${greeting}, my name is ${this.name}`)
// }

// const person = {
//   name: "Albert"
// }

// introduce.call(person, "Hello")



//?apply() => argument is passed as an array. similar to call.
// function introduce(greeting) {
//   console.log(`${greeting}, my name is ${this.name}`)
// }

// const person = {
//   name: "Albert"
// }

// introduce.apply(person, ["Hello sir"])




//?bind() => does not execute function immediately but will return to us a new function with this permanently bound to an object

// const person = {
//   name: "Albert"
// }
// function introduce(age, city) {
//   console.log(`I am ${this.name}, ${age} years old from ${city}`)
// }
// const boundFunction = introduce.bind(person, 15, "Naivasha")
// boundFunction ()

//!algorithmic problem solving
/*
1. understand the problem
2. understand the problem
  - what are the inputs and desired output
  - are there constraints (time, memory
  - are there any edge cases(empty inputs)
3. 
*/