                               //STORAGE Y JSON

//STORAGE

//El objeto Storage (API de almacenamiento web) permite almacenar datos de manera local en el navegador sin necesidad de realizar ninguna conexión con el servidor. De esta manera, cada cliente puede preservar información de la aplicación.
//El navegador nos ofrece dos tipos de storage: localStorage y sessionStorage.

/* ---------------------------------------------------------------------------------------------- */

                        //LOCALSTORAGE: SETITEM

//Los datos almacenados en localStorage (variable global preexistente) se almacenan en el navegador de forma indefinida (o hasta que se borren los datos de navegación del browser).

// Método ->  localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento 
// valor = valor/contenido del elemento 
/* 
localStorage.setItem('bienvenida', '¡Hola Coder!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);
*/
//La información almacenada en el Storage se guarda en la forma de clave-valor. Similar al tratamiento de objetos, definimos claves en el storage donde almacenamos valores.

/* ---------------------------- -----------*/

                    //LOCALSTORAGE: GETITEM

//Podemos acceder a la información almacenada en localStorage utilizando getItem. Las claves y valores de Storage se guardan en formato de cadena de caracteres (DOMString).

/* 
let mensaje =  localStorage.getItem('bienvenida');
let bandera =  localStorage.getItem('esValido');
let numero  =  localStorage.getItem('unNumero');

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’
*/

/* ---------------------------------------------------------------------------------------------- */

                           //SESSIONSTORAGE: SETITEM

//La información almacenada en sessionStorage (variable global preexistente) se almacena en el navegador hasta que el usuario cierra la ventana. 

/* 
// Método ->  sessionStorage.setItem(clave, valor)
// clave = nombre del elemento
// valor = Contenido del elemento
sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');
*/

/* ----------------------------------------*/

                     //SESSIONSTORAGE: GETITEM

//Podemos acceder a la información almacenada en sessionStorage utilizando getItem. Las claves y valores de Storage se guardan siempre en formato de cadena de caracteres.

/* 
let lista   =  sessionStorage.getItem('seleccionados').split(",");
let bandera = (sessionStorage.getItem('esValido') == 'true');
let email   =  sessionStorage.getItem('email');

console.log(typeof lista);   //object ["1","2","3"];
console.log(typeof bandera); //boolean;
console.log(typeof email);   //string;
*/

/* ---------------------------------------------------------------------------------------------- */

                        //RECORRIENDO EL STORAGE

/* 
//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}
*/

/* ----------------------------------------*/

                   //ELIMINAR DATOS DEL STORAGE

//Podemos eliminar la información almacenada en sessionStorage o localStorage usando el método removeItem o clear.

/* 
localStorage.setItem('bienvenida', '¡Hola Code!');
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');
localStorage.clear()    //elimina toda la información
sessionStorage.clear() //elimina toda la información 
*/

/* ---------------------------------------------------------------------------------------------- */

//JSON

                          //ALMACENAR OBJETOS EN STORAGE
//Si queremos almacenar la información de un objeto en un storage, hay que tener en cuenta que tanto la clave como el valor se almacenan en strings.  Ante cualquier otro tipo a guardar, como un número o un objeto, se convierte a cadena de texto automáticamente. 

//Entonces, al buscar almacenar un objeto sin una transformación previa, guardamos [object Object], la conversión por defecto de objeto a string. Para guardar la información correctamente hay que transformar el objeto a JSON.

/* 
const producto1 = { id: 2, producto: "Arroz" };
localStorage.setItem("producto1", producto1); // Se guarda [object Object]
*/

/* ----------------------------------------*/

                         //ACCESO TIPO OBJETO

//Dado que localStorage y sessionStorage son objetos globales, es posible crear y acceder a las claves como si fueran propiedades. Pero esto no es recomendable, porque hay eventos asociados a la modificación del storage cuando se emplea getItem o setItem.

/* 
//Guarda una clave
localStorage.numeroPrueba = 5;

//Leer una clave
alert( localStorage.numeroPrueba ); // 5

let clave = 'toString';	 //toString método reservado	
localStorage[clave] = "6"; //No se guarda este dato 
*/

/* ---------------------------------------------------------------------------------------------- */

                            //¿QUÉ ES JSON?

//JavaScript Object Notation (JSON) es un formato basado en texto plano, para representar datos estructurados con la sintaxis de objetos de JavaScript. Es comúnmente utilizado para enviar y almacenar datos en aplicaciones web.
//Aunque es muy parecido (casi similar) a la sintaxis de JavaScript, puede ser utilizado independientemente de JavaScript, y muchos entornos de programación poseen la capacidad de leer (convertir; parsear) y generar JSON. JSON es un string con un formato específico.

/* ---------------------------------------------------------------------------------------------- */

                          //CONVERSIONES DE/HACIA JSON

// Cuando sea necesario enviar un objeto Javascript al servidor o almacenarlo en storage, será necesario convertirlo a un JSON (una cadena) antes de ser enviado.
//Cuando sea necesario enviar un objeto Javascript al servidor o almacenarlo en storage, será necesario convertirlo a un JSON (una cadena) antes de ser enviado.

//stringify. acepta un objeto como parámetro, y devuelve la forma de texto JSON equivalente.

//parse. recibe un texto JSON como parámetro, y devuelve el objeto JavaScript correspondiente.

/* ----------------------------------------*/

                           //STRINGIFY

//Con JSON.stringify podemos transformar un objeto JavaScript a un string en formato JSON. 
//acepta com parametro y lo devuelve como texto json.

/* 
const producto1 = { id: 2, producto: "Arroz" };
const enJSON    = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON);    // string

localStorage.setItem("producto1", enJSON);
// Se guarda {"id":2,"producto":"Arroz"}
*/

/* ----------------------------------------*/

                           //PARSE

//Con JSON.parse podemos transformar string en formato JSON a objeto JavaScript. 
//recibe un texto json y lo devuelve en javascript.

/*
const enJSON    = '{"id":2,"producto":"Arroz"}';
const producto1 = JSON.parse(enJSON);

console.log(typeof enJSON);     // string
console.log(typeof producto1);  // object
console.log(producto1.producto); // Arroz

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id);  // 2      
*/

/* ----------------------------------------*/

//EJEMPLO: ALMACENAR ARRAY DE OBJETOS

/* 
const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos)); 
*/

/* ----------------------------------------*/

                //RECUPERAR DATOS

//Muchas veces usamos el Storage para recuperar datos relacionados a la última navegación del usuario. Por ejemplo, su última sesión de login o el último estado de su carrito de compras. Para esto, pensamos en inicializar las variables de la app consultando el Storage en el momento de inicio.

/* ----------------------------------------*/

//EJEMPLO APLICADO: RECUPERAR ESTADOS PREVIOS

/* 
let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem(‘usuario’))


// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS) {
    usuario = usuarioEnLS
} else {
    usuario = prompt(‘Ingrese su nombre de usuario’)
}
*/
