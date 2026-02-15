const audio = document.getElementById("musica");
const contenedorLetra = document.getElementById("letra");
let index = 0;

function actualizarLetra() {
  if (index < letras.length && audio.currentTime >= letras[index].tiempo) {
    const nuevaLinea = document.createElement("p");
    nuevaLinea.textContent = letras[index].texto;
    nuevaLinea.classList.add("fade-in-up");

    // Limpiar el contenedor y agregar la nueva línea
    contenedorLetra.innerHTML = "";
    contenedorLetra.appendChild(nuevaLinea);

    index++;
  }
}

// Reiniciar letra al iniciar música
audio.addEventListener("play", () => {
  index = 0;
  contenedorLetra.innerHTML = "";
});

audio.addEventListener("timeupdate", actualizarLetra);