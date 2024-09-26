// Chapter = 7 (Hitesh Choudhary) //

//-----Operations in JavaScript------ //

let value = 3;
let negValue = -value;
console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);


// --------- Basic Concatination ---------//


let str1 = "hello";
let str2 = " Rakesh";

let str3 = str1 + str2;
console.log(str3); // Result is Hello Rakesh.


// --------- Some Complex Situations in Contatination ----------//


console.log( "1" + 2); // Result is 12.
console.log( 1 + "2"); // Result is 12.
console.log( "1" + "1"); // Result is 12 in string

console.log( "1" + 2 + 2); // Result is 122. sara conversion hi string ke ander ho gya hai. //

console.log( 1 + 2 + "2"); // Result is 32.

// ---------- Note -----------------//


// Is tarike ke conversion mein agar string staring mein hai toh sabko as a string treate kiya jayega or agar string last mein hai toh phle jo conversion hai vo ho jayega phir string add hogi.


// --------------- Yeh bhi ek tarike ka tricky conversion hai pr nhi krna chahiye ------------ //

console.log(true); // Result is true.
console.log(+true); // Result is 1.
console.log(+""); // Result is 0.


let gameCounter = 100;
gameCounter++;
console.log(gameCounter);


// ------ Read mdn for Prefix and Post fix operators---------------//




