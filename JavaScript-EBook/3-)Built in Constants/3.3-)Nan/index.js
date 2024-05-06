/*
NaN stands for "Not a Number." When a mathematical function
 or operation in JavaScript cannot return a specific
number, it returns the value NaN instead.

*/
var x=window.hasOwnProperty('NaN');//true
console.log(x);

//perhaps confusingly,Nan is still considered a number
console.log(typeof NaN);//number


//dont check for nan using the equality operator. See isNan isntead.

console.log(NaN==NaN);//false
console.log(NaN===NaN);//false


//#region   3.4 Undefined And Null
//undefined is a global value that represents the absence of an assigned value.
console.log(typeof undefined === 'undefined');
//null is an object that indicates that a variable has been explicitly assigned "no value".
console.log(typeof null === 'object');


//A variable when it is declared but not assigned a value (i.e. defined)
let foo;
console.log('is undefined?', foo === undefined);
// is undefined? true
//Accessing the value of a property that doesn't exist
let foo = { a: 'a' };
console.log('is undefined?', foo.b === undefined);
// is undefined? true
//The return value of a function that doesn't return a value
function foo() { return; }
console.log('is undefined?', foo() === undefined);
// is undefined? true
//The value of a function argument that is declared but has been omitted from the function call
function foo(param) {
console.log('is undefined?', param === undefined);
}
foo('a');
foo();
 //#endregion