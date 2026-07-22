"use strict";

// ==========================================
// MENÚ DE NAVEGACIÓN PARA CELULARES
// ==========================================

const botonMenu = document.getElementById("botonMenu");
const menuPrincipal = document.getElementById("menuPrincipal");

function cerrarMenu() {
    if (!botonMenu || !menuPrincipal) {
        return;
    }

    menuPrincipal.classList.remove("activo");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.textContent = "☰";
}

function abrirMenu() {
    if (!botonMenu || !menuPrincipal) {
        return;
    }

    menuPrincipal.classList.add("activo");
    botonMenu.setAttribute("aria-expanded", "true");
    botonMenu.textContent = "✕";
}

if (botonMenu && menuPrincipal) {
    botonMenu.addEventListener("click", function () {
        const menuAbierto = menuPrincipal.classList.contains("activo");

        if (menuAbierto) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    const enlacesMenu = menuPrincipal.querySelectorAll("a");

    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            cerrarMenu();
        });
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) {
            cerrarMenu();
        }
    });

    document.addEventListener("click", function (event) {
        const clicDentroDelMenu =
            menuPrincipal.contains(event.target) ||
            botonMenu.contains(event.target);

        if (!clicDentroDelMenu) {
            cerrarMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            cerrarMenu();
        }
    });
}