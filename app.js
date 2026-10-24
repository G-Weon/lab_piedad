//Variables 
const modal = document.getElementById("modal-info1");
const titulo = document.getElementById("modal-title");
const descripcion = document.getElementById("modal-description");
const cerrarModal = document.getElementById("modal-close");


//Catalago
const especialidades = {
    dialisis:{
        especiaidad: "Dialisis",
        descripcion: "oidfhjds"
    }
}

// Abrir el modal según la especialidad seleccionada
document.getElementById("especialidades")
document.addEventListener("click", (evento) => {

        const boton = evento.target.closest("[data-especialidad]");

        if (!boton) return;

        const clave = boton.dataset.especialidad;
        const especialidad = especialidades[clave];

        if (!especialidad) return;

        titulo.textContent = especialidad.nombre;
        descripcion.textContent = especialidad.descripcion;

        modal.showModal();
    });

// Cerrar el modal
botonCerrar.addEventListener("click", () => {
    modal.close();
});