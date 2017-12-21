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
if (typeof newNumber == "number") {
    console.log(typeof newNumber);
}
//never function
function throwError() {
    throw new Error();
}
// "strictNullChecks": true,              /* Enable strict null checks. */
var nullTypeValue = null; //this cannot be changed since the type of the value is null... only valid when the flag is true
var nullableValue = null;
// Arrow function 
var myFn = function () { return console.log('Hello world !'); };
myFn();
//Default parameter value 
var myDefaultValFn = function (name) {
    if (name === void 0) { name = 'Human'; }
    return console.log('Hello world !' + name);
};
myDefaultValFn('NKA');
myDefaultValFn();
//REST and SPREAD
var numberAry = [10, 12, 31, 44];
console.log('Actual', Math.max(10, 12, 31, 44));
//SPREAD - array to list
// Math.max.apply(Math, numberAry);
console.log('Spread', Math.max.apply(Math, numberAry));
//REST - list to array
var makeArrayFn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
console.log('Rest', makeArrayFn(1, 2, 3));
var myAry = ['fName', 'lName'];
var sampleArry = ['address'];
myAry.push.apply(myAry, sampleArry);
myAry.push.apply(myAry, sampleArry);
console.log(myAry);
//Destructuring Array
// const myAry = ['fName', 'lName'];
var val1 = myAry[0], val2 = myAry[1];
console.log(val1, val2);
//Destructuring Obj
var myObj = {
    'fName': 'NAL', 'lName': 'KAT'
};
var fName = myObj.fName, lName = myObj.lName;
console.log(fName, lName);
//with alias
var firstName = myObj.fName, lastName = myObj.lName;
console.log('with alias', firstName, lastName);
//Template literals
var myName = 'Nallai';
var outputStr = "\n    Hello I'm " + myName + " !\n";
console.log(outputStr);
//# sourceMappingURL=script.js.map