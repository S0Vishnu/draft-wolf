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
                <div style={{ position: 'relative', zIndex: 10 }}>
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
                            See the Magic <Zap size={18} style={{ color: '#facc15' }} />
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
                        <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(168,85,247,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img src={logoIcon} alt="W" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>

                    {/* Chaos Side (Left) */}
                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '50%', overflow: 'hidden', pointerEvents: 'none' }}>
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="hero__chaos-item"
                                style={{
                                    top: `${Math.random() * 80 + 10}%`,
                                    left: `${Math.random() * 40}%`,
                                    animationDelay: `${i * 0.8}s`,
                                    animationDuration: '6s'
                                }}
                            >
                                <div style={{ width: '3rem', height: '4rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(12deg)' }}>
                                    <FileText size={20} style={{ color: '#f87171' }} />
                                </div>
                                <div style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: '#f87171', marginTop: '0.25rem' }}>v{99 + i}_final</div>
                            </div>
                        ))}
                    </div>

                    {/* Order Side (Right) */}
                    <div style={{ position: 'absolute', top: '50%', right: 0, width: '50%', height: '2px', background: 'linear-gradient(to right, rgba(168,85,247,0.5), rgba(6,182,212,0.5))', transform: 'translateY(-50%)', filter: 'blur(2px)' }} />
                    <div style={{ position: 'absolute', top: '50%', right: 0, width: '50%', height: '1px', background: 'rgba(255,255,255,0.2)', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 2rem' }}>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} style={{ position: 'relative' }}>
                                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 10px rgba(6,182,212,0.8)', position: 'relative', zIndex: 10 }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll-indicator">
                <span>Scroll to Time Travel</span>
                <ArrowRight style={{ transform: 'rotate(90deg)' }} size={16} />
            </div>
        </section>
    );
};
