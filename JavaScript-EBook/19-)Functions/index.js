//#region Functions Scoping


function foo(){
    var a='hello';
    console.log(a);

}

foo();

function foo2() {
    var a = 'hello';
    function bar() {
    var b = 'world';
    console.log(a); // => 'hello'
    console.log(b); // => 'world'
    }
    console.log(a); // => 'hello'
    // console.log(b); // reference error
    }
foo2();
//#endregion

//#region Currying
console.clear();

var prism= function(l,w,h){
    return l*w*h;
}


function prism (l) 
{
    return function(w){
        return function(h){
            return l*w*h;
        }
    }
  }
  var prism = l => w => h => l * w * h;
var x=prism(2)(3)(4);
console.log(x);
console.clear();

//#endregion

//#region Immediately Invoked Function Expressions

(function(){
// alert("I've run - but can't be run again because I'm immediately invoked at runtime,leaving behind only the result I generate");
}());

(function(){
    // alert("this is IIFE toolbar.");
})();

(function(message) {
    // alert(message);
    }("Hello World!"));


    var example = (function() {
        return 42;
        }());
        console.log(example);


        (() => console.log("Hello!"))();

        console.clear();

//#endregion

//#region Named Functions

var namedSum=function sum(a,b){
    return a+b;
}
console.log(namedSum(3,4));

var anonSum=function(a,b){
    return a+b;

}

console.log(anonSum(1,3));


var sumTwoNumbers = function sum (a, b) {
    return a + b;
    }
    console.log(sumTwoNumbers(1, 3));

    foo();
    var foo = function () { // using an anonymous function
    console.log('bar');
    }
console.clear();
//#endregion

//#region Named Functions in a recursive scenario

var say=function(times){
    if(times>0){
        console.log('Hello!');
        say(times-1);
    }
}

var sayHelloTimes=say;
sayHelloTimes(100);
console.clear();

var say = function say (times) {
    if (times > 0) {
    console.log('Hello!');
    // this time, 'say' doesn't use the outer variable
    // it uses the named function
    say(times - 1);
    }
    }
    var sayHelloTimes = say;
    say = "oops";
    sayHelloTimes(2);


console.clear();    
//#endregion

//#region the name property functions

var foo = function () {}
console.log(foo.name);

var foo = function () {}
console.log(foo.name); // outputs 'foo'
function foo () {}
console.log(foo.name); // outputs 'foo'
var foo = function bar () {}
console.log(foo.name);

console.clear();

//#endregion

//#region Binding this and arguments

var monitor={
    threshold:5,
    check:function(value){
        if(value>this.threshold){
            this.display("value is too high!");
        }
    },
    display(message){
        // alert(message);
    }
};

monitor.check(7);
console.clear();
//==> Bind operator

// var log = console.log.bind(console); // long version
// const log = ::console.log; // short version
// foo.bar.call(foo); // long version
// foo::bar(); // short version
// foo.bar.call(foo, arg1, arg2, arg3); // long version
// foo::bar(arg1, arg2, arg3); // short version
// foo.bar.apply(foo, args); // long version
// foo::bar(...args); // short version
console.clear();
//#endregion


//#region Functions with an Unknown Number of Arguments (variadic functions)

