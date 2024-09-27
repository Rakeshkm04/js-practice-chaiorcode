// Chapter = 9 (Hitesh Choudhary) //

//----- DataType of JavaScript Summary with interview preperation ------ //

// ----------------- Note -------------------- //

// 1. DataType ko Basically two types ya two categories mein hi divide kiya gya hai.
// (a) Primitive DataTypes // Yeh jitne bhi Primitive datatypes hote hai yeh sare CALL-BY-VALUE hote hai.
// yahi ki jab bhi hum inhe kahi se kahi copy karte hai to jo inka jo original data hai vo reference hume memory ka nahi diya jata hai. Bs inko copy karke humko diya jata hai alag or usme jo changes hote hai vo copy mein changes hote hai.

// => Number
// => string 
// => Boolean
// => Null 
// => Undefined
// => Symbol = Kisi bhi value ko unique banane ke liye Symbol use hota hai. ya Symbol datatype ka use kiya jata hai.
// => BigInt = vaise toh sari values numbers mein cover ho jati hai but kuch scientafic values ya koi kafi badi value jo handle nahi ho rhi hai toh aaisi values ko hum BigInt mein use kar lete hai.



// (b) Non- Primitive or Reference Type
// Yeh vo values ya datatypes hote hai jinka memory mein reference hume  directly alocate kiya ja sakta hai.

// => Array
// => Objects
// => function

// Datatypes mein difference kuch is tarh se hai ki yeh jo jitne bhi data hai vo kis tarh se memory mein store hote hai or kis tarf se aap apne data ko access kr sakte ho.
// ishi ke bases pr 2 categorition officially kiya gaya hai.




// ------------- Note ------------------
// => Agar hume JavaScript mein master karna hai toh hume JS ke OBJECTS AND BROWER ke Events ya Browers ke jo WEB EVENTS hote hai. Yeh 2 topics mein hi hote hai main js mein.

// Interview question.
// Js Dynamically type language hai ya Statically type programming language hai.

// --------------------------------------------------------------//

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // Result is false.



const heros = ["shaktiman", "naagraj", "doga"];  // Array

const voter = {                // Object
    name: "Rakesh Kumar",
    age: 25,
    country: "India",
}


const myFunction = function() {   // function
    console.log("Hello World!");
}



// ------ Kisi bhi variable ka datatype pata Karna ho toh kya kare -------------

// Through the typeOf Operator.

console.log(typeof myFunction);  // iska result jo aayega vo function datatype hi aayega but ishe hum kehte hai function Object.




// Toh yeh jitne bhi non-primitive datatypes hai inka jo return type aata hai vo OBJECT hi aata hai.
// matlb ki jitne bhi non-primitive datatypes actually mein function hi bola jata hai pr jo function ka return hai usko specially function object bola jata hai.