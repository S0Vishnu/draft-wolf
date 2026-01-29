import React from 'react';

export const Manifesto = () => (
    <section id="manifesto" className="manifesto">
        <div className="manifesto__overlay" />
        <div className="manifesto__content">
            <div className="manifesto__tag">
                The Philosophy
            </div>
            <h2 className="manifesto__title">
                WE BELIEVE <br /> CREATIVITY SHOULDN'T <br /><span className="manifesto__highlight">BE DESTRUCTIVE.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.25rem', color: '#9ca3af', fontWeight: 300, lineHeight: 1.6, maxWidth: '42rem', margin: '0 auto' }}>
                <p>Every time you "Save As", you fracture your reality. You create a graveyard of files that never made the cut.</p>
                <p>Creativity is non-linear. It loops, it branches, it breaks, and it heals. Your tools should honor that chaos, not force it into a linear stack of undo's.</p>
                <p>We built DraftWolf to let you explore the multiverse of your ideas without the fear of losing your way back.</p>
            </div>
            <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'left', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#6b7280' }}>
                    <p style={{ color: 'white', marginBottom: '0.5rem' }}>SIGNED,</p>
                    <p>THE DRAFTWOLF TEAM</p>
                </div>
            </div>
        </div>
    </section>
);
