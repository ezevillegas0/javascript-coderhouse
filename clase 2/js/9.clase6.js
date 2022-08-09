                     //CLASE 6

                              //ARRAYS

// es un tipo de dato que sirve para almacenar valores en forma de lista. esta lista empieza desde el 0.

/* ---------------------------------------------------- */

//tipos de arrays: 

/* // Declaraciòn de array vacío
const arrayA = [];

// Declaracion de array con nùmeros
const arrayB = [1,2];

// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
//               0     1    2

// Declaracion de array con booleanos
const arrayD = [true,false,true,false];
//               0    1     2     3

// Declaracion de array mixto
const arrayE = [1,false,"C4"]; */

/* ---------------------------------------------------------- */

                          //ACCESO A ARRAYS

/* const  numeros = [1,2,3,4,5];

console.log( numeros[0] ) // 1; 
console.log( numeros[3] ) // 4; 
let resultado  = numeros[1] + numeros[2] 
console.log( resultado  ) // 5  */

/* --------------------------------------------------- */

/* const num = [10, 20, 30, 40, 50]
for (let index  = 0 ; index < 5 ; index++){
    alert(num[index])
} */

/* --------------------------------------------------------------- */

                         //LENGHT 

//Al igual que en un String, la propiedad length nos sirve para obtener el largo de un Array, es decir, para identificar cuántos elementos tiene.

/* const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.length ); //imprime 3 */


/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i= 0; i < numeros.length; i++) {
    alert(numeros[i]);
} */

/* ---------------------------------------------------------------- */

                        //AGREGAR ELEMENTOS

// SE AGREGA AL FINAL
//Para sumar un elemento a un Array ya existente, se utiliza el método push, pasando como parámetro el valor (o variable) a agregar.

/* const miArray = ["marca", 3, "palabra"]
miArray.push('otro elemento') 

console.log(miArray.length) // ⇒ 4
console.log(miArray)  //["marca", 3, "palabra", “otro elemento”] */

/* -------------------------------------------------------------------- */

//SE AGREGA AL PRINCIPIO
//El método push () agrega elementos al final del array. Si queremos agregar al inicio del array, utilizamos el método unshift().

/* const miArray = ["marca", 3, "palabra"]
miArray.unshift('otro elemento')

console.log(miArray) */
//[“otro elemento”, "marca", 3, "palabra"]

/* ---------------------------------------------------------------------- */

                         //ELEMINAR ELEMENTOS

//Si queremos eliminar el primer elemento del array utilizamos el método shift(); y si queremos eliminar el último elemento, el método pop().

/* const nombres = ["Luis", "Ana", "Julia", "Juan"]

nombres.pop()
console.log(nombres) // ["Luis", "Ana", "Julia"]    //SACAR EL ULTIMO

nombres.shift()
console.log(nombres) // ["Ana", "Julia", "Juan"] */  //SACAR EL PRIMERO

/* ---------------------------------------------------------------------- */

                                  //SPLICE

//El método splice() permite eliminar uno o varios elementos de un array en cualquier posición. Funciona con 2 parámetros: el primero es el índice donde se ubica el método para trabajar, y el segundo es la cantidad de elementos a eliminar desde esa posición.

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2)

console.log(nombres) */
// ['Rita', 'Ana', 'Vanesa']


/* ---------------------------------------------------------------------- */

                                 //SLICE

//El método slice devuelve una copia de una parte del Array dentro de un nuevo Array, empezando por el inicio hasta fin (fin no incluído). El Array original no se modificará.

/* const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3);  */
// Nuevo array desde la posición 1 a 3. 
// masculinos contiene ['Pedro','Miguel']

/* ---------------------------------------------------------------------- */

                                 //JOIN

//Mediante el método join  podemos generar un string con todos los elementos del array, separados por el valor que pasamos por parámetro.

/* const nombres = ["Luis", "Ana", "Julia", “Juan”]

console.log( nombres.join(“, ”) ) 
// Luis, Ana, Julia

console.log( nombres.join(“*”) ) 
// Luis*Ana*Julia */

/* ---------------------------------------------------------------------- */

                                  //CONCAT

//Mediante el método concat podemos combinar dos Arrays en un único Array.

/* const perros   = ["Pupy", “Ronnie”]
const gatos = ["Mishi", “Garfield”, "Zuri"]

const mascotas = perros.concat(gatos)
console.log(mascotas)
// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"] */

/* ---------------------------------------------------------------------- */

                                //INDEXOF 

//El método indexOf() nos permite obtener el índice de un elemento en un array. Recibe por parámetro el elemento que queremos buscar en el array y, en caso de existir, nos retorna su índice. Si el elemento no existe nos retornará como valor: -1

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log( nombres.indexOf('Rita') ) // ⇒ 0
console.log( nombres.indexOf('Ana') ) // ⇒ 3
console.log( nombres.indexOf('Julieta') ) // ⇒ -1
*/

/* ---------------------------------------------------------------------- */

                               //INCLUDES

//permite saber si un elemento que recibo por parámetro existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo.

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

console.log( nombres.includes('Rita') ) // ⇒ true
console.log( nombres.includes('Miguel') ) // ⇒ true
console.log( nombres.includes('Julieta') ) // ⇒ false 
*/

/* ---------------------------------------------------------------------- */

                               //REVERSE 

//el método reverse() invierte el orden de los elementos dentro de un array.

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

nombres.reverse()
console.log( nombres ) 
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita'] */

/* ---------------------------------------------------------------------- */

                 //EJEMPLO: CARGAR ARRAY CON ENTRADAS

/* //Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5; //hasta cuanto tiene que llegar
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)

//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n")); */

/* ---------------------------------------------------------------------- */

              //EJEMPLO: ELIMINAR CUALQUIER ELEMENTO

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}
 
eliminar('Pedro') */

/* ---------------------------------------------------------------------- */

                             //ARRAY DE OBJETOS
                        
//Los array pueden usarse para almacenar objetos personalizados. Podemos asignar objetos literales o previamente instanciados en la declaración del array o agregar nuevos objetos usando el método push y el constructor.

/* const objeto1 = { id: 1, producto: "Arroz" };
const array   = [objeto1, { id: 2, producto: "Fideo" }];
array.push({ id: 3, producto: "Pan" }); */

/* ---------------------------------------------------------------------- */

                               //FOR...OF

//La sentencia for...of permite recorrer un array ejecutando un bloque de código por cada elemento del objeto.

/* const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
} */

/* ---------------------------------------------------------------------- */

                       //EJEMPLO: OBJETOS, PRODUCTO Y ARRAY

/* 
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){
 producto.sumaIva();
}
console.log(productos)   */

/* ---------------------------------------------------------------------- */






