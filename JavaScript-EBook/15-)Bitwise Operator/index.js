//#region Bitwise operators
/* Real world example: Number's Parity Check */

n=10;

function  isEven(n) 
{
    return n%2==0;
}

function  isOdd(n) 
{
    if(isEven(n)){
        return false;
    }
    else{
        return true;
    }
}

if(n & 1){
    console.log("ODD!");
}
else{
    console.log("EVEN!");
}
console.clear();
//#endregion

//#region  Bitwise Not&&XOR
var a=11,b=22;
a=a*b;
b=a*b;
a=a*b;
console.log(a,b);
console.clear();
//#endregion






