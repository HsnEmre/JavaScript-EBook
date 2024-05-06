//#region  bactick
var hellow=`Hello world`;
console.log(hellow);
//#endregion

//#region can be created from other types using String() func
var instString=String(32);
var booleanString=String(true);
var nullString=String(null);

console.log(instString,booleanString,nullString);

//or tostring() can be used to convert numbers,booleans or objects to strings
var instString;
var booleanString;
var objString;
console.log(
 instString=(5232).toString(),
booleanString=(false).toString(),
objString=({}).toString());
//#endregion

//#region charcode
console.log(String.fromCharCode(104,101,108,111));
//#endregion

//#region new key
/*
Creating a String object using new keyword is allowed, 
but is not recommended as it behaves like Objects unlike
primitive strings.
*/

var objectString=new String("Yes I am String object");
typeof objectString;//=>object
typeof objectString.valueOf();
console.log(objectString);
console.log(typeof objectString);
console.log(typeof objectString.valueOf());


//#endregion


//#region Concatenating string
console.clear();
var foo="Foo";
var bar="Bar";
console.log(foo+bar);
console.log(foo+""+bar);

console.log(foo.concat(bar));
console.log( "a".concat("b"," ","d") );

var string="string";
var numbers=32;
var booleans=true;

console.log(string+numbers+booleans);

//#endregion

//#region String Templates
var place=`world`;
var greet=`hello ${place}!`;

console.log(greet);

console.log(String.raw`a\\b`);

//#endregion

//#region Reverse String
console.clear();
function reverseString(str)
{
    return str.split('').reverse().join('');
    
}
console.log(reverseString('string'));

console.log('?????.'.split('').reverse().join(''));
//#endregion

//#region Notes
/*
str The input string "string"
String.prototype.split(
deliminator )
Splits string str into an array. The
parameter "" means to split between each
character.
["s","t","r","i","n","g"]
Array.prototype.reverse() Returns the array from the split string with
its elements in reverse order. ["g","n","i","r","t","s"]
Array.prototype.join( deliminator
)
Joins the elements in the array together into
a string. The "" parameter means an empty
deliminator (i.e., the elements of the array
are put right next to each other).
*/
//#endregion

//#region Using spread operator
//version >=6
console.clear();
function reverseString(str){
    return[...String(str)].reverse().join('');
}
console.log(reverseString('stackoverflow'));


//#endregion

//#region Custom reverse() function
function reverse(string)
{
var strRev="";
for(var i=string.length-1;i>=0;i--)
{
    strRev+=string[i];
}
return strRev;
}

console.log(reverse("zebra"));

//#endregion 
//#region  Comparing Strings Lexicoraphically
console.clear();
var x="hello";
var y="world";

console.log(x.localeCompare(y));

// console.clear();

function strcmp(a,b)
{
    if(x===y){
        return 0;
    }
    if(a>b)
    {
        return 1;
    }
    return -1;
}
console.clear();
console.log(strcmp("asdsaddsa","asdasdasdsaasd"));

/*
This is especially useful when using a sorting function that 
compares based on the sign of the return value (such as
sort).
*/
console.clear();
var arr=["bananas","cranberries","apples"];
arr.sort(function(a,b){
return a.localeCompare(b);
});
console.log(arr);
//#endregion
//#region Access Character at index in string
console.clear();
/*
Use charAt() to get a character at the specified index
 in the string.
 */
var string="hello world";
console.log(string.charAt(4));//=>o

/*
*Alternatively, because strings can be treated like arrays,
 use the index via bracket notation.
*/
console.clear();
var string="hello World";
console.log(string[4]);

//To get the character code of the character at a specified 
//index, use charCodeAt().
console.clear();
var string = "Hello, World!";
console.log( string.charCodeAt(4) ); // 111

//#endregion

//#region Escaping quotes

/*
*if your string is enclosed (i.e.) in single quotes you need 
to escape the inner literal quote with backslash 
 */
console.clear();
var text='L\' albero means treee in italian';
console.log(text);
console.clear();

/**Same goes for double quotes: */
var text="I feel \"high\"";
console.log(text);
console.clear();

/*Special attention must be given to escaping quotes if you're storing HTML 
representations within a String, since
HTML strings make large use of quotations i.e. in attributes: */
var content="<p class=\"special\">Hello World!</p>";
var hello='<p class="special">I\'d like to say "Hi"</p>';
var hi = "<p class='special'>I'd like to say &quot;Hi&quot;</p>"; // valid String
var hello = '<p class="special">I&apos;d like to say "Hi"</p>';

var x=`"Escaping" and ' can become very annoying`;
console.log(x);
console.log(content);
console.log(hello);
console.log(content);
//#endregion

//#region Word Counter
console.clear();
// function wordCount(val){
//     var wom=val.match(/\S+/g);
//     return
//     {
//         characterNoSpcaes:val.replace(/\s+/g,'').length,
//         characters:val.length,
//         words:wom?wom.length:0,
//         lines:val.split(/\r*\n/).length
//     };
// }
// var value= wordCount(someMultiText).words;
// console.log(value);

//#endregion

//#region Splitting a string into an array

var s="one,two,three,four,five";
console.log(s.split(",").join("--"));
//#endregion

//#region strings are unicode
console.clear();

var s="some ∆≈ƒ unicode ¡™£¢¢¢";
console.log(s.charCodeAt(5));

//#endregion

//#region Detecting a string
var astring="my string";
var anInt=5;
var anobj={};
typeof astring==="string";
typeof anInt==="string";
typeof anobj==="string";
//#endregion

//#region  substrig with slice

var s="123123123123123qasdas12312";
console.log(s.slice(0,5));
console.log(s.slice(6,s.length));
console.clear();

//#endregion

//#region Character Code
var charcode="µ".charCodeAt();
console.log(charcode);
var charCode = "ABCDE".charCodeAt(3);
console.log(charcode);
var codePoint = "????".codePointAt();
console.log(charcode);
console.clear();
//#endregion

//#region  String Representations of Numbers
var b10=12;
var b16=b10.toString(16);
console.log(b16);

b16='c';
b10=parseInt(b16,16);
console.log(b10);
console.clear(); 
//#endregion

//#region String find and Replace Functions
console.clear();
/**
 *  indexOf() will return the index of the first occurrence of searchString in the string. 
    If searchString is not found,
    then -1 is returned
 */

var string="Hello ,world!";
console.log(string.indexOf("o"));
console.log(string.indexOf("foo"));

/*
Similarly, lastIndexOf() will return the index of the last occurrence of searchstring
 or -1 if not found.
*/
console.clear();
console.log(string.lastIndexOf("o"));
console.log(string.lastIndexOf("foo"));
/*
includes() will return a boolean that tells whether searchString exists in the string, 
starting from index start
(defaults to 0). This is better than indexOf() if you simply need to test for 
existence of a substring.
*/
console.clear();
console.log(string.includes("Hello"));
console.log(string.includes("foo"));

//#endregion
