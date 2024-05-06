//#region   Example
var now=new Date();
console.log(now.toString() === 'Mon Apr 11 2016 16:10:41 GMT-0500 (Central Daylight Time)');

var epoch = new Date(0);
console.log(epoch.toISOString() === '1970-01-01T00:00:00.000Z'); // true

// in the local timezone.
var one = new Date(2012, 1);
console.log(one.toString() === 'Wed Feb 01 2012 00:00:00 GMT-0600 (Central Standard Time)');
// Creates a Date object with the first day of the year 2012 in the local
// timezone.
// (Months are zero-based)
var zero = new Date(2012, 0);
zero.toString() === 'Sun Jan 01 2012 00:00:00 GMT-0600 (Central Standard Time)'
// true
// Creates a Date object with the first day of the year 2012, in UTC.
var utc = new Date(Date.UTC(2012, 0));
utc.toString() === 'Sat Dec 31 2011 18:00:00 GMT-0600 (Central Standard Time)'
// true
utc.toISOString() === '2012-01-01T00:00:00.000Z'
// true
// Parses a string into a Date object (ISO 8601 format added in ECMAScript 5.1)
// Implementations should assumed UTC because of ISO 8601 format and Z designation
var iso = new Date('2012-01-01T00:00:00.000Z');
iso.toISOString() === '2012-01-01T00:00:00.000Z' // true
// Parses a string into a Date object (RFC in JavaScript 1.0)
var local = new Date('Sun, 01 Jan 2012 00:00:00 -0600');
local.toString() === 'Sun Jan 01 2012 00:00:00 GMT-0600 (Central Standard Time)'
// true
// Parses a string in no particular format, most of the time. Note that parsing
// logic in these cases is very implementation-dependent, and therefore can vary
// across browsers and versions.
var anything = new Date('11/12/2012');
anything.toString() === 'Mon Nov 12 2012 00:00:00 GMT-0600 (Central Standard Time)'
// true, in Chrome 49 64-bit on Windows 10 in the en-US locale. Other versions in
// other locales may get a different result.
// Rolls values outside of a specified range to the next value.
var rollover = new Date(2012, 12, 32, 25, 62, 62, 1023);
rollover.toString() === 'Sat Feb 02 2013 02:03:03 GMT-0600 (Central Standard Time)';
// true; note that the month rolled over to Feb; first the month rolled over to
// Jan based on the month 12 (11 being December), then again because of the day 32
// (January having 31 days).GoalKicker.com – JavaScript® Notes for Professionals 49
// Special dates for years in the range 0-99
var special1 = new Date(12, 0);
special1.toString() === 'Mon Jan 01 1912 00:00:00 GMT-0600 (Central Standard Time)`';
// true
// If you actually wanted to set the year to the year 12 CE, you'd need to use the
// setFullYear() method:
special1.setFullYear(12);
special1.toString() === 'Sun Jan 01 12 00:00:00 GMT-0600 (Central Standard Time)`';
// true

//#endregion

//#region   Convert to String format

//--Convert to string
console.clear();
var date1=new Date();
var x= date1.toString();
console.log(x);

//--Conver to time String
var date2=new Date();
var x= date1.toTimeString();
console.log(x);

//-- Convert to Date String
var date1=new Date();
var x= date1.toDateString();
console.log(x);

//-- convert to Utc String
var date1=new Date();
var x= date1.toUTCString();
console.log(x);

//--Convert to ISO String
var date1=new Date();
var x= date1.toISOString();
console.log(x);

//Convert to GMT String
var date1=new Date();
var x=date1.toGMTString();
console.log(x);

//-- Convert to local Date String
var date1=new Date();
var x= date1.toLocaleDateString();
console.log(x);


//#endregion

//#region Creating a Date from UTC
console.clear();
//-- Naive approach with WRONG results
function formatDate(dayOfWeek, day, month, year) {
    var daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return daysOfWeek[dayOfWeek] + " " + months[month] + " " + day + " " + year;
    }

    //Foo lives in a country with timezone GMT + 1
var birthday = new Date(2000,0,1);
console.log("Foo was born on: " + formatDate(birthday.getDay(), birthday.getDate(),
birthday.getMonth(), birthday.getFullYear()));

//Bar lives in a country with timezone GMT - 1
// var birthday = new Date(receiveFromFoo());
console.log("Foo was born on: " + formatDate(birthday.getDay(), birthday.getDate(),
birthday.getMonth(), birthday.getFullYear()));

//#endregion


//#region example

var DateObject = (function() {
    var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
    ];
    var date = function(str) {
    this.set(str);
    };
    date.prototype = {
    set : function(str) {
    var dateDef = str ? new Date(str) : new Date();
    this.day = dateDef.getDate();
    this.dayPadded = (this.day < 10) ? ("0" + this.day) : "" + this.day;
    this.month = dateDef.getMonth() + 1;
    this.monthPadded = (this.month < 10) ? ("0" + this.month) : "" + this.month;
    this.monthName = monthNames[this.month - 1];
    this.year = dateDef.getFullYear();
    },
    get : function(properties, separator) {
    var separator = separator ? separator : '-'
    ret = [];
    for(var i in properties) {
    ret.push(this[properties[i]]);
    }
    return ret.join(separator);
    }
    };
    return date;
    })();

//#endregion

//#region   
// Get the current day
var day = (new Date()).getDate();
console.log(day);
// Sample output: 31
// Get the current hour
var hours = (new Date()).getHours();
console.log(hours);
// Sample output: 10
// Get the current minutes
var minutes = (new Date()).getMinutes();
console.log(minutes);
// Sample output: 39
// Get the current seconds
var seconds = (new Date()).getSeconds();
// console.log(second);
// Sample output: 48
// Get the current milliseconds
// To get the milliseconds (ranging from 0 to 999) of an instance of a Date object, use its getMilliseconds method.
var milliseconds = (new Date()).getMilliseconds();
console.log(milliseconds);
// Output: milliseconds right now
// Convert the current time and date to a human-readable string
var now = new Date();
// convert date to a string in UTC timezone format:
console.log(now.toUTCString());
// Output: Wed, 21 Jun 2017 09:13:01 GMT
//#endregion


//#region   Convert to JSON
var date10=new Date();
var x= date10.toJSON();
console.log(x);
//#endregion

//#region Date Comparison

//#region  Comparing Date Values ==> CAHPTER 9

console.clear();
var date1=new Date();
var date2=new Date(date1.valueOf()+10);
console.log(date1.valueOf()===date2.valueOf());

var dat1=new Date();
var dat2=new Date();
console.log(dat1===date2);


// var dat3=new Date();
// var dat4=new dat3;

// console.log(dat3===dat4);

//#endregion

//#region   Date Difference Calculation
var date1=new Date();
var date2=new Date(date1.valueOf()+10);

var dateDiff=date1.valueOf()-date2.valueOf();
var dateDiffInYears=dateDiff/1000/60/24/365;

console.log("Date difference in years:"+dateDiffInYears);

//#endregion

//#endregion



