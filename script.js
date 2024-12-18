// Obtener Referencias al parrafo y al bottn

const color = document.getElementById("color");
const button = document.getElementById("button");

/* Manejar el Evento */

button.addEventListener("click" , cambiarColor);

/* Definimos la función */
function cambiarColor(){
    /* Código que se ejecuta */

    /* Función Anidada */
    function colores(){
      /* Código que se ejecuta */
      const opciones = "0123456789ABCDEF";
      let colorHex = "#";

      /* Recorrer el string opciones */
      for (let i = 0 ; i < 6 ; i++ ) {
        let indiceAleatorio = Math.floor(Math.random() * 16)
        colorHex += opciones[indiceAleatorio]; //#000000
      }

      return colorHex;

    }

  let colorAleatorio  = colores();
  /* Actualiza el texto */
  color.textContent = colorAleatorio;
    /* Actualiza el color de fondo */
  document.body.style.backgroundColor = colorAleatorio;
}