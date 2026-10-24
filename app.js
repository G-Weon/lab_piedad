//Variables 
const modal = document.getElementById("modal-info1");
const titulo = document.getElementById("modal-title");
const descripcion = document.getElementById("modal-description");
const botonEspecialidad = document.getElementById("botonEsp")
const botonCerrar = document.getElementById("modal-close");


//Catalago
const especialidades = {
    dialisis:{
        nombre: "Dialisis",
        descripcion: "oidfhjds"
    }
}

botonEspecialidad.addEventListener("click", () => {
    titulo.textContent = especialidades.dialisis.nombre;
    descripcion.textContent = especialidades.dialisis.descripcion;
    
    modal.showModal();
});
// Cerrar el modal
botonCerrar.addEventListener("click", () => {
    modal.close();
});