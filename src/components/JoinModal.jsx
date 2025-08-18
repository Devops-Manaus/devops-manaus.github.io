// src/components/JoinModal.jsx
import React from 'react';

export default function JoinModal({ isOpen, onClose }) {
    return (
        <div className={`modal ${isOpen ? '' : 'hidden'}`}>
            <div className="modal-backdrop" onClick={onClose} />
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h4>Junte-se à nossa Comunidade</h4>
                <p>Escolha onde quer participar:</p>
                <div className="modal-ctas">
                    <a href="https://chat.whatsapp.com/FWuOtLyvfnUI4SvWg2DLez" className="cta-button" target="_blank">Entrar no WhatsApp</a>
                </div>
            </div>
        </div>
    );
}
