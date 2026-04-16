document.addEventListener("DOMContentLoaded", async () => {
    // 1. Obtener el ID del producto desde la URL (?id=lanzamiento-1)
    const params = new URLSearchParams(window.location.search);
    const idProducto = params.get('id');
    const imgContainer = document.getElementById('img-dynamic-content');

    if (!idProducto) return;

    try {
        // 2. Cargar el archivo JSON de productos
        const respuesta = await fetch('productos.json');
        const productos = await respuesta.json();
        const info = productos[idProducto];

        if (info) {
            // --- LLENADO DE TEXTOS BÁSICOS ---
            document.getElementById('prod-title').textContent = info.titulo;
            document.getElementById('prod-desc').textContent = info.descripcion;

            // --- LÓGICA DE IMAGEN DINÁMICA ---
            if (info.tipo === "comparar") {
                imgContainer.innerHTML = `
                    
                    <div class="comparison-container">
                        <div class="comp-panel panel-antes">
                            <img src="${info.imagen_antes}" alt="Antes">
                            <span class="comp-label">Antes</span>
                        </div>
                        <div class="comp-panel panel-despues">
                            <img src="${info.imagen_despues}" alt="Después">
                            <span class="comp-label">Después</span>
                        </div>
                    </div>
                `;
            } else {
                imgContainer.innerHTML = `
                    
                    <img src="${info.imagen}" class="standard-img" alt="${info.titulo}">
                `;
            }

            // --- LLENADO DE ESPECIFICACIONES ---
            const listContainer = document.getElementById('prod-specs-list');
            if (listContainer) {
                listContainer.innerHTML = ""; 
                if (info.specs && info.specs.length > 0) {
                    info.specs.forEach(spec => {
                        const li = document.createElement('li');
                        li.innerHTML = `<i class="fa-solid fa-check"></i> ${spec}`;
                        listContainer.appendChild(li);
                    });
                }
            }

            // --- CONFIGURACIÓN DE WHATSAPP ---
            const waNumber = "573244171853"; // Reemplaza con tu número
            const waMsg = `Hola Industrias Autolack, me interesa cotizar el producto: ${info.titulo}`;
            const whatsappLink = document.getElementById('whatsapp-link');
            
            if (whatsappLink) {
                whatsappLink.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`;
            }

        } else {
            document.getElementById('prod-title').textContent = "Producto no encontrado";
            document.getElementById('prod-desc').textContent = "Lo sentimos, el producto no está disponible.";
        }

    } catch (error) {
        console.error("Error al cargar la plantilla:", error);
    }
});