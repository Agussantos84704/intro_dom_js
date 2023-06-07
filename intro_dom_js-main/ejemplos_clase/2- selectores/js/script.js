"use strict";
/* Escribir el código aquí */

/* Selectores */
// ----------------------------------------------------
/* Selector por clase */
// Apuntamos al titulo y lo guardamos en una constante
const tituloPrincipalPorClase = document.querySelector(".main-title");

// Accedemos al texto de nuestro titulo
console.log("Texto accedido por selector por clase");
console.log(tituloPrincipalPorClase.textContent);

/* Selector por ID */
// Apuntamos al titulo y lo guardamos en una constante
const tituloPrincipalPorID = document.querySelector("#title1");

// Accedemos al texto de nuestro titulo
console.log("Texto accedido por selector por ID");
console.log(tituloPrincipalPorID.textContent);

// ----------------------------------------------------
// Apuntamos al primer post y lo guardamos en una constante
const primerPost = document.querySelector("#post1");

// Vemos las propiedas con las que cuenta
console.log("Propiedades del elemento primeroPost")
console.log(primerPost)

/* Child */
// ----------------------------------------------------
// Apuntamos al tercer post y lo guardamos en una constante
const tercerPost = document.querySelector("#post3");

// Vemos los "Child Nodes" del tercer post
console.log("Nodos dentro de nuestro tercer post");
console.log(tercerPost.childNodes);

// Apuntamos directamente al parrafo (<p>) dentro del primer post
// querySelector retorna el primer elemento encontrado
const parrafo = document.querySelector("#post1 p");
console.log("Parrafo del primer post");
console.log(parrafo.textContent)

// Apuntamos directamente al parrafo (<p>) dentro del segundo post
const parrafo2 = document.querySelector("#post2 p");
console.log("Parrafo del segundo post");
console.log(parrafo2.textContent)