/**
 * Modal: buscar Certificado de Análisis por número de lote.
 * data-cert en el <script> = ruta relativa a certificados/index.html
 */
(function () {
    const script = document.currentScript;
    const certPage = (script && script.getAttribute("data-cert")) || "certificados/index.html";

    function ensureModal() {
        if (document.getElementById("coa-lote-modal")) return;

        const overlay = document.createElement("div");
        overlay.id = "coa-lote-modal";
        overlay.className = "coa-lote-overlay";
        overlay.setAttribute("aria-hidden", "true");
        overlay.innerHTML = `
            <div class="coa-lote-dialog" role="dialog" aria-labelledby="coa-lote-title" aria-modal="true">
                <button type="button" class="coa-lote-close" aria-label="Cerrar">&times;</button>
                <h2 id="coa-lote-title">Certificados de análisis</h2>
                <p class="coa-lote-help">La búsqueda es <strong>solo por número de lote</strong> (no por nombre ni código). Ejemplo: 2803JUL26</p>
                <label class="coa-lote-label" for="coa-lote-input">Número de lote</label>
                <input type="text" id="coa-lote-input" class="coa-lote-input" placeholder="Solo el lote, ej. 2803JUL26" autocomplete="off" maxlength="40">
                <p class="coa-lote-error" id="coa-lote-error" hidden></p>
                <button type="button" class="coa-lote-btn" id="coa-lote-buscar">Buscar por lote</button>
            </div>
        `;
        document.body.appendChild(overlay);

        const close = () => {
            overlay.classList.remove("open");
            overlay.setAttribute("aria-hidden", "true");
        };

        overlay.querySelector(".coa-lote-close").addEventListener("click", close);
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) close();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && overlay.classList.contains("open")) close();
        });

        const ir = () => {
            const input = document.getElementById("coa-lote-input");
            const err = document.getElementById("coa-lote-error");
            const lote = String(input.value || "").trim().toUpperCase().replace(/\s+/g, "");
            if (!lote) {
                err.hidden = false;
                err.textContent = "Escribe el número de lote (solo el lote).";
                input.focus();
                return;
            }
            err.hidden = true;
            const sep = certPage.includes("?") ? "&" : "?";
            window.location.href = `${certPage}${sep}lote=${encodeURIComponent(lote)}`;
        };

        document.getElementById("coa-lote-buscar").addEventListener("click", ir);
        document.getElementById("coa-lote-input").addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                ir();
            }
        });
    }

    function openModal(e) {
        if (e) e.preventDefault();
        ensureModal();
        const overlay = document.getElementById("coa-lote-modal");
        const input = document.getElementById("coa-lote-input");
        const err = document.getElementById("coa-lote-error");
        if (err) {
            err.hidden = true;
            err.textContent = "";
        }
        if (input) input.value = "";
        overlay.classList.add("open");
        overlay.setAttribute("aria-hidden", "false");
        setTimeout(() => input && input.focus(), 50);
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".js-abrir-coa").forEach((el) => {
            el.addEventListener("click", openModal);
        });
    });
})();
