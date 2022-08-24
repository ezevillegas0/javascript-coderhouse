//incorporar eventos.

//cambiar todo lo de prompt por eventos y formularios.

//asociar eventos que buscamos simular de nuestro proyecto.

//no alert, prompt y usar eventos.

//crear formulario con boton, cuando se toque el boton que se dispare un evento y ese dato se guarde.

// clase Compra

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
    console.log("su email es: " + emailI);
    console.log("el comic elegido es: " + comicI);
    console.log("la cantidad deseada es: " + cantidadI);

    if (emailI== `` || comicI == `` || cantidadI == ``){
        alert(`ERROR - Debe completar todos los campos para continuar`);
        inputComic.focus();
        bandera = false;
    } else {
        bandera = true;
    }
}

// funcion = agregar compras

function agregarCompras(e) {
    e.preventDefault ();
    validarForm(); 
    if (bandera == true) {
        let opcion = confirm("Usted va a realizar un pedido");
        if (opcion == true) {
            let formulario = e.target
            arrayCompras.push(new Compra (emailI, comicI, cantidadI));   
        } else {
            alert(`No se agregara la compra`);
        }
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
