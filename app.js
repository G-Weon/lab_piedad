//Variables 
const modal = document.getElementById("modal-info1");
const titulo = document.getElementById("modal-title");
const descripcion = document.getElementById("modal-description");
const botonCerrar = document.getElementById("modal-close");

const botonEspecialidad = document.getElementById("botonDial");
const botonEspecialidadTS= document.getElementById("botonTS");
const botonEspecialidadRX= document.getElementById("botonRX");
const botonEspecialidadCon= document.getElementById("botonCon");
const botonEspecialidadPP= document.getElementById("botonPP");
//Catalago


const especialidades = {
    dialisis:{
        nombre: "Dialisis",
        descripcion: "oidfhjds"

    },
    rayosX:{
        nombre: "Rayos X",
        descripcion: "Rayos x por rasho laser"
    },
    TSangre: {
        nombre: "Toma de sangre",
        descripcion: "Toma de sangre en tubos"
    },
       Consulta:{
        nombre: "Consulta general",
        descripcion: "Revision general, vertificados medicos, bla, bla."
    },
       Papanicolao:{
        nombre: "Papanicolao",
        descripcion: "Debi buscar que es esto LOL"
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
botonEspecialidadTS.addEventListener("click", () => {
    abrirModal("TSangre");
});
botonEspecialidadCon.addEventListener("click", () => {
    abrirModal("Consulta");
});
botonEspecialidadPP.addEventListener("click", () => {
    abrirModal("Papanicolao");
});


// Cerrar el modal
botonCerrar.addEventListener("click", () => {
    modal.close();
});