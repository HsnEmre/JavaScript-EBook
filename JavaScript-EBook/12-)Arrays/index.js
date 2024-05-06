//#region   What are Array-like objects
var realArray=['a','b','c'];
var arrayLike={
    0:'a',
    1:'b',
    2:'c',
    length:3
};

console.log(realArray);
console.log(arrayLike);

//#endregion


//#region exmp
// var parent = document.getElementById('myDropdown');
// var desiredOption = parent.querySelector('option[value="desired"]');
// var domList = parent.children;
// domList.indexOf(desiredOption); // Error! indexOf is not defined.
// domList.forEach(function() {
// arguments.map(/* Stuff here */) // Error! map is not defined.
// }); // Error! forEach is not defined.
// function func() {
// console.log(arguments);
// }
// func(1, 2, 3); // → [1, 2, 3]

//#endregion

//#region  Convert Array-like objects to Arrays in ES6

// const arrayLike2 = {
//     0: 'Value 0',
//     1: 'Value 1',
//     length: 2
// };

// arrayLike.forEach(value => {console.log(x)}); // Errors

//#endregion


//#region 
//  var realArray2=[1,2,3];
//  for(const element of arrayLike){
//     realArray.append(element);
//  }

//#endregion

//#region  Reducing values

console.log(
[1,2,3,4].reduce(function(a,b){
    return a+b;
}));

[2].reduce(function(a,b){
    console.log(a,b);
    return a+b;
},1);

console.clear();
//#endregion

//#region  Flatten Array of objects

/*
The example below shows how to flatten an array of objects into 
a single object.
*/

var array=[
    {
        key:'one',
        value:1
    },
    {
        key:'two',
        value:2
    },
    {
        key:'three',
        value:3
    }
];

console.log(array);

console.clear();
console.log(array.reduce(function(obj,current){
    obj[current.key]=current.value;
    return obj;
},{}));

console.clear();

console.log(array.reduce((obj,current)=> Object.assign(obj,{
    [current.key]:current.value
}),{}));
console.log(array.reduce((obj, current) => ({...obj, [current.key]: current.value}), {}));
console.clear();
//#endregion


//#region Map Using Reduce

var x= function map(list,fn){
    return list.reduce(function(newList,ştem){
        return newList.concat(fn(item));
    },[]);
}
console.log(x);

// map([1,2,3],function(n){return n*n});
console.clear();
//#endregion

//#region Find Min or Max Value

var arr=[4,2,1,-10,9]

console.log(arr.reduce(function(a,b){
    return a<b?a:b
},Infinity));

//#endregion

//#region Find Unique Values

var arr=[1,2,1,5,9,5];

console.log(arr.reduce((prev,number)=>{
    if(prev.indexOf(number)===-1){
        prev.push(number);
    }
    return prev;
},[]));

//#endregion

//#region Mapping Values

console.log(['one','two','three','four'].map(function(value,indexOf,arr){
    return value.length;
}));

['one','two'].map(function(value,indexOf,arr){
    console.log(this);
    return value.length;
})
console.clear();

['one','two'].map(function(value,indexOfi,arr){
    console.log(this);
    return value.length;
},{
    documentation:'randomObject'
});
console.clear();
//#endregion

//#region Filtering object Arrays

var numbers=[5,32,43,4];

var odd=numbers.filter(function(n){
    return n%2!==0;
});
console.log(odd);

let odd2=numbers.filter(n=>n%2 !==0);//=> shortened
console.log(odd2);

console.clear();

var people = [{
    id: 1,
    name: "John",
    age: 28
    }, {
    id: 2,
    name: "Jane",
    age: 31
    }, {
    id: 3,
    name: "Peter",
    age: 55
}];

var young=people.filter(function(person){
    return person.age<35;
});

console.log(young);
console.clear();

[{
    id: 1,
    name: "John",
    age: 28
    }, {
    id: 2,
    name: "Jane",
    age: 31
}]

var young=people.filter((obj)=>{
    var flag=false;
    Object.values(obj).forEach((val)=>{
        if(String(val).indexOf("J")>-1){
            flag=true;
            return;
        }
    });
    if(flag) return obj;
});

console.log(young);
console.clear();
//#endregion

//#region  Sorting Arrays

console.log(['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'].sort());

//=> Alphabetical Sort
console.log(
    ['s', 't', 'a', 'c', 'K', 'o', 'v', 'E', 'r', 'f', 'l', 'W', '2', '1'].sort((a, b) => {
        return a.localeCompare(b);
        })
);

console.log(

    ['s', 't', 'a', 'c', 'K', 1, 'v', 'E', 'r', 'f', 'l', 'o', 'W'].sort((a, b) => {
        return a.toString().localeCompare(b);
        })
);

//#endregion

//#region string sorting by length(longest First)
console.clear();
console.log(
    ["zebras", "dogs", "elephants", "penguins"].sort(function(a,b){
        return b.length-a.length;
    })

);

// Sayfa Date Sort Descending
console.clear();
var dates=[
    new Date(2017,11,10),
    new Date(2014,2,21)
];
console.log(dates);

var x= dates.sort(function(a,b){
    if(a>b) return -1;
    if(a<b) return 1;
    return 0;
});
console.log(x);

var x=dates.sort(function(a,b){
    return b-a;
});
console.log(x);
console.clear();

//#endregion

//#region Iteration A traditional for-loop

for (var i=0,length=10;i<length;i++){
    console.log(i);
}
console.clear();
let myArray=[1,2,3,4,5,6,7,8,9];
for(let i of myArray.keys()){
    let twoValue=myArray[i]*2;
    console.log(twoValue);
}
 
console.clear();

[1,2,3,4,5,6,7,8,9].forEach(function(value,index,arr){
    var twoValue=value*2;
    console.log(twoValue);
})
console.clear();

// var myArray2=[1,2,3,4,5,6,7,8,9];
// for(var i=0;i<myArray2.length;i++){
//     var twoval=myArray2[i]*2;
//     console.log(twoValue);
// }
console.clear();

[2, 4, 7, 9].every(function(value, index, arr) {
    console.log(value);
    return value % 2 === 0; 
});

console.clear();

[2, 4, 7, 9].some(function(value, index, arr) {
    console.log(value);
    return value === 7; 
});
console.clear();

//#endregion

//#region Libraries
 var myarr=[1,2,3,4,5,6,7,8,9];
// $.each(myarr,function(key,value){
//     console.log(value);
// });
myarr.forEach(myArray, function(value, key) {
    console.log(value);
    });
//#endregion

//#region 
//#endregion

//#region 
//#endregion

//#region 
//#endregion

