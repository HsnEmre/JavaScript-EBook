//#region Standart For loops

for(var i=0;i<100;i++){
    console.log(i);
}
console.clear();
//==>Multiple Declarations

var array=['a','b','c'];
for(var i=0;i<array.length;i++){
    console.log(array[i]);
}

//=> changing the increment
console.clear();
for (var i=0;i<100;i+=2){
    console.log(i);
}
console.clear();

//=> decremented loop

for(var i=100;i>=0;i--){
    console.log(i);

}
console.clear();

//#endregion

//#region For...Of Loop

const iterable=[0,1,2];
for (let i of iterable){
    console.log(i);
}
console.clear();

//=> Strings
const string="abc";
for(let chr of string){
    console.log(chr);
}

console.clear();
const names = ['bob', 'alejandro', 'zandra', 'anna', 'bob'];
const uniqueNames = new Set(names);
for (let name of uniqueNames) {
console.log(name);
}


console.clear();
//=> Maps

const map=new Map()
.set('abc',1)
.set('def',2)

for (const iteration of map){
    console.log(iteration)
}
console.clear();
const map2 = new Map()
.set('abc', 1)
.set('def', 2)
for (const [key, value] of map2) {
console.log(key + ' is mapped to ' + value)
}

console.clear();
//=> Objects

const someObject={name:"Mike"};
for(let key of Object.keys(someObject)){
    console.log(key+":"+someObject[key]);
}
console.clear();
//#endregion

//#region For...in loop

var object = {"a":"foo", "b":"bar", "c":"baz"};
// `a` is inaccessible
Object.defineProperty(object , 'a', {
enumerable: false,
});
for (var key in object) {
if (object.hasOwnProperty(key)) {
console.log('object.' + key + ', ' + object[key]);
}
}


console.clear();
//#endregion

//#region While Loops
//==> Strandart While Loop

var i=0;

while(i<100){
    console.log(i);
    i++;
}
console.clear();


//==> Decremented Loop

var i=100;
while(i>0){
    console.log(i);
    i--;
}
console.clear();

//==> Do While Loop

var i=101;
do{
    console.log(i);

}while(i<100);

console.clear();
//#endregion

//#region Continue

//==>Continuing a "for" Loop

for (var i = 0; i < 3; i++) {
if (i === 1) {
continue;
}
console.log(i);
}

console.clear();

//==> continuing a while Loop
var i = 0;
while (i < 3) {
if (i === 1) {
i = 2;

}
console.log(i);
i++;
}
//#endregion

//#region  Break specific nested loops

outerloop:
for(var i=0;i<3;i++){
    innerloop:
    for(var j=0;j<3;j++){
        console.log(i);
        console.log(j);
        if(j==1){
            break outerloop;
        }
    }
}

console.clear();
//#endregion

//#region Do..while Loop
console.clear();

// var availableName;

// do{
//     availableName=getRandomName();

// }while(isNameUser(name));

//#endregion

//#region  Break and continue labels

for (var i=0;i<5;i++){
    netLoop2Iteration:
    for(var j=0;j<5;j++){
        if(i==j)break netLoop2Iteration;
        console.log(i,j);
    }
}

//#endregion
