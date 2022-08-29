                                     //CLASE 13


                                     //LIBRERIAS

//Son códigos pre-escritos que facilitan el desarrollo de aplicaciones. Podemos pensar las librerías como pequeños programas escritos por terceros que podemos incorporar a nuestra aplicación para resolver problemas determinados.

//Funcionan como cajas de herramientas que resuelven problemas recurrentes de forma rápida y eficiente. Podemos incorporarlas y utilizarlas a discreción según nuestra demanda 🔧.

/* ---------------------------------------------------------------------- */

                               //SWEET ALERT

//Permite crear alertas personalizadas atractivas, sencillas, customizables e interactivas. Reemplaza el típico alert() tradicional 💬.
//El método recibe un objeto por parámetro. Puede recibir distintas propiedades y valores, generando distintos resultados. Esto nos permite customizar la alerta 🎨.

/* 
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue?',
    icon: 'error',
    confirmButtonText: 'Cool'
})
*/

//es posible agregar imágenes:

/* 
Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
})
*/

/* ---------------------------------------------------------------------- */

                                   //TOASTIFY

//Permite mostrar mensajes de notificación personalizados 🔔

/* 
-Hacer un llamado a Toastify() con un objeto de configuración.
-Otro llamado al método .showToast() concatenado para dispararlo asignando:
Propiedad text con el mensaje a mostrar, y
Propiedad duration en milisegundos para el fadeout.
*/

btn.addEventListener('click', () => {
   
    Toastify({
        text: "Probando toast!",
        duration: 3000
    }).showToast();
})

//A través de las propiedades gravity y position podemos modificar la ubicación del Toast:

btn.addEventListener('click', () => {
   
    Toastify({
        text: "Probando toast!",
        duration: 3000,
        gravity: 'bottom',
        position: 'left'
    }).showToast();
})

//La propiedad style del objeto de configuración, nos permite modificar el brackground del Toast:

Toastify({
    text: "Probando toast!",
    duration: 3000,
    gravity: 'bottom',
    position: 'left',
    style: {
        background: 'linear-gradient(to right, #00b09b, #96c92d)'
    }
}).showToast();

//Y también podemos estilar el Toast a nuestro gusto, definiendo clases a través de la propiedad className.

Toastify({
    text: "Probando toast!",
    duration: 3000,
    gravity: 'bottom',
    position: 'left',
    className: 'notificacion my-toast'
}).showToast();

//La propiedad destination permite definir URLs de destino al clickear el Toast. Es úitl para direccionar el usuario a páginas de interés acordes al mensaje mostrado:

btn.addEventListener('click', () => {
   
    Toastify({
        text: "Click aquí para ir a Coder!",
        duration: 3000,
        destination: 'https://www.coderhouse.com'
    }).showToast();

})

/* ---------------------------------------------------------------------- */

                                 //LUXON

//Permite trabajar con fechas y horas de una forma sencilla. Con Luxon puedes formatear, parsear, sumar y restar fechas, entre otras funciones.

//La clase principal en luxon es DateTime. Para ser más eficientes/ordenados, podemos referenciarla en una variable global para facilitar su acceso:

const DateTime = luxon.DateTime

//Un DateTime representa un milisegundo específico en el tiempo, junto con una zona horaria. Podemos crear nuestro primer DateTime con el método .local(), que recibe argumentos desde el año hasta los milisegundos. En principio es similar al objeto Date de JS, pero trae diversos métodos útiles:

const dt = DateTime.local(2022, 1, 25, 12, 10)
// 25 / 01 / 2022 - 12:10hs

//Podemos crear un objeto de fecha con la fecha actual a través de DateTime.now(), que es equivalente a llamar a DateTime.local() sin argumentos.

//también podemos crear fechas a través de un objeto, pasando las distintas características por propiedades y valores:

/* 
const dt = DateTime.fromObject(
     { day: 22, hour: 12, month: 2 },
     { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
  )

console.log( dt.toString() )
// 2022-02-22T12:00:00.000-03:00
*/

//También podemos crear fechas a partir de un string siguiendo la norma ISO, con el método fromISO:

DateTime.fromISO("2017-05-15")          //=> May 15, 2017 at midnight
DateTime.fromISO("2017-05-15T08:30:00") //=> May 15, 2017 at 8:30

//Algo que sí queremos es recuperar la fecha como string, y para eso aplicamos el método .toString() al objeto creado:

const now = DateTime.now()
console.log( now.toString() )
// 2022-01-25T12:31:00.775-03:00

//Podemos acceder a los distintos componentes de la fecha creada a través de propiedades específicas:

const dt1 = DateTime.now();
dt.year    //=> 2022
dt.month   //=> 1
dt.day     //=> 25
dt.second  //=> 22
dt.weekday //=> 2

//el más común es el método .toLocaleString() que ajusta la fecha a un formato sencillo y genérico. 



/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */

