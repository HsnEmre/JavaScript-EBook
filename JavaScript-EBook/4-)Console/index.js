//#region   ASSERT

/*
The console.assert() static method writes an error message
 to the console if the assertion is false. If the assertion
  is true, nothing happens.
*/

const errorMsg="the # is not even";
for(let number=2;number<=5;number++)
{
    console.log(`the 3 is ${number}`);
    console.assert(number%2===0,"%0",{number,errorMsg});
}

//#endregion

//#region   CLEAR
console.clear();
/*
Clear the console
*/

//#endregion


//#region   COUNT#
/*
The console.count() static method logs the number
 of times that this particular call to count() has
  been called
*/

let user="";
function greet()
{
    console.count();
    return `hi ${user}`
}

user="bob";
greet();
user="alice";
greet();
greet();
console.count();
 console.clear();


 let user2="";
 function greet2(){
    console.count(user2);
    return`hi ${user}`;
 }

 user2="bob";
 greet2();
 user="alice";
 greet2();
 greet2();
 console.count("alice");

//#endregion

//#region   DIR
/*
he console.dir() static method displays an interactive
 list of the properties of the specified JavaScript object. 
 The output is presented as a hierarchical listing with 
 disclosure triangles that let you see the contents of
  child objects.

In other words, console.dir() is the way to see all
 the properties of a specified JavaScript object in
  console by which the developer can easily get the
   properties of the object.
*/

//#endregion GROUP
/*
The console.group() static method creates a new inline 
group in the Web console log, causing any subsequent console
 messages to be indented by an additional level, until console.
 groupEnd() is called.
*/

console.clear();
console.log("this is the outer level");
console.group();

console.log("level2");
console.group();

console.log("level3")
console.group();


//#region   GROUPCOLLAPSED
console.clear();
console.log("dummy text");
console.groupCollapsed();
console.log("dummy text2");
console.groupCollapsed();
//#endregion

//#region   GROUPEND
console.clear();
console.log("dummy text");
console.groupEnd();
console.log("dummy text2");
console.log("dummy text2");
console.log("dummy text2");
console.groupEnd();
console.log("dummy text");
console.groupEnd();

//#endregion

//#region   INFO
console.clear();
obj1:{
x="asd",
y="asdasd",
z=12312
};
var msg="console message";

console.info(obj1);
// info(obj1, /* …, */ objN)
console.info(msg);
// info(msg, subst1, /* …, */ substN)

//#endregion

