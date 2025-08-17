function createParticles() {
    const container = document.getElementById("particles");
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 20 + "s";
        particle.style.animationDuration =
            Math.random() * 10 + 15 + "s";
        container.appendChild(particle);
    }
}
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(
            this.getAttribute("href"),
        );
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
        header.style.background = "rgba(240, 248, 255, 0.95)";
        header.style.boxShadow =
            "0 5px 20px rgba(43, 108, 184, 0.1)";
    } else {
        header.style.background = "rgba(240, 248, 255, 0.9)";
        header.style.boxShadow = "none";
    }
});
window.addEventListener("load", createParticles);
function animateCounters() {
    const counters = document.querySelectorAll(".stat-number");
    const options = { threshold: 0.7 };
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent.replace(
                    /\D/g,
                    "",
                );
                let current = 0;
                const increment = finalNumber / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= finalNumber) {
                        target.textContent =
                            target.textContent.replace(
                                /\d+/,
                                finalNumber,
                            );
                        clearInterval(timer);
                    } else {
                        target.textContent =
                            target.textContent.replace(
                                /\d+/,
                                Math.floor(current),
                            );
                    }
                }, 20);
                observer.unobserve(target);
            }
        });
    }, options);
    counters.forEach((counter) => {
        observer.observe(counter);
    });
}
window.addEventListener("load", animateCounters);