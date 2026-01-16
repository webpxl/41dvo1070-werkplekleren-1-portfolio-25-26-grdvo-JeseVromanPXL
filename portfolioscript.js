document.addEventListener("DOMContentLoaded", () => {

    /* ===== INDEX PAGE ANIMATIONS ===== */
    const indexSections = document.querySelectorAll(
        ".about, .project, .extra"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    indexSections.forEach((section) => observer.observe(section));

    /* ===== ABOUT PAGE ANIMATIONS ===== */
    const aboutSections = document.querySelectorAll(".about-section");

    aboutSections.forEach((section) => observer.observe(section));
});
