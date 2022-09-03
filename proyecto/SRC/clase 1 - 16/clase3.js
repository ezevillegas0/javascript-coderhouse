/* ------------------------------------------------------------------------------- */

                                  /* CLASE 3 */

/* cliclos : son un bloque de codigo que se va a repetir continuamente la cantidad de veces que yo desee. 

estructuras de bucles de JavaScript: estas puede ser por:
-conteo: // numero de veces especifico
for

-condicionales:  // mientras la condicion evaluada es verdadera
while
do...while
*/ 

/* ----------------- */

/* let num = 100
num++ //--> 101   incrementa de a uno 
num-- //--> 99    derecrementa de a uno */

/* ------------------------------------------------------------- */

                                     /* FOR */

                                     
// cuando uno esta seguro del numero de interacciones.
// mostrarun numero desde el 0 hata el 10

//----  i=0   ;        ; +1
/* for(let i = 0 ; i < 11 ; i++){     // mientras que el numero sea menor a 10, va a sumar uno por vuelta
    alert(i)

} */

/* --------------- */

/* // ej de tablas
//solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("ingresar numero"));
// en cada repeticion calculamos el numero ingresado X por el numero de repeticion(i)
for(let i = 1; i<= 10 ; i++){
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero + " X "+ i +" = "+ resultado); 
} */

/* ----------- */

/* for(let i = 1; i <= 10; i++){

    let ingresarNombre = prompt("ingresar nombre");
    if(i == 5){
        //break;       //corta
        continue;      //salta
    }

    alert (" turno N "+i+" nombre "+ingresarNombre);

} */

/* -------------------------------------------------------------------- */

                                     /* WHILE */

/* permite crear bucles que se ejecuran 0 o mas veces, esto va a depender de la condicion indicada. mientras que se cumpla la condicion indicada, se repite las intrucciones incluidas dentro del bucle.   */

//EVALUA --> HACE

/* let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
} */


                                    //DO ... WHILE

/* permite crear bucles que se ejecutan una o mas vecez, dependiendo de la condicion indicada. el bloque de codigo se interpreta al menos una vez, la condicion se evalua al final.    */

//HACE --> EVALUA

/* let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));*/


/* do{
    alert("no ingresaste el primer numero")
    primerNumero = parseInt(prompt("ingresa nuevamente el primer numero"))

}while(isNaN(primerNumero)) */

/* ------------------------------------------------------------------ */

                            /* SWITCH */

/* let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
} */ 

/* ------------------------------------------------------------------- */

// PEDIR UN TEXTO MEDIANTE EL PROMPT Y SI ES IGUAL A HOLA, MOSTRAR UN ALERT POR CONSOLA.

/* let texto = prompt("ingresar un texto")

if(texto === "hola" || texto === "Hola" || texto === "HOLA"){
    console.log("el texto dice hola")
}else{
    console.log("el texto no dice hola")
} */

/* -------- */

/* let texto = prompt("ingresar un texto")

if(texto.toUpperCase() ===  "HOLA"){
    console.log("el texto dice hola")
}else{
    console.log("el texto no dice hola")
}*/

/* ------------------------------------------------------------------ */

// PEDIR UN NUMERO POR PROMPT Y EVALUAR SI ESTA ENTRE 10 Y 50

/* let numero = parseInt(prompt("ingresar un numero"));

if(numero >= 10 &&  numero <= 50 ){
    alert("el numero esta entre 10 y 50")
}else{
    alert("el numero esta fuera del intervalo")
} */