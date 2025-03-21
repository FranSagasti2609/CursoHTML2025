function cargarContenido(pagina) {
    fetch(pagina)
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenido').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}


//Para las imagenes en pantalla completa
const thumbnails = document.querySelectorAll('.thumbnails img');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.getElementById('full-image');
const closeBtn = document.querySelector('.close-btn');

thumbnails.forEach(thumbnail => {
thumbnail.addEventListener('click', () => {
    fullImage.src = thumbnail.src;
    fullImageContainer.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    // Inicializar el mapa con una ubicación y nivel de zoom por defecto
    var map = L.map('map').setView([0, 0], 13);  // Latitud y longitud iniciales (0, 0)

    // Añadir la capa de mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Verificar si la geolocalización está disponible en el navegador
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            // Centrar el mapa en la ubicación del usuario
            map.setView([lat, lon], 13);

            // Crear un marcador en la ubicación del usuario
            var marker = L.marker([lat, lon]).addTo(map);

            // Añadir un mensaje emergente al marcador
            marker.bindPopup("<b>Tu ubicación actual</b>").openPopup();
        });
    } else {
        alert("Geolocalización no disponible en este navegador.");
    }
});
