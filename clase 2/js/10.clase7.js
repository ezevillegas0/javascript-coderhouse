                            //CLASE 7

                    //FUNCIONES DE ORDEN SUPERIOR 

//Es aquella que bien retorna una función, o recibe una función por parámetro. Se puede tener funciones separadas, y al juntarlas se crea una funcion de orden superior.

/* ---------------------------------------------------------------------- */

                           //RETORNAR FUNCIONES

//podremos tener una función que retorna una función, lo cual nos permitiría crear funciones con un esquema superior. 

/* function mayorQue(n) {
    return (m) => m > n
}

let mayorQueDiez = mayorQue(10)

console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false */

/* ---------- */

/* function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2 */

/* ---------------------------------------------------------------------- */

                     //RECIBIR FUNCIONES POR PARÁMETRO

//Significa escribir funciones que puedan recibir funciones por parámetro.

/* function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

const numeros= [1, 2, 3, 4]

porCadaUno(numeros, console.log)
// 1
// 2
// 3
// 4

let total = 0

function acumular(num) {
    total += num
}

porCadaUno(numeros, acumular)
console.log(total) // 10 
 */
/* ---------------------------------------------------------------------- */

                           //ARROW FUNCTION

//Es usual definir la función directamente sobre el parámetro como una función anónima, aprovechando la sintaxis de arrow function. Esto permite definir acciones más dinámicas.

/* const duplicado = []

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})

console.log(duplicado) // [2, 4, 6, 8] */

/* ---------------------------------------------------------------------- */

                    //MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN

                              //FOR EACH

//Itera sobre el array y por cada elemento ejecuta la función que enviemos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo.

/* const numeros = [1, 2, 3, 4, 5, 6]

numeros.forEach( (num)=> {
    console.log(num)
} ) */

/* ---------------------------------------------------------------------- */

                                //FIND

//El método find() recibe una función de comparación por parámetro. Captura el elemento que se está recorriendo y retorna true o false según la comparación ejecutada.El método retorna el primer elemento que cumpla con esa condición.

/* const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined */

/* ---------------------------------------------------------------------- */

                               //FILTER

//El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. Si no hay coincidencias, retornará un array vacío.

/* const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log(resultado) */
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

/* console.log(resultado2) // [] */

/* ---------------------------------------------------------------------- */

                                 //SOME

//El método some() funciona igual que el find() recibiendo una función de búsqueda. En vez de retornar el elemento encontrado, some() retorna true o false según el resultado de la iteración de búsqueda.

/* console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false */

/* ---------------------------------------------------------------------- */

                                //MAP

//El método map() crea un nuevo array con todos los elementos del original transformados según las operaciones de la función enviada por parámetro. Tiene la misma cantidad de elementos pero los almacenados son el return de la función

/* const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ] */

// Map() se utiliza mucho para transformación de arrays.

/* ---------------------------------------------------------------------- */

                                //REDUCE

//El método reduce() nos permite obtener un único valor tras iterar sobre el array. Funciona como un método que resume el array a un único valor de retorno. 

//A diferencia de los métodos anteriores, el método reduce recibe dos parámetros. 1. la funcion que queremos resumir del array. recibe un parametro que funciona como acumulador, y el elemento del array que iteramos. 2. valor inicial del acumulador

/* const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21 */

/* ------------ */

/* const miCompra = [
    { nombre: 'Desarrollo Web', precio: 20000 },
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 }
]

const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
console.log(total) // 66250 */

/* ---------------------------------------------------------------------- */

                              //SORT

//El método sort() nos permite reordenar un array según un criterio que definamos. Recibe una función de comparación por parámetro que, a la vez, recibe dos elementos del array. La función retorna un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después.

/* const numeros = [ 40, 1, 5, 200 ];
numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ] */

//Para ordenar un array por algún string, debemos definir una función comparadora que retorne un valor numérico de referencia, según queramos el orden ascendente o descendente. 

/* const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
  ]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
}) */

/* ---------------------------------------------------------------------- */

//EJEMPLO

/* const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) //{id: 3, producto: "Pan", precio: 50}

const existe = productos.some(producto => producto.nombre === “Harina”)
console.log(existe ) // false

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos)
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres);
//[“Arroz”, “Fideo”, “Pan”, “Flan”] */

/* ---------------------------------------------------------------------- */

                             //OBJETO MATH

//el objeto Math que funciona como un contenedor de herramientas y métodos para realizar operaciones matemáticas.

