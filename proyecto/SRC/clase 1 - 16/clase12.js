                     //CLASE 12

                    //OPERADORES AVANZADOS

//SUGAR SYNTAX

//Es el nombre que se le da a los operadores avanzados que funcionan como simplificaciones de tareas más complejas. El operador ++ es un ejemplo de esto.

/* ---------------------------------------------------------------------- */

                   //OPERADOR ++

/* 
let num = 10

// aumentar en 1 el valor
num = num + 1

// primera simplificacion
num += 1

// o bien
num++ 
*/

/* ---------------------------------------------------------------------- */

                //OPERADOR TERNARIO

//Es una simplificación de la estructura condicional if…else. -la condición, -el caso de ejecución en caso que se cumpla, -el caso else si no se cumple.

/* 
let temperatura = 31

if (temperatura > 30) {
  alert("Día caluroso!")
} else {
  alert("Día agradable")
}
*/

condicion  ?  caso1  :  caso2

//temperatura > 30 ? alert("Día caluroso!") : alert("Día agradable")

/* 
let permiso

if (usuario.edad >= 18) {
  permiso = true
} else {
  permiso = false
}

if (permiso) {
  alert("Puede comprar cerveza")
} else {
  alert("No puede comprar")
}
 
*/

/* 
const usuario = {
  nombre: "John Doe",
  edad: 22
}

// declaramos y asignamos condicionalmente
const permiso = (usuario.edad >= 18) ? true : false

// mostramos el mensaje
permiso ? alert("Puede comprar cerveza") : alert("No puede comprar")
*/

/* ---------------------------------------------------------------------- */

                          //OPERADOR LÓGICO AND

//Es una reducción de un condicional, pero trata de ejecutar (o retornar) algo sólo si la condición es verdadera, reduce un if sencillo con un solo bloque de ejecución.

/* 
const carrito = []

if (carrito.length === 0) {
  console.log("El carrito está vacío!")
}

// con operador AND
carrito.length === 0 && console.log("El carrito está vacío!")

*/

/*-------------------- */

//También tienen un return implícito. En este ejemplo, si el usuario tiene edad mayor o igual que 18 se almacena una nueva fecha en la variable.

/* 
const usuario = {
  nombre: "John Doe",
  edad: 14
}

const registroIngreso = usuario.edad >= 18 && new Date()

console.log(registroIngreso)
*/

//En el caso de que la condición resulte falsa, el operador AND retornará false en cambio.

/*  
const usuario = {
  nombre: "John Doe",
  edad: 14
}

const registroIngreso = usuario.edad >= 18 && new Date()

console.log(registroIngreso) // FALSE
*/

/* ---------------------------------------------------------------------- */

                    //OPERADOR LÓGICO OR

//OR ( || ) es sintácticamente similar al anterior, con la diferencia que consta de dos operandos y no de una condición explícita: operando1 || operando2. 
//si no es falsy el operador OR retorna operador1 , de lo contario retornara el operador2.

console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy

/*-------------------- */

//Es versátil para condicionar asignaciones de variables o de parámetros sencillamente 👇

/*  
const usuario1 = {
  nombre: "John Doe",
  edad: 14
}
const usuario2 = null

console.log( usuario1 || "El usuario no existe" )
// { nombre: 'John Doe', edad: 14 }

console.log( usuario2 || "El usuario no existe" )
// El usuario no existe
*/

/*-------------------- */

//Por ejemplo, para recuperar el último estado de un carrito de compras del usuario almacenado en localStorage al iniciar mi app podría hacer esto:

/*  
let carrito

let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )

if (carritoLocalStorage) {
  carrito = carritoLocalStorage
} else {
  carrito = []
}
*/

//🛒 O simplificar el proceso con el operador lógico OR ( || ).

/* 
const carrito = JSON.parse(localStorage.getItem('carrito')) || []
*/

/* ---------------------------------------------------------------------- */

                   //OPERADOR NULLISH COALESCING

//Este Operador (??) funciona igual que el Operador OR ( || ), con la diferencia que admite más valores como ‘verdaderos’. En este caso, sólo obtenemos nullish en dos casos.

console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // ""
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( false ?? "Nullish")  // false

