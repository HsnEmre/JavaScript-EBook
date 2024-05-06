console.log('%s has %d points','sam',100);

/*
%s Formats the value as a string
%i or %d Formats the value as an integer
%f Formats the value as a floating point value
%o Formats the value as an expandable DOM element
%O Formats the value as an expandable JavaScript object
%c Applies CSS style rules to the output string as specified by the second parameter

*/

console.log("%cHello %cWorld%c!!", // string to be printed
"color: blue;", // applies color formatting to the 1st substring
"font-size: xx-large;", // applies font formatting to the 2nd substring
"/* no CSS rule*/" // does not apply any rule to the remaining substring
);