/// <reference path="triangle.ts" />
/// <reference path="circle.ts" />

//tsc -outfile <filename>.js

//alias
import crl = myNewNameSpace;

console.log(myNewNameSpace.calcuateCircumferance(5));
console.log(myNewNameSpace.calcuateTCircumferance(5));
console.log(crl.calcuateCircumferance(5));


namespace loacalNameSpace {
    export const sayHello = () => {
        console.log('Hello !');
    }
}

loacalNameSpace.sayHello();

//# sourceMappingURL=script.js.map