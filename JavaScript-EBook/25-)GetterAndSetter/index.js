//#region  Defining a setter/getter using object define property

var setValue;
var obj={};
Object.defineProperty(obj,"objPeroperty",{
    get:function(){
        return "a value";
    },
    set:function(value){
        setValue=value;
    }
});


//#endregion


//#region Defining an Setter/Getter in a Newly Created Object

var date={
    year:'2017',
    month:'02',
    day:'27',
    get date(){
        return `${this.year}-${this.month}-${this.day}`
    },
    set date(dateString){
        var dateRegExp=/(\d{4})-(\d{2})-(\d{2})/;
        if (dateRegExp.test(dateString)){

            var parsedDate=dateRegExp.exec(dateString);
            this.year=parsedDate[1];
            this.month=parsedDate[2];
            this.date=parsedDate[3];
        }
        else{
            throw new Error('Date string must be in yyyy-mm-dd format');

        }
    }
};

//#endregion

//#region Defining getters and setters in ES6 class

class Person {
    constructor(firstname, lastname) 
    {
    this._firstname = firstname;
    this._lastname = lastname;
    }
    get firstname() {
    return this._firstname;
    }
    set firstname(name) {
    this._firstname = name;
    }
    get lastname() {
    return this._lastname;
    }
    set lastname(name) {
    this._lastname = name;
    }
    }
    let person = new Person('John', 'Doe');
    console.log(person.firstname, person.lastname); // John Doe
    person.firstname = 'Foo';
    person.lastname = 'Bar';
    console.log(person.firstname, person.lastname);

//#endregion











