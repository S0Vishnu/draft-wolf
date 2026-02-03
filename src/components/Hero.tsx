import { Download, Zap, FileText, ArrowRight } from 'lucide-react';
import logoIcon from '../assets/icons/logo.png';
import { WINDOWS_DOWNLOAD_LINK } from '../constants/downloadLinks';

export const Hero = () => {
    return (
        <section className="hero">
            {/* Background Ambience */}
            <div className="hero__bg-orb hero__bg-orb--purple" />
            <div className="hero__bg-orb hero__bg-orb--cyan" />

            <div className="hero__content md-grid-2">

                {/* Copy */}
                <div className="hero__copy-wrapper">
                    <div className="hero__badge">
                        <span className="hero__badge-dot" />
                        V1.0 Beta is Live
                    </div>

                    <h1 className="hero__title">
                        Stop lying to yourself about <br />
                        <span className="hero__gradient-text">
                            'final_final_v2.blend'
                        </span>
                    </h1>

                    <p className="hero__desc">
                        The local time machine for your creative chaos. No Git. No command line. Just drag, drop, and done.
                    </p>

                    <div className="hero__actions">
                        <a
                            href={WINDOWS_DOWNLOAD_LINK}
                            download
                            className="hero__btn hero__btn--primary"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
                                Download Beta <Download size={18} />
                            </span>
                        </a>
                        <button className="hero__btn hero__btn--secondary">
                            See the Magic <Zap size={18} className="hero__magic-icon" />
                        </button>
                    </div>

                    <div className="hero__compatibility">
                        <div className="hero__icons">
                            {['Ps', 'Ai', 'Id', 'Fm'].map((txt, i) => (
                                <div key={i} className="hero__icon">
                                    {txt}
                                </div>
                            ))}
                        </div>
                        <p>Works with everything you already use.</p>
                    </div>
                </div>

                {/* Visual: Chaos to Order Engine */}
                <div className="hero__visual">
                    {/* The Prism */}
                    <div className="hero__prism">
                        <div className="hero__logo-container">
                            <img src={logoIcon} alt="W" className="hero__logo-img" />
                        </div>
                    </div>

                    {/* Chaos Side (Left) */}
                    <div className="hero__chaos-side">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="hero__chaos-item"
                                style={{
                                    top: `${Math.random() * 80 + 10}%`,
                                    left: `${Math.random() * 40}%`,
                                    animationDelay: `${i * 0.8}s`
                                }}
                            >
                                <div className="hero__chaos-file">
                                    <FileText size={20} className="hero__chaos-file-icon" />
                                </div>
                                <div className="hero__chaos-label">v{99 + i}_final</div>
                            </div>
                        ))}
                    </div>

                    {/* Order Side (Right) */}
                    <div className="hero__order-line-gradient" />
                    <div className="hero__order-container">
                        {[...Array(4)].map((_, i) => {
                            const versions = ['v-1', 'v-24', 'v-65', 'Perfect'];
                            return (
                                <div key={i} className="hero__dot-wrapper">
                                    <div className="hero__order-dot" />
                                    {versions[i] && <span className="hero__dot-tooltip">{versions[i]}</span>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll-indicator">
                <span>Scroll to Time Travel</span>
                <ArrowRight className="hero__scroll-arrow" size={16} />
            </div>
        </section>
    );
};
