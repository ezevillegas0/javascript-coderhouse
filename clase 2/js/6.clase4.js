                        //CLASE 4

                        //FUNCIONES

//es un bloque de cogido que voy a poder llamar y repetir la cantidad de veces que quiera. es un conjunto de instrucciones que se agrupan para realizar una tarea concreta.

                       //funciones simples

/* function saludar (){
    let num1 = parseInt(prompt("ingerese un numero"))
    let num2 = parseInt(prompt("ingerese un numero"))
    let suma = num1 + num2
    alert(suma)
}

saludar(); */

/* ------------------------------------------------- */

                       //PARAMETROS

//los parametros son variables que se declaran dentro de la funcion. los parametros se envian mediante varibles y se colocan entre los parentesis de la funcion.

/* 
function msj (nombre , apellido){
    alert(nombre + " " + apellido)
}

msj("Ezequiel", "Villegas")
msj("Naty", "Sal") 
*/

/* 
function sumar (num1, num2){
    alert(num1 + num2)
}
*/

/* sumar(230, 56) */ 
/* sumar(parseInt(prompt("ingrese un numero")), 200) */
/* sumar(+prompt("ingrese un numero"), 200) */

/* ------------------------------------------------- */

                          //SCOPE

// estas son variables y pueden ser globales y locales.
// se le llama scope al ambito donde esta declarada. se las puede declarar dentro de la funcion o fuera.

//VARAIBLE GLOBAL: cuando esta declarada fuera de cualquier funcion o bloque.

/* let nombre = "juan"

function hola(){
    alert("hola" + " " + nombre);
}
hola();

function chau(){
    alert("chau" + " " + nombre);
}
chau();
*/

/* ---------------- */

//VARIABLES LOCAL: cuando esta declarada dentro de la funcion. esta variables solo sirve dentro de esa

/* function chauLocal(){
    let nombre2 = "roberto"
    alert("chau" + " " + nombre2);
}

chauLocal(); */

/* -------------------------------------------- */

/* function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculadora(10, 5, "*"));

let resultado = calculadora(200,5, "+")
alert(resultado)
alert(resultado + 10) */

/* --------------------------------------------------- */

                    // funciones anonimas

// es una funcion que se define sin nombre y se utiliza prar ser pasada como parametro o asignada a una variable. no tiene nombre la funcion, su nombre esta en la variable.


/* const sumar = function(num1 , num2){return num1 + num2}
const restar = function(num1 , num2){return num1 - num2}

console.log( sumar(15,20) )
console.log( restar(15,5) ) */

                    // funciones flecha

/* 
const sumar = function(num1 , num2){return num1 + num2} */

/* const sumar = (num1, num2) => {return num1 + num2} 

console.log( sumar(15,20) ) */

/*  ---------------------------------------------------------------*/

const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
//                resta(      (500        +         (500*0.21)  )    -50   )
console.log(nuevoPrecio)