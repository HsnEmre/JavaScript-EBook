var myArray=[];//=> empty array

var fruites=['apple',"orange","strawberry"];
var varsInParkinglot=['toyota',"ferrari","lexus"];
var employes=["billy","bob","joe"];
var primenumbers=[2,3,4,5,6,78,9,0];
var randomVariables=[2,"any type works",undefined,null,true,2.51];


console.log(myArray);
console.log(fruites);
console.log(varsInParkinglot);
console.log(employes);
console.log(primenumbers);
console.log(randomVariables);


myArray=["zero","one","two"];
window.alert(myArray[0]);

myArray=["Joe doe","billy"];
elementnumber=1;
window.alert(myArray[elementnumber]);

// an object is a group of values; unlike arrays ,we can do something better than them:

myObject={};//=>defined to object

jhon={
firstName:"Jhon",
lastname:"Doe",
fullname:firstName+lastname
};

billy={
firstName:"billy",
lastname:undefined,
fullname:firstName+lastname};

window.alert(jhon.fullname);
window.alert(billy.firstName);
