"use strict";
/* Escribir el código aquí */

// ----------------------------------------------------
// Apuntamos al icon del primer post
const imagen = document.querySelector("#post1 img");

// Listas los atributos
console.log(imagen.attributes)

// Vamos a trabar con el atributo "src" de la imagen

// Podemos leer un atributo utilizando getAttribute()
console.log(imagen.getAttribute("src"))

// Podemos tambien leerlo directamente con la sintaxis
// "punto"
console.log(imagen.src)


// Podemos modificar un atributo utilizando setAttribute()
imagen.setAttribute("src", "./images/avatar_inove.png")

// Podemos tambien modificarlo directamente con la sintaxis
// "punto"
imagen.src = "./images/avatar_inove.png"

/* NOTA */
/*
  La unica diferencia es que ".src" retorna la ruta absoluta (completa)
  al archivo de imagen
  Utilizando "getAttribute" retorna la ruta relativa (a este proyecto)
  al archivo de imagen
*/

// ----------------------------------------------------