//#region  Creation and initialisin prototype

/*
In the conventional JS there are no class instead we have prototypes. Like the class, prototype inherits the
properties including the methods and the variables declared in the class. We can create the new instance of the
object whenever it is necessary by, Object.create(PrototypeName); (we can give the value for the constructor as
well)

Geleneksel JS'de sınıf yoktur, bunun yerine prototiplerimiz vardır. Sınıf gibi prototip de şunları miras alır:
Sınıfta bildirilen yöntemler ve değişkenler dahil olmak üzere özellikler. Yeni örneğini oluşturabiliriz.
nesne ne zaman gerekli olursa olsun, Object.create(PrototypeName); (yapıcının değerini şu şekilde verebiliriz

*/

var Human=function()
{
    this.canSpeak=true;
};

Human.prototype.greet=function(){
    if(this.canSpeak){
        console.log(this.name);
    }
};

var student=function(nam,title){
    Human.call(this);
    this.name=this.name;
    this.title=title;
};

student.prototype=Object.create(Human.prototype);
student.prototype.constructor=student;

student.prototype.greet=function(){
    if(this.canSpeak){
        console.log(this.name,this.title);
    }
};

var Customer=function (name) {
    Human.call(this);
    this.name=name;
  }

  Customer.prototype=Object.create(Human.prototype);
  Customer.prototype.constructor=Customer;

  var bill=new student('Billy','Teacher');
  var carter=new Customer('Carter');
  
  bill.greet();
  carter.greet();


//#endregion






















