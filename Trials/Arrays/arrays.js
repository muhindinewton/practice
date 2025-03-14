
// const numbers = [1,'boy', true, NaN]
// console.log (numbers[1]) // 
// console.log (numbers.length); //checks how elements are in the array

// const legitCounties = ['Kiambu', 'Nyeri','Murang\'a', 'Meru']
// function logLegitCounties (legitCounties) {
//     console.log ('legitCounties:', legitCounties);
// }

// const winningNumbers = [32, 9, 14, 33, 48, 5];

// function logWinningNumbers(numbers) {
//   console.log("Winning numbers:", numbers);
// }

// logWinningNumbers(winningNumbers);

// const winningNumbers = [1,2,3,4,5,6]
// function logWinningNumbers (winningNumbers) {
//     return'Winning numbers are:'+ winningNumbers
  
// }
// console.log (logWinningNumbers (winningNumbers))

// ARRAY METHODS
// Add Elements to an array
// We have three methods:
// => .push() and .unshift() => nod-destructive
// const foods = ["ugali", "githeri", "pilau"];
// foods.push ("Matoke", "Kaimati"); //=> adds to the end

// console.log (foods)

// const cities = ["Kisii", "nakuru", "embu"];
// cities.unshift("Nairobi", "Mombasa") //=> Adds at the front

// console.log (cities)

// // Spread operator (...) => Destructive
// const names = ["bob", "mark", "John"]
// const copyOfNames = [...names]

// console.log (copyOfNames)

// const names = ["bob", "mark", "Ken"]
// const allNames = ["peter", ...names, "George"]
// console.log (allNames)

// Remove elements from an array
// .pop() and .shift() => Destructive
// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// days.pop(); // Removes last element in an array
// console.log(days)

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// days.shift(); // removes first element in an array
// days;

// // .slice() removes element from an array non destructively
// // 1. With no Arguments
// const primes = [2, 3, 5, 7]
// const copyOfPrimes = primes.slice(); //=> returms a copy of original

// primes;

// copyOfPrimes

// // 2. With Arguments
// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log (days.slice (2, 5));
// // We can also provide one or two arguments to .slice(): the first is the index where the slice should begin and the second is the index before which it should end:

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log (days.slice(5));
// // If no second argument is provided, the slice will run from the index specified by the first argument to the end of the Array:

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log (days.slice(0, days.length -1))

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log (days.slice(-1));
// console.log (days.slice(-2));
// console.log (days.slice(0, -1));


// .splice() => Allows us to remove elements destructively
// 1. With a single element => The first argument expected by .splice() is the index at which to begin the splice

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log (days.splice (2));
// console.log (days);

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log (days.splice (-2));
// console.log (days);

// 2. With 2 arguments
// When we provide two arguments to .splice(), the first is still the index at which to begin splicing, and the second dictates how many elements we want to remove from the Array. 

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log(days.splice(2, 3))
// days;


// Replace elements in an array
// .splice() with 3+ arguments
// array.splice(start, deleteCount, item1, item2, ...)
// const names = ["John", "bob", "mark", "ken", "joy"];
// console.log (names.splice(2, 3, "Kelly", "Hamisi"))
// names;

// const menu = ["githeri", "samosa", "pilau", "kaimati", "boflo"];
// console.log (menu.splice(2, 0, "Micheveve"))
// console.log(menu);


// //using bracket notation to replace elements
// const names = ["John", "bob", "mark", "ken", "joy"];
// names[2] = "Kelly";

// names

//slicing and spreading => allows us to replace elements non-destructively
// const menu = ["githeri", "samosa", "pilau", "kaimati", "boflo"];
// const newMenu = [
//     ...menu.slice(0, 1), "Njahi", "Kamande", "Pojo", ...menu.slice(3),
// ];
// newMenu;
// menu;

