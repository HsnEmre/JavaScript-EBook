//#region Using Local Storage


// The localStorage object provides persistent (but not permanent - see limits below) 
//key-value storage of strings. Any
// changes are immediately visible in all other windows/frames from the same origin
 //The stored values persistent
// indefinitely unless the user clears saved data or configures an expiration limit.
 //localStorage uses a map-like
// interface for getting and setting values.

localStorage.setItem('name',"Jhon Smith");
console.log(localStorage.getItem('name'));


localStorage.removeItem('name');
console.log(localStorage.getItem('name'));


var players = [{name: "Tyler", score: 22}, {name: "Ryan", score: 41}];

localStorage.setItem('players',JSON.stringify(players));

console.log(JSON.parse(localStorage.getItem('players')));
console.clear();
//#endregion

//#region Simpler way of handling storage
localStorage.greet="Hi";
// Same as: window.localStorage.setItem("greet", "Hi!");
localStorage.greet;
// Same as: window.localStorage.getItem("greet");
delete localStorage.greet;
// Same as: window.localStorage.removeItem("greet");
localStorage.clear();

//#endregion

//#region Example
localStorage.hello="hello";
localStorage.year="2024";

var user={name:"jhon",surname:"Doe",books:["q","z"]};
localStorage.user=JSON.stringify(user);

console.log(typeof localStorage.year);//string

var someYeare=localStorage.year;
var userData=JSON.parse(localStorage.user);
var userName=userData.name;

delete localStorage.year;
localStorage.clear();

//#endregion

//#region Storage Events
/**
 Whenever a value in set in localStorage, a storage event will be dispatched on all other windows
  from the same
origin. This can be used to synchronize state between different pages without reloading or
 communicating with a
server. For example, we can reflect the value of an input element as paragraph text in another 
window:
 */

var input=document.clearElement('input');
document.body.appendChild(input);

input.value=localStorage.getItem('user-value');

input.oninput=function(event){
    localStorage.setItem('user-value',input.value);
};

var output=document.createElement('p');
document.body.appendChild(output);

output.textContent=localStorage.getItem('user-value');
window.addEventListener('storage',function(event){
    if(event.key==='user-value'){
        output.textContent==event.newValue;
    }
})

//#endregion

//#region sessionStorage
console.clear();
/*
The sessionStorage object implements the same Storage interface as localStorage. However,
 instead of being
shared with all pages from the same origin, sessionStorage data is stored separately for every
 window/tab. Stored
data persists between pages in that window/tab for as long as it's open, but is visible nowhere
 else.

*/

var audio=document.querySelector('audio');

audio.volume=Number(sessionStorage.getItem('volume')||1.0);
audio.onvolumechange=function(event){
    sessionStorage.setItem('volume',audio.volume);
}
sessionStorage.setItem('key',value);
var data=sessionStorage.getItem('key');
sessionStorage.removeItem('key');

console.clear();
//#endregion

//#region localStorage length

localStorage.setItem('StackOverflow','Documentation');
localStorage.setItem('font','Helvetica');
localStorage.setItem('image','sptrite.svg');

console.log(localStorage.length);
console.clear();
//#endregion

//#region Error Conditions
/*
Most browsers, when configured to block cookies, will also block localStorage. Attempts
 to use it will result in an
exception. Do not forget to manage these cases.
*/
var video=document.querySelector('video');

try{
    video.volume=localStorage.getItem('volume');
}
catch(error) {
    alert('If you\'d your volume saved, turn on cookies');
}
video.play();

//#endregion












