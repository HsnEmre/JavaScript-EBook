//#region   Constructor
class myClass{
    constructor(option){
        console.log(`Creating instance using ${option} option.`);
        this.option=option;
    }
}

const foo=new myClass('spedy');
console.clear();
//#endregion


//#region Inharitance

class SuperClass {
    constructor() {
    this.logger = console.log;
    }
    log() {
    this.logger(`Hello ${this.name}`);
    }
    }
    class SubClass extends SuperClass {
    constructor() {
    super();
    this.name = 'subclass';
    }
    }
    const subClass = new SubClass();
    subClass.log();

console.clear();


class Myclass{
    static myStaticMethod(){
        return `hello`;
    }

    static get myStaticProperty(){
        return `Goodbye`;
    }
}


console.log(Myclass.myStaticMethod());
console.log(Myclass.myStaticProperty);

const myClassInstance=new Myclass();
console.log(myClassInstance.myStaticProperty);

console.clear();

//#endregion


//#region Getter And Setter

class Myclass1{
    constructor(){
        this.names_=[];

    }

    set name(value){
        this.names_.push(value);
    }

    get name(){
        return this.names_[this.names_.length-1];
    }
}

const myClassInstance1=new Myclass1();
myClassInstance.name=`joe`;
myClassInstance.name=`bob`;

console.log(myClassInstance1.name);
console.log(myClassInstance1.names_)



const classInstance = new class {
    set prop(value) {
    console.log('setting', value);
    }
    };

    classInstance.prop = 10; // logs: "setting", 10
console.log(classInstance.prop); // logs: undefined


// const classInstance = new class {
//     get prop() {
//     return 5;
//     }
//     };
//     classInstance.prop = 10;
//     console.log(classInstance.prop);

console.clear();
//#endregion

//#region Private Members

class Queue{
    constructor(){
        const list=[];

        this.enqueue=function(type){
            list.push(type);
            return type;
        };

        this.dequeue=function () { 
            return list.shift();
         };
    }
}

var q=new Queue();

q.enqueue(9); // ... first in ...
q.enqueue(8); //
q.enqueue(7); //
//
console.log(q.dequeue()); // 9 ... first out.
console.log(q.dequeue()); // 8
console.log(q.dequeue()); // 7
console.log(q); // {}
console.log(Object.keys(q));


console.clear();


//#endregion


//#region Methods
class Something {
    constructor(data) {
    this.data = data
    }
    doSomething(text) {
    return {
    data: this.data,
    text
    }
    }
    }
    var s = new Something({})
    console.log(s.doSomething("hi"));
console.clear();

//#endregion


//#region  Dynamic method Names

let METADATA = Symbol('metadata');
class Car {
constructor(make, model) {
this.make = make;
this.model = model;
}

[METADATA]() {
return {
make: this.make,
model: this.model
};
}

["add"](a, b) {
return a + b;
}

[1 + 2]() {
return "three";
}
}
let MazdaMPV = new Car("Mazda", "MPV");
console.log(MazdaMPV);
MazdaMPV.add(4, 5); // 9
MazdaMPV[3](); // "three"
MazdaMPV[METADATA]();
console.clear();
//#endregion

//#region Managing Private Data with Classes

// const topSecret=symbol('topSecret');

// export class SecretAgent{
//     constructor(secret){
//     this[topSecret] = secret; // we have access to the symbol key (closure)
//     this.coverStory = 'just a simple gardner';
//     this.doMission = () => {
//     figureWhatToDo(topSecret[topSecret]); // we have access to topSecret
//     };
//     }
// }

// import{SecretAgent} from 'SecretAgent.js';
// const agent=new SecretAgent('steal all the ice cream');

// Object.keys(agent);
// agent[symbol('topSecret')];


// const secretKeys=Object.getOwnPropertySymbols(agent);
// agent[secretKeys[0]];

// const topSecret = new WeakMap(); // will hold all private data of all instances.
// export class SecretAgent{
// constructor(secret){
// topSecret.set(this,secret); // we use this, as the key, to set it on our instance private
// data
// this.coverStory = 'just a simple gardner';
// this.doMission = () => {
// figureWhatToDo(topSecret.get(this)); // we have access to topSecret
// };
// }
// }

//#endregion

//#region Class Name Binding

// class A{
//     foo(){
//         a=null;
//     }
// }
// a=null;

// function A(){
//     a=null;
// }
// A.prototype.foo=function foo(){
//     a=null;
// }
// a=null;

//#endregion











