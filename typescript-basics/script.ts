
console.log('Hello World');

enum Color {
    RED = 1,
    YELLOW = 2,
    BLUE = 3
}
console.log(Color);

//Tuple is helpful  for fixed size well known concrete type structure
let tuple: [string, string, number] = ['Hello', 'world', 12];
console.log(tuple);

//function type:
// This function only allow the function which matches this signature
let myFunciton: (val1: number, val2: number) => number;


function newFun(val1: number, val2: number): number {
    return val1 * val2;
};

myFunciton = newFun;


//reusable type declaration
type myFnType = (val1: String, Val2: String) => string;
type myObjType = { name: String, getValue: myFnType, anotherFn: () => void };

//union type
let myAge: number | string;

//check types 

let newNumber = 10;
if (typeof newNumber == "number") {
    console.log(typeof newNumber);
}

//never function
function throwError(): never {
    throw new Error();
}

// "strictNullChecks": true,              /* Enable strict null checks. */
let nullTypeValue = null; //this cannot be changed since the type of the value is null... only valid when the flag is true
let nullableValue: string | null = null;

// Arrow function 

let myFn = () => console.log('Hello world !');
myFn();


//Default parameter value 
let myDefaultValFn = (name: string = 'Human') => console.log('Hello world !' + name);
myDefaultValFn('NKA');
myDefaultValFn();
//REST and SPREAD

const numberAry = [10, 12, 31, 44];
console.log('Actual', Math.max(10, 12, 31, 44));
//SPREAD - array to list
// Math.max.apply(Math, numberAry);
console.log('Spread', Math.max(...numberAry));
//REST - list to array
let makeArrayFn = (...args: number[]) => args;
console.log('Rest', makeArrayFn(1, 2, 3));

const myAry = ['fName', 'lName'];
const sampleArry = ['address'];
myAry.push.apply(myAry, sampleArry);
myAry.push(...sampleArry);
console.log(myAry);

//Destructuring Array
// const myAry = ['fName', 'lName'];
const [val1, val2] = myAry;
console.log(val1, val2);
//Destructuring Obj
const myObj = {
    'fName': 'NAL', 'lName': 'KAT'
};
const {fName, lName} = myObj;
console.log(fName, lName);
//with alias
const {fName:firstName, lName:lastName} = myObj;
console.log('with alias', firstName, lastName);

//Template literals
const myName ='Nallai';
const outputStr = `
    Hello I'm ${myName} !
`;

console.log(outputStr);
