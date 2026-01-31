import { GitCommit } from 'lucide-react';

export const Features = () => (
    <section className="features" id="features">
        <div className="features__container">
            <div style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: 1.1 }}>Built for the <br /> creatively chaotic.</h2>
            </div>

            <div className="features__grid md-grid-3">

                {/* Card 1: Multiverse */}
                <div className="feature-card feature-card--interactive-reverse-negative">
                    <div className="feature-card__icon">
                        <GitCommit size={48} />
                    </div>
                    <div className="feature-card__visual">
                        {/* Visual Tree */}
                        <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%', stroke: 'rgba(168,85,247,0.5)', fill: 'none', strokeWidth: 2 }}>
                            <path d="M 20 50 L 60 50 C 80 50, 80 20, 100 20 L 140 20" className="dash-anim-1" />
                            <path d="M 60 50 C 80 50, 80 80, 100 80 L 160 80" className="dash-anim-2" />
                            <circle cx="20" cy="50" r="4" style={{ fill: '#a855f7' }} />
                            <circle cx="140" cy="20" r="4" style={{ fill: '#a855f7' }} />
                            <circle cx="160" cy="80" r="4" style={{ fill: '#a855f7' }} />
                        </svg>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>The Multiverse</h3>
                    <p className="text-gray-400" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                        Create "What if?" timelines without duplicating files. Branch out for a wild idea, merge it back if it works, or leave it in a parallel universe if it sucks.
                    </p>
                </div>

                {/* Card 2: Inspector Gadget */}
                <div className="feature-card feature-card--interactive">
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, transparent, #06b6d4, transparent)', opacity: 0.5 }}></div>
                    <div className="feature-card__visual">
                        <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: '#67e8f9', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,182,212,0.1)', zIndex: 0 }} />
                            <div style={{ position: 'relative', zIndex: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.25rem' }}><span>METADATA</span><span>ID: #9F2A</span></div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
                                    <div><span style={{ color: '#6b7280' }}>TYPE</span><br />.PSD (Adobe)</div>
                                    <div><span style={{ color: '#6b7280' }}>SIZE</span><br />1.2 GB</div>
                                    <div><span style={{ color: '#6b7280' }}>LAYERS</span><br />492</div>
                                    <div><span style={{ color: '#6b7280' }}>MOOD</span><br />Chaotic</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>Inspector Gadget</h3>
                    <p className="text-gray-400" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                        A HUD for your files. See visual diffs, layer counts (for PSDs), and word count deltas instantly. It's like X-ray vision for your creative assets.
                    </p>
                </div>

                {/* Card 3: Visual Preview */}
                <div className="feature-card feature-card--interactive-reverse">
                    <div className="feature-card__visual" style={{ overflow: 'hidden', borderRadius: '0.75rem', background: '#1f2937' }}>
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, filter: 'grayscale(100%)' }} alt="Draft" />
                        <div style={{ position: 'absolute', inset: 0, width: '50%', borderRight: '2px solid white', overflow: 'hidden', background: '#1f2937' }}>
                            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" style={{ width: '200%', maxWidth: 'none', height: '100%', objectFit: 'cover' }} alt="Final" />
                        </div>
                        <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', fontSize: '0.625rem', fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.5)', padding: '0 0.5rem', borderRadius: '0.25rem', color: 'white' }}>BEFORE</div>
                        <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', fontSize: '0.625rem', fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.5)', padding: '0 0.5rem', borderRadius: '0.25rem', color: 'white' }}>AFTER</div>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>Visual Diffing</h3>
                    <p className="text-gray-400" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                        Don't read commit messages. Just drag the slider. See exactly what changed in your image, text, or code side-by-side.
                    </p>
                </div>

            </div>
        </div>
    </section>
);
