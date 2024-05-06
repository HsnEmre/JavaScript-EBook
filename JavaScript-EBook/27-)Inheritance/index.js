//#region Standard function prototype

function Foo(){}

Foo.prototype.bar=function(){
    return 'I am bar';
};

var foo=new Foo();
console.log(foo.bar());

//#endregion

//#region Difference between object.key and object.prototype.key
console.clear();
function Foo(){};
foo.style='Bold';
var foo=new Foo();

console.log(Foo.style);
console.log(Foo.style);

Foo.prototype.style='italic';
console.log(Foo.style);
console.log(foo.style);

//#endregion

//#region portotypal inharitance

var prototype = { foo: 'foo', bar: function () { return this.foo; } };


var obj = Object.create(prototype);

console.log(obj.foo);
console.log(obj.bar());
//#endregion

//#region Pseudo Classical inharitance
console.clear();
function Foo(id,name){
    this.id=id;
    this.name=name;
}

var foo=new Foo(1,'foo');
console.log(foo.id);

Foo.prototype.bar='bar';
console.log(foo.bar);
console.clear();
//#endregion


//#region Setting an object's prototype

const anyObj={
    hello(){
        console.log(`this.foo is ${this.foo}`);
    },
};

let objWithProto=Object.create(anyObj);
objWithProto.foo='bar';
objWithProto.hello();

let objInheritanceObject={};
let objInheritingNull=Object.create(null);

'toString' in objInheritanceObject;
'toString' in objInheritingNull;

let obj=Object.create({foo:'foo'});
obj=Object.setPrototypeOf(obj,{bar:'bar'});

obj.foo;
obj.bar;

 var proto={fizz:'buzz'};

 function ConstructMyObj (param) {  }
 ConstructMyObj.prototype=proto;
 var objWithProto=new ConstructMyObj();
 objWithProto.fizz;

//#endregion



























