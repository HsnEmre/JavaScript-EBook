//#region   Ternary Operations

var animal='kitty';
var result=(animal==='kitty')?'cute':'still nice';
console.log(result);

var animal ='lkitty';
var result='';

if(animal==='cute'){
    result='cute';
}
else{
    result='still nice'
}
console.log(result);


var a=0;
var str='not a';
var b='';
b=a===0?(a=1,str+=' test'):(a=2);
console.log(b);

var a=1;
a===1? alert('hey, it is1!'):0
console.log(a);


a===1 ? alert('Het it is 1!'):alert('weird, what could it be?');
if(a===1)  alert('Hey ,it is 1!') 
else alert('weid ,what could it be?');


// var animal ='kitty';
// for(var i=0;i<5;++i){
//     (animal==='kitty')?break: console.log(i);
// }
//#endregion


//#region Switch statement

console.clear();

var value=1;

switch(value){
    case 1:
        console.log('I will always run');
        break;
        case 2:
            console.log('I will never run');
            break;
}


switch (value) {
    case 1:
    console.log('I will only run if value === 1');
    // Here, the code "falls through" and will run the code under case 2
    case 2:
    console.log('I will run if value === 1 or value === 2');
    break;
    case 3:
    console.log('I will only run if value === 3');
    break;
}

//#region Example
function jhon(){
    return 'jhon';
}
function jacob(){
    return 'jacob';
}

var name="jacob";

switch(name){
case jhon():
    console.log('I will run if name === jhon');
    break;
    case 'ja'+'ne':
        console.log('I nwill run if name==="Jane"');break;
        case jhon()+ '' + jacob()+' jingleheimer schmidt':
            console.log('His name is equal to name too!');
            break;
}

console.clear();

var x="c";
switch (x){
    case "a":
    case "b":
    case "c":
        console.log("Either a,b or c was selected.");
        break;

        case "d":
            console.log("Only d was selected.");
            break;
            default:
                console.log("No case was matched");break;
}

//#endregion



//#endregion


//#region  if/else if / else control

var i=0;
if(i<1)
{
    console.log("i is smaller than 1");
}

if(i<1)
{console.log("i is smaller than 1");}
else{
    console.log("i was nt smaller than 1");
}



//#endregion


//#region Strategy
console.clear();
const AnimalSays=
{
    dog(){
        return 'woof';
    },
    cat(){
        return 'meow';
    },
    lion(){
        return 'roar'
    },
    default(){
        return 'moo';
    }
};

function makeAnimalSpeak(animal)
{
    const speak=AnimalSays[animal]|| AnimalSays.default;
    console.log(animal+'says'+speak());
}

makeAnimalSpeak('dog');
//#endregion


//#region   using || and %% short circuiting
console.clear();
var x=10;
x==10 && alert("x is 10");
x== 10 || alert("x is not ten");

//#endregion








