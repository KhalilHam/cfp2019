import * as ReadlineSync from "readline-sync";

let palabras: string[] = new Array();
let busqueda: string;
let indiceDeBusqueda: number;
console.log("Bienvenido");
console.log("Ingrese que desea hacer");
console.log("");

palabras = cargarArray(palabras);

menuPrincipal(palabras);

//eliminar/buscar/actualizar 
function menuPrincipal(palabras: string[]) {
    let opMenu: number;
    do {
        console.log("1- Para insertar una nueva palabra");
        console.log("2- Para eliminar una palabra");
        console.log("3- Para buscar una palabra");
        console.log("4- Para actualiza una palabra existente");
        console.log("5- Para visualizar las palabras");
        console.log("0- Para salir");
    
        opMenu = ReadlineSync.questionInt();

        switch (opMenu) {
            case 1:
                console.clear();
                addPalabra(palabras);
                break;
            case 2:
                console.clear();
                indiceDeBusqueda=buscarPalabra(palabras);
                if(indiceDeBusqueda!= -1){
                    palabras=eliminarPalabra(palabras,indiceDeBusqueda);
                }
                break;
            case 3:
                console.clear();
                if(buscarPalabra(palabras)>=0){
                    console.log("Palara encontrada!");
                }else{
                    console.log("La palabra no pudo ser encontrada en la busqueda");
                }
                break;
            case 4:
                console.clear();
                indiceDeBusqueda = buscarPalabra(palabras);

                if(indiceDeBusqueda != -1){
                    palabras=actualizarPalabra(palabras, indiceDeBusqueda);
                }
                break;

            case 5:
                console.clear();
                mostrarArray(palabras);
                break;
            case 0:
                break;
            default:
                console.clear();
                console.log("Por favor, ingrese una opción válida");
                break;
        }
    } while (opMenu != 0);
    
}


function eliminarPalabra(palabras:string[], index:number): string[] {
    let nuevoArreglo: string[]
    for (let i = 0; i < palabras.length; i++) {
        if(i != index){
            nuevoArreglo.push(palabras[i]);
        }
    }
    return nuevoArreglo;
}
/*
function eliminarElementoArreglo (index, arreglo){

    for (let i = index; i<arreglo.length-1; i++){

        arreglo[i]= arreglo[i+1];

    }

    arreglo.pop();

}
*/

function actualizarPalabra(palabras: string[], index: number): string[] {
    let nuevaPalabra: string;
    nuevaPalabra = ReadlineSync.question("Ingrese nueva palabra: ");
    palabras[index] = nuevaPalabra;
    return palabras;
}
function buscarPalabra(palabras: string[]): number{
    let busqueda: string;

    console.log("Buscar una palabra");
    console.log("");
    busqueda = ReadlineSync.question("Ingrese la palabra a buscar: ");
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] == busqueda) {
            return i;
        }
    }
    return -1;
}

function addPalabra(palabras: string[]): string[] {
    let nuevaPalabra = ReadlineSync.question("Ingrese nueva palabra: ");
    palabras.push(nuevaPalabra);
    return palabras;
}
function cargarArray(palabras: string[]): string[] {
    palabras.push("programa");
    palabras.push("que");
    palabras.push("complica");
    return palabras;
}
function mostrarArray(arr:any) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}