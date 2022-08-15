 //SIMULADOR INTERCATIVO

function elegirServicio(){
    //defino una clase para los datos necesesarios del servicio.
    class NivelServicio{
        constructor(servicio,tiempo,precio){
            this.servicio = servicio
            this.tiempo = tiempo
            this.precio = precio
        }
    }
    //creo las funciones para los datos del servicio.
    let servicio = "servicio1"
    console.log("esta por comprar un servicio")
    
    //seleccionar nivel del servicio
    function datoServicio(){
        do {
          let pedirServicio = ""
          pedirServicio = prompt("Ingresa cual de los siguientes servicios deseas: INICIAL | MEDIANO | PREMIUM").toUpperCase();
          console.log("usted selecciono el servicio: " + pedirServicio );

          switch(pedirServicio){
              case "INICIAL":
              return pedirServicio;
              case "MEDIANO":
              return pedirServicio;
              case "PREMIUM":
              return pedirServicio;
              default:
              alert("No igresaste un servicio");
              
            }

        } while(pedirServicio != "INICIAL" || "MEDIANO" || "PREMIUM"){
            pedirServicio = prompt("volve a ingresar la cantidad de servicio requerida:")
            pedirServicio = +pedirServicio
        }
        return pedirServicio;
    }

    //seleccionar cuanto tiempo se desea del servicio.
    function pedirServicio2(){
        let pedirCantidad = 0
        pedirCantidad = prompt("ingrese la cantidad de tiempo meses de servicio que desee obtener" )
        //parseo el numero
        pedirCantidad = +pedirCantidad
        console.log("la cantidad de meses del servicio es de " + pedirCantidad)
        while(isNaN(pedirCantidad)){
            console.log("se ingreso un valor invalido de la cantidad de tiempo que requieres de tus servicio.")
            pedirCantidad = prompt("la cantidad ingresada del servicio no es valida. volve a ingresar la cantidad:")
            pedirCantidad = +pedirCantidad
        }
        return pedirCantidad;

    }

    //muestro el precio del servicio
   let precioServicio = 100
   parseInt(precioServicio)
   console.log("El precio de " + servicio + " es de:" + precioServicio)

   //genero un nuevo servicio con los datos del usuario.
   const servicio1 = new NivelServicio(datoServicio(), pedirServicio2(), precioServicio);
   //muestro los detalles del servicio seleccionado.
   console.log("Detalles del servicio 1:")
   console.log(servicio1)
}

elegirServicio();
