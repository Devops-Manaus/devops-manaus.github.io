import React, { useState, useEffect, useCallback } from "react";

const BASE = import.meta.env.BASE_URL || "/";
const IMG_BASE = `${BASE}assets/media/images/`;

const slides = [
    { id: 1, src: `${IMG_BASE}devops.png`,      alt: "Banner meetup DevOps Manaus" },
    { id: 2, src: `${IMG_BASE}devops-jeff.png`, alt: "Banner meetup com Jeferson" },
];

export default function EventCardCarousel() {
    const [i, setI] = useState(0);
    const next = useCallback(() => setI((p) => (p + 1) % slides.length), []);
    const prev = useCallback(() => setI((p) => (p - 1 + slides.length) % slides.length), []);

    useEffect(() => {
        const onKey = (e) => { if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [next, prev]);

    return (
        <section id="evento" className="event-card card">
            <div className="event-card__media">
                <button className="event-card__nav prev" aria-label="Anterior" onClick={prev}>&lsaquo;</button>
                <a href="https://www.even3.com.br/1-meetup-devops-manaus-628712/" target="_blank" rel="noopener noreferrer">
                    <img className="event-card__img" src={slides[i].src} alt={slides[i].alt} loading="lazy" />
                </a>
                <button className="event-card__nav next" aria-label="Próximo" onClick={next}>&rsaquo;</button>

                <div className="event-card__dots" role="tablist" aria-label="Slides">
                    {slides.map((s, idx) => (
                        <button
                            key={s.id}
                            role="tab"
                            aria-selected={idx === i}
                            className={`dot ${idx === i ? "is-active" : ""}`}
                            onClick={() => setI(idx)}
                        />
                    ))}
                </div>
            </div>

            <div className="event-card__body">
                <h3>1º MeetUp DevOps Manaus</h3>

                <h4>Sobre o evento</h4>
                <p>No dia 20 de setembro, data do Software Freedom Day, acontece o lançamento oficial da DevOps Manaus, a primeira comunidade voltada à cultura DevOps em Manaus.</p>
                <p>O encontro será em formato de live no YouTube e contará com a participação de Jeferson Fernando (LINUXtips).</p>
                <p>Nesta edição de abertura, o bate-papo aborda:</p>
                <ul className="event-card__list">
                    <li>Impacto do software livre e de código aberto;</li>
                    <li>Como garantir acesso igualitário ao conhecimento;</li>
                    <li>Benefícios do open source na educação;</li>
                    <li>Formas de contribuir com a comunidade e com projetos open source.</li>
                </ul>
                <p>A DevOps Manaus nasce para fortalecer a cultura DevOps local, promovendo inclusão, compartilhamento de conhecimento e valorização do open source.</p>

                <div className="event-card__cta">
                    <a
                        className="btn btn--primary event-btn"
                        href="https://www.even3.com.br/1-meetup-devops-manaus-628712/"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Inscreva-se
                    </a>
                </div>
            </div>
        </section>
    );
}
