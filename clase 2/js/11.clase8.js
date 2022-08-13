                       //CLASE 8

             //DOM (Document Object Model)

//es una estructura de objetos generada por el navegador, la cual representa la página HTML actual. desde JavaScript podemos modificar el texto contenido de una etiqueta <h1>.

//La estructura de un documento HTML son las etiquetas. En el Modelo de Objetos del Documento (DOM), cada etiqueta HTML es un objeto, al que podemos llamar nodo. Las etiquetas anidadas son llamadas “nodos hijos” de la etiqueta “nodo padre” que las contiene.

//un nodo es una etiqueta.

//Todos estos objetos son accesibles empleando JavaScript mediante el objeto global document.

/* ---------------------------------------------------------------------- */

                            //ESTRUCTURA

//Cada etiqueta HTML se transforma en un nodo de tipo "Elemento". La conversión se realiza de forma jerárquica.

//De esta forma, del nodo raíz solamente pueden derivar los nodos HEAD y BODY.

//Cada etiqueta HTML se transforma en un nodo que deriva del correspondiente a su "etiqueta padre".

//La transformación de las etiquetas HTML habituales genera dos nodos: 

//-NODO ELEMENTO, corresponde a la etiqueta HTML. ej <h1>.

//-NODO TEXTO, contiene el texto encerrado por esa etiqueta HTML. ej "este es el titulo"

/* ---------------------------------------------------------------------- */

                  //EJEMPLO: ACCESO POR OBJETO document
/* 

console.dir(document);
console.dir(document.head)
console.dir(document.body);

//El acceso a body usando la referencia document.body requiere que el script se incluya al final del <body> en el HTML.

<body>
    <h2>Coder House</h2>
    <script src="js/main.js"></script>
</body>

*/

/* ---------------------------------------------------------------------- */

                 //TIPOS DE NODOS

//DOCUMENT .Nodo raíz del que derivan todos los demás nodos del árbol.

//ELEMENT. Representa cada una de las etiquetas XHTML. Puede contener atributos y derivar otros nodos de él.

//ATTR. Se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML, es decir, uno por cada par atributo=valor.

//TEXT. Nodo que contiene el texto encerrado por una etiqueta HTML.

//COMMENT. Representa los comentarios incluidos en la página HTML.

/* ---------------------------------------------------------------------- */

                //ACCEDER A LOS NODOS

//Existen distintos métodos para acceder a los elementos del DOM empleando en la clase Document. 

                 //GETELEMENTBYID()

//El método getElementById() sirve para acceder a un elemento de la estructura HTML, utilizando su atributo ID como identificación. 
/* 
//CODIGO HTML DE REFERENCIA
<div id = "app">
<p id = "parrafo1" >Hola Mundo</p>
</div>

//CODIGO JS
let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);
*/

/* let div     = document.getElementById("app").innerHTML */
/* let parrafo = document.getElementById("parrafo1").innerHTML */

/* ---------------------------------------------------------------------- */

                //GETELEMENTSBYCLASSNAME()

//El método getElementsByClassName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su atributo class como identificación. Se retornará un Array de elementos con todas las coincidencias.
/* 
//CODIGO HTML DE REFERENCIA
<ul>
<li class="paises">AR</li>
<li class="paises">CL</li>
<li class="paises">UY</li>
</ul>
//CODIGO JS
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);
*/

/* ---------------------------------------------------------------------- */

                  //GETELEMENTSBYTAGNAME()

//El método getElementsByTagName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su nombre de etiqueta como identificación. Esta opción es la menos específica de todas, ya que es muy probable que las etiquetas se repitan en el código HTML.

/* 
//CODIGO HTML DE REFERENCIA
<div>
<div>CONTENEDOR 2</div>
      <div>CONTENEDOR 3</div>
</div>
//CODIGO JS
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);
*/

/* ---------------------------------------------------------------------- */

                    //QUERY SELECTOR

//El método querySelector() nos permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores de CSS.

/* 
<div id=”contenedor”>
    <p class=”texto”></p>
</div>

// puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores:
let parrafo = document.querySelector("#contenedor p")
// seleccionar sólo el contenedor por id con #
let contenedor = document.querySelector("#contenedor")

// o por clase:
let parrafo = document.querySelector(".texto")
*/

//también aplica a pseudo-clases de CSS, brindando un nivel más avanzado de precisión.

/* 
let radioChecked = document.querySelector(".radio:checked") */

//Suponiendo que tengo elementos html radio button y quiero seleccionar sólo aquel que esté en checked, ésto lo puedo lograr muy fácil con querySelector y la pseudo-clase :checked de CSS.

/* ---------------------------------------------------------------------- */

                //QUERY SELECTOR ALL

//Query Selector me retorna el primer elemento que coincida con el parámetro de búsqueda, o sea un sólo elemento. Si quiero obtener una colección de elementos puedo utilizar el método querySelectorAll() siguiendo el mismo comportamiento.

