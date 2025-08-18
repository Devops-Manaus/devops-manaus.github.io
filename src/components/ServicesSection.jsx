import React, {useEffect, useState} from 'react';

export default function ServicesSection() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/data/services.json')
            .then(res => res.json())
            .then(setServices)
            .catch(console.error);
    }, []);

    return (
        <section id="services">
            <h2 className="section-title">O Que Fazemos</h2>
            <div className="grid">
                {services.map(s => (
                    <div className="card">
                        <h3>{s.icon} {s.title}</h3>
                        <p>{s.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
