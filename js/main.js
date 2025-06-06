// js/main.js - Archivo JavaScript principal para Dra. Zúlyce Malavé

// --- Función para el año actual en el copyright ---
function setCurrentYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// --- Función para manejar el menú activo (ejemplo básico) ---
function setActiveNavLink() {
    // Intenta obtener la página actual de una manera más robusta
    let currentPage = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    if (currentPage === "" || currentPage === "index.html") { // Considera la raíz y index.html como la misma página "Inicio"
        currentPage = "index.html"; 
    }
    // Si estamos en index.html y hay un hash, es una sección de la home
    if (currentPage === "index.html" && window.location.hash) {
         // Para el ancla "#sobre-dra"
        if(window.location.hash === "#sobre-dra") {
            currentPage = "#sobre-dra"; // Identificador especial para el ancla
        }
    }


    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        let linkPage = link.getAttribute('href');
        
        // Manejo especial para el enlace de ancla "#sobre-dra" en index.html
        if (currentPage === "#sobre-dra" && linkPage === "#sobre-dra") {
            link.classList.add('active');
        } else if (linkPage.includes(currentPage) && currentPage !== "#sobre-dra") {
             // Para las páginas normales, verifica si el href contiene la página actual
            // y que no sea el caso especial del ancla que ya manejamos.
            if (currentPage === "index.html" && (linkPage === "index.html" || linkPage === "./" || linkPage === "/")) {
                link.classList.add('active');
            } else if (linkPage.endsWith(currentPage) && currentPage !== "index.html") {
                 link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
         else {
            link.classList.remove('active');
        }
    });
}


// --- Lógica para el Menú de Hamburguesa ---
const hamburgerButton = document.getElementById('hamburger-button');
const mainNav = document.getElementById('main-nav');
const bodyEl = document.body; // Para evitar scroll cuando el menú está abierto

if (hamburgerButton && mainNav) {
    hamburgerButton.addEventListener('click', () => {
        const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true' || false;
        hamburgerButton.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('menu-visible');
        hamburgerButton.classList.toggle('is-active'); // Para animar el botón de hamburguesa
        bodyEl.classList.toggle('no-scroll'); // Para evitar scroll en el body
    });

    // Cerrar menú si se hace clic en un enlace (para SPAs o anclas en la misma página)
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('menu-visible')) {
                mainNav.classList.remove('menu-visible');
                hamburgerButton.classList.remove('is-active');
                hamburgerButton.setAttribute('aria-expanded', 'false');
                bodyEl.classList.remove('no-scroll');
            }
        });
    });
}


// --- Inicialización de funciones cuando el DOM esté listo ---
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setActiveNavLink(); // Asegúrate que esto se llama después de que los elementos del DOM están listos

    const logoImg = document.getElementById('logo-img');
    if (logoImg) {
        logoImg.onerror = function() {
            console.warn("¡Atención! No se pudo cargar la imagen del logo. Verifica la ruta: " + logoImg.src);
        };
    }
    console.log("Sitio Dra. Zúlyce Malavé inicializado con menú hamburguesa.");
});
