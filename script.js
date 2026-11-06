//mapa

const tienda = {
    nombre: "Lab",
    direccion: "Zempoala 1, Vértiz Narvarte, Benito Juárez, 03600 Ciudad de México, CDMX",
    horario: "Lunes a viernes, 7:00 a 20:00. Sabado, 7:00 a 17:00",
    lat: 19.382798180807765,
    lng:-99.14953544498667,
    foto: "img/fachada.jpg"
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
    alt: "Ubicación de la tienda"
}).addTo(mapa);

const contenido = `
    <h2>${tienda.nombre}</h2>
    <img class="foto-tienda" src="${tienda.foto}" alt="Fachada de la tienda">
    <p>${tienda.direccion}</p>
    <p>${tienda.horario}</p>
`;

marcador.bindPopup(contenido, {
    maxWidth: 280
});
marcador.openPopup();

const destino = encodeURIComponent(
 tienda.lat + "," + tienda.lng
);

