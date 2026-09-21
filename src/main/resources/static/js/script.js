/* =========================================================
   Pawan Waghmare Portfolio - Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       Navbar Scroll Effect
       ===================================================== */

    const navbar = document.querySelector(".navbar");

    function handleNavbarScroll() {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    /* =====================================================
       Active Navigation Link
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* =====================================================
       Mobile Navbar Auto Close
       ===================================================== */

    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navbarLinks = document.querySelectorAll(".navbar-collapse .nav-link");

    navbarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });


    /* =====================================================
       Scroll Reveal Animation
       ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        const windowHeight = window.innerHeight;

        revealElements.forEach(function (element) {

            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                element.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();


    /* =====================================================
       Back To Top Button
       ===================================================== */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       Current Year
       ===================================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       Smooth Scroll For Internal Links
       ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       Contact Form Basic Validation
       ===================================================== */

    const contactForm =
        document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            const name =
                document.querySelector("#name");

            const email =
                document.querySelector("#email");

            const message =
                document.querySelector("#message");

            if (!name || !email || !message) {
                return;
            }

            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                message.value.trim() === ""
            ) {

                event.preventDefault();

                alert("Please fill in all required fields.");

                return;
            }

            /* Basic email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email.value.trim())) {

                event.preventDefault();

                alert("Please enter a valid email address.");

                email.focus();

                return;
            }

        });

    }

});