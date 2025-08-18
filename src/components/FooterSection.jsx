import React, {useEffect, useState} from 'react';
import {Github, Instagram, Mail, MapPin, MessageCircle} from 'lucide-react';

const iconMap = {
    'GitHub': Github,
    'Instagram': Instagram,
    'Discord': MessageCircle,
    'Email': Mail
};

export default function FooterSection() {
    const [footerData, setFooter] = useState({
        social: [],
        text: '',
        location: ''
    });

    useEffect(() => {
        fetch('/data/footer.json')
            .then(res => res.json())
            .then(setFooter)
            .catch(console.error);
    }, []);

    return (
        <footer id="contact">
            <div className="footer-content">
                <div className="social-links">
                    {footerData.social.map((s, idx) => {
                        const IconComponent = iconMap[s.name];
                        return (
                            <a key={idx} href={s.url} title={s.name}>
                                {IconComponent && <IconComponent size={20}/>}
                            </a>
                        );
                    })}
                </div>
                <p>{footerData.text}</p>
                <p className="text-gray-500 mt-2">
                    <MapPin size={16} style={{display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle'}}/>
                    {footerData.location}
                </p>
            </div>
        </footer>
    );
}