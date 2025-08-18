import React, {useEffect, useState} from 'react';

export default function CommunitySection() {
    const [community, setCommunity] = useState({
        stats: [],
        card: {
            heading: '',
            text: ''
        }
    });

    useEffect(() => {
        fetch('/data/community.json')
            .then(res => res.json())
            .then(setCommunity)
            .catch(console.error);
    }, []);

    return (
        <section id="community">
            <h2 className="section-title">Nossa Comunidade</h2>
            <div className="stats">
                {community.stats.map((stat, index, arr) => (
                    <div className="stat" key={index}>
            <span className="stat-number">
              <span className="value">{stat.value}</span>
                {index < arr.length - 1 && <span className="symbol">+</span>}
            </span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>
            <div className="card">
                <h3>{community.card.heading}</h3>
                <p>{community.card.text}</p>
            </div>
        </section>
    );
}
