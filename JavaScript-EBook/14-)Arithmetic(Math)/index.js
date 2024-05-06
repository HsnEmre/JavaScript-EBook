//#region Remainder/Modulus(%)
console.log( 42 % 10); // 2
console.log( 42 % -10); // 2
console.log(-42 % 10); // -2
console.log(-42 % -10); // -2
console.log(-40 % 10); // -0
console.log( 40 % 10); // 0


var n =1234; // given n
var i = 0;
function inc() {
i = (i + 1) % n;
}
while (true) {
inc();
// update something with i
}


console.clear();
//#endregion


//#region   Rounding
console.clear();
console.log(Math.round(2.7));
console.log(Math.round(2,3));
console.log(Math.round(-2.7));



console.log(Math.ceil(2.3));//=>3
console.log(Math.ceil(2.7));//=>

console.log(Math.floor(2.3));//=>2
console.log(Math.floor(2.7));//=>2

console.log(Math.trunc(2.3));//=>2
console.log(Math.trunc(2133412.1));//=>floor


var myNum = 2/3; // 0.6666666666666666
var multiplier = 100;
var a = Math.round(myNum * multiplier) / multiplier; // 0.67
var b = Math.ceil (myNum * multiplier) / multiplier; // 0.67
var c = Math.floor(myNum * multiplier) / multiplier; // 0.66
// You can also round to a number of digi

function roundTo(value, places){
    var power = Math.pow(10, places);
    return Math.round(value * power) / power;
    }
    var myNum = 10000/3; // 3333.3333333333335
    roundTo(myNum, 2); // 3333.33
    roundTo(myNum, 0); // 3333
    roundTo(myNum, -2); // 3300
    // And the variants for ceil and floor:
    function ceilTo(value, places){
    var power = Math.pow(10, places);
    return Math.ceil(value * power) / power;
    }
    function floorTo(value, places){
    var power = Math.pow(10, places);
    return Math.floor(value * power) / power;
    }


//#endregion

//#region Bitwise operators

var a;
a = 0b0011 | 0b1010; // a === 0b1011
// truth table
// 1010 | (or)
// 0011
// 1011 (result)
// Bitwise and
a = 0b0011 & 0b1010; // a === 0b0010
// truth table
// 1010 & (and)
// 0011
// 0010 (result)
// Bitwise not
a = ~0b0011; // a === 0b1100
// truth table
// 10 ~(not)
// 01 (result)
// Bitwise xor (exclusive or)
a = 0b1010 ^ 0b0011; // a === 0b1001
// truth table
// 1010 ^ (xor)
// 0011
// 1001 (result)
// Bitwise left shift
a = 0b0001 << 1; // a === 0b0010
a = 0b0001 << 2; // a === 0b0100
a = 0b0001 << 3; // a === 0b1000


a = 256.67;
n = 4;
result = (a >> n) === Math.floor( Math.floor(a) / Math.pow(2,n) );
// result is true
a = a >> n; // 16

console.clear();

//#endregion


//#region Incrementing

var a = 5, // 5
b = a++, // 5
c = a 

for(var i = 0; i < 42; ++i)
{
// do something awesome!
}

//#endregion


//#region  pow
console.clear();

var a = 2,
b = 3,
c = Math.pow(a, b)

var a = 16;
var b = Math.pow(a, 1 / 2); // return the square root of 16 = 4
var c = Math.pow(a, 1 / 3); // return the cubed root of 16 = 2.5198420997897464
var d = Math.pow(a, 1 / 4); // return the 4th root of 16 = 2

console.clear();
//#endregion

//#region Random Integers and Floats

var a=Math.random();

function getRandom() {
    return Math.random();
}

function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
}


function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
}


function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//#endregion


//#region Addition 
var a = 9,
b = 3,
c = a + b;
//#endregion


