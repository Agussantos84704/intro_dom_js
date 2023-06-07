"use strict";

function crearElementos() {
    console.log("Crear elementos");

    // Apuntar al elemento padre donde agregaremos
    // nuevos elementos
    const father = document.querySelector("#post1");

    // Vamos a crear tres botones con la siguiente estructura
    /*
        <button id="boton1" class="btn">BOTON 1</button>
        <button id="boton2" class="btn">BOTON 2</button>
        <button id="boton3" class="btn">BOTON 3</button>
    */

    // Crear boton 1
    const btn1 = document.createElement("button");
    // Le damos texto al boton y una clase
    btn1.innerText = "BOTON 1";
    btn1.classList.add("btn");

    // Agregamos el nuevo boton al post
    father.appendChild(btn1);

    // Crear boton 2
    const btn2 = document.createElement("button");
    // Le damos texto al boton y una clase
    btn2.innerText = "BOTON 2";
    btn2.classList.add("btn");

    // Agregamos el nuevo boton al post
    father.appendChild(btn2);

    // Crear boton 3
    const btn3 = document.createElement("button");
    // Le damos texto al boton y una clase
    btn3.innerText = "BOTON 3";
    btn3.classList.add("btn");

    // Agregamos el nuevo boton al post
    father.appendChild(btn3);
}