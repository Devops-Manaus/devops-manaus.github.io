// src/components/SiteEffects.jsx
import { useEffect } from 'react';

export default function SiteEffects() {
    // 1. Partículas
    useEffect(() => {
        const container = document.getElementById("particles");
        if (!container) return;
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement("div");
            p.className = "particle";
            p.style.left = `${Math.random() * 100}%`;
            p.style.animationDelay = `${Math.random() * 20}s`;
            p.style.animationDuration = `${Math.random() * 10 + 15}s`;
            container.appendChild(p);
        }
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (!e.target.matches('a[href^="#"]')) return;
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const header = document.querySelector("header");
            if (!header) return;
            if (window.scrollY > 100) {
                header.style.background = "rgba(240, 248, 255, 0.95)";
                header.style.boxShadow = "0 5px 20px rgba(43, 108, 184, 0.1)";
            } else {
                header.style.background = "rgba(240, 248, 255, 0.9)";
                header.style.boxShadow = "none";
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const animate = (entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const final = parseInt(el.textContent.replace(/\D/g, ""), 10);
                let current = 0;
                const step = final / 100;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= final) {
                        el.textContent = final;
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current);
                    }
                }, 20);
                obs.unobserve(el);
            });
        };
        const observer = new IntersectionObserver(animate, { threshold: 0.7 });
        document.querySelectorAll(".stat-number").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return null;
}
