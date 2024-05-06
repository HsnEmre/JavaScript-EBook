//#region   Dom started
document.getElementById("paragraph").textContent="Hello World";

/*This Wil select element that with the id paragraph and set its text content */

//#endregion


//#region   Create element

var element=document.createElement('p');
element.textContent="Hello world";
document.body.appendChild(element);
console.log(element)

//#endregion


//#region   Using Window alert
/*
The alert method displays a visual alert box on screen.
The alert method parameter is displayed to the user in
plain text:
*/


var message="window alert message";
window.alert(message);
//#endregion
//#region   short window alert message
/*
because window is the global object 
you can call also use the folloowing short hand
 */
alert(message);


//#endregion

//#region   Using window prompt
/**
 * an easy way to get an input from a user is by using the prompt method
 */

var age=prompt("a questions");
console.log(age);
//#endregion

//#region   Window Confirm
/*
this method displays a modal dialog with an optional message and
two buttons, ok and cancel 
*/
var message="are you sure want to delete this";
result=window.confirm(message);

//shorthand
var delconfirm=window.confirm("are you sure want to delete this ?");

//#endregion

//#region   DoomAPI
/*
html provides the canvas element for buildin raster-based images
first build a canvas for holding image pixel infor.

*/

var canvas=document.createElement('canvas');
canvas.width=500;
canvas.height=250;
//then select a contect for the canvas, in this case two-dimensional
var ctx=canvas.getContext('2d');
//then set properties relared to the text
ctx.font='30px Cursive';
ctx.fillText("astg",50,50);
document.body.appendChild(canvas);
//#endregion

//#region using SVG 
var svg=document.createElementNS('http://www.w3.org/2000/svg');
svg.width=500;
svg.height=60;


// var SVG =document.createElementNS('http://www.w3.org/2000/svg','text');


//#endregion