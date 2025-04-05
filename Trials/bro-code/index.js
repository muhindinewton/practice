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
// let students = 30
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

// z=Math.trunc(x) //, Truncates the decimal part
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



//! Random number generator
// let randomNum = Math.ceil(Math.random() * 6) //, We multiply the number by 6 to get numbers with a max value of 6. it is useful when genrating numbers for a dice roll
// console.log(randomNum)


//.When I want numbers within a certain range;
// const min = 50;
// const max = 100;

// let randomNum = Math.ceil(Math.random() * (max-min)) + min;

// console.log(randomNum)



//!if statements
// if a condition is true, execute some code, if not, do something else
// let age = 2;
// if(age>= 18) {
//     console.log("You are old enough to enter this site")
// }
// else {
//     console.log(" You must be 18+ to enter this site")
// }


//. Using booleans
// let isStudent = false;

// if (isStudent) {
//    console.log("You are a student");
// }
// else {
//     console.log("You are not a student")
// }

// let age = 20;
// let hasLicence = false;

// if(age>= 18) {
//     console.log("You are old enough to drive")
//     if (hasLicence) {
//         console.log("You have a licence")
//     }
//     else{
//         console.log("You do not have a licence")
//     }
// }
// else{
//     console.log("You must me 16+ to have a licence")
// }


//.else...if statements
// let age = 0
// if (age >= 100) {
//     console.log("You too old to enter this site")
// }
// else if (age == 0){
//     console.log("You cant enter. You were just born!")
// }
// else if (age<0){
//     console.log("Kindly be serious, how is your age below 0!")
// }
// else if (age >= 18) {
//     console.log("You are old enough to enter this site")
// }
// else{
//     console.log(" You are not old enough to enter this site")
// }



//! Ternary operator
/*
Ternary operator - a shortcut to if{} and else {} statements
Helps to assign a variable based on  a condition 
condition ? codeIfTrue : codeIfFalse;
*/

// let age = 2;
// let message = age >= 18 ? "You are an adult" : "You are a minor";

// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log(greeting)

// let isStudent = false;
// let message = isStudent ? "You are a student" : "You are not a student"
// console.log(message)

