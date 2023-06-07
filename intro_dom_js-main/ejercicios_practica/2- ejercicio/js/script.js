"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/

const button1 = document.querySelector ("#boton1");
const button2 = document.querySelector ("#boton2");
const button3 = document.querySelector ("#boton3");
// const boton4 = document.querySelector ("button");

// boton4.textContent = `PEGAR`

button1.innerText = `PEGAR`
button2.innerText = `COPIAR`
button3.innerText = `CORTAR`

button1.classList.add("agua");
button2.classList.add("agua");
button3.classList.add("agua");
// buttonpower.setAttribute ("class", "btn");
// buttonpower.setAttribute ("class", "agua");

console.log(buttonpower.attributes);



