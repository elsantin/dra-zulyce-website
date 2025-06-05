// js/main.js - Archivo JavaScript principal para Dra. Zúlyce Malavé

// --- Función para el año actual en el copyright ---
function setCurrentYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// --- Pequeña función para manejar el menú activo (ejemplo básico) ---
// Esto es muy simple, para un menú más complejo se necesitaría más lógica,
// especialmente si se carga contenido dinámicamente.
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// --- (Opcional) Hamburguesa para menú móvil ---
// Necesitaríamos añadir el HTML para el botón de hamburguesa y adaptar el CSS
/*
const mobileMenuButton = document.getElementById('mobile-menu-button'); // Asumiendo que tienes un botón con este ID
const mainNav = document.querySelector('.main-nav');

if (mobileMenuButton && mainNav) {
    mobileMenuButton.addEventListener('click', () => {
        mainNav.classList.toggle('active'); // La clase 'active' en CSS mostraría/ocultaría el menú
    });
}
*/


// --- Inicialización de funciones cuando el DOM esté listo ---
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setActiveNavLink();

    // Aquí puedes añadir más inicializaciones o llamadas a funciones
    console.log("Sitio Dra. Zúlyce Malavé inicializado.");

    // Ejemplo de alerta si el logo no carga (requiere que el logo tenga un id)
    const logoImg = document.getElementById('logo-img');
    if (logoImg) {
        logoImg.onerror = function() {
            console.warn("¡Atención! No se pudo cargar la imagen del logo. Verifica la ruta: " + logoImg.src);
            // Podrías mostrar un mensaje en la UI en lugar de solo en la consola
        };
    }

});

// --- Más funciones pueden ir aquí ---
// Por ejemplo, para manejar el envío de formularios (aunque usaremos Formspree),
// para animaciones al hacer scroll, para cargar artículos del blog (si usamos Markdown y JS), etc.

