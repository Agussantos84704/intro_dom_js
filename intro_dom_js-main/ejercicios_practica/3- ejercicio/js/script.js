"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/

const button1 = document.querySelector("#boton1");
const button2 = document.querySelector("#boton2");
const button3 = document.querySelector("#boton3");

button1.addEventListener("click" , function (){
    button1.classList.add("fuego")
});
button2.addEventListener("click" , function (){
    button2.classList.add("fuego")
});
button3.addEventListener("click" , function (){
    button3.classList.add("fuego")
});