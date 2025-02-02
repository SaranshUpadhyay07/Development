// // var generateName = require("sillyname");
// //line 1 and line 4 is same

import generateName from "sillyname";

var sillyName = generateName();

console.log(`My name is ${sillyName}`);

console.log("---------------");

import  { randomSuperhero } from "superheroes";

const superHero = randomSuperhero(); 

console.log(`I am ${superHero}`);
