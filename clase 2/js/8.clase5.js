                                     //CLASE 5

                                     //OBJETOS

// es una estructura que me permite guardar/agrupar valores bajo un mismo criterio. es una coleccion de datos relacionados como una entidad. contienen propiedades y valores agrupados. 

/* let nombre = "Homero";
let edad   = 39;
let calle  = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal

const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" } */

/* ----------------- */

/* const animalleon = {
    especie: "leon",
    patas: "4", 
    sexo: "M",
    tipo: "carnivoro",
} */

/* const animal = {  especie: "leon", patas: "4",   sexo: "M",  tipo:"carnivoro", } */


/* alert(animal.especie)
alert(animal.tipo)*/

// se puede reasigar los valores dentro del objeto

/* animal.especie = "pato"
animal.patas = "2"

alert(animal.patas)
alert(animal.especie)*/

/* -------------------- */

                             //CONSTRUCTORES

//es una funcion que usamos para crear un objeto cada vez que sea necesario. 

/* function animal(especie, patas, sexo) {
    this.especie = especie;
    this.patas = patas;
    this.sexo = sexo;
}

const animal1 = new animal("leon", 4, "M")

const animal2 = new animal("pato", 2, "F") */

/*  ---------------------------------------------------*/

                         //METODOS Y OPERACIONES CON OBJETOS

//estos metodos son funciones las cuales solo pueden ser ejecutadas dentro del mismo objeto. a diferencia de las funciones las cuales pueden se puden definir desde cualquier parte del objeto.

                          //METODOS EN OBJETOS

/* let texto = "BienVEnidO" */
/* alert(texto.length)  */     //cantidad de caracteres
/* alert(texto.toUpperCase()) */  // pasa a mayuscula
/* alert(texto.toLowerCase()) */  // pasa a minuscula

/* -------------- */

                         //METODOS PERSONALIZADOS
        
/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
    //FUNION ANONIMA, por estar generada adentro.
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
// HOLA SOY HOMERO
persona2.hablar();
// HOLA SOY MARGE*/

/* ---------------------------------------------------------------- */

                           //OPERADOR IN

//devuelve true si la propiedad especificada existe en el objeto

                           // OPERADOR FOR ... IN 
        
//permite acceder a todas las propiedades del objeto, obtiene una propiedad por cada iteracion. 


/* const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}*/

/* ----------------------------------------------------------------------- */

                               //CLASES
    
//sirve para crear objetos personalizados. son una equivalencia al empleo de funcion constructora y permite definir distintos tiposd de metodos. 

/* class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre);
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar();*/


class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
