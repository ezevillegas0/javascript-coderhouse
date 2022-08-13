

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
            this.precio = parseInt(precio);
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
    let precioTotal = precioComic * pedirCantidad();
    parseInt(precioTotal)

    //genero una nueva orden con los datos ingresados.

    const comic1 = new DatosCompra (elegirComic(), pedirCantidad(), precioTotal);
    //muestro los detalles de la compra.
    console.log("detalles de la compra del dia " + new Date())
    /* console.log( new Date() ) */
    console.log(comic1)


}

comprarComics(); 

/* ------------------------------------------------------------------------ */

console.log("COMPRAS DEL MES DE JULIO:")
/* console.log(new Date(2022, 8, 23)) */

class ComprasJulio{
    constructor(comic,cantidad,precio){
        this.comic = comic
        this.cantidad = cantidad
        this.precio = precio
    }
}

//delcaro un array para almacenar compras.
const comprasjulio = [];

comprasjulio.push(new ComprasJulio("CAPITAN AMERICA","2" ,"125"));
comprasjulio.push(new ComprasJulio("SHE HULK","1" ,"25"));

console.log(comprasjulio)

/* ------------------- */

console.log("COMPRAS DEL MES DE JUNIO:")
/* console.log(new Date(2022, 7, 05)) */

class ComprasJunio{
    constructor(comic,cantidad,precio){
        this.comic = comic
        this.cantidad = cantidad
        this.precio = precio
    }
}

//delcaro un array para almacenar compras.
const comprasjunio = [];

comprasjunio.push(new ComprasJunio("EL JOKER","1" ,"170"));
comprasjunio.push(new ComprasJunio("VISION","3" ,"155"));
comprasjunio.push(new ComprasJunio("BLAK PANTHER","1" ,"50"));
comprasjunio.push(new ComprasJunio("SUPER MAN","3" ,"55"));
comprasjunio.push(new ComprasJunio("SPI X FAMILY","1" ,"50"));


console.log(comprasjunio)

/* ------------------------------------------------------------------------ */

console.log("OTROS COMICS EN STOCK: ")

const stock = [
    {nombre: 'JOVENES VENGADORES', precio: 230, cantidades: 3},
    {nombre: 'MIGTHY THOR', precio: 170, cantidades: 9},
    {nombre: 'SUPER MAN', precio: 155, cantidades: 0},
    {nombre: 'LOKI', precio: 130, cantidades: 1},
    {nombre: 'CAPITAN AMERICA', precio: 225, cantidades: 0},
    
]

const stockAgosto = stock.filter((el) => el.cantidades >= 1)

console.log(stockAgosto)