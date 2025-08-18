import React, { useEffect, useState } from 'react';

export default function AboutSection() {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch('/data/about.json')
            .then(res => res.json())
            .then(setAbout)
            .catch(console.error);
    }, []);

    return (
        <section id="about">
            <h2 className="section-title">Quem Somos</h2>
            <div className="grid">
                {about.map((item, i) => (
                    <div className="card" key={i}>
                        <h3>{item.heading}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
