// src/components/JoinWidget.jsx
import React, { useState } from 'react';
import { Users, MessageCircle, Send, X } from 'lucide-react';

export default function JoinWidget() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button
                onClick={openModal}
                className="cta-button cta-secondary"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
                <Users size={20} />
                Junte-se à Comunidade
            </button>

            <div className={`modal ${isModalOpen ? '' : 'hidden'}`}>
                <div className="modal-backdrop" onClick={closeModal}></div>
                <div className="modal-content">
                    <button
                        className="modal-close"
                        onClick={closeModal}
                        aria-label="Fechar modal"
                    >
                        <X size={20} />
                    </button>

                    <h4>
                        <Users size={24} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                        Junte-se à Comunidade DevOps Manaus
                    </h4>
                    <p>Conecte-se com outros profissionais e participe dos nossos eventos!</p>

                    <div className="modal-ctas">
                        <a
                            href="https://discord.gg/devops-manaus"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeModal}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <MessageCircle size={18} />
                            Entrar no Discord
                        </a>
                        <a
                            href="https://chat.whatsapp.com/FWuOtLyvfnUI4SvWg2DLez"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-secondary"
                            onClick={closeModal}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <MessageCircle size={18} />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}