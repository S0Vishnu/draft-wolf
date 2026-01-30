import React from 'react';

interface FooterProps {
    onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer = ({ onOpenLegal }: FooterProps) => {
    const scrollToManifesto = (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer__content">
                <h2 className="footer__title">
                    YOUR ABSOLUTE <br /> FINAL VERSION.
                </h2>

                <div className="footer__buttons">
                    <button className="footer__btn footer__btn--white">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }}>
                            {[...Array(4)].map((_, i) => <div key={i} style={{ width: '0.5rem', height: '0.5rem', background: 'black' }}></div>)}
                        </div>
                        Windows
                    </button>
                    <button className="footer__btn footer__btn--dark">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" style={{ width: '1.25rem', height: '1.25rem', filter: 'invert(1)' }} alt="Linux" />
                        Linux
                    </button>
                    <button className="footer__btn footer__btn--dark">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" style={{ width: '1.25rem', height: '1.25rem', filter: 'invert(1)' }} alt="Apple" />
                        Download for Mac
                    </button>
                </div>

                <div className="footer__links">
                    <p>© 2026 DraftWolf Inc.</p>
                    <div className="footer__nav">
                        <button onClick={() => onOpenLegal('privacy')} className="footer__nav-item">Privacy</button>
                        <button onClick={() => onOpenLegal('terms')} className="footer__nav-item">Terms</button>
                        <a href="#manifesto" onClick={scrollToManifesto} className="footer__nav-item" style={{ textDecoration: 'none' }}>Manifesto</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
