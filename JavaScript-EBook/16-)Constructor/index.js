//#region 

function Cat (name) 
{
    this.name=name;
    this.sound="Meow!";
  }


  let cat=new Cat("Tom");
  console.log(cat.sound);

  Cat.prototype.speak=function () 
  {
    console.log(this.sound);    
    }

    cat.speak();

//#endregion

