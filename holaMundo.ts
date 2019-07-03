//primero tsc holaMundo.ts
//segundo node holaMundo.js
//import * as ReadLineSync from ‘./node_modules/readline-sync’;

import * as ReadlineSync from "./node_modules/readline-sync";

//let nombre: string = "Khalil";
let nombre: string = ReadlineSync.question("Indique su nombre: ");
console.log("Hola mundo");
console.log("Bienvenido devuelta, " + nombre);