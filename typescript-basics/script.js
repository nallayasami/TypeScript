"use strict";
console.log('Hello World');
var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["YELLOW"] = 2] = "YELLOW";
    Color[Color["BLUE"] = 3] = "BLUE";
})(Color || (Color = {}));
console.log(Color);
//Tuple is helpful  for fixed size well known concrete type structure
var tuple = ['Hello', 'world', 12];
console.log(tuple);
//function type:
// This function only allow the function which matches this signature
var myFunciton;
function newFun(val1, val2) {
    return val1 * val2;
}
;
myFunciton = newFun;
//union type
var myAge;
//check types 
var newNumber = 10;
console.log(typeof newNumber);
