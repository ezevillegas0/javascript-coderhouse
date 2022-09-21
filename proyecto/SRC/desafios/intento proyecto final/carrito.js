const carrito = JSON.parse(localStorage.getItem("carrito"));

let tboody = document.querySelector("#tbody");

function rellenarCarrito(arrayCarrito){

    for(let producto of arrayCarrito){

        let row = document.createElement("tr");

        row.innerHTML = `<td>${producto.nombre}</td><td>$${producto.precio}</td><td>${producto.cantidad}</td><td>$$</td><td>Eliminar</td>` 

        tboody.appendChild(row);
    }
}

rellenarCarrito(carrito);