"use strict";
//primero tsc holaMundo.ts
//segundo node holaMundo.js
//import * as ReadLineSync from ‘./node_modules/readline-sync’;
exports.__esModule = true;
//let nombre: string = "Khalil";
var nombre = ReadlineSync.question("Indique su nombre: ");
console.log("Hola mundo");
console.log("Bienvenido devuelta, " + nombre);
