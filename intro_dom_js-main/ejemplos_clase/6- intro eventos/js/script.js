"use strict";
/* Escribir el código aquí */

/* Evento de mouse click */
// ----------------------------------------------------
// Apuntamos al primer post y lo guardamos en una constante
const primerPost = document.querySelector("#post1");

// Agregamos un listener al primer post
primerPost.addEventListener("click", function () {
  console.log("Primer post");
});

/* Eventos de mouseover y mouseout */
// ----------------------------------------------------
// Apuntamos al segundo post
const segundoPost = document.querySelector("#post2");

// Agregamos un listener
segundoPost.addEventListener("mouseover", function () {
  // Removemos la clase de cerrado
  segundoPost.classList.remove("closed");
  // Agregamos la clase de abierto
  segundoPost.classList.add("open");
});

segundoPost.addEventListener("mouseout", function () {
  // Agregamos la clase de cerrado
  segundoPost.classList.add("closed");
  // Quitamos la clase de abierto
  segundoPost.classList.remove("open");
});
// ----------------------------------------------------