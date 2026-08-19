/* =========================================================
   MENÚ MÓVIL
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================================
   CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================================================
   ANIMACIÓN AL HACER SCROLL
========================================================= */

const elements = document.querySelectorAll(
    ".service-card, .project-card, .tech-item, .about-card, .contact-box"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


elements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* =========================================================
   ESTILOS DE ANIMACIÓN DINÁMICOS
========================================================= */

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `

    .hidden {

        opacity: 0;

        transform: translateY(25px);

        transition:
            opacity 0.7s ease,
            transform 0.7s ease;

    }

    .show {

        opacity: 1;

        transform: translateY(0);

    }

`;

document.head.appendChild(animationStyle);


/* =========================================================
   EFECTO SUAVE EN BOTONES
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId &&
            targetId !== "#"
        ) {

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});