/* ==========================================================================
   LÓGICA INTERACTIVA - INDUSTRIAS AUTOLACK SAS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    /* 1. MENÚ HAMBURGUESA */
    const menuToggle = document.getElementById('mobile-menu');
    // Usamos querySelector por si se te olvida poner el ID en el HTML
    const navLinks = document.querySelector('.nav-links'); 

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active'); // Animación de las barras
        });
    }

    /* 2. BOTÓN DE USUARIO (SOLO ÍCONO) */
    const userBtn = document.querySelector('.user-icon');
    if (userBtn) {
        userBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Abrir login de Autolack...");
        });
    }

    /* 3. ANIMACIONES AL HACER SCROLL (REVEAL) */
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});