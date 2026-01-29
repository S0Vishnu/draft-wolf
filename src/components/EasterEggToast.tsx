import React from 'react';
import { RefreshCcw } from 'lucide-react';

interface EasterEggToastProps {
    show: boolean;
    onClose: () => void;
}

export const EasterEggToast = ({ show, onClose }: EasterEggToastProps) => {
    if (!show) return null;
    return (
        <div className="toast">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ background: 'rgba(88, 28, 135, 0.5)', padding: '0.5rem', borderRadius: '50%', display: 'flex' }}>
                    <RefreshCcw className="text-purple-400" style={{ animation: 'spin-slow 3s linear infinite' }} />
                </div>
                <div>
                    <h4 className="text-purple-400" style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>Whoa there, Time Traveler!</h4>
                    <p style={{ color: '#d1d5db', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        Ctrl+Z doesn't work on the web... yet. <br />
                        <span style={{ color: 'white', fontWeight: 'bold' }}>Download DraftWolf</span> to undo your real-life mistakes.*
                    </p>
                    <p style={{ fontSize: '0.625rem', color: '#4b5563', marginTop: '0.5rem' }}>*Can't actually undo real life. Just files.</p>
                    <button onClick={onClose} style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#c084fc', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>Dismiss</button>
                </div>
            </div>
        </div>
    );
};
