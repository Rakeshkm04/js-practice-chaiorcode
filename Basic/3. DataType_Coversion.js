// Chapter => 6 (Hitesh Choudhary) //

// Datatype Conversion and Operations //


let score = 33;

console.log(typeof score); // Number
console.log(typeof(score)); // Number


// let score2 = "33"; //
let valueInNumber = Number(score2);
console.log(typeof(valueInNumber)); // It's result always is in Number.

// But //


// let score3 = "abc123";
console.log(typeof(score3)); // NaN


// let score = null;

console.log(typeof score); // the result is 0.


// let score = underfinde //
console.log(typeof score); // the result is NaN.

// let score = true;
console.log(typeof score); // the result is 0 or 1 //


// let score = "Rakesh" // We know that ki yeh kisi number mein convert nhi ho Sakta hai to result mein NaN hi aayega.
console.log(typeof score) // the result is in NaN.


//--------- NOTES -------- //

// "33"  =>  33 (number) mein convert ho jayega //

// "33abc"  => NaN 

// true => 1; || false => 0;


let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


// 1 => true; 0 => false;

// "" => false;

// "Rakesh" => true;


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));