/* ---------------------------------------------------------------------- */

                 //ACCESO CONDICIONAL A UN OBJETO

//Si intentamos acceder a un objeto que no existe naturalmente obtendremos un error. Pero, si usamos el operador ? sobre la referencia de un objeto para condicionar su acceso podemos tener un mejor control de errores en la ejecución.

/* 
const usuario = null

console.log( usuario.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"

console.log( usuario?.nombre || "El usuario no existe")
// "El usuario no existe"

//También puede aplicarse sobre propiedades que sean objetos para evaluar su existencia/validez y controlar los flujos del programa:

/* 
const usuario = {
  nombre: "John Doe",
  edad: 22,
  cursos: {
    javascript: "aprobado"
  }
}

console.log( usuario?.cursos?.javascript || "La propiedad no existe")
// "aprobado"
console.log( usuario?.trabajos?.coderhouse || "La propiedad no existe")
// "La propiedad no existe"
*/

/* ---------------------------------------------------------------------- */

                           //DESESTRUCTURACIÓN

// técnica que nos permite declarar variables donde guardar propiedades de un objeto de forma rápida y directa. 
/* 
let { prop1, prop2 } = objeto
 */
//estamos creando dos variables, prop1 y prop2, donde se almacenan las propiedades con el mismo nombre del objeto que referenciamos a la derecha.  
//Es decir, los nombres de las variables deben coincidir exactamente con los nombres de las propiedades que queremos obtener del objeto. 
/* 
const usuario = {
  nombre: "John Doe",
  edad: 32
}

const { nombre, edad } = usuario

console.log(nombre) // "John Doe"
console.log(edad) // 32
 */
//Si intentamos desestructurar una propiedad inexistente en el objeto, obtendremos undefined.
/* 
const usuario1 = {
  nombre: "John Doe",
  edad: 32
}

const { telefono } = usuario // undefined
 */
//Si queremos acceder a propiedades más internas dentro de un objeto, es decir desestructurar alguna propiedad que sea a la vez un objeto, es posible hacerlo siguiendo el mismo patrón.
/* 
const usuario2 = {
  nombre: "John Doe",
  edad: 32,
  telefono: {
      cel: 113334444,
      casa: null,
      trabajo: 113325555
  }
} */

//En este caso, como teléfono es un objeto, desestructuramos la propiedad trabajo de éste, dentro de la desestructuración de usuario. Nótese que finalmente se terminan declarando dos variables, nombre y trabajo.
/* 
const { nombre1, telefono: {trabajo} } = usuario

console.log(nombre) // "John Doe"
console.log(trabajo) // 113325555
 */
/* ---------------------------------------------------------------------- */

                              //ALIAS

//podemos desestructurarlas con un alias, es decir declarar la variable con un nombre alternativo tras haber desestructurado el objeto.
//Esto lo hacemos simplemente con el operador : luego del nombre de la propiedad.
//En este caso desestructuramos todas las propiedades de item, pero lo almacenamos en variables denominadas id, nombre, precio, a través del alias que indicamos para cada una.
/* 
const item = {
  item_id: 432,
  product_name: "Some product",
  price_per_unit: 5600
}

const {
  item_id: id,
  product_name: nombre,
  price_per_unit: precio
} = item

console.log(id) // 432
console.log(nombre) // "Some product"
console.log(precio) // 5600
 */
/* ---------------------------------------------------------------------- */

                     //Desestructuración en parámetros

//Si en una función recibimos objetos por parámetros, también es posible desestructurarlos directamente en el llamado, definiendo esto al declarar la función. 
/* 
const producto = {
  id: 10,
  nombre: "Curso Javascript",
  precio: 12500
}

const desestructurar = (item) => {
  // desestructurando dentro del bloque
  const {id, nombre} = item
  console.log(id, nombre)
}

desestructurar(producto) // 10 Curso Javascript
*/

//Sabiendo qué es lo que vamos a recibir y qué necesitamos desestructurar, podemos traducir esto con la siguiente lógica:

// desestructurando lo que reciba por parámetro
/* const desestructurar = ( {id, nombre} ) => {
  console.log(id, nombre)
}

desestructurar(producto) // 10 Curso Javascript */

