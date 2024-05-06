//#region JSON versus Javascript literals
/*

JSON stands for "JavaScript Object Notation", but it's not JavaScript. Think of it as just a data serialization format that
happens to be directly usable as a JavaScript literal. However, it is not advisable to directly run (i.e. through eval())
JSON that is fetched from an external source. Functionally, JSON isn't very different from XML or YAML – some
confusion can be avoided if JSON is just imagined as some serialization format that looks very much like JavaScript.
Even though the name implies just objects, and even though the majority of use cases through some kind of API
always happen to be objects and arrays, JSON is not for just objects or arrays. The following primitive types are
supported:
String (e.g. "Hello World!")
Number (e.g. 42)
Boolean (e.g. true)
The value null
undefined is not supported in the sense that an undefined property will be omitted from JSON upon serialization.
Therefore, there is no way to deserialize JSON and end up with a property whose value is undefined.
The string "42" is valid JSON. JSON doesn't always have to have an outer envelope of "{...}" or "[...]".
While some JSON is also valid JavaScript and some JavaScript is also valid JSON, there are some subtle differences
between both languages and neither language is a subset of the other.
*/




//#endregion


//#region Parsing with a reviver function

var jsonString='[{"name":"John","score":51},{"name":"Jack","score":17}]';

var data = JSON.parse(jsonString, function reviver(key, value) {
    return key === 'name' ? value.toUpperCase() : value;
});

// const jsonString = '[{"name":"John","score":51},{"name":"Jack","score":17}]';
const data2= JSON.parse(jsonString, (key, value) =>
key === 'name' ? value.toUpperCase() : value
);

console.clear();
//#endregion


//#region Serializing a value
/* Boolean */ JSON.stringify(true) // 'true'
/* Number */ JSON.stringify(12) // '12'
/* String */ JSON.stringify('foo') // '"foo"'
/* Object */ JSON.stringify({}) // '{}'
JSON.stringify({foo: 'baz'}) // '{"foo": "baz"}'
/* Array */ JSON.stringify([1, true, 'foo']) // '[1, true, "foo"]'
/* Date */ JSON.stringify(new Date()) // '"2016-08-06T17:25:23.588Z"'
/* Symbol */ JSON.stringify({x:Symbol()}) // '{}'


/*
replacer A function that alters the behaviour of the stringification process or an array of
 String and Number
objects that serve as a whitelist for filtering the properties of the value object to be 
included in the JSON
string. If this value is null or is not provided, all properties of the object are included 
in the resulting JSON
string.
*/

function replacer(key,value){
    if(typeof value==="string"){
        return
    }
    return value
}


var foo={ foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 };
JSON.stringify(foo,replacer);
JSON.stringify(foo,['foundation','week','month'])
JSON.stringify({x: 1, y: 1}, null, 2)


//#endregion


//#region  Serializing and restoring class instances

// class Car {
//     constructor(color, speed) {
//     this.color = color;
//     this.speed = speed;
//     this.id_ = Math.random();
//     }
//     toJSON() {
//     return {
//     $type: 'com.example.Car',
//     color: this.color,
//     speed: this.speed
//     };
//     }
//     static fromJSON(data) {
//     return new Car(data.color, data.speed);
//     }
//     }
//     var userJson = JSON.stringify({
//     name: "John",
//     car: new Car('red', 'fast')
// });

// function Car(color, speed) {
//     this.color = color;
//     this.speed = speed;
// }

// Car.prototype.toJSON = function() {
//     return {
//     $type: 'com.example.Car',
//     color: this.color,    
//     speed: this.speed
//     };
// };

// Car.fromJSON = function(data) {
//     return new Car(data.color, data.speed);
// };


// {"name":"John","car":{"$type":"com.example.Car","color":"red","speed":"fast"}}
// var userObject = JSON.parse(userJson, function reviver(key, value) {
// return (value && value.$type === 'com.example.Car') ? Car.fromJSON(value) : value;
// });
//#endregion

//#region Serializing with a replacer function
const userRecords = [
    {name: "Joe", points: 14.9, level: 31.5},
    {name: "Jane", points: 35.5, level: 74.4},
    {name: "Jacob", points: 18.5, level: 41.2},
    {name: "Jessie", points: 15.1, level: 28.1},
];

const anonymousReport=JSON.stringify(userRecords,(key,value)=>
key==='name'
? undefined
:(typeof value=== 'number'?Math.floor(value):value)
);

console.log(anonymousReport);
console.clear();
//#endregion

//#region Cyclic object values

const world = {
    name: 'World',
    regions: []
    };
    world.regions.push({
    name: 'North America',
    parent: 'America'
    });
    console.log(JSON.stringify(world));
    // {"name":"World","regions":[{"name":"North America","parent":"America"}]}
    world.regions.push({
    name: 'Asia',
    parent: world
 });
    console.log(JSON.stringify(world));
    // Uncaught TypeError: Converting circular

//#endregion


