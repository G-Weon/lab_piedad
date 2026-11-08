//Variables 
const modal = document.getElementById("modal-info1");
const titulo = document.getElementById("modal-title");
const descripcion = document.getElementById("modal-description");
const botonCerrar = document.getElementById("modal-close");
const botonEspecialidad = document.getElementById("botonUltra");
const botonEspecialidadRX= document.getElementById("botonRX");
const botonEspecialidadEC= document.getElementById("botonEC");
const botonEspecialidadEL = document.getElementById("botonEL");
const botonEspecialidadPP= document.getElementById("botonPP");
const botonEspecialidadDen = document.getElementById("botonDen");
const botonEspecialidadColpo = document.getElementById("botonColpo");
const botonEspecialidadEspi = document.getElementById("botonEspi");
const botonEspecialidadEndoCol = document.getElementById("botonEndoCol");
const botonEspecialidadZombi = document.getElementById("botonZombi");

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
     papa:{
        nombre: "Papanicolaou",
        descripcion: "El Papanicolaou (también conocido como citología vaginal o cervical) es un examen médico rápido y sencillo que consiste en recolectar células del cuello uterino para examinarlas bajo el microscopio."
    },
        den:{
        nombre: "Densitometría",
        descripcion: "La densitometría ósea (conocida también como DEXA o DXA, por sus siglas en inglés Dual-Energy X-ray Absorptiometry) es una prueba médica de diagnóstico por imagen que mide la cantidad de calcio y otros minerales presentes en los huesos (la densidad mineral ósea)."
    },
        colpo:{
        nombre: "Colposcopia",
        descripcion: "Una colposcopia es un procedimiento médico ginecológico que permite examinar de cerca el cuello uterino, la vagina y la vulva utilizando un instrumento con luz y lentes de aumento llamado colposcopio"
    },
        espi:{
        nombre: "Espirometría",
        descripcion: "La espirometría es una prueba médica no invasiva y rápida que mide el volumen y la velocidad del flujo de aire que entra y sale de los pulmones"
    },
        endo:{
        nombre: "Endoscopia/Colonoscopia",
        descripcion: "La endoscopia alta y la colonoscopia son procedimientos médicos ambulatorios que utilizan tubos delgados y flexibles con cámaras (endoscopios) para visualizar el interior del aparato digestivo. Se realizan bajo sedación para evitar molestias, permitiendo tanto diagnosticar enfermedades como extirpar lesiones en una sola sesión."
    },
        zombi:{
        nombre: "PCR COVID-19",
        descripcion: "La prueba PCR multiplex (RT-qPCR) para COVID-19 e Influenza (A y B) es un estudio de diagnóstico molecular que detecta y diferencia de forma simultánea el material genético (ARN) del virus SARS-CoV-2 y de los virus de la influenza A y B a partir de una única toma de muestra."
    }
}
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
botonEspecialidadEC.addEventListener("click", () => {
    abrirModal("electro");
});
botonEspecialidadEL.addEventListener("click", () => {
    abrirModal("estLab");
});
botonEspecialidadPP.addEventListener("click", () => {
    abrirModal("papa");
});

botonEspecialidadDen.addEventListener("click", () => {
    abrirModal("den");
});

botonEspecialidadColpo.addEventListener("click", () => {
    abrirModal("colpo");
});
botonEspecialidadEspi.addEventListener("click", () => {
    abrirModal("espi");
});

botonEspecialidadEndoCol.addEventListener("click", () => {
    abrirModal("endo");
});

botonEspecialidadZombi.addEventListener("click", () => {
    abrirModal("zombi");
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