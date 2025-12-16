// let n = 5;
// for(let i = 0; i<=5; i++){
//     console.log("hello",i);
// }
// console.log("Bye");

// console.log(process.argv);
 
// const math = require("./math");

// console.log(math);
// console.log(math.sum(4,5));
// console.log(math.mul(4,5));
// console.log(math.g);
// console.log(math.PI);

// const fruit = require("./Fruits");
// console.log(fruit);

import{ sum, PI} from "./math.js";
import {generate} from "random-words";
console.log(generate());
console.log(sum(4,5));
console.log(PI);