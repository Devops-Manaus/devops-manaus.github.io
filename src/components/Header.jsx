import { useState } from 'react';

export default function Header({ navlinks }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={isOpen ? 'nav-open' : ''}>
            {/* REMOVA a classe "container" e deixe apenas como nav */}
            <nav>
                <div className="logo">DevOps Manaus</div>
                <button
                    className="menu-toggle"
                    onClick={() => setIsOpen(o => !o)}
                    aria-label="Abrir menu"
                >
                    ☰
                </button>
                <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
                    {navlinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}