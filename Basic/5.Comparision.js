// Chapter = 8 (Hitesh Choudhary) //

//-----Comparison in JavaScript------ //

console.log( 2 > 1); // true
console.log( 2 >= 1); // true
console.log( 2 < 1); // false
console.log( 2 == 1); // false
console.log( 2 != 1); // true


console.log("2" > 1);   // true
console.log( "02" > 1); // true

console.log( null > 0); // false
console.log( null == 0); // false
console.log( null >= 0); // true.. yaha pr value conversion ka problem aa jata hai.


// ------------- Note -----------------//

// The Reason is that an equality check and conparisons > < >= <= work differently.
// Comparisions covert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.



// But underfine ke saat humesha value false mein hi aati hai. //

console.log( undefined == 0 ); // Result is always in false.


// -------------- Note -------------------//

// 1. JavaScript mein comparison or equality check dono alag - 2 chije hoti hai.
// comparison hote hai < > = >= 
// equality check hote hai == or === or strict check mein bhi === ka hi use karte hai.