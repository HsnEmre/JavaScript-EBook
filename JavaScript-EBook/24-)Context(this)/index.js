//#region this with simple objects
var person={
    name:'Jhon Doe',
    age:42,
    gender:'male',
    bio:function(){
        console.log('My name is '+ this.name);
    }
};

person.bio();
var bio=person.bio;
bio();

//#endregion
//#region Saving this for use in nested functions

document.getElementById('myAJAXButton').onclick=function(){
    makeAjaxRequest(function(result){
        if(result){
            this.className='success';
        }  
    });
}

document.getElementById('myAJAXButton').onclick = function(){
    var self = this;
    makeAJAXRequest(function(result){
    if (result) { // success
    self.className = 'success';
    }
    })
}

document.getElementById('myAJAXButton').onclick = function(){
    makeAJAXRequest(result => {
    if (result) { // success
    this.className = 'success';
    }
    })
}

//#endregion

//#region Binding function context
var monitor={
    threshold:5,
    check:function(value){
        if(value>this.threshold){
            this.display("value is too high");
        }
    },
    display(message){
        alert(message);
    }
};

monitor.check(7);
//#endregion

//#region   Hard Binding

function Person(){
    console.log("I'm"+this.name);
}

var person0={name:"StackoverFlow"}
var person1={name:"Jhon"};
var person2={name:"Doe"};
var person3={name:"Ala Eddine JEBALI"};

Person();
Person.call(person1);
Person.apply(person2);
Person.call(person3);
//#endregion

//#region  this in constructor functions

function Cat(name) {
    this.name = name;
    this.sound = "Meow";
}
    var cat = new Cat("Tom"); // is a Cat object
    cat.sound; // Returns "Meow"
    var cat2 = Cat("Tom"); // is undefined -- function got executed in global context
    window.name; // "Tom"
    cat2.name;


//#endregion