/* ---------------------------------------------------------------------- */

//EJEMPLO: RECORRE HTMLCollection CON FOR...OF

/* 
let paises       = document.getElementsByClassName("pais");
let contenedores = document.getElementsByTagName("div");

for (const pais of paises) {
    console.log(pais.innerHTML);
}

for (const div of contenedores) {
    console.log(div.innerHTML);
}
*/

/* ---------------------------------------------------------------------- */

               //MODIFICAR NODOS

                 //INNER TEXT

//La propiedad innerText de un nodo nos permite modificar su nodo de texto. Es decir, acceder y/o modificar el contenido textual de algún elemento del DOM.

/* 
//CODIGO HTML DE REFERENCIA
<h1 id=”titulo”>Hola Mundo!</h1>
//CODIGO JS
let titulo = document.getElementById("titulo")
console.log( titulo.innerText ) // “Hola Mundo!”
// cambio el contenido del elemento
titulo.innerText = “Hola Coder!”
console.log( titulo.innerText ) // “Hola Coder!” 
*/

//innerHTML permite definir el código html interno del elemento seleccionado. El navegador lo interpreta como código HTML y no como contenido de texto, permitiendo desde un string crear una nueva estructura de etiquetas y contenido. 

//Al pasar un string con formato de etiquetas html y contenido a través de la propiedad innerHTML, el navegador genera nuevos nodos con su contenido dentro del elemento seleccionado.

/* 
//CODIGO HTML DE REFERENCIA
<div id=”contenedor”></div>
//CODIGO JS
let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = “<h2>Hola mundo!</h2><p>Lorem ipsum</p>”

//Resultado en el DOM
<div id=”contenedor”>
    <h2>Hola mundo!</h2>
    <p>Lorem ipsum</p>
</div>
*/

/* ---------------------------------------------------------------------- */

                           //CLASS NAME

//A través de la propiedad className de algún nodo seleccionado podemos acceder al atributo class del mismo y definir cuáles van a ser sus clases.

/* 
//CODIGO HTML DE REFERENCIA
<div id=”contenedor”></div>
//CODIGO JS
let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = “<h2>Hola mundo!</h2>”
// cambio el atributo class
container.className = “container row”
//Resultado en el DOM
<div id=”contenedor” class=“container row”
    <h2>Hola mundo!</h2>
</div> 
*/

/* ---------------------------------------------------------------------- */

                      //AGREGAR O QUITAR NODOS

                    //CREACIÓN DE ELEMENTOS

//Para crear elementos se utiliza la función document.createElement(), y se debe indicar el nombre de etiqueta HTML que representará ese elemento. Luego debe agregarse como hijo el nodo creado con append(), al body o a otro nodo del documento actual.
/* 
// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.append(parrafo); 
*/


/* ---------------------------------------------------------------------- */

                           //ELIMINAR ELEMENTOS

//Se pueden eliminar nodos existentes y nuevos. El método remove() permite eliminar un nodo seleccionado del DOM.

/* 
let parrafo = document.getElementById("parrafo1");
//Elminando el propio elemento
parrafo.remove();

let paises = document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paises[0].remove()
*/

/* ---------------------------------------------------------------------- */

                          //OBTENER DATOS DE INPUTS

//Para obtener o modificar datos de un formulario HTML desde JS, podemos hacerlo mediante el DOM. Accediendo a la propiedad value de cada input seleccionado.

/* 
//CODIGO HTML DE REFERENCIA
<input id = "nombre" type="text">
<input id = "edad"   type="number">

//CODIGO JS
document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value   = 39;
*/

/* ---------------------------------------------------------------------- */

              //EJEMPLO: CREANDO OPCIONES DESDE UN ARRAY

/* 
//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("personas");
//Array con la información a agregar
let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}
*/

/* ---------------------------------------------------------------------- */

                           //PLANTILLAS DE TEXTO

                           //PLANTILLAS LITERALES

//En versiones anteriores a ES6, solía emplearse la concatenación para incluir valores de las variables en una cadena de caracteres (string). Esta forma puede ser poco legible ante un gran número de referencias. En JS ES6 que solventa esta situación son los template strings.

/* 
let producto = { id: 1,  nombre: "Arroz", precio: 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);
*/

/* ---------------------------------------------------------------------- */

                      //PLANTILLAS LITERALES E innerHTML

//La plantillas son un medio para incluir variables en la estructura HTML de nodos nuevos o existentes , modificando el innerHTML.

/* 
let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;
//Agregamos el contenedor creado al body
document.body.appendChild(contenedor);
*/

/* ---------------------------------------------------------------------- */

            //EJEMPLO: CREANDO ELEMENTOS DESDE OBJETOS

/* 
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
*/

/* ---------------------------------------------------------------------- */
