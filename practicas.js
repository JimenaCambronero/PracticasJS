

// let mes= 6
// let  estacion; 

// if (mes == 1 || mes == 2 || mes == 12){
//     estacion = "Estamos en verano";
// }
// else if (mes == 3 || mes == 4 || mes == 5) {
//     estacion = "Estamos en otoño";
// }
// else if (mes == 6 || mes == 7 || mes == 8) {
//     estacion= "estamos en invierno";
// }
// else if (mes == 9 || mes == 10 || mes == 11){
//     estacion= "Estamos en primavera"
// }
// else {
//     estacion = "Valor Incorrecto"
// }

// console.log(estacion);


// let horaDia = 9;
// let mensaje;


// if ( horaDia >= 6 && horaDia <= 11) {
//     mensaje = "Buenos dias";
// }
// else if ( horaDia >= 12 && horaDia <=18) {
//     mensaje = "Buenas tardes";
// }
// else if ( horaDia >= 19 && horaDia <= 24) {
//     mensaje = "Buenas Noches";
// }
// else if ( horaDia >= 0 && horaDia < 6) {
//     mensaje = "Durmiendo";
// }

// else{
//     mensaje = "Valor Incorrecto";
// }
    
// console.log (mensaje)

/*practica estructura Switch

let numero= 3;
let numeroTexto = "Este valor es desconocido";


switch (numero) {
    case 1:
        numeroTexto = "Número uno";
        break;
    case 2:
        numeroTexto = "Número dos";
        break;
    case 3: 
        numeroTexto = "Número tres"; 
        break;
    case 4: 
        numeroTexto = "Número cuatro";
        break;
    default:
        numeroTexto = "Este caso no ha sido encontrado";
}

console.log (numeroTexto);

let mes = 4;
let estacion = "Estacion no conocida";

switch (mes) {
    case 1: case 2: case 12:
        estacion = "Verano";
        break;
    case 3: case 4: case 5:
        estacion = "Otoño";
        break;
    case 6: case 7: case 8:
        estacion = "Invierno";
        break
    case 9: case 10: case 11:
        estacion = "Primavera";
        break;
    default: "No es una estacion";
}

console.log (estacion);

/* ciclo while 

let contador = 0;

while (contador <= 5) {
    console.log (contador);
    contador++;
}

console.log ("fin del ciclo");

/* ciclo do while 

let contador = 0;

do {
    console.log (contador);
    contador++;
}while (contador <= 5);

console.log ("Fin del ciclo do While");

/* Ciclo for 

for (let contador = 0; contador <3; contador ++) {
    console.log (contador);
}
console.log ("Fin ciclo for");

/* Break

for (var contador = 2; contador <=10; contador ++){
    if (contador % 2 == 0){
        console.log (contador);
       break; 
    }
}
console.log("Fin del ciclo for - se muestra el primer numero par encontrado");

/* mostrar pares 

for (let contador = 0; contador <= 10; contador ++){
    if (contador % 2 !== 0) {
        continue; // ir a la siguiente iteracion
    }
    else {
        console.log (contador);
    }    
}

/* Funciones
//declaracion//

function miFuncion (a,b) {
    console.log ("Suma: " + (a + b));
}
// llamando funcion. puede hacerse antes o desp de llamarla.
miFuncion (2,3);

//returm
function miFuncionDos (a, b){
    console.log (arguments.length) // propiedad dentro de la funcion para realizar esta preg
    return a + b;
}

let resultado = miFuncionDos (4, 4);
console.log (resultado);

//Declaración funcion de tipo expresion (funcion asignada a sumar)

var sumar = function (a, b) {return a + b};

resultado = sumar (3, 3);
console.log (resultado);

// funcion q se llama a si misma. no puede ser utilizada nuevamente

(function (a, b) {
    console.log ("ejecutando la función: " + (a +b));
}) (3, 4);

console.log (typeof miFuncionDos);

//convierte la funcion a texto 

let miFuncioTexto = miFuncion.toString ();
console.log (miFuncioTexto);

//funcion Flecha (equivalente a funcion por expresión)

const sumarFuncionFlecha = (a, b) => /*remplaza llaves a + b;
resultado = sumarFuncionFlecha (3, 5);
console.log (resultado);


let sumar = function (a, b){
    console.log (arguments [0]);
    console.log (arguments [1]);
    return a + b 
};

resultado = sumar (5, 10);
console.log (resultado);

// variante ejemplo anterior parametros-argumentos
let sumar = function (a = 5, b = 10){
    console.log (arguments [0]);
    console.log (arguments [1]);
    return a + b 
};

resultado = sumar (); 
console.log (resultado);

// si coloco valores sobre escribe los dados a A y B

let sumar = function (a = 5, b = 10){
    console.log (arguments [0]);
    console.log (arguments [1]);
    console.log (arguments [2])
    return a + b 
};

resultado = sumar (12, 15, 3); 
console.log (resultado);

// suma con argumento

let sumar = function (a = 5, b = 10){
    console.log (arguments [0]);
    console.log (arguments [1]);
    console.log (arguments[2]);
    return a + b + arguments[2];
};

resultado = sumar (12, 15, 3); 
console.log (resultado);

let resultado = sumarTodo (5, 4, 13, 10, 9);
console.log (resultado);

function sumarTodo() {
    var suma = 0;
    for  (var i = 0; i < arguments.length; i++){
        suma += arguments[i]; //es igual a poner suma = suma + arguments [i]
    }
    return suma;
}

//paso por valor

let x = 10; // no tiene atributos ni metodo asociado a este valor. Tipo primitivo 

function cambiarValor (a){ // a = x; a = 10
    a = 20; 
}
// paso x valor
cambiarValor (x);
console.log (x); //no sufrio cambio, x paso una copia de su valor a a, no tiene relacion con x, 
//console.log (a); // esta variable es un argumento del metodo cambiar valor, esta se destruye cdo termina la llamada a el metodo cambiar valor. se destruye, no se puede usar fuera del metodo 

// paso por referencia-creacion de objetos.
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}

function cambiarValorObjeto(p1){
    p1. nombre = "Carlos";
    p1. apellido = "Juarez";
} // vive solo en el metodo. 
// paso x referencia
cambiarValorObjeto (persona);
console.log (persona);
*/
