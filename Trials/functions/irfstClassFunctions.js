// // functions can be stored as variables using const
// let books = ["Kamusi", "dictionary", "Bible", "setbook"]
// const loopThroughArray = function (array) {
//     for (let item of array)
//         console.log(item)
// }

// const capitalizedArray = function (array) {
//     let newArray = []
//     for(let item of array) {
//         newArray.push(item.toUpperCase())
//     }
//     console.log(newArray)
// }
// // loopThroughArray (books)

// function handleBooks(fun) {
//     let books = ["Kamusi", "dictionary", "Bible", "setbook"] 
//     fun (books)
// }
// handleBooks(loopThroughArray)
// handleBooks(capitalizedArray)

// CALLBACK FUNCTIONS
/* A callback function is a function passed as an argument to another function.
- it allows a function to call another function
- A callback function can run after another function has finished
- JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined. */

// function myDisplayer(message) {
//     console.log(message); // Logs the message instead of modifying the HTML
//   }
  
//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
 
//  mySecond(); // displays first = goodbye
//  myFirst(); // displays second = hello


 //SEQUENCE CONTROL
/* Suppose you want to do a calculation, and then display the result.
You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:*/
// function myDisplayer(message) {
//     console.log(message);
// }
// function myCalculator (num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }
// let result = myCalculator (5, 5);
// myDisplayer(result);

// Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):
// function myDisplayer(message) {
//     console.log (message)
// }
// function myCalculator (num1, num2) {
//     let sum = num1+num2;
//     myDisplayer(sum);
// }
// myCalculator(5,5)

/* The problem with the first example above, is that you have to call two functions to display the result.

The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

Now it is time to bring in a callback. */
// Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:
// function myDispalyer(message) {
//     console.log(message)
// };
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1+num2;
//     myCallback(sum);
// }
// myCalculator(5, 5, myDispalyer)
// myDisplayer is a callback function passed to myCalculator() as an argument

// function myDispalyer(message) {
//     console.log(message)
// };
// function greetings (firstName, lastName, myCallback) {
//     let greet = `Good morning, ${firstName} ${lastName}.`
//     myCallback (greet)
    
// }
// greetings('John', 'Kamau', myDispalyer)


// Functions as variables 2
let books = [
    {
        title: 'Eloquent JavaScript',
        price: 16.00,
        inventory: 5
    },
    {
        title: 'JavaScript: The Good Parts',
        price: 10.50,
        inventory: 30
    },
    {
        title: 'Learn JavaScript VISUALLY',
        price: 25.00,
        inventory: 2
    },
    {
        title: 'You don\'t know js',
        price: 60.00,
        inventory: 8
    },
    {
        title: 'JavaScript: The Definitive Guide',
        price: 18.95,
        inventory: 0
    }
];

// // Below is a function  that returns the report of the books.
// function printReport(foo) { //foo is a parameter that represents some function
//     console.log(foo(books));
// }

// function totalInventory(array) {
//     let total = 0
//     for(let item of array) { // loops through the array of books
//         total += item.inventory
//     } 
    
//     return `Total inventory : ${total} books`
// }
// printReport(totalInventory) // we passed total inventory as our argument for print report function. Foo became total inventory.

// // below is a function that looks for items that need to be replenished

// function replenish(array) {
//     let replenishList = []
//     for (item of array) {
//         if (item.inventory < 3 ) {
//             replenishList.push(item.title)
//         }
//     }
//     return ` Please order for: ${replenishList.join (', ')}`
// }
// printReport(totalInventory);
// printReport(replenish);


// using conventional methods vs using .map
// 1. Using conventional methods to display 
//return an array of titles 
// function loopAndUpdate(array, updatedFoo) {
//     const updatedArray = [] // where we are pushing our changed/ updated items
//     for(let item of array) {
//         console.log(array)
//         console.log(updatedArray)
//         updatedArray.push(updatedFoo(item))
//     }
//     return updatedArray
// };

// //return an array of titles
// function titles(item) {
//     return item.title
// }
// loopAndUpdate(books, titles)

// // return an array of prices
// function prices(item) {
//     return item.price
// }

// //return an array of inventory
// function inventory(item) {
//     return item.inventory
// }

// // return an array of books, 50% off
// function halfOff(item) {
//     item.price = Math.floor(item.price/2)
//     return item
// }
// console.log (loopAndUpdate(books, halfOff))

//using finder
// will loop through our inventory and will find first condition returns true based on  a callback
// function loopThroughAndFind (inventory, finder) {
//     let result = null
//     for(let item of inventory) {
//         if(finder(item) === true) {
//             result = item
//             break
//         }
//     }
//     return result
// }
// will find a book
// function isBook(book) {
//     return book.title === 'You don\'t know js'
// }

// console.log(loopThroughAndFind(books, isBook))

// //will find first item of our inventory that needs to be restocked
// function  stockFirst(item){
//     return item.inventory < 1
// }
// loopThroughAndFind(books, stockFirst)


// //using .find
// // will loop through our inventory and will find first condition returns true based on  a callback
// let foundItem = books.find(isBook)
// console.log(foundItem)
// //will find a given book
// function isBook(book) {
//     return book.title === 'You don\'t know js'
// }

//using .reduce
// get total value of books in the shop
// const reducer = (accumulator, item) => {
//     console.log (accumulator, item)
//     let total = item.price * item.inventory
//     return accumulator += total
// }
// let total = books.reduce(reducer, 0)

// console.log(total)

// //.forEach => does not return an array. it return an undefined.
// books.forEach(logTitle)
// function logTitle(item) {
//     console.log (item.title.toUpperCase())
// }

// //to pass it as an anonymous function:
// books.forEach (function logTitle(item) {
//     console.log (item.title.toUpperCase())
// })

// books.forEach(item => console.log(item.title.toLowerCase()))
