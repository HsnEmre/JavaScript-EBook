//#region Page Dom and Browser loading
function someFunction ()
{
    console.log("Hi! Iam loaded");
}

//#endregion

//#region   DomContent Loaded event
console.clear();
document.addEventListener("DomContentLoaded",function(event){
    console.log("hello ı am loaded")
});

//#endregion

//#region Self-Invoke anonymous function
console.clear();
(function(){
    console.log("hi i am anonymous function! I am loded");
})
//#endregion