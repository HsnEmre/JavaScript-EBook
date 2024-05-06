//#region   Shallow cloning
const existing={a:1,b:2,c:3};
// const clone=Object.assign({}, existing);
 const{...clone}=existing;
console.log(clone);
//#endregion

//#region   Object.freeze

console.clear();

var obj = {
    foos: 'foo',
    bar: [1, 2, 3],
    baz: {
    fo: 'nested-foo'
    }
};
console.log(Object.freeze(obj));
obj.newProperty = true;
obj.foos='not foo';

//#endregion

//#region Object Cloning
console.clear();
var existingg={a:1,b:{c:2}};
var copy=JSON.parse(JSON.stringify(existingg));
console.log(existingg.b.c=3);

console.clear();



function deepClone(obj){
    function clone(obj,traversedObjects){
        var copy;
        if(obj===null|| traversedObjects !=="object"){
            return obj;
        }

        for(var i=0;i<traversedObjects.length;i++){
            if(traversedObjects[i]===obj){
                throw new Error("Cannot clone circular object");
            }
        }

        if(obj instanceof Array){
            copy=new Date();
            copy.setTime(obj.getTime());
        }

        if(obj instanceof Array){
            copy=[];
            for(i=0;i< obj.length;i++)
            {
                copy.push(clone(obj[i],traversedObjects.concat(obj)));
            }
            return copy;
        }

        if(obj instanceof Object){
            copy={};
            for(var key in obj){
                if(obj.hasOwnProperty(key)){
                    copy[key]=clone(obj[key],traversedObjects.concat(obj));
                }
            }
            return copy;
        }
        throw new Error("Not a clonable object");
    }
    return clone(obj,[]);
}

console.log(deepClone(obj));

console.clear();
//#endregion

//#region Object properties iterarion


var obj={0:'a',1:'b',2:'c'};
Object.keys(obj).map(function(key){
    
        console.log(key);
    
});

//#endregion

//#region   object Assign
console.clear();
var user={
    firstName:"John"
};

Object.assign(user,{LastName:"Doe",age:39});
console.log(user);
console.clear();

var obj=Object.assign({},user);
console.log(obj);
console.clear();
//#endregion

//#region Object/spread
let obj1={a:1};
let obj2={...obj1,b:2,c:3};
console.log(obj2)
//#endregion

//#region defineProperty
 console.clear();
 var obj={};

 Object.defineProperty(obj,'foo',{value:'foo'});
 console.log(obj.foo);

Object.defineProperty(obj,'propName',{
    value:'propValue',
    writable:true,
    configurable:true,
    enumerable:true
});

var obj = {};
Object.defineProperties(obj, {
property1: {
value: true,
writable: true
},
property2: {
value: 'Hello',
writable: false
}
})
console.log(obj)

//#endregion

//#region  Properties
console.clear();
var person={name:'jhon',surname:'Doe'};

Object.defineProperty(person,'fullname',{
    get:function(){
        return this.name+" "+this.surname;
    },
    set:function(value){
        [this.name,this.surname]=value.split(" ");
    }
});

console.log(person);
console.log(person.fullname);

//#endregion


//#region  Dynamic/Variable property names
console.clear();

var dictionary = {
    lettuce: 'a veggie',
    banana: 'a fruit',
    tomato: 'it depends on who you ask',
    apple: 'a fruit',
    Apple: 'Steve Jobs rocks!' // properties are case-sensitive
    }
    var word = prompt('What word would you like to look up today?')
    var definition = dictionary[word]
    alert(word + '\n\n' + definition)



    console.log(dictionary.word) // doesn't work because word is taken literally and dictionary has no
// field named `word`
console.log(dictionary.apple) // it works! because apple is taken literally
console.log(dictionary[word]) // it works! because word is a variable, and the user perfectly typed
// in one of the words from our dictionary when prompted
// console.log(dictionary[apple])=> Error

console.clear();
//#endregion


//#region Arrays are objects

var anObject={
    foo:'bar',
    length:'interesting',
    '0':'zero!',
    '1':'one!'
};

var anArray=['zero.','one.'];

console.log(anArray[0],anObject[0]);
console.clear();

//#endregion

//#region object Seal

var obj={foo:'foo',bar:function() {return 'bar';}};
Object.seal(obj);
obj.newFoo='newFoo';
obj.bar=function(){return 'foo'};

console.log(obj.bar());

// Object.defineProperty(obj,'foo'{
//     get:function(){return 'newFoo';}
// });=>type error



//#endregion

//#region Convert object's values to Array
console.clear();
var obj={
    a:"hello",
    b:"this is",
    c:"Javascript",
};

var array=Object.keys(obj)
.map(function(key){
    return obj[key];
});

console.log(array);

//#endregion

//#region retrieving properties fom an object
console.clear();


//simple Data
var x={a:10,b:3},props=[];

for(prop in x){
    props.push(prop);
}
console.log(prop);


//Data with enumerable properties in prototypr chain 
console.clear();
var x={a:10,__proto__:{b:10}},props=[];

for(prop in x){
    props.push(prop);
}
console.log(props);

//Ex 3 : Data with non enumerable properties
var x = { a : 10 } , props = [];
Object.defineProperty(x, "b", {value : 5, enumerable : false});
for(prop in x){
props.push(prop);
}
console.log(props); //["a"]

console.clear();

var x={a:10,b:3},props;
props=Object.keys(x);

console.log(props);
  console.clear();
  
  var x = { a : 10 , b : 3} , props;
  props = Object.getOwnPropertyNames(x);
  console.log(props);


  console.clear();
  function getAllProperties(obj, props = []){
    return obj == null ? props :
    getAllProperties(Object.getPrototypeOf(obj),
    props.concat(Object.getOwnPropertyNames(obj)));
    }
    var x = {a:10, __proto__ : { b : 5, c : 15 }};
    //adding a non enumerable property to first level prototype
    Object.defineProperty(x.__proto__, "d", {value : 20, enumerable : false});
    console.log(getAllProperties(x)); ["a", "b", "c", "d", "...other default core props..."]

//#endregion


//#region Read-Only property
console.clear();
var a={};

Object.defineProperty(a,'foo',{value:'original',writable:false});
a.foo='new';
console.log(a.foo);
console.clear();
//#endregion

//#region Non enumerable property

var obj={};
Object.defineProperty(obj,"foo",{value:'show',enumerable:true});
Object.defineProperty(obj,"bar",{value:'hide',enumerable:false});

for(var prop in obj){
    console.log(obj[prop]);
}
console.clear();

//#endregion


//#region Lock property description

var obj = {};
// Define 'foo' as read only and lock it
Object.defineProperty(obj, "foo", {
value: "original value",
writable: false,
configurable: false
});
Object.defineProperty(obj, "foo", {writable: true});

obj.foo="new value";
// console.log(obj.foo);


//#endregion



