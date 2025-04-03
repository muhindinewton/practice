// console.log(`Hello`)
// window.alert(`This is an alert`); => Creates an alert

// document.getElementById("myH1").textContent = `Hello!`
// document.getElementById("myP").textContent = `I like Pizza`



//! Variables
/*
Variable - A container that stores a value
            - Bahaves as if it were the value it contains
Steps to creating a variable:
1. Declaration - let x;
2. assignment - x=100;
*/

// let x = 100;
// x

// let age = 25;
// let price = 10.99;
// let gpa = 2.5
// let name = 'Kamau';

// console.log(typeof age);
// console.log(typeof name)
// function greeting () {
// return `Your name is ${name} and you are ${age} years old`
// }
// console.log (greeting())

// let online = true;
// console.log(`Bro is online: ${online}`);

// let fullName = "Newton Muhindi";
// let age = 25;
// let isStudent = false;

// document.getElementById("p1").textContent = `My name is ${fullName}`;
// document.getElementById("p2").textContent = `I am ${age} years old`;
// document.getElementById("p3").textContent = ` Enrolled: ${isStudent}`;



//!Arithmetic Operators
/*
Arithmetic operators = operands (values, variables, etc)
                        operators (+ - * / ** %) ** is an exponent, % is the modulus ie remainder
                        ex. 11= x + 5;
*/

// let students = 30;
// students = students **3;
// students = students % 4

// console.log(students)


//. Using augmented assignment opearators
let students = 30
// students += 1
// students -= 2
// students /= 4
// students %=4

// console.log(students)


//. Increament and decreament operator
// students   ++
// students --

// console.log(students)


//. Operators precedence
/*
1. parenthesis ()
2. exponents
3. multiplication & division  & modulo
4. addition & subtraction
*/

// let result = 12 % 5 + 8 / 2;
// console.log(result)

// let result = 6 / 2 ** (2+5);
// console.log (result)



//! Accepting user input
/*
 how ot accept user input
 1. easy way - window prompt
 2. professional way = - HTML textbox
*/

//, Easy way
// let userName;
// userName = window.prompt("What is yor username?")
// console.log(userName)

//, Professional way
// let username;
// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH").textContent = `Hello ${username}`
// };



//! Type conversion
/*
type conversion - changing datatype of a value to another (strings, numbers, booleans)
*/
// let age = window.prompt("How old are you?")
// age +=1;
// console.log(age, typeof age);

// the output is a string and cant be performed an arithmetic operation. we have to convert it to a number so as to perform an arithmetic operation.

// let age = window.prompt("How old are you?")
// age = Number(age);
// age +=1;

// console.log(age, typeof age)

// const pi = 3.142;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of the circle")
// radius = Number(radius);

// circumference = 2*pi*radius;
// circumference = Math.floor(circumference);
// document.getElementById("circumference").textContent = `The circumference of a circle with a radius of ${radius} cm is ${circumference} square centimeters`

// const PI = 3.142;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = function () {
//     radius = document.getElementById("myText").value;
//     radius = Number (radius)
//     circumference = 2*PI*radius;
//     document.getElementById("myH3").textContent = circumference + ` cm`;
// }



//! Math
/*
Math - built in object that provides a collection of properties and methods
*/

// console.log (Math.PI)
// let x = 3.99;
// let y = 2;
// let a=10;
// let z;

// z=Math.round (x);
// console.log(z)

// z=Math.floor (x) //, Rounds up always
// console.log(z)

// z=Math.ceil(x) //, Rounds up always
// console.log(z)

// z=Math.trunc(x) //, Truncates the dicimal part
// console.log(z)

// z=Math.pow(x, y) //, raises x to power y
// console.log(z)

// z=Math.sqrt(x) //, Finds square root of x
// console.log(z)

// z = Math.log(a); //, Finds natural log of a
// console.log(z);

//. Working with trigonometry
// you place radians

// let b = 45
// let n;

// n = Math.sin(b)
// console.log(n)

// n = Math.cos(b)
// console.log(n)

// n = Math.tan(b)
// console.log(n)

//. Getting absolute value of a number
// let x = -3.12
// let z;

// z=Math.abs(x) //, Gives a positive number always
// console.log(z)

//. Getting a maximum and a minimum number from a set of numebers
// let x = 3;
// let y = 2;
// let z = 5;

// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
// console.log(max)
// console.log(min)