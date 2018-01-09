import { PI, calcuateCircumferance } from "./circle";
// Alias and alternative way to import.
import * as circle from "./circle";

//default export
import calcuate from "./default";


console.log('Loaded app.js');
// Regular
console.log(PI);
console.log(calcuateCircumferance(10));
// Alias Import
console.log(circle.PI);
console.log(circle.calcuateCircumferance(10));
// Default
console.log(calcuate(10));
