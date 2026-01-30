import { FileText } from 'lucide-react';
import { useState } from 'react';

export const HallOfShame = () => {
    const filenames = [
        "thesis_final_FINAL_v2.pdf",
        "Logo_New_Newest_REAL.ai",
        "Project_X_PRINT_THIS_ONE.indd",
        "dont_delete_plz_v99.psd",
        "presentation_fixed_typo_AGAIN.pptx",
        "ctrl_z_doesnt_work_here.txt" // Easter egg hint!
    ];

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [showHint, setShowHint] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section className="hall-of-shame">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d1d5db' }}>The Hall of Shame</h2>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    We've all been there. It's time to stop.{' '}
                    <span
                        style={{
                            fontSize: '0.75rem',
                            opacity: 0.4,
                            fontStyle: 'italic',
                            cursor: 'help',
                            position: 'relative',
                            display: 'inline-block'
                        }}
                        onMouseEnter={() => setShowHint(true)}
                        onMouseLeave={() => setShowHint(false)}
                        onMouseMove={handleMouseMove}
                    >
                        (wish you could undo this?)
                    </span>
                </p>
            </div>

            {showHint && (
                <div
                    style={{
                        position: 'fixed',
                        left: mousePos.x,
                        top: mousePos.y,
                        transform: 'translate(12px, -40px)',
                        background: 'rgba(168, 85, 247, 0.95)',
                        color: 'white',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        opacity: 0.4,
                        boxShadow: '0 4px 12px rgba(168, 85, 247, 0.4)',
                        zIndex: 9999,
                    }}
                >
                    ✨ Try Ctrl+Z
                </div>
            )}

            <div className="hall-of-shame__marquee">
                {[...filenames, ...filenames].map((name, i) => (
                    <div key={i} className="shame-item">
                        <FileText size={20} className="text-gray-400" />
                        <span className="shame-item__text">{name}</span>
                        <div className="shame-item__stamp">
                            FIXED BY DRAFTWOLF
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
