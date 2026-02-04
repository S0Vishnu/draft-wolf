import logoFull from '../assets/logo_full.svg';
import { WINDOWS_DOWNLOAD_LINK } from '../constants/downloadLinks';

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
                    <img src={logoFull} alt="DraftWolf" style={{ height: '1rem' }} />
                </div>
                <div className="navbar__links md-flex">
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
                <a href={WINDOWS_DOWNLOAD_LINK} download className="navbar__cta" style={{ textDecoration: 'none' }}>
                    Get Early Access
                </a>
            </div>
        </nav>
    );
};
