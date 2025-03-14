// // What is an object? ??=> collections of data
// const obj = {
//     key1: value1,
//     key2: {
//       innerKey1: innerValue1,
//       innerKey2: innerValue2,
//     },
//   };

  // accessing a value stored in an object
  //1. Dot notation

  // const address = {
  //   street: {
  //     line1: "11 Broadway",
  //     line2: "2nd floor"
  //   },
  //   city: "New York",
  //   state: "NY",
  //   zipCode: "10004",
  // };

  // console.log (address.street)
  // console.log (address.street.line1)

  // // 2. Bracket Notation
  // const address = {
  //   street: {
  //     line1: "11 Broadway",
  //     line2: "2nd floor"
  //   },
  //   city: "New York",
  //   state: "NY",
  //   zipCode: "10004",
  // };

  // console.log (address["street"])
  // console.log (address["street"]["line1"])

//   // Accessing properties dynamically - only possible in bracket notation
// const meals = {
//   breakfast: "Oatmeal",
//   lunch: "Caesar Salad",
//   dinner: "Chinsaga",
// };
// let mealName = "lunch";
// console.log (meals[mealName]);

// console.log (meals.mealName)

// // we can use bracket notation to dynamically set properties during the creation of a new object.
// const morningMeal = "breakfast";
// const middayMeal = "lunch";
// const eveningMeal = "dinner";

// const meals = {
//   [morningMeal]: "French toast",
//   [middayMeal]: "Personal pizza",
//   [eveningMeal]: "Fish and chips",
// };

// meals;

// JavaScript object methods
// Object.keys()
// const wednesdayMenu = {
//   cheesePlate: {
//     soft: "brie",
//     semiSoft: "fontina",
//     hard: "provolone",
//   },
// fries: "sweet potatoes",
// salad: "southwestern"
// };

// console.log(Object.keys(wednesdayMenu))


// // Object.values()
// const wednesdayMenu = {
//   cheesePlate: {
//     soft: "brie",
//     semiSoft: "fontina",
//     hard: "provolone",
//   },
// fries: "sweet potatoes",
// salad: "southwestern"
// };

// console.log(Object.values(wednesdayMenu))


//Modifying objects
// add an object using dot or bracket notation
// const circle = {};
// circle ;
// circle.radius = 5;
// circle;

// //=> using bracket
// const circle = {}; //circle is set as an empty object
// circle ;
// circle.radius = 5; // creates key inside the circle and sets its values to 5
// circle["diameter"] = 10;
// circle.circumference = circle.diameter *Math.PI

// circle;


// // Modify a property using dot or bracket notation
// const mondayMenu = {
//   cheesePlate: {
//     soft: "Chevre",
//     semiSoft: "Gruyere",
//     hard: "Manchego",
//   },
//   fries: "curly",
//   salad: "Cobb",
// };

// mondayMenu.fries = "sweet Potato";  // changes value of fries to sweet potato destructively
// mondayMenu;

// afucntion encapsulating this modification process
function destructivelyUpdateObject(obj, key, value) {
  obj[key] = value;

  return obj;
}

// // updating our mondayMenu to tuesdayMenu:
// const mondayMenu = {
//   cheesePlate: {
//     soft: "Chèvre",
//     semiSoft: "Gruyère",
//     hard: "Manchego",
//   },
//   fries: "Sweet potato",
//   salad: "Cobb",
// };
// const tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "caesar");
// tuesdayMenu;
// console.log(tuesdayMenu.salad);
// console.log(mondayMenu.salad) //=> original menu has been destructively updated

// // updating an object nondestructively using the spread operator
// // we will us a method that takes three arguments as below
// function nondestructielyUpdateObject (obj, key, value) {
//   const newObj = {...obj};
//   newObj[key] = value;

//   return newObj;
// }
// const sundayMenu = nondestructielyUpdateObject(
//   tuesdayMenu, "fries", "waaru"
// );
// console.log(tuesdayMenu.fries)
// console.log(sundayMenu.fries)


// //remove a property from an object
// const wednesdayMenu = {
//   cheesePlate: {
//     soft: "Brie",
//     semiSoft: "Fontina",
//     hard: "Provolone",
//   },
//   fries: "Sweet potato",
//   salad: "Southwestern",
// };
// delete wednesdayMenu.salad; // the delete operator is used
// wednesdayMenu;

// For accessing elements in an Array, always use integers.
// Be wary of setting Object-style properties on an Array. 
//Remember that all Object keys, including Array indexes, are strings.