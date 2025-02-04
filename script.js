function loadContent(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "<p>🌙🌙 𝑻𝒆 𝒒𝒖𝒊𝒆𝒓𝒐 𝒅𝒆 𝒂𝒒𝒖𝒊 𝒂 𝒍𝒂 𝒍𝒖𝒏𝒂 𝒆𝒏 𝒑𝒂𝒔𝒐𝒔 𝒅𝒆 𝒕𝒐𝒓𝒕𝒖𝒈𝒂... 🐢🐢 </p>";  // Mostrar mensaje de carga

    // Establecer el tiempo de espera para el mensaje de carga (en milisegundos)
    const loadingTime = 4000;  // 4 segundos de carga

    // Mostrar el mensaje de carga por 4 segundos y luego cargar el contenido
    setTimeout(() => {
        // Ocultar el video cuando se hace clic en los botones (solo si no estamos en la página inicial)
        if (page !== 'index.html') {
            document.getElementById('video-container').style.display = 'none';
        }

        // Cargar el contenido de la página seleccionada
        fetch(page)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;  // Cargar el contenido de la página
            })
            .catch(error => {
                console.error('Error al cargar la página:', error);
                contentDiv.innerHTML = "<p>Hubo un error al cargar el contenido. Inténtalo de nuevo.</p>";  // Error en carga
            });
    }, loadingTime);  // Retrasar la carga por 4 segundos
}
