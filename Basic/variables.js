// ------CHAI OR JAVASCRIPT------//-----Hitesh Choudhary----------//

//-----Date : 19-09-2024-------

// 1. Chapter = 4: Variables(let or var and const) 


const accountId = 12345;
let  accountEmail = "rakesh@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";


//accountId = 1456;

accountEmail = "rakeshkm@gamil.com";
accountPassword = "21212";
accountCity = "Bengaluru";
let accountState;

console.table([accountEmail, accountPassword, accountCity, accountState]);


/* 

Prefer not to use var
Because of issue in block scope and functional scope.

*/




// ---------Piyush Goal (Varibles Video = 2) -------------//

// 1. DataType varName = value; = Strongly Typed Language.
// 2. JS = Loosely Typed Language.



//-------------------------//


//Naming conv. 

//firstname
//first_name
//FirstName
//firstName (Most Pref.) Cammel Casing

//---------------------------------//


// Var -> Global Scope/


if(true) {
    var age = 22;
}

console.log(age);

// Let -> Local Scope/

if(true) {
    let name = "Rakesh Kumar";
    console.log(name);
}


// Const -> Local Scope/ --Value re-assign nhi ho sakti hai

const name2 = "Piyush Goal";

name2 = "Rakesh Kumar"; // not allowed in const variable

console.log(name2);



// Revise Var | Let | Const


// Var -> Global Scope
// Re-assign
// Kahi bhi access Kr Sakte hai.


// Let -> Local Scope
// Re-assign
// Access sirf Khud ke block ke ander hi kr sakte hai.  {}-> block 


// Const -> Local Scope
// Re-assign nhi kr sakte hai
// Access sirf khud ke block ke ander hi kr sakte hai.

// ==> Production mein almost Const use kiya jata hai.
