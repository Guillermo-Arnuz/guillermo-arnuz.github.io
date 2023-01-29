/* Agradecimientos y créditos:
Tutoriales JS (Navegación y efecto máquina de escribir): https://www.w3schools.com/ */

/*Menu*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

/* Máquina de escribir */
var i = 0;
var txt = 'Esta animación sirve para agregar un efecto extra a la página. El sujeto es un escritor y también . . . un fantasma.'; 
var speed = 80; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}