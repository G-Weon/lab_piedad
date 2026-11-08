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

const destino = encodeURIComponent(tienda.lat + "," + tienda.lng);

const urlRuta = "https://www.google.com/maps/dir/?api=1&destination=" + destino + "&travelmode=driving";

const contenido = `
    <h2>${tienda.nombre}</h2>
    <img class="foto-tienda" src="${tienda.foto}" alt="Fachada de la tienda" onerror="this.style.display='none'">
    <p>${tienda.direccion}</p>
    <p>${tienda.horario}</p>
    <a class="btn-llegar" href="${urlRuta}" target="_blank" rel="noopener noreferrer">Cómo llegar</a>

`;
const esMovil = window.matchMedia("(max-width: 768px)").matches;

marcador.bindPopup(contenido, {
    maxWidth: esMovil ? 220 : 280,
    autoPanPadding: [10, 10]
});

// En escritorio se abre solo; en móvil se abre al tocar el marcador
if (!esMovil) {
    marcador.openPopup();
}