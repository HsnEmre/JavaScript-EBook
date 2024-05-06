// //#region Recursive settimeout

//  function repeatingFunc(){
//      console.log("It's been 5 seconds,Execute the function again");
//      setTimeout(() => {
//         repeatingFunc(1000) ;
//      }, 1000);
//  }

//  setTimeout(repeatingFunc,1000);
//  console.clear();


//  function waitFunc(){
//      console.log("this will be logged every 5 seconds");
//  }

// window.setInterval(waitFunc,1000);




// // window.setTimeout(console.clear(),5000);
// // setTimeout(() => {
// //    console.clear(); 
// // }, 5000);
//  //#endregion

// //#region Intervals

//  var setInterval=setInterval("doSomething()",1000);
//  var setInterval=setInterval(doSomething,1000);

// //#endregion

// //#region removing intervals

// function waitFunc(){
//     console.log("this will be logged every 1 seconds");
// }

// var interval=window.setInterval(waitFunc,5000);

// window.setTimeout(function(){
//     clearInterval(interval);
// },1000)

// //#endregion

//#region Removing Timeouts

function waitFunc(){
    console.log("this will be logged after 5 seconds");
}

function stopFunc(){
    clearTimeout(timeout);
}

var timeout=window.setTimeout(waitFunc,1000);
window.setTimeout(stopFunc,1000);


//#endregion



































