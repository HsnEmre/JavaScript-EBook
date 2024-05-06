//#region Simple callback Usage Examples


array=[1,2,3,4,4,5,6,7,8,9];

function foo(array){
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum +=array[i];
    }
    return sum;
}

console.log(foo(array));

//#endregion

//#region   Continuation

function doSomething(then){
    console.log('Doing something');
    then();
}

doSomething(function(){
    console.log('Done');
});

//#endregion

//#region What is a callback

// console.log("Hello World");

// [1,2,3].map(function double(x){
//     return 2*x;
// });

// Promise.then(function onFulfilled(value){
//     console.log("Fulfilled with value"+value);
// },
// function onRejected(reason){
//     console.log("Rejected with reason"+reason);
// }
// );
// console.clear();
//#endregion

//#region   Callbacks and 'this'

function SomeClass(msg,elm){
    this.msg=msg;
    elm.addEventListener('click',function(){
        console.log(this.msg);
    });
}

var s=new SomeClass("hello",someElement);

//==>> Solutions
//use bind

function SomeClass(msg,elm){
    this.msg=msg;
    elm.addEventListener('click',function(){
        console.log(this.msg);
    }.bind(this));
}

function SomeClass(msg,elm){
    this.msg=msg;
    elm.addEventListener('click',()=>{
        console.log(this.msg);
    });

}

function SomeClass(msg,elm){
    this.msg;
    elm.addEventListener('click',this.handleClick.bind(this));
}

SomeClass.prototype.handleClick=function(event){
    console.log(event.type,this.msg);
};

function SomeClass(msg,elm){
    this.msg=msg;
    elm.addEventListener('click',(...a)=>this.handleClick(...a));
}

SomeClass.prototype.handleClick=function(event){
    console.log(event.type,this.msg);
};

function SomeClass(msg,elm){
    this.msg=msg;
    elm.addEventListener('clic',this);
}

SomeClass.prototype.handleEvent=function(event){
    var fn=this[event.type];
    if(fn){
        fn.apply(this,arguments);
    }
};

SomeClass.prototype.click=function(event){
    console.log(this.msg);
};
console.clear();

//#endregion

//#region   Callback using arrow function

[1,2,3,4,5,].forEach(function(x){
    console.log(x);
})

[1,2,3,4,5,6].forEach(x=>console.log(x));
console.clear();
//#endregion

//#region 

const expected=true;

function compare(actual,success,failure){
    if(actual===expected){
        success();
    }
    else{
        failure();
    }
}

function onSuccess(){
    console.log("value  was expected");
}

function onfailure(){
    console.log("value was unexpected");
}

compare(true,onSuccess,onfailure);
compare(false,onSuccess,onfailure);

function compareAsync(actual,success,failure){
    setTimeout(() => {
       compare(actual,success,failure) 
    }, 1000);
}

compareAsync(true,onSuccess,onfailure);
compareAsync(false,onSuccess,onfailure);

//#endregion













