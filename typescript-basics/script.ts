
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
