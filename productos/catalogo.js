document.addEventListener("DOMContentLoaded", async () => {
    // 1. Obtener la línea de la URL (ej: ?linea=poliuretano)
    const params = new URLSearchParams(window.location.search);
    const lineaId = params.get('linea');
    const grid = document.getElementById('productos-grid');

    if (!lineaId) return;

    try {
        // 2. Cargar el JSON
        const respuesta = await fetch('catalogo.json');
        const data = await respuesta.json();
        const infoLinea = data[lineaId];

        if (infoLinea) {
            // 3. Llenar Banner y Textos
            document.getElementById('cat-titulo').textContent = infoLinea.titulo;
            document.getElementById('cat-descripcion').textContent = infoLinea.descripcion;
            document.getElementById('cat-banner-img').src = infoLinea.banner;
            document.getElementById('cat-banner-img').alt = infoLinea.titulo;

            // 4. Dibujar Productos
            if (infoLinea.productos.length > 0) {
                infoLinea.productos.forEach(prod => {
                    const card = document.createElement('div');
                    card.className = 'cat-card'; // Reutiliza tus estilos de productos.css
                    card.innerHTML = `
                        <div class="cat-img">
                            <img src="${prod.imagen}" alt="${prod.nombre}">
                            <div class="cat-overlay">
                                <a href="${prod.pdf}" target="_blank" class="btn-ver">
                                    Ficha Técnica <i class="fa-solid fa-file-pdf"></i>
                                </a>
                            </div>
                        </div>
                        <div class="cat-info">
                            <h2>${prod.nombre}</h2>
                            <p>${prod.descripcion || 'Producto especializado Industrias Autolack.'}</p>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            } else {
                grid.innerHTML = "<p class='no-prod'>Próximamente estaremos cargando los productos de esta línea.</p>";
            }
        }
    } catch (error) {
        console.error("Error cargando el catálogo:", error);
    }
});