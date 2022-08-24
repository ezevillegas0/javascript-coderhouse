                                      //PRE-ENTREGA N° 2

//Modificación del DOM - Desafío complementario
//Detección de eventos de usuario. Desafío entregable
//Implementación con uso de JSON y Storage. 

/* 
-Definir eventos a manejar y su funciòn de respuesta.
-Modificar el DOM, ya sea para definir elementos al cargar la página o para realizar salidas de un procesamiento.
-Almacenar datos (clave-valor) en el Storage y recuperarlos.
-no se pude usar prompt y ni alert.
-tiene que tener local storage.
*/

class Compra {
    constructor(email, comic, cantidad){
        this.email = email;
        this.comic = comic;
        this.cantidad = cantidad;
    }
}

//Variables para trabajar en DOM

let arrayCompras = []; 
let miFormulario = document.querySelector("#formulario");
let inputComic = document.querySelector("#iComic");

//ver xq no funciona

let emailI = formulario.children[1].value;
let comicI = formulario.children[3].value;
let cantidadI = formulario.children[5].value;

//genero variables que voy a usar

let contenedor = document.querySelector("#comicIngresado");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

//eventos en botones

miFormulario.addEventListener("submit", agregarCompras);
btnMostrar.addEventListener("click", MostrarTodasCompras);

inputComic.focus();

// funcion = comprobar ingreso de datos

function validarForm () {
    emailI = formulario.children[1].value;
    comicI = formulario.children[3].value;
    cantidadI = formulario.children[5].value;
    
    if (emailI== `` || comicI == `` || cantidadI == ``){
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'debes ingresar todos los datos para continuar',
            background: "#bebebe",
            backdrop: true,
        });
        inputComic.focus();
        bandera = false;
    } else {
        bandera = true;
    }

    const compra1 = [ {id :1, email: emailI , comic: comicI , cantidad: cantidadI}];
    const enJSON = JSON.stringify(compra1);

    localStorage.setItem("primer compra", enJSON);

}

// funcion = agregar compras

function agregarCompras(e) {
    e.preventDefault ();
    validarForm(); 
    if (bandera == true) {
        Swal.fire({
            icon: 'success',
            title: 'Genial!',
            text: 'Usted va a realizar una compra',
            background: "#bebebe",
            backdrop: true,
        }); 
        formulario.children[1].value = ``;
        formulario.children[3].value = ``;
        formulario.children[5].value = ``;
        contenedor.innerHTML = ``;
        AgregarAlDom();
        inputComic.focus();
    } else {
        inputComic.focus();
    }
}

// funcion = mostrar en el DOM el ultimo ingreso

function AgregarAlDom() {
    contenedor.innerHTML = `<h3> Ultimo pedido: </h3>
    <p><strong> Email: </strong> ${emailI}</p>
    <p><strong> Comic: </strong> ${comicI}</p>
    <p><strong> Cantidad: </strong> ${cantidadI}</p>`;
}

// funcion = mostrar todas los pedidos en un div del DOM

function MostrarTodasCompras(e) {
    e.preventDefault();
    let i =0;
    displayTodos.innerHTML = `<h3> Listado de todos las compras</h3>`;
    for (const Compras of arrayCompras){    
        displayTodos.innerHTML += `
        <p><strong> Email: </strong> ${Compras.email}</p>
        <p><strong> Comic: </strong> ${Compras.comic}</p>
        <p><strong> Cantidad: </strong> ${Compras.cantidad}</p> <hr> `;
    }
}










