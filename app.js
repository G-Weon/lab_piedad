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


//experimental (investigar que es esto)

const cabecera = document.getElementById('logf');

function ajustarMargen() {
  document.documentElement.style.setProperty('--alto-cabecera', cabecera.offsetHeight + 'px');
}

ajustarMargen();
window.addEventListener('resize', ajustarMargen);
window.addEventListener('load', ajustarMargen);


//mapa
 
const tienda = {
    nombre: "Laboratorio Clínico La Piedad",
    direccion: "Zempoala 1, Vértiz Narvarte, Benito Juárez, 03600 Ciudad de México, CDMX",
    horario: "Lunes a viernes, 7:00 a 20:00. Sabado, 7:00 a 17:00",
    lat: 19.382798180807765,
    lng:-99.14953544498667,
    foto: "imagen/fachada.jpg"
    };
const ubicacion = [tienda.lat, tienda.lng];
const mapa = L.map("mapa")
    .setView(ubicacion, 16);
    L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
    maxZoom: 19,
    attribution: '&copy; <a href="https://'
    + 'www.openstreetmap.org/copyright">'
    + 'OpenStreetMap</a>'
    }).addTo(mapa);
 
const marcador = L.marker(ubicacion, {
    title: tienda.nombre,
    alt: "Ubicación del laboratorio"
}).addTo(mapa);
 
const destino = encodeURIComponent(
    tienda.lat + "," + tienda.lng
);
 
const contenido = `
    <h2>${tienda.nombre}</h2>
    <img class="foto-tienda" src="${tienda.foto}" alt="Fachada del laboratorio" onerror="this.style.display='none'">
    <p>${tienda.direccion}</p>
    <p>${tienda.horario}</p>
    <p><a href="https://www.google.com/maps/dir/?api=1&destination=${destino}" target="_blank" rel="noopener">Cómo llegar</a></p>
`;
 
marcador.bindPopup(contenido, {
    maxWidth: 280
});
marcador.openPopup();