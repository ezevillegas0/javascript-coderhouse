                              /* CLASE 2 */

/* alert("hola"); */

                            /* CONDICIONALES */

/* if(true) {                   si es true muestra el mensaje
    alert("es true!!!")

}

if(false){                      si es false no muestra el mensaje
    alert("es true!!!")
}*/

//////////////////////////////////////////////////////////////////////

/* COMPARACIONES */

/* let num = 100

if (num > 150){ // si .....
    alert ("el numero es mayor a 150")
    
}else{         // el resto... si no ...
    alert("el numero es menor a 150")
}
*/

/* ------------------------------------------------------------ */

/* let unNumero = 5

//con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5)[
    alert("vas a ver este mensaje")

]

//con (unNumero == 6) comparamos si unNumero es igual a 6
if(unNumero == 6){
    alert("no vas a ver este mensaje")
} */

/* ----------------------------------------------------------------- */

// EJERCICIO 1

// bar >= 18 para ingresar

/* let edad = prompt("ingrese su edad") */

/* if(edad >= 18){
    alert("puede ingresar")
}else{
    alert("no puede ingresar")
}*

/* ------- */

/* if(edad > 18){
    alert("puede ingresar")
}else if (edad<18){            // si no .... si
    alert("no puede ingresar")
}else if (edad ==18){
    alert("tiene 18, puede pasar")
}else{
    alert("no ingreso su edad")
} */

/* ----------------------------------------------------------------------- */

/* let a ="10" */                 //string

/* console.log(a + 10) */         // el resultado es 1010
  
/* a = parseInt(a)  */           // pasa un dato(string) a u numero

/* console.log(a + 10)  */           // el resultado es 20

/* --------------------------- */

/* let a = 50   */                     // numero

/* a = parseFloat(a)    */            // pasa un numero entero a un decimal

/* console.log(a + 10.40)   */          // el resultado es 60.4

/* ----------------------------------------------------------------------- */

//EJERCICIO CON PROMT

/* let edad = parseInt(prompt("ingrese su edad"))

if(edad > 18){
    alert("puede ingresar")
}else if (edad<18){            // si no .... si
    alert("no puede ingresar")
}else if (edad ==18){
    alert("tiene 18, puede pasar")
}else{
    alert("no ingreso su edad")
} */

/* ------------------------------------------------------------------------ */

/* a == b // es igual

a === b // es estrictamente igual

a != b  // es distinto

a !== b // es estrictamente distinto

<, <=, >, >=  // menor, menor igual, mayor, mayor igual

a && b  // operador and (y)

a || b  // operador or (o)

!a     // operador not (a) */


/* ----------------- */

//AND --> &&    se tien que cumplir todo

//  COLOR = blanco AND botones == true -> control del aire

/* let esBlanco = true
let tieneboton = true

if(esBlanco && teieneboton){         // es blanco y tiene botones
    alert("es el control del aire")
}


//OR --> ||    se tiene que cumplir una sola condicion

let esBlanco = true
let tieneboton = true
if( esBlanco || tieneboton)     // es blanco o tiene botones */


/* ---------------------------------------------------------------------------- */

/* let nombreIngresado = prompt("ingresar nombre")
let apellidoIngresado = prompt("ingrese apellido")

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("nombre: " +nombreIngresado + "\nApellido: " +apellidoIngresado);
}else{
    alert("error: ingresar nombre y apellido")
} */


/* ------------------------ */

/* let nombreIngresado = prompt("ingresar nombre")

if((nombreIngresado != "") && ((nombreIngresado =="EMMA") || (nombreIngresado=="emma") || (nombreIngresado == "Emma"))){
    alert("hola Emma")
}else{
    alert("error: ingrersar nombre valido")
} */
