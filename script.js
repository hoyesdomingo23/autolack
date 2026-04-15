document.addEventListener("DOMContentLoaded", function() {

    /* ==========================================================================
       1. MENÚ HAMBURGUESA (MÓVILES)
       ========================================================================== */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Abre o cierra el menú al hacer clic en las 3 líneas
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cierra el menú automáticamente cuando tocas un enlace (Inicio, Nosotros, etc.)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    /* ==========================================================================
       2. CARRUSEL DE INTRODUCCIÓN (AUTOMÁTICO) - SECCIÓN SOBRE NOSOTROS
       ========================================================================== */
    const introSlides = document.querySelectorAll('.slide-intro');
    let introIndex = 0;

    // Solo arranca el carrusel si encuentra las imágenes en el HTML
    if (introSlides.length > 0) {
        function playIntro() {
            // 1. Oculta la imagen actual
            introSlides[introIndex].classList.remove('active');

            // 2. Calcula el índice de la siguiente (vuelve a 0 si llega al final)
            introIndex = (introIndex + 1) % introSlides.length;

            // 3. Muestra la nueva imagen
            introSlides[introIndex].classList.add('active');
        }

        // Cambia la imagen cada 4 segundos
        setInterval(playIntro, 4000);
    }

    /* ==========================================================================
       3. CARRUSEL DE LANZAMIENTOS (CONTROLADO POR BOTONES)
       ========================================================================== */
    const track = document.querySelector('.launches-track') || document.getElementById('launchTrack');
    const nextBtn = document.querySelector('.next-btn') || document.getElementById('nextLaunch');
    const prevBtn = document.querySelector('.prev-btn') || document.getElementById('prevLaunch');
    
    if (track && nextBtn && prevBtn) {
        let scrollPosition = 0;
        
        nextBtn.addEventListener('click', () => {
            // Buscamos una tarjeta para medir cuánto mide exactamente en la pantalla actual
            const card = track.querySelector('.launch-card');
            if (!card) return;
            
            // Ancho de la tarjeta + 20px del espacio (gap) definido en tu CSS
            const scrollAmount = card.offsetWidth + 20; 
            
            // Calculamos el límite máximo que se puede mover la caja
            const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;

            // Si aún no llegamos al final, avanzamos
            if (scrollPosition < maxScroll) {
                scrollPosition += scrollAmount;
                // Si el salto se pasa del límite, lo ajustamos exacto al borde
                if (scrollPosition > maxScroll) scrollPosition = maxScroll; 
                track.style.transform = `translateX(-${scrollPosition}px)`;
            }
        });

        prevBtn.addEventListener('click', () => {
            const card = track.querySelector('.launch-card');
            if (!card) return;
            
            const scrollAmount = card.offsetWidth + 20;

            // Si no estamos en el principio (0), retrocedemos
            if (scrollPosition > 0) {
                scrollPosition -= scrollAmount;
                // Si el retroceso pasa del 0, lo devolvemos exactamente al inicio
                if (scrollPosition < 0) scrollPosition = 0;
                track.style.transform = `translateX(-${scrollPosition}px)`;
            }
        });

        // TRUCO PRO: Si el usuario gira el celular o cambia el tamaño de la ventana,
        // reiniciamos el carrusel para evitar que las tarjetas queden cortadas por la mitad.
        window.addEventListener('resize', () => {
            scrollPosition = 0;
            track.style.transform = `translateX(0px)`;
        });
    }

});
/* ==========================================================================
   LÓGICA DEL MODAL MULTI-FLYER - INDUSTRIAS AUTOLACK
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('promoModal');
    const closeBtn = document.getElementById('closeModal');
    
    // FILTRO INTELIGENTE: Seleccionamos solo los que NO están ocultos
    const slides = document.querySelectorAll('.slide-flyer:not(.hidden-slide)');
    const dots = document.querySelectorAll('.dot:not(.hidden-slide)');
    
    let currentSlide = 0;
    let slideInterval;

    // Si no hay flyers visibles, terminamos la ejecución y el modal no se abre
    if (slides.length === 0) return;

    // 1. Función para cambiar de slide
    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        // Limpiamos clases
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        // Activamos el actual
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }

    // 2. Control de Auto-play
    function startAutoPlay() {
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 4000);
    }

    function stopAutoPlay() {
        clearInterval(slideInterval);
    }

    // 3. Eventos de Navegación
    const nextBtn = document.getElementById('modalNext');
    const prevBtn = document.getElementById('modalPrev');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
            stopAutoPlay(); // El usuario tomó el control
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
            stopAutoPlay();
        });
    }

    // 4. Mostrar el modal con retraso
    setTimeout(() => {
    if (modal) {
        modal.style.display = 'flex';
        startAutoPlay();
    }
}, 200);

    // 5. Cerrar el modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            stopAutoPlay();
        });
    }

    // Cerrar si hacen clic en el fondo oscuro
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            stopAutoPlay();
        }
    });
});