/* ---------------------------------------------------------------------- */
 
                       //Desestructuración de arrays

//Es posible desestructurar arrays de forma similar, usando corchetes [] en vez de llaves. La diferencia con la desestructuración de objetos es que la de arrays es posicional. 
//Es decir, declaramos las variables en orden y estas almacenan los valores de las mismas posiciones del array de referencia.

/* 
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

const [a, b] = nombres

console.log(a) // "Juan"
console.log(b) // "Julieta"
*/

//No funciona aquí la coincidencia por nombres, sino que se toman los valores según la posición. Las dos primeras variables que declaramos tomarán los valores de los dos primeros elementos del array. Si queremos acceder a otras posiciones, o mejor dicho omitir las primeras, podemos hacerlo dejando espacios vacíos con comas.

/* 
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

// omito las dos primeras posiciones
const [,, a, b] = nombres

console.log(a) // "Carlos"
console.log(b) // "Mariela"
*/

/* ---------------------------------------------------------------------- */

                               //SPREAD

//OPERADOR SPREAD

//Spread ( … ) es una herramienta que nos permite, como su nombre indica, desparramar un array u objeto. En otras palabras, cambiar la forma en la que presentamos este array u objeto. 

//SPREAD DE ARRAYS

//Si paso un array por parámetro a alguna función, ésta recibe el array entero como tal 👇

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

//Si en cambio enviamos un spread del array, veremos lo siguiente:

const nombres1 = ["Juan", "Julieta", "Carlos", "Mariela"]

// spread ... del array
console.log(...nombres) // Juan Julieta Carlos Mariela

// equivalente a:
console.log("Juan", "Julieta", "Carlo", "Mariela")

/* ------------------------------- */

//Necesito saber cuál es el menor o mayor de este array de números:

const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

console.log( Math.max(numeros) ) // NaN

//Con el operador spread podemos solucionar esto ya que Math.max() recibirá cada elemento del array como un parámetro individual:

const numero2 = [4, 77, 92, 10, 3, -32, 54, 11]

console.log( Math.max(...numeros) ) // 92

//También podemos hacer spread de un array dentro de otras estructuras que lo admitan. Esto nos permite, por ejemplo, replicar el contenido de un array dentro de otra estructura al desparramar su contenido dentro. 

/* 
const nombres1 = ["Juan", "Julieta"]
const nombres2 = ["Carlos", "Mariela"]

// spread de los dos arrays dentro de otro
const nombres = [...nombres1, ...nombres2]

console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

// spread del array en un objeto
const nombresObj = {
    ...nombres
}

console.log(nombresObj)
// { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' }
*/

/* ---------------------------------------------------------------------- */

                            //Spread de objetos

//Se puede hacer spread de objetos también, pero debe hacerse dentro de una estructura que lo permita, como otro objeto. 
//spread aplicado sobre un objeto presentaría cada par de clave-valor separado por comas, y ésto en una función no sería admisible, pero sí puede serlo dentro de otro objeto.
//Esto suele ser útil cuando queremos replicar o modificar estructuras de objetos, ya que nos permite primero listar todas sus propiedades y valores y luego modificar/agregar las que queramos:

/* 
const usuario1 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
}

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario2 = {
    ...usuario1
}

console.log(usuario2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

const usuario3 = {
    ...usuario1,
    curso: "ReactJS",
    email: "juan@doe.com"
}

console.log(usuario3)
// { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }

*/

/* ---------------------------------------------------------------------- */

                                     //Rest Parameters

//El operador spread también puede utilizarse dentro de la declaración de una función para indicar que queremos recibir una cantidad indeterminada de parámetros. Supongamos que quiero tener una función para sumar cualquier cantidad de números que reciba por parámetro.
//Puedo hacer esto con el operador spread definiendo rest parameters, lo que significa que mi función va a recibir una cantidad indeterminada de parámetros, pero los va a agrupar dentro de un array con el nombre que defina, y con eso trabajará dentro:
/* 
function sumar(...numeros) {
    console.log(numeros)
}

sumar(4, 2) // [ 4, 2 ]
sumar(10, 15, 30, 5) // [ 10, 15, 30, 5 ]
*/



/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */







