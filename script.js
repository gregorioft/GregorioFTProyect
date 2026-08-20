const menuButton = document.getElementById("menuBtn");
const menu = document.getElementById("menu");


/* =========================
   MENÚ MÓVIL
========================= */

if (menuButton && menu) {

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

    });

}


/* =========================
   CERRAR MENÚ
========================= */

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        menuButton.textContent = "☰";

    });

});


/* =========================
   AÑO AUTOMÁTICO
========================= */

const year = document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================
   ANIMACIONES
========================= */

const elements = document.querySelectorAll(
    ".service, .price-card, .project, .about-mark"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach(element => {

    element.classList.add("animate");

    observer.observe(element);

});


/* =========================
   SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});