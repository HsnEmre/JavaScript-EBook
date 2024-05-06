
//#region   Typeof

console.log(typeof("asdasd"));
//#endregion

//#region   Finding an object's class
/*
To find whether an object was constructed by a certain 
constructor or one inheriting from it, you can use the
instanceof command:
*/

function sum(...arguments){
    if(arguments===1)
    {
        const[firstArg]=arguments;
        if(firstArg instanceof Array)
        return sum(...firstArg);
    }
    return arguments.reduce((a,b)=>a+b);
}

console.log(sum(12,2));



//#endregion

//#region Getting object type by Constructor
console.clear();
console.log(Object.prototype.toString.call("String"));
console.log(Object.prototype.toString.call(42));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(Object()));
console.log(Object.prototype.toString.call({}));//=>object
console.log(Object.prototype.toString.call(function(){}));
console.log(Object.prototype.toString.call(new Date(2015,10,21)));
console.log(Object.prototype.toString.call(new RegExp()));
console.log(Object.prototype.toString.call(/foo/));//=>reg exp
console.log(Object.prototype.toString.call([]));



//#endregion