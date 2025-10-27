import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function DonateModal({ show, onClose }) {
    useEffect(() => {
        if (show) {
            const script = document.createElement('script');
            script.src = 'https://cdn.raisely.com/v3/public/embed.js';
            script.async = true;
            document.head.appendChild(script);

            return () => {
                const existingScript = document.querySelector('script[src="https://cdn.raisely.com/v3/public/embed.js"]');
                if (existingScript) {
                    document.head.removeChild(existingScript);
                }
            };
        }
    }, [show]);

    if (!show) return null;

    return ReactDOM.createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxWidth: '90%', maxHeight: '90%', overflow: 'auto', position: 'relative' }}>
                <button 
                    onClick={onClose}
                    style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                >
                    ×
                </button>
                
                <div 
                    className="raisely-donate" 
                    data-campaign-path="zandmco" 
                    data-profile="" 
                    data-width="100%" 
                    data-height="800"
                ></div>
            </div>
        </div>,
        document.body
    );
}