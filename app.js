//Variables 
const modal = document.getElementById("modal-info1");
const titulo = document.getElementById("modal-title");
const descripcion = document.getElementById("modal-description");
const botonCerrar = document.getElementById("modal-close");


//Catalago
const especialidades = {
    dialisis:{
        nombre: "Dialisis",
        descripcion: "oidfhjds"
    }
}

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