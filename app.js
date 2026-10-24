//Variables 
const modal = document.getElementById("modal-info1");
const titulo = document.getElementById("modal-title");
const descripcion = document.getElementById("modal-description");
const botonCerrar = document.getElementById("modal-close");

const botonEspecialidad = document.getElementById("botonDial")
const botonEspecialidadRX= document.getElementById("botonRX")

//Catalago


const especialidades = {
    dialisis:{
        nombre: "Dialisis",
        descripcion: "oidfhjds"

    },
    rayosX:{
        nombre: "Rayos X",
        descripcion: "Rayos x por rasho laser"
    }
}
/*
botonEspecialidad.addEventListener("click", () => {
    titulo.textContent = especialidades.dialisis.nombre;
    descripcion.textContent = especialidades.dialisis.descripcion;
    
    modal.showModal();
});

botonEspecialidadRX.addEventListener("click", () => {
    titulo.textContent = especialidades.rayosX.nombre;
    descripcion.textContent = especialidades.rayosX.descripcion;
    
    modal.showModal();
});
*/

//(clave) es el parametro que se le ingresa, en este caso el nombre de la variable de la especialidad
function abrirModal(clave) {
    titulo.textContent = especialidades[clave].nombre;
    descripcion.textContent = especialidades[clave].descripcion;
    modal.showModal();
}
botonEspecialidad.addEventListener("click", () => {
    abrirModal("dialisis");
});
botonEspecialidadRX.addEventListener("click", () => {
    abrirModal("rayosX");
});
// Cerrar el modal
botonCerrar.addEventListener("click", () => {
    modal.close();
});