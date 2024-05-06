/*
Infinity is a property of the global object (therefore a global variable) that represents mathematical infinity. It is a
reference to Number.POSITIVE_INFINITY
It is greater than any other value, and you can get it by dividing by 0 or by evaluating the expression of a number
that's so big that overflows. This actually means there is no division by 0 errors in JavaScript, there is Infinity!
There is also -Infinity which is mathematical negative infinity, and it's lower than any other value.
To get -Infinity you negate Infinity, or get a reference to it in Number.NEGATIVE_INFINITY.

*/


console.log(Infinity);//Infinity

console.log(Infinity>123);//true

console.log(Infinity<-123);//false

console.log(Math.pow(123123123, 9123192391023));// Infinity

console.log(Number.MAX_VALUE*2);// Infinity

//#region   NUMBER CONSTANTS
/*
The number constructor has some built in constants that can be useful
*/

console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.EPSILON); // 0.0000000000000002220446049250313
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);

//#endregion

//#region OPERTAION THAT RETURN NAN
//Mathematical operations on values other than numbers return NaN

"b" * 3
"cde" - "e"
[1, 2, 3] * 2
// An exception: Single-number arrays.
[2] * [3] // Returns 6
// Also, remember that the + operator concatenates strings.
"a" + "b" // Returns "ab"
// Dividing zero by zero returns NaN.
0 / 0 // NaN


//#endregion
