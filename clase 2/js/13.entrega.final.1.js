

//PRE-ENTREGA N° 1

/* 
-Estructura HTML del proyecto. 
-Variables de JS necesarias. 
-Funciones esenciales del proceso a simular.
-Objetos de JS. 
-Arrays. 
-Métodos de búsqueda y filtrado sobre el Array. 
*/

//idea del proyecot final. no se evalua html ni css, se evalua el uso de condicionales, ciclos, objetos, arrys, etc. usar de manera adecuadra en base a nuestro proyecto. 

//leer rubricas.

 
function comprarComics(){
    //muestro que se va a realizar.
    console.log("usted va a comprar un comic")
    //defino una clase para los datos necesesarios del servicio.
    class DatosCompra{
        constructor(comic,cantidad,precio){
            this.comic = comic
            this.cantidad = cantidad
            this.precio = precio
        }
    }

    //creo las funciones necesarias.
    let comic = "comic1"

    //elegir comic a comprar.
    function elegirComic(){
        do {
            let pedirComic = ""
            pedirComic = prompt("ingrese cual comic desea adquirir:  VENGADORES | BATMAN | SPIDER-MAN").toUpperCase();
            console.log("usted selecciono el comic: " + pedirComic)

            switch(pedirComic){
                case "VENGADORES":
                    return pedirComic;
                case "BATMAN":
                    return pedirComic;
                case "SPIDER-MAN":
                    return pedirComic
                default: alert("no ingresaste un comic, volve a hacerlo.")
            }

        } while (pedirComic != "VENGADORES" || "BATMAN" || "SPIDER-MAN"){
            pedirComic = prompt("ingresa un comic")
            pedirComic= +pedirComic
        }
        return pedirComic;
    }

    //seleccionar cuantos comics desea.
    function pedirCantidad(){
        let pedirCantidad = 0
        pedirCantidad = prompt("ingrese la cantidad de comics que desea.")
        //parseo el numero
        pedirCantidad = +pedirCantidad
        //muestro la cantidad seleccionada
        console.log("usted desea la cantidad de :" + pedirCantidad)
        
        while(isNaN(pedirCantidad)){
            console.log("se ingreso un valor invalido de la cantidad de comics deseados.")
            pedirCantidad = prompt("la cantidad ingresada no es valida. volve a ingresar la cantidad:")
            pedirCantidad = +pedirCantidad 
        }
        return pedirCantidad;
    } 

    //muestro el precio del comic.
    let precioComic = 100 
    parseInt(precioComic)
    console.log("el precio de cada comic es de  " + precioComic)

    //calculo el precio con la cantidad.
    let precioTotal = precioComic * pedirCantidad
    parseInt(precioTotal)

    //genero una nueva orden con los datos ingresados.

    const comic1 = new DatosCompra (elegirComic(), pedirCantidad(), precioTotal);
    //muestro los detalles de la compra.
    console.log("detalles de la compra:")
    console.log(comic1)


}

comprarComics();