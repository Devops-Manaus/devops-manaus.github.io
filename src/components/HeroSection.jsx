// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import JoinWidget from './JoinWidget.jsx';

export default function HeroSection() {
    const [hero, setHero] = useState(null);

    useEffect(() => {
        fetch('/data/hero.json')
            .then(r => r.json())
            .then(setHero)
            .catch(console.error);
    }, []);

    if (!hero) return null;

    const { title, subtitle, lema, cta } = hero;
    const { label, href } = cta;

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>{title}</h1>
                <p className="subtitle">{subtitle}</p>
                <div className="lema">{lema}</div>
                <div className="ctas">
                    <a
                        href={href}
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {label}
                    </a>
                    <JoinWidget />
                </div>
            </div>
        </section>
    );
}