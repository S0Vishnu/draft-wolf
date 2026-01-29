import React from 'react';
import { FileText } from 'lucide-react';

export const HallOfShame = () => {
    const filenames = [
        "thesis_final_FINAL_v2.pdf",
        "Logo_New_Newest_REAL.ai",
        "Project_X_PRINT_THIS_ONE.indd",
        "dont_delete_plz_v99.psd",
        "presentation_fixed_typo_AGAIN.pptx"
    ];

    return (
        <section className="hall-of-shame">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d1d5db' }}>The Hall of Shame</h2>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>We've all been there. It's time to stop.</p>
            </div>

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
