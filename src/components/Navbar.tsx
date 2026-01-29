import React from 'react';

export const Navbar = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="navbar__logo">
                        <span>W</span>
                    </div>
                    <span style={{ fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '-0.025em' }}>DraftWolf</span>
                </div>
                <div className="navbar__links md-flex hidden">
                    <button onClick={() => scrollToSection('features')} className="navbar__link navbar__link--cyan">
                        FEATURES
                        <span className="navbar__link-line"></span>
                    </button>
                    <button onClick={() => scrollToSection('manifesto')} className="navbar__link navbar__link--purple">
                        MANIFESTO
                        <span className="navbar__link-line"></span>
                    </button>
                    <button onClick={() => scrollToSection('pricing')} className="navbar__link navbar__link--white">
                        PRICING
                        <span className="navbar__link-line"></span>
                    </button>
                </div>
                <button className="navbar__cta">
                    Get Early Access
                </button>
            </div>
        </nav>
    );
};
