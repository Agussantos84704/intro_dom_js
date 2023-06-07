"use strict";
/* Escribir el código aquí */

// ----------------------------------------------------
// Apuntamos al header del post mas visitado (post3)
const post3Header = document.querySelector("#post3 .post-header");

// Generamos un nuevo hijo para el post mas visitado
const masVisitado = document.createElement("span");

// Le damos texto al "Child Node"
masVisitado.innerText = "Mas Visitado";

// Agregamos el hijo al header del post
post3Header.appendChild(masVisitado);
// ----------------------------------------------------