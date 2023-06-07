"use strict";

// Apuntamos a nuestro titulo y lo guardamos en una constante
const tituloPrincipal = document.querySelector(".main-title");

// Accedemos al texto de nuestro titulo
console.log(tituloPrincipal.textContent);

// Generamos la fecha que queremos insertar
const hoy = new Date();

// Alteramos el texto de nuestro titulo con un "template string"
tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;

// ----------------------------------------------------
// Apuntamos al primer post y lo guardamos en una constante
const primerPost = document.querySelector("#post1");

// Vemos las clases del primer post
console.log(primerPost.classList);

// Apuntamos directamente al parrafo (<p>) dentro del primer post
// querySelector retorna el primer elemento encontrado
const parrafo = document.querySelector("#post1 p");
console.log(parrafo.textContent)

// Apuntamos directamente al parrafo (<p>) dentro del segundo post
const parrafo2 = document.querySelector("#post2 p");
console.log(parrafo2.textContent)

// Agregamos un listener al primer post
primerPost.addEventListener("click", function () {
  console.log("Primer post");
});

// ----------------------------------------------------
// Apuntamos al tercer post y lo guardamos en una constante
const tercerPost = document.querySelector("#post3");

// Vemos los "Child Nodes" del tercer post
console.log(tercerPost.childNodes);

// ----------------------------------------------------
//Apuntamos al header del post mas visitado (post3)
const postHeader = document.querySelector("#post3 .post-header");

// Generamos un nuevo hijo para el post mas visitado
const masVisitado = document.createElement("span");

//Le damos texto a nuestro "Child Node"
masVisitado.innerText = "Mas Visitado";

// Agregamos nuestro hijo al header de nuestro post
postHeader.appendChild(masVisitado);

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
