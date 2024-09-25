"use strict";  // treat all JS code as newer version.

// alert(3 + 3) // we are using node.js, not brower.


let name = "Rakesh Kumar"; // String DataType

let age = 25; // Number DataType
   or 
let age2 = 25.6 // It's a floating number but it's also including in Number dataType. 



let isLoggedIn = false; // Boolean DataType


let state = undefined; // yahi abhi humne koi value define nahi kari hai yahi abhi tak humne variable declear kiya hai pr us variable ko koi value assigned nhi ki hai.


let temp = null; // Basically null ek dataType toh hai hi pr null ek stand alone value bhi hoti hai. or null ek representation hai empty value ka.


Symbol = // Symbol ka jayada tar implemantation react.js mein kiya jata hai. yahi jab bhi hum bahut sare components banate hai or hume identity karna hota hai ki, yeh wala component thoda unique hai dusare wale component se
// tab hum symbols ka use karte hai. 
// Basically uniqueness find karne hai liye hi Symbol DataType ka use kiya jata hai.
// Bahut sare Tools jaise figma bhi symbols ka use karte hai, component ke uniqueness ke liye or mostly uniqueness ke liye hi Symbol DataType ko use kiya jata hai.



object // object is also a datatype.

// Objects mein humesha humare pass ek key-value pair hota hai..

console.log(typeof "Rakesh"); // string datatype


console.log(typeof null); // null datatype is Object.
console.log(typeof undefined); // undefined hi aata hai.

typeOf // typeOf ek operator hota hai jiski help se hum kisi bhi variable ki value ka datatype pata kar sakte hai.




//------------------------------------- end --------------------------//


// Video No. 4 Piyush Goal (DataTypes and Operators in JavaScript) //

// DATATYPES //

// 1. NUMBER DATATYPE //


let num = 3.14;
let num2 = 10;

console.log(num + num2);


// 2. STRING DATATYPE //

const firstName = "Rakesh";
const lastName = "Kumar";

console.log(firstName + " " + lastName);


// 3. BOOLEAN DATATYPE //  1 || 0 VALUE

// Booleans is basically true or false value. //

// Booleans value internally 0 || 1 hoti hai.



let isLoggedIn_1 = true;

let isLoggedOut_1 = false;


// 4. NULL DATATYPE //


let lastLoginDate = null; // this is an any //


// 5. UNDEFINED DATATYPE //

let state_1 = undefined;

// 6. OBJECT //

const person = {
    firstName: "Rakesh",
    lastName: "Kumar",
    age: 22,
    isLoggedIn: false,
    lastLoginDate: null,
}


console.log(person);


// NOTE //


// String "1" + "1"

console.log('1' + 1); //  11 => its a string.
console.log('1' * 1); //  11 => its convert in string to number( multiplication ) // also converted in number.
console.log('a' + 1); //  NaN => its not a number value.
// It's a weard things in javascript.

// ---------------------------- end ---------------------------//