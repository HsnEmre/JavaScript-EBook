//#region 

var re=new RegExp(".*");

//=> with flags

var re=new RegExp(".*","gmi");

var re = /[a-z]+/;
if (re.test("foo")) {
console.log("Match exists.");
}


var re = /([0-9]+)[a-z]+/;
var match = re.exec("foo123bar");


var re = /a/g;
var result;
while ((result = re.exec('barbatbaz')) !== null) {
console.log("found '" + result[0] + "', next exec starts at index '" + re.lastIndex + "'");
}
//#endregion

//#region   RegExp with string

console.log("string".match(/[i-n]+/));
console.log("string".match(/(r)[i-n]+/));


console.log("string".replace(/[i-n]+/, "foo"));
console.log("stringstring".split(/[i-n]+/));

console.log("string".search(/[i-n]+/));
console.log("string".search(/[o-q]+/));
//#endregion

