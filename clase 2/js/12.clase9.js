
/* 
let entrada = prompt("Ingresar un nombre");

while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
            alert("¿QUIÉN SOS?");
            break;
    }
   entrada = prompt("Ingresar un nombre");
} */




/* 
do {
    let pedirComic = ""
    //el usuario elige el comic
    pedirComic = prompt("ingrese cual comic desea adquirir:  VENGADORES | BATMAN | SPIDER-MAN").toUpperCase();
    console.log("usted selecciono el comic: " + pedirComic);
    //se devuelve el valor del comic elegido por el usuario.
    switch(pedirComic){
        case "VENGADORES":
         frase = "el valor es de 100";
        break
    
        case "BATMAN":
         frase = "el valor es de 400";
        break
    
        case "SPIDER-MAN":
         frase = "el valor es de  50";
        break
        default: 
        alert("no ingresaste un comic")
        return
    }
    
    console.log(frase);



}while(pedirComic != "VENGADORES" || "BATMAN" || "SPIDER-MAN"){
    pedirComic = prompt("volve a ingresar el comic")
} */