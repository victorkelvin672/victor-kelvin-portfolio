/* =================================
   VICTOR KELVIN PORTFOLIO
   PREMIUM JAVASCRIPT
================================= */


/* =================================
   MOBILE MENU
================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");

    menuBtn.addEventListener("click", () => {

        const isOpen = navbar.classList.toggle("active");

        menuBtn.textContent = isOpen ? "✕" : "☰";

        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

}


/* =================================
   CLOSE MENU AFTER LINK CLICK
================================= */

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("active");
        }

        if (menuBtn) {

            menuBtn.textContent = "☰";

            menuBtn.setAttribute("aria-expanded", "false");

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

});


/* =================================
   SMOOTH PAGE NAVIGATION
================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.getElementById(
            targetId.substring(1)
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",

                block: "start"
            });

        }

    });

});


/* =================================
   SCROLL REVEAL ANIMATIONS
================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .about, .contact"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {
        element.classList.add("show");
    });

}


/* =================================
   AUTOMATIC COPYRIGHT YEAR
================================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} Victor Kelvin. All Rights Reserved.`;

}


/* =================================
   WEBSITE READY
================================= */

console.log("Victor Kelvin Portfolio is ready! 💜");