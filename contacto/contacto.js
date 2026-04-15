/* ==========================================================================
   LÓGICA INTERACTIVA CONTACTO - INDUSTRIAS AUTOLACK SAS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. MENÚ HAMBURGUESA (MÓVILES)
       ========================================================================== */
    const menuToggle = document.getElementById('mobile-menu');
    // Usamos querySelector por seguridad, por si falta el ID en el HTML
    const navLinks = document.querySelector('.nav-links'); 

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Despliega el menú azul
            navLinks.classList.toggle('active');
            
            // Transforma las barras en una X
            menuToggle.classList.toggle('is-active');
        });
    }

    // Cierra el menú automáticamente si el usuario toca un enlace
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('is-active');
            }
        });
    });

    /* ==========================================================================
       2. ÍCONO DE USUARIO (WEBMAIL)
       Nota: En la página de Contacto, el ícono es un enlace directo a:
       https://webmail.autolack.com.co
       Por lo tanto, NO bloqueamos el clic con JS para que el correo abra normal.
       ========================================================================== */

});