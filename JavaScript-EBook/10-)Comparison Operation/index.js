//#region The Problem
/*
The abstract equality and inequality operators (== and !=) convert their 
operands if the operand types do not
match. This type coercion is a common source of confusion about the results
 of these operators, in particular, these
operators aren't always transitive as one would expect.

*"" == 0; // true A
0 == "0"; // true A
"" == "0"; // false B
false == 0; // true
false == "0"; // true
"" != 0; // false A
0 != "0"; // false A
"" != "0"; // true B
false != 0; // false
false != "0"; // false
 */

console.log(Number(""));
console.log(Number("0"));
console.log(Number(false));

/*
The Solution
In the statement false B, both the operands are strings ("" and "0"), 
hence there will be no type conversion and
since "" and "0" are not the same value, "" == "0" is false as expected.
One way to eliminate unexpected behavior here is making sure that you always compare
 operands of the same
type. For example, if you want the results of numerical comparison use explicit conversion:


*/
console.clear();
var test=(a,b)=>Number(a)==Number(b);
console.log(test("",0));
console.log(test("0",0));
console.log(test("","0"));
console.log(test("abc","abc"));

console.clear();

var test=(a,b)=> String(a)==String(b);
console.log(test("",0));
console.log(test("0",0));
console.log(test("","0"));


/*
Side-note: Number("0") and new Number("0") isn't the same thing! While
 the former performs a type conversion,
the latter will create a new object. Objects are compared by reference and not by 
value which explains the results
below.
*/
console.clear();
console.log(Number("0")==Number("0"));

//#endregion


//#region Nan Property of The global Object
/*
NaN ("Not a Number") is a special value defined by the IEEE Standard for
 Floating-Point Arithmetic, which is used when
a non-numeric value is provided but a number is expected (1 * "two"), or when a 
calculation doesn't have a valid
number result (Math.sqrt(-1)).
Any equality or relational comparisons with NaN returns false, even comparing it with 
itself. Because, NaN is
supposed to denote the result of a nonsensical computation, and as such, it isn’t equal 
to the result of any other
nonsensical computations.
*/
console.clear();
console.log((1*"two")===NaN);

console.clear();
console.log(NaN===NaN);

console.clear();
console.log(Number.NaN===NaN);

console.clear();
console.log(NaN<0);
console.log(NaN>0);

//Non-equal comparisons will always return true;
console.clear();
console.log(NaN !==0);
console.log(NaN!==NaN);


//#endregion

//#region Points to note
/*
NaN itself is a number, meaning that it does not equal to the string "NaN",
 and most importantly (though perhaps
unintuitively)
*/
console.clear();
console.log(typeof(NaN)==="number");

//#endregion

//#region Example With functions
//Take the followinf two functions
console.log();
function T(){
    console.log("T");
    return true;
}

function F(){
    console.log("F");
    return false;
}
T() && F();

F() && T();

T() || F();

F() && T();

console.clear();
//#endregion

//#region  Null and Undefined

/*
null and undefined share abstract equality== but not strict equality
*/

console.log(null==undefined);
console.log(null===undefined);

//#endregion

//#region  grouping multiple logic statement
/*
You can group multiple boolean logic statements within parenthesis in order to create a more
 complex logic
evaluation, especially useful in if statements
*/
console.clear();
var height=12;
var age=20;

if((age>= 18 && height>=5.11)|| (status==='royalty' && hasInvitation))
{
console.log('You can enter our club');
}

// ecample reading keyboard via birfield

var bitfielkd=0;
const KEY_BITS=[4,1,8,2];
const KEY_MASK=[0b1011,0b1110,0b0111,0b1101]; 
window.onkeydown=window.onkeyup=function(e){
    if(e.keyCode >= 37 && e.keyCode <41){
        if(e.type === "keydown"){
        bitField |= KEY_BITS[e.keyCode - 37];
        }else{
        bitField &= KEY_MASKS[e.keyCode - 37];
        }
        }
}

var directoriesState=[false,false,false,false];

window.onkeydown=window.onkeyup=function(e){
    if(e.keyCode>=37 && e.keyCode<41){
        directoriesState[e.keyCode-37]=e.type==="keydown";
    }
}


//#endregion

//#region 
//#endregion

//#region 
//#endregion

//#region 
//#endregion

//#region 
//#endregion