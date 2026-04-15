/* ==========================================================================
   LÓGICA INTERACTIVA Y CATÁLOGO - INDUSTRIAS AUTOLACK SAS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", async () => {

    /* ==========================================================================
       1. MENÚ HAMBURGUESA (MÓVILES)
       ========================================================================== */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links'); 

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active'); // Activa la animación de la X
        });
    }

    // Cierra el menú automáticamente si se toca un enlace
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
       2. LÓGICA DEL CATÁLOGO DE COLORES (CARRUSEL JSON)
       ========================================================================== */
    const container = document.getElementById('carouselContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const tabs = document.querySelectorAll('.tab-btn');

    let baseColores = {};
    let lineaActual = 'poliuretano';

    // 2.1 Cargar Datos
    try {
        const res = await fetch('colores.json');
        baseColores = await res.json();
        if (container) renderizarCarrusel();
    } catch (e) {
        console.error("Error cargando el catálogo:", e);
    }

    // 2.2 Renderizar Tarjetas
    function renderizarCarrusel() {
        container.innerHTML = '';
        const colores = baseColores[lineaActual] || [];

        colores.forEach((c) => {
            const card = document.createElement('div');
            card.className = 'color-card';
            
            // Lógica condicional: Poliuretano (un solo bloque) vs Otros (Bicapa/Perla)
            let colorHtml = (lineaActual === 'poliuretano') 
                ? `<div class="color-full" style="background-color: ${c.hex_lleno}; flex: 1;"></div>`
                : `<div class="color-full" style="background-color: ${c.hex_lleno};"></div>
                   <div class="color-reduced" style="background-color: ${c.hex_reducido};"></div>`;

            let techExtra = (lineaActual !== 'poliuretano') 
                ? `<div class="tech-box"><strong>Base de Reducción</strong><p style="font-size:0.9rem">${c.base_reducido || 'N/A'}</p></div>
                   <div class="tech-box"><strong>Dilución</strong><p>${c.dilucion || 'N/A'}</p></div>`
                : '';

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <div class="card-color-box">${colorHtml}</div>
                        <div class="card-info">
                            <h3>${c.nombre}</h3>
                            <span><i class="fa-solid fa-rotate"></i> Tocar para info técnica</span>
                        </div>
                    </div>
                    <div class="card-back">
                        <h2>${c.nombre}</h2>
                        ${techExtra}
                        <div class="tech-box">
                            <strong>Descripción</strong>
                            <p class="desc-text">${c.descripcion}</p>
                        </div>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => card.classList.toggle('is-flipped'));
            container.appendChild(card);
        });
    }

    // 2.3 Navegación con Flechas
    if (nextBtn && prevBtn && container) {
        nextBtn.addEventListener('click', () => {
            container.scrollLeft += 330;
        });

        prevBtn.addEventListener('click', () => {
            container.scrollLeft -= 330;
        });
    }

    // 2.4 Cambio de Línea (Poliuretano, Perlas, etc.)
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            lineaActual = btn.dataset.linea;
            if (container) {
                renderizarCarrusel();
                container.scrollLeft = 0; // Resetear posición al inicio
            }
        });
    });
});