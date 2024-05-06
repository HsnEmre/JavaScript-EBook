//#region   Example 1
console.time('response in');

alert('click to continue');
console.timeEnd('response in');

alert('One more time');
console.timeEnd('response in');
console.clear();
//#endregion

//#region   Exmp2
var elms=
document.getElementsByTagName('*')//=>select all elements 

console.time('loop time');

for(var i=0;i<5000;i++)
{
    for(var j=0,length=elms.length;j<length;j++)
    {
        //nothing to do
    }
}
console.timeEnd('loop end');

//#endregion