function longSomeThings(){
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
longSomeThings('hello','wolrd');

console.clear();

function personLogsSomeThings(person,...msg) {
    msg.forEach(arg=>{
        console.log(person,'says',arg);
    });
}

personLogsSomeThings('jhon','hello','world');

console.clear();


//==> spread syntax

const logarguments=(...args)=>console.log(args);
const list=[1,2,3];

logarguments('a','b','c',...list);

// console.clear();

const logArguments=(...args)=> console.l(args)
function* generateNumbers(){
    yield 6
    yield 5
    yield 4
}

logarguments('a',...generateNumbers(),...'pqr','b');


console.clear();
//#endregion

//#region Anonymous Function

var nums=[0,1,2];

var doubledNums=nums.map(function(element){return element*2;});

console.log(doubledNums);

var hash=getHashFunction('sha1');
var hashValue=hash('Secret Value');
function getHashFunction(algorithm){
    if(algorithm==='sha1')return function(value){/*....*/};
    else if(algorithm==='md5') return function(value){/*...*/};
}

console.log(hash);
console.log(hashValue);
console.clear();
//===>> Self referential anonymous functions

var foo=function (callagain) {
    console.log('Whassup?');
    if(callagain===true) foo(false);
  };

  foo(true);
  var bar=foo;
  foo=function(){
    console.log('Bad')
  };
  bar(true);

  console.clear();

  var foo = function myself(callAgain){
    console.log( 'Whassup?' );
    // Less than ideal... we're dependent on a variable reference...
    if (callAgain === true) myself(false);
    };
    foo(true);
    // Console Output:
    // Whassup?
    // Whassup?
    // Assign bar to the original function, and assign foo to another function.
    var bar = foo;
    foo = function(){
    console.log('Bad.')
    };
    bar(true);
    // Console Output:
    // Whassup?
    // Whassup?
    
    // myself(false); // ReferenceError: myself is not defined



    var fib = false,
result = [1,2,3,4,5,6,7,8].map(
function fib(n){
return ( n <= 2 ) ? 1 : fib( n - 1 ) + fib( n - 2 );
});

console.clear();
//#endregion

//#region Default Parameters

function printMsg(msg){
    msg=typeof msg !=='undefined'?
    msg:
    'default value for msg.';
    console.log(msg);
}

printMsg();
printMsg(undefined);
printMsg('now my msg in different!');


console.clear();

let param_check=(p='str')=> console.log(p+'is of type:'+ typeof p);

param_check();
param_check(undefined);
param_check(1);
param_check(this);
console.clear();

//==> functions/Variables as default values and reusing parameters
function foo(callback=function(){console.log('default');}){
    callback();
}
foo(function(){
    console.log('custom');
});
foo();

console.clear();
let zero = 0;
function multiply(x) { return x * 2;}
function add(a = 1 + zero, b = a, c = b + a, d = multiply(c)) {
console.log((a + b + c), d);
}


add(1); // 4, 4
add(3); // 12, 12
add(2, 7); // 18, 18
add(1, 2, 5); // 8, 10
add(1, 2, 5, 10);

//==> Reusing the function's return value in a new invocation's default value

// let array = [1]; // meaningless: this will be overshadowed in the function's scope
// function add(value, array = []) {
// array.push(value);
// return array;
// }
// add(5); // [5]
// add(6); // [6], not [5, 6]
// add(6, add(5)); // [5, 6]


//#endregion

//#region Call and apply
console.clear();
let obj={
    a:1,
    b:2,
    set:function(a,b){
        this.a=a;
        this.b=b;
    }
};

console.log(obj.set(3,7));
obj.set.call(obj,3,7);
obj.set.apply(obj,[3,7]);
console.log(obj);

console.clear();

//#endregion

//#region Partial application

function multiplyThenAdd(a,b,c){
    return a+b+c;
}

function reservedMultiplyThenAdd(c,b,a){
    return a+b+c;
}

function factory (b,c) 
{
    return reservedMultiplyThenAdd.bind(nums,c,b);
}

var multiplytwothenaddten=factory(2,10);

console.log(2,10);
console.clear();
//#endregion

//#region Passing Arguments by Reference or value

var obj1 = {a: 2};
function myfunc(arg){
arg = {a: 5}; // Note the assignment is to the parameter variable itself
}
myfunc(obj1);
console.log(obj1.a)


var obj2= {a: 2};
function myfunc(arg){
arg.a = 5; // assignment to a property of the argument
}
myfunc(obj2);
console.log(obj2.a);

var s = 'say';
function myfunc(arg){
arg += ' hello'; // assignment to the parameter variable itself
}
myfunc(s);
console.log(s)
console.clear();
//#endregion

//#region Functions Arguments

function addition(argument1,argument2){
    return argument1+argument2;

}

console.log(addition(2,3));

//==>object arguments
/*The arguments object contains all the function's parameters that contain a non-default value. It can also be used
even if the parameters are not explicitly declared: */
/* Argümanlar nesnesi, işlevin varsayılan olmayan bir değer içeren tüm parametrelerini içerir. Ayrıca kullanılabilir
parametreler açıkça bildirilmemiş olsa bile:*/

// (function() { console.log(arguments) })(0,'str', [2,{3}])



//==> Rest Parameters
/**
 In ES6, the ... syntax when used in the declaration of a function's parameters transforms the variable to its right
into a single object containing all the remaining parameters provided after the declared ones. This allows the
function to be invoked with an unlimited number of arguments, which will become part of this variable: 

ES6'da, bir işlevin parametrelerinin bildiriminde kullanıldığında ... sözdizimi, değişkeni sağına dönüştürür
bildirilenlerden sonra sağlanan tüm parametreleri içeren tek bir nesneye dönüştürür. Bu şunları sağlar:
Bu değişkenin bir parçası olacak sınırsız sayıda argümanla çağrılacak işlev:
 */

(function(a, ...b){console.log(typeof b+': '+b[0]+b[1]+b[2]) })(0,1,'2',[3],{i:4});


//==> spread parameters 

/*
In ES6, the ... syntax can also be used when invoking a function by placing an object/variable to its right. This
allows that object's elements to be passed into that function as a single object:

ES6'da ... sözdizimi, bir nesneyi/değişkeni sağına yerleştirerek bir işlevi çağırırken de kullanılabilir. Bu
o nesnenin elemanlarının o fonksiyona tek bir nesne olarak aktarılmasına izin verir:
*/
// let nums = [2,42,-1];
// console.log(...['a','b','c'], Math.max(...nums));

console.clear();

//#endregion

//#region Function Composition

/*
Function Composition
Composing multiple functions into one is a functional programming common practice;
composition makes a pipeline through which our data will transit and get modified simply working on the
 functioncomposition (just like snapping pieces of a track together)...
you start out with some single responsibility functions:
*/

/*
Fonksiyon Bileşimi
Birden çok işlevi tek bir işlevde birleştirmek, işlevsel programlamanın yaygın bir uygulamasıdır;
kompozisyon, verilerimizin aktarılacağı ve basitçe fonksiyon kompozisyonu üzerinde çalışarak değiştirileceği
 bir boru hattı oluşturur (tıpkı bir parçanın parçalarını bir araya getirmek gibi) ...
bazı tek sorumluluk fonksiyonlarıyla başlarsınız:
*/


// const capitalize=x=>x.replace(/^\w/,m=>m.toUpperCase());
// const sign=x=>x+',\nmade with love';
// const formatText= compose(capitalize,sign);
// formatText('this is an example');


//#endregion









