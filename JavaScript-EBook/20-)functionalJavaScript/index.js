//#region  Higher-Order Functions
/*
In general, functions that operate on other functions, either by taking them as arguments or by returning them (or
both), are called higher-order functions.
A higher-order function is a function that can take another function as an argument. You are using higher-order
functions when passing callbacks.
*/

/*
Genel olarak, diğer işlevler üzerinde, bunları argüman olarak alarak veya döndürerek (veya
her ikisi de) yüksek dereceli fonksiyonlar olarak adlandırılır.
Daha yüksek dereceli bir fonksiyon, başka bir fonksiyonu argüman olarak alabilen bir fonksiyondur. Daha yüksek dereceli kullanıyorsunuz
geri aramaları iletirken işlevler.
*/
function iAmCallbackFunction(){
    console.log("callback has been invoked");
}

function iAmJustFunctiom(callbackFn){
    callbackFn();
}

iAmJustFunctiom(iAmCallbackFunction);

function iAmJustFunction() {
    // do some stuff ...
    // return a function.
    return function iAmReturnedFunction() {
    console.log("returned function has been invoked");
    }
    }
    // invoke your higher-order function and its returned function.
    iAmJustFunction()();
console.clear();
//#endregion

//#region Identity Monad

/**
 Identity Monad
This is an example of an implementation of the identity monad in JavaScript, and could serve as a starting point to
create other monads.
Based on the conference by Douglas Crockford on monads and gonads
Using this approach reusing your functions will be easier because of the flexibility this monad provides, and
composition nightmares:


Kimlik Monad'ı
Bu, JavaScript'teki kimlik monadının uygulanmasına bir örnektir ve bir başlangıç ​​noktası olarak hizmet edebilir.
başka monadlar yaratın.
Douglas Crockford'un monadlar ve gonadlar üzerine konferansına dayanmaktadır.
Bu monadın sağladığı esneklik nedeniyle işlevlerinizi yeniden kullanmak bu yaklaşımı kullanmak daha kolay olacaktır ve
kompozisyon kabusları:
 
 */

// identityMonad(value)
// .bind(k)
// .bind(j, j1, j2)
// .bind(i, i2)
// .bind(h, h1, h2)
// .bind(g, g1, g2)
// .bind(f, f1, f2);
// function identityMonad(value) {
// var monad = Object.create(null);
// // func should return a monad
// monad.bind = function (func, ...args) {
// return func(value, ...args);
// };
// // whatever func does, we get our monad back
// monad.call = function (func, ...args) {
// func(value, ...args);
// return identityMonad(value);
// };
// // func doesn't have to know anything about monads
// monad.apply = function (func, ...args) {
// return identityMonad(func(value, ...args));
// };
// // Get the value wrapped in this monad
// monad.value = function () {
// return value;
// };
// return monad;
// };

// var value = 'foo',
// f = x => x + ' changed',
// g = x => x + ' again';
// identityMonad(value)
// .apply(f)
// .apply(g)
// .bind(alert); // Alerts 'foo changed again'

// var value = { foo: 'foo' },
// f = x => identityMonad(Object.assign(x, { foo: 'bar' })),
// g = x => Object.assign(x, { bar: 'foo' }),
// h = x => console.log('foo: ' + x.foo + ', bar: ' + x.bar);
// identityMonad(value)
// .bind(f)
// .apply(g)
// .bind(h); // Logs 'foo: bar, bar: foo'

// var add = (x, ...args) => x + args.reduce((r, n) => r + n, 0),
// multiply = (x, ...args) => x * args.reduce((r, n) => r * n, 1),
// divideMonad = (x, ...args) => identityMonad(x / multiply(...args)),
// log = x => console.log(x),
// substract = (x, ...args) => x - add(...args);
// identityMonad(100)
// .apply(add, 10, 29, 13)
// .apply(multiply, 2)
// .bind(divideMonad, 2)
// .apply(substract, 67, 34)
// .apply(multiply, 1239)
// .bind(divideMonad, 20, 54, 2)
// .apply(Math.round)
// .call(log); // Logs 29
//#endregion

//#region Pure Functions

let obj={a:0}

const impure=(input)=>{
    input.a=input.a+1;
    return input.a;
}

let b=impure(obj)
console.log(obj)
console.log(b)

console.clear();

//#endregion

//#region Accepting Functions as Arguments

function transform(fn,arr){
    let result=[];
    for(let el of arr){
        result.push(fn(el));
    }
    return result;
}
console.log(transform(x=>x*2,[1,2,3,4,5]));
console.log([1,2,3,4,5].map(x=>x*2));

//#endregion




















