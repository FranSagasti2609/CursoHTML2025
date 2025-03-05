document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registro-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Capturar valores del formulario
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let areaInteres = document.querySelector('input[name="area-interes"]:checked');
        let experiencia = document.getElementById("experiencia").value;
        let suscripcion = document.getElementById("suscripcion").checked ? "Sí" : "No";

        // Verificar si el usuario seleccionó un área de interés
        let areaInteresTexto = areaInteres ? areaInteres.value : "No especificado";

        // Crear mensaje de confirmación
        let mensaje = `✅ Registro exitoso:\n\n Nombre: ${nombre}\n Correo: ${email}\n Área de interés: ${areaInteresTexto}\n Nivel de experiencia: ${experiencia}\n📌 Suscripción al boletín: ${suscripcion}`;

        // Mostrar el mensaje en la página
        document.getElementById("mensaje-confirmacion").innerText = mensaje;
    });
});
