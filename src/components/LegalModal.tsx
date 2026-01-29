import { X } from 'lucide-react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

export const LegalModal = ({ isOpen, onClose, title, content }: LegalModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div
                className="modal-overlay"
                onClick={onClose}
            />
            <div className="modal-window">
                <div className="modal-header">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', fontFamily: 'var(--font-mono)', color: 'white' }}>{title}</h3>
                    <button
                        onClick={onClose}
                        style={{ padding: '0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
                    >
                        <X size={20} className="text-gray-400" />
                    </button>
                </div>
                <div className="modal-body">
                    {content}
                </div>
                <div className="modal-footer">
                    <button
                        onClick={onClose}
                        className="modal-btn"
                    >
                        I Acknowledge
                    </button>
                </div>
            </div>
        </div>
    );
};
