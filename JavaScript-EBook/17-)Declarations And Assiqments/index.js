//#region Modifying Contants

const person={
    name:"Jhon"
};
console.log("name of the person is ",person.name);

person.name="stevve";
console.log("name of the person is ",person.name);


//#endregion

//#region Declaration
/**
  There are four principle ways to declare a variable in JavaScript: using the var, let or const keywords, or without a
keyword at all ("bare" declaration). The method used determines the resulting scope of the variable, or
reassignability in the case of const.
The var keyword creates a function-scope variable.
The let keyword creates a block-scope variable.
The const keyword creates a block-scope variable that cannot be reassigned.
A bare declaration creates a global variable.
var a = 'foo'; 
let b = 'foo'; // Block-scope
const c = 'foo'; // Block-scope & immutable reference
Keep in mind that you can't declare constants without initializing them at the same time.
const foo; // "Uncaught SyntaxError: Missing initializer in const declaration"
(An example of keyword-less variable declaration is not included above for technical reasons. Continue reading to
see an example.)
 */

//#endregion

//#region Undefined
var a;
console.log(a);

console.clear();
//#endregion

//#region  Data Types

var length=16;
var message="Hello world!";
var carNames=['chevrolet','nissan','bmw'];


// var person={
//    firstName:"jhon",
//    lastName:"Doe"
// };
var a; // a is undefined
var a = 5; // a is a Number
var a = "John"

console.log(a);
//#endregion

//#region Mathematic operations and assigment

//Decrement by
console.clear();
var a = 9,
b = 3;
b -= a;
console.log(b);

//Multiply by
var a = 5,
b = 3;
b *= a;
//Divide by
var a = 3,
b = 15;
b /= a;


//Raised to the power of
var a = 3,
b = 15;
b **= a;
//#endregion

//#region  Asssigment
console.clear();
var a=6;
let b2="Foo";

c = 5;
c = "Now the value is a String.";

globalA = "1", globalB = "2";
let x, y = 5;
var person2 = 'John Doe',
foo,
age = 14,
date = new Date();
//#endregion

