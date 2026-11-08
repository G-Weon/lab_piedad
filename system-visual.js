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
    ultrasonido:{
        nombre: "Ultrasonido",
        descripcion: "El ultrasonido (o ecografía) es un estudio de diagnóstico médico no invasivo y seguro que utiliza ondas sonoras de alta frecuencia (en tiempo real) para crear imágenes del interior del cuerpo, sin emplear radiación ionizante."

    },
    rayosX:{
        nombre: "Rayos X",
        descripcion: "Una radiografía o estudio de rayos X es una prueba médica rápida e indolora que utiliza una pequeña dosis de radiación ionizante para generar imágenes en blanco, negro y grises del interior del cuerpo."
    },
    electro: {
        nombre: "Electrocardiograma",
        descripcion: "Un electrocardiograma (ECG o EKG) es un estudio médico rápido, indoloro y no invasivo que registra la actividad eléctrica del corazón."
    },
       estLab:{
        nombre: "Estudios de laboratorio",
        descripcion: "Contamos con una amplia variedad de estudios de laboratorio:"
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
    abrirModal("ultrasonido");
});
botonEspecialidadRX.addEventListener("click", () => {
    abrirModal("rayosX");
});
botonEspecialidadTS.addEventListener("click", () => {
    abrirModal("electro");
});
botonEspecialidadCon.addEventListener("click", () => {
    abrirModal("estLab");
});
botonEspecialidadPP.addEventListener("click", () => {
    abrirModal("Papanicolao");
});


// Cerrar el modal
botonCerrar.addEventListener("click", () => {
    modal.close();
});


//experimental (investigar que es esto)

//Control de main_bar 
const cabecera = document.getElementById('logf');

function ajustarMargen() {
  document.documentElement.style.setProperty('--alto-cabecera', cabecera.offsetHeight + 'px');
}

ajustarMargen();
window.addEventListener('resize', ajustarMargen);
window.addEventListener('load', ajustarMargen);

