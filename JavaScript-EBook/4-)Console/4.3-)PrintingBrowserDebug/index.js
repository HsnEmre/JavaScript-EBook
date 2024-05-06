console.log("my message");
var obj={test:1};
console.log(['string'],1,obj,window);

console.log([0,3,21,'a sting']);
console.log(key1='value',key2='anothervalue',key3=123);

//#region   other methods
console.timeStamp();

function sec(){
    first();
}

function first(){

    console.trace();
}
sec();
//#endregion


//#region Including a stack trace when logging-console trace()
console.clear();
function foo()
{
    console.trace('My log statement');
}
foo();
//#endregion


//#region   Tabulating values-console.table
console.clear();
console.table(['Hello','world']);

var personArr = [
    {
    "personId": 123,
    "name": "Jhon",
    "city": "Melbourne",
    "phoneNo": "1234567890"
    },
    {
    "personId": 124,
    "name": "Amelia",
    "city": "Sydney",
    "phoneNo": "1234567890"
    },
    {
    "personId": 125,
    "name": "Emily",
    "city": "Perth",
    "phoneNo": "1234567890"
    },
    {
    "personId": 126,
    "name": "Abraham",
    "city": "Perth",
    "phoneNo": "1234567890"
    }]
    ;
    console.table(personArr, ['name', 'personId']);
//#endregion

//#region counting-console.count()
console.clear();
var o1 = 1, o2 = '2', o3 = "";
console.count(o1);
console.count(o2);
console.count(o3);
console.count(1);
console.count('2');
console.count('');
//#endregion

//#region dir
console.clear();
console.dirxml(document);

console.clear();
console.log(document);
console.clear();
var myObject={
    "foo":{
        "bar":"data"
    }
}
console.dirxml(myObject);

//#endregion

//#region 
//#endregion