// JavaScript evaluates expressions from left to right. Different sequences can produce different results:
// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

// let x = "Volvo" + 16; // "Volovo16"
// let y =  16 + "Volvo"; // "16Volovo"
// let z =  16 + 4 + "Volvo"; // "20Volovo"  left to right is done so it add firdt two integers and add it to the string "Volvo"

// let a = "Volvo" + 16 + 4;    // Volvo164
// console.log(a)


// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
// let x;       // Now x is undefined
// x = 5;       // Now x is a Number
// x = "John";  // Now x is a String
// console.log(x)


// Booleans can only have two values: true or false.
// let x = 5;
// let y = 5;
// let z = 6;
// (x == y)       // Returns true
// (x == z)       // Returns false

// JavaScript arrays are written with square brackets.
// Array items are separated by commas.
// The following code declares (creates) an array called cars, containing three items (car names):
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]) //Saab --> as a array index start from 0 
// console.log(cars[1]) //Volvo

// The typeof operator returns the type of a variable or an expression:
// typeof ""             // Returns "string"
// typeof "John"         // Returns "string"
// typeof 1              // Returns Number 