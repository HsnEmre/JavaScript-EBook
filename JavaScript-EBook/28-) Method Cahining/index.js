//#region  Method Chaining

function Door(){
    this.height='';
    this.width='';
    this.status='Closed';
    this.smallDoor="";
}

Door.prototype.open=function(){
    this.status='opened';
    return this;
}

Door.prototype.close=function()
{
    this.status='closed';
    return this;
}

Door.prototype.setParams=function(width,height){
    this.width=width;
    this.height=height;
    return this;
}

Door.prototype.doorStatus=function(){
    console.log('The ',this.width,'x',this.height,'Door is',this.status);
    return this;
}

console.log(Door);
// var smaller=new Door();
// smallDoor.setParams(20,100).open().doorStatus().close().doorStatus();
//#endregion