import React, {useEffect, useState} from 'react';

export default function PartnersSection() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('/data/partners.json')
            .then(res => res.json())
            .then(setPartners)
            .catch(console.error);
    }, []);

    return (
        <section id="partners">
            <h2 className="section-title">Parceiros</h2>
            <div className="grid">
                {partners.map(p => (
                    <div className="card text-center">
                        <img src={p.img} alt={p.name} className="w-32 h-32 rounded-full mb-4 mx-auto"/>
                        <h3>{p.name}</h3>
                        <p>
                            {p.links.map((link, i) => (
                                <>
                                    <a href={link.url} target="_blank">{link.label}</a>
                                    {i < p.links.length - 1 && " — "}
                                </>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
