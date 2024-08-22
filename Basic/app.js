let name = "Rakesh Kumar";
let age = 25;
let isLoggedIn = false;
let location = null;


console.table([name, age, isLoggedIn, location]);



// conversion of datatype

let score = 44;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);



let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);


// operations in JavaScript


let value = 3;
let negVal = -value;
console.table([value, negVal]);


let str1 = "hello";
let str2 = "Rakesh";
let str3 = str1 + str2;
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log("1" + 2 - 2);


// comparison operators

console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

