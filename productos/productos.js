/* ==========================================================================
   LÓGICA DEL MENÚ MÓVIL - INDUSTRIAS AUTOLACK
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos las barras y el menú
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links'); 

    // Si ambos existen en la página, activamos el clic
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toglea la clase 'active' para mostrar/ocultar el menú
            navLinks.classList.toggle('active');
            
            // Toglea 'is-active' para que las barras se vuelvan una X
            menuToggle.classList.toggle('is-active');
        });
    }

    // Opcional: Cerrar el menú si se hace clic en un enlace (para navegación interna)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });
});