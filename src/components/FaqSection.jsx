import React, {useEffect, useState} from 'react';

export default function FaqSection() {
    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch('/data/faq.json')
            .then(res => res.json())
            .then(setFaq)
            .catch(console.error);
    }, []);

    return (
        <section id="faq">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <div className="faq-list">
                {faq.map(item => (
                    <details>
                        <summary>{item.q}</summary>
                        <p>{item.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
