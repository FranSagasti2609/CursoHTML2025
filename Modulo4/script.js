function cargarContenido(pagina){
    fetch(pagina)
    .then(response => response.text())
    .then(data => {
        document.getElementById('contenido').innerHTML = data;
    })
    .catch(error => console.log('Error al cargar la página: ', error));
}