// let purchaseAmount = 99
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log (`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);



//! SWITCH statement
//Efficient replacement to many else if statements
// let day = 9;

// switch(day) {
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }
//, break breaks out of the switvh once a condition has been met

// let testScore = 2;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     default:
//        letterGrade = "F" 
// }

// console.log(letterGrade)



//! string methods
/*
- Allows one to work with text(strings)
*/
// let userName = "Muhindi";

// console.log(userName.charAt(0)); //, Gets the first character of the string

// console.log(userName.indexOf("i")) //, Shows the index of the first appearance of the character

// console.log(userName.lastIndexOf("i")) //, Shows the index of the last appearance of the character

// console.log(userName.length) //, Shows the length of a string

//. .trim()
// removes whitespace from both ends of this string and returns a new string, without modifying the original string.

// let userName = "   Kamau   "
// userName = userName.trim();
// console.log(userName)

//. .toUpperCase()
// userName = userName.toUpperCase();
// console.log(userName)

//. .toLowercase()
// userName  = userName.toLowerCase();
// console.log(userName)

//. .repeat();
// userName = userName.repeat(3)
// console.log(userName)

//. .startsWith()
// let userName = " Njoroge"
// let result = userName.startsWith(" ")

// console.log(result)

// if (result) {
//     console.log("Your username cant begin with ' '");
// }
// else {
//     console.log(userName)
// }

//. .endsWith()
// let userName = " Njoroge "
// let result = userName.endsWith(" ")

// console.log(result)

// if (result) {
//     console.log("Your username cant end with ' '");
// }
// else {
//     console.log(userName)
// }

//. includes()
// let userName = "Njoroge"
// let result = userName.includes(" ")

// console.log(result)

// if (result) {
//     console.log("Your username cant include ' '");
// }
// else {
//     console.log(userName)
// }

//. replaceAll()
// let phoneNumber = "123-456-789"

// phoneNumber = phoneNumber.replaceAll("-", "");

// console.log(phoneNumber)

//. padStart()
// let phoneNumber = "795482911"

// phoneNumber = phoneNumber.padStart(10, "0");
// //, 10 specifies the number of characters i want my string to have
// //, "0" specifies the character i want to add at the front to make my string the required length.

// console.log(phoneNumber)

//. .padEnd()
// let phoneNumber = "795482911"

// phoneNumber = phoneNumber.padEnd(10, "0");
// //, 10 specifies the number of characters i want my string to have
// //, "0" specifies the character i want to add at the end to make my string the required length.

// console.log(phoneNumber)



//! String slicing
/*
- String slicing is creating a substring from a portion of another string
*/
// const fullName = "Newton Muhindi"

// let firstName = fullName.slice(0, 6); //, ending index is exclusive
// let lastName = fullName.slice(7, 14);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1)

// console.log(firstName)
// console.log(lastName)
// console.log(firstChar)
// console.log(lastChar)

//, Works only for the instance of the the specific name. if you alter, you have to change indexes
//, To make it more dynamic, we combine it with indexof()

// const fullName = "Newton Muhindi"

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1); //, +1 removes empy space before M

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1)

// console.log(firstName)
// console.log(lastName)
// console.log(firstChar)
// console.log(lastChar)

// const email = "muhindi1970@gmail.com"

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(username)
// console.log(extension)



//! Method chaining
/*
- Method Chaining is calling one method after another in one continuous line of code
*/

// ---------- NO METHOD CHAINING ----------
// let username = window.prompt ("Enter your username: ")
//, when the user types in their username, I want to trim any whitespaces, make the first character upperCase and make all the other characters lowercase

// username = username.trim();
// let letter=username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// console.log (username);

// ---------- METHOD CHAINING ----------
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username)



//! Logical Operators
/*
- Logical operators are used to combine or manipulate boolean values (true, false)
    AND = &&
    OR = ||
    NOT = !
*/

//. AND = &&
// const temp = 0;
// if (temp > 0 && temp <=30) {
//     console.log("The weather is GOOD");
// }
// //, To execute above if statement, both conditions need to be true
// else {
//     console.log("The weather is BAD");
// }

//. OR = ||
// const temp = 20;
// if (temp <= 0 || temp > 30) {
//     console.log("Weather is BAD")
// }
// //, To execute if one condition is truw
// else {
//     console.log("Weather is GOOD")
// }

//. NOT = !
// const isSunny = false;
// if (!isSunny) {
//     console.log("It is cloudy")
// }
// else {
//     console.log("It is sunny")
// }



//! Strictly equality operator (===)
/*
- = assignment operator
- == comparison operator (compare if values are equal)
- === strictly equality operator (compare if values & datatype are equal)
- != inequality operator
- !== strictly inequality operator
*/

//. === (Strictly inequality operator)
// const PI = 3.14;
// if (PI === "3.14") {
//     console.log("That is Pi")
// }
// else {
//     console.log ("That is not PI")
// }
//, Whereas == checks if values are equal, === checks both values are equal, ie, a string can only be equal to string, a number to a number etc.

//. != (inequality opearator)
// Returns true when two values and data types are not equal
// const PI = 3.14;
// if (PI !== "3.14") {
//     console.log("That is NOT Pi")
// }
// else {
//     console.log ("That is PI")
// }



//! while loop
// Repeat some code while some condition is true

// let username = "";

// while(username === "" || username === null) {
//     username = window.prompt(`Enter your name`)
// }

// console.log(`Hello ${username}`)

//. do while loop
// let username;
// do{
//     username = window.prompt(`Enter your name: `)
// } while(username === "" || null);

// console.log(`Hello ${username}`)

// let loggedIn = true;
// let username;
// let password;

// while(!loggedIn) {
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password")

//     if(username === "myUsername" && password === "myPassword") {
//         loggedIn = true;
//         console.log("You are logged in")
//     }
//     else{
//         console.log("Invalid credentials! Please try again")
//     }
// }

//. for loop
// repeat some code a limited amount of times
// for(let i = 2; i <= 10; i+=2) {
//     console.log(i)
// }
// console.log("Hurray")

// for(let i = 10; i >= 0; i-=2) {
//     console.log(i)
// }
// console.log("Happy New year")

// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }



//! Functions
/*
- A function is a section of reusable code.
- You declare the code once, and you use it whenever you want.
- You call the function to execute that code.
*/

// function happyBirthday () { //, happyBirthday() is the function amd it iss the one we will call
//     console.log("Happy birthday Kangethe")
//     console.log("Happy birthday Kamande")
// }

// happyBirthday();
// happyBirthday();

//. Using parameters in declaring functions
// function happyBirthday (username, age) { //, username and age are parameters. order matters
//     console.log("Happy birthday to you")
//     console.log(`Happy birthday ${username}`)
//     console.log(`You are ${age} years old`)
// }

// happyBirthday("Kamau", 25); //, Kamau and 25 are arguments
// happyBirthday("Kangethe", 30)
// //, You can have different arguments for same parameters

//. use of the return keyword
// function add (x, y) {
//    let result = x + y;
//    return result; //, when you return something from a function, after you resolve the function,think of it like becoming whatever you have returned. 
// }
// console.log (add (2,3))

// can also be written as below:
// function add (x, y) {
//     return x + y;
//  }
//  console.log (add (2,3))

//> Example. a function to determine whether number is even or odd
// function isEven (number) {
//     return number % 2 === 0 ? true : false
// }
// console.log (isEven(7))

//>Example. a function to check if email is valid
// function isValidEmail(email) {
//     if (email.includes("@")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isValidEmail("muhindi1970@gmail.com"))



//! Variable scope