/* ---------------------------------------------------------------------- */

                            //PROPIEDADES

//Se puede acceder a algunas constantes matemáticas a través del objeto Math, como pueden ser el número PI o la constante de Euler.

/* console.log( Math.E ) // 2.718281828459045
console.log( Math.PI ) // 3.141592653589793 */

/* ---------------------------------------------------------------------- */

                    //METODOS DEL OBJETO MATH

                        //MIN & MAX

//Los métodos de Math.min() y Math.max() reciben una serie de argumentos numéricos y devuelven aquel de valor máximo o mínimo.

/* console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93
console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25 */

//También se pueden referenciar los valores de infinito positivo o negativo a través de la variable global Infinity.

/* console.log( Math.max(55, Infinity, 0, -25, 93, 4) ) // Infinity
console.log( Math.min(55, 13, 0, -Infinity, 93, 4) ) // -Infinity */

/* ---------------------------------------------------------------------- */

                         // CEIL, FLOOR & ROUND

//Sirven para redondear un valor numérico a un número entero cercano.

/* const pi = Math.PI // 3.141592653589793

// CEIL: devuelve el entero mayor o igual más próximo
console.log( Math.ceil(pi) ) // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log( Math.floor(pi) ) // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log( Math.round(pi) ) // 3 */

/* ---------------------------------------------------------------------- */

                          //SQUARE ROOT

//El método Math.sqrt() retorna la raíz cuadrada de un número. Si se le envía un número negativo, el método retorna NaN.

/* Math.sqrt(9) // 3
Math.sqrt(2) // 1.414213562373095
Math.sqrt(1)  // 1
Math.sqrt(-1) // NaN */

/* ---------------------------------------------------------------------- */

                            //RANDOM

//El método Math.random() genera un número pseudo-aleatorio entre 0 y 1, siendo el 0 límite inclusivo y el 1 exclusivo.

/* console.log( Math.random() ) // 0.6609867980868442
console.log( Math.random() ) // 0.09291446900104305
console.log( Math.random() ) // 0.6597817047013095 */

//Para generar números aleatorios dentro de un rango deseado, distinto de 0-1, podemos multiplicar su resultado por el rango esperado. A la vez podemos sumar el límite inferior si lo necesitamos.

/* // números entre 0 y 10
console.log( Math.random() * 10 )
// números entre 0 y 50
console.log( Math.random() * 50)
// números entre 20 y 50
console.log( Math.random() * 30 + 20 ) */

/* ---------------------------------------------------------------------- */

                             //REDONDEO                  

//Al usar Math.round, esta función retornará números aleatorios en el rango de 0-100 inclusive. Si usara Math.ceil los números irían de 1 a 100, ya que siempre redondeará hacia arriba; y si usa Math.floor el rango sería de 0 a 99.

/* const generadorNumero = () => {
    return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() ) */
/* ---------------------------------------------------------------------- */

                          //LA CLASE DATE 

//representa fechas. 

                               //DATE

//Instanciar un objeto Date nos genera la fecha y tiempo actual.

/* console.log( new Date() )
// Fri Dec 17 2021 11:35:08 GMT-0300 (hora estándar de Argentina) */

/* ---------------------------------------------------------------------- */

                           //CONSTRUCTOR

//El constructor de la clase Date nos permite crear objetos date con fechas diferentes. Puede recibir parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos (todos tipo number).

//La convención con la que trabaja Javascript para construir fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre) y los días a partir del 1.

/* console.log(new Date(2020, 1, 15)) */
// Sat Feb 15 2020 00:00:00 GMT-0300 (hora estándar de Argentina)

/* const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
console.log(casiNavidad) */
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

/* ------------- */

//También puede crear una fecha a partir de un string con formato específico.

/* const casiNavidad = new Date("December 25, 2021 23:59:59")
console.log(casiNavidad) */
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

/* ---------------------------------------------------------------------- */

                 //EJEMPLOS DE DIFERENCIAS ENTRE FECHAS

/* const navidad = new Date("December 25, 2021")
const hoy = new Date("December 17, 2021")

console.log( navidad - hoy ) // 691200000 milisegundos

const milisegundosPorDia = 86400000

console.log( (navidad - hoy ) / milisegundosPorDia) // 8 */

/* ---------- */

/* const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos")
// El proceso tardó: 396 milisegundos */

/* ---------------------------------------------------------------------- */