//#region Little / Big endian for typed arrays when using bitwise operators
var isLittleEndian = true;
(()=>{
var buf = new ArrayBuffer(4);

var data = new Uint32Array(buf);
data[0] = 0x0F000000;
if(buf8[0] === 0x0f){
isLittleEndian = false;
}
})();

var myNum = 0x11223344 | 0; // 32 bit signed integer
var buf = new ArrayBuffer(4);
var data8 = new Uint8ClampedArray(buf);
var data32 = new Uint32Array(buf);
data32[0] = myNum; // store number in 32Bit array

console.log(data8[0].toString(16)); // 0x44
console.log(data8[1].toString(16)); // 0x33
console.log(data8[2].toString(16)); // 0x22
console.log(data8[3].toString(16)); // 0x11

console.log(data8[0].toString(16)); // 0x11
console.log(data8[1].toString(16)); // 0x22
console.log(data8[2].toString(16)); // 0x33
console.log(data8[3].toString(16)); // 0x44

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
// To speed up read and write from the image buffer you can create a buffer view that is
// 32 bits allowing you to read/write a pixel in a single operation
var buf32 = new Uint32Array(imgData.data.buffer);
// Mask out Red and Blue channels
var mask = 0x00FF00FF; // bigEndian pixel channels Red,Green,Blue,Alpha
if(isLittleEndian){
mask = 0xFF00FF00; // littleEndian pixel channels Alpha,Blue,Green,Red
}
var len = buf32.length;
var i = 0;
while(i < len){ // Mask all pixels
buf32[i] &= mask; //Mask out Red and Blue
}
ctx.putImageData(imgData);
//#endregion

//#region Get Random Between Two Numbers

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

    Math.floor(Math.random() * 11);
// randomBetween(1, 10);
Math.floor(Math.random() * 10) + 1;
// randomBetween(5, 20);
Math.floor(Math.random() * 16) + 5;
// randomBetween(-10, -2);
Math.floor(Math.random() * 9) - 10;

//#endregion

//#region Simulating events with different probabilities
function simulateEvent(numEvents) {
    var event = Math.floor(numEvents*Math.random());
    return event;
    }
    // simulate fair die
    console.log("Rolled a "+(simulateEvent(6)+1)); // Rolled a 2

    function simulateEvent(chances) {
        var sum = 0;
        chances.forEach(function(chance) {
        sum+=chance;
        });
        var rand = Math.random();
        var chance = 0;
        for(var i=0; i<chances.length; i++) {
        chance+=chances[i]/sum;
        if(rand<chance) {
        return i;
        }
        }
        // should never be reached unless sum of probabilities is less than 1
        // due to all being zero or some being negative probabilities
        return -1;
        }
        // simulate weighted dice where 6 is twice as likely as any other face
        // using multiples of likelihood
        console.log("Rolled a "+(simulateEvent([1,1,1,1,1,2])+1)); // Rolled a 1
        // using probabilities
        console.log("Rolled a "+(simulateEvent([1/7,1/7,1/7,1/7,1/7,2/7])+1)); // Rolled a 6
//#endregion


//#region Subtraction

console.log( 3 * 5); // 15
console.log(-3 * 5); // -15
console.log( 3 * -5); // -15
console.log(-3 * -5); // 15

//#endregion

//#region Getting maximum and mininmum
// The Math.max() function returns the largest of zero or more numbers.
Math.max(4, 12); // 12
Math.max(-1, -15); // -1
// The Math.min() function returns the smallest of zero or more numbers.
Math.min(4, 12); // 4
Math.min(-1, -15); // -15


// Getting maximum and minimum from an array:
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
max = Math.max.apply(Math, arr),
min = Math.min.apply(Math, arr);
console.log(max); // Logs: 9
console.log(min); // Logs: 1
// ECMAScript 6 spread operator, getting the maximum and minimum of an array:
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
max = Math.max(...arr),
min = Math.min(...arr);
console.log(max); // Logs: 9
console.log(min); // Logs: 1


//#endregion













