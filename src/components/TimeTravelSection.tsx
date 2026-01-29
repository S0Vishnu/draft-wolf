import { useState, useEffect, useRef } from 'react';
import { FileText } from 'lucide-react';

export const TimeTravelSection = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top, height } = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const totalScroll = height - windowHeight;
                const currentScroll = -top;

                let progress = currentScroll / totalScroll;
                progress = Math.min(Math.max(progress, 0), 1);
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine content based on progress
    const getCurrentState = () => {
        if (scrollProgress < 0.33) return {
            title: "The Rough Draft",
            desc: "Messy, chaotic, but full of potential. You just dragged it in.",
            colorClass: "text-gray-400",
            previewClass: "time-travel__preview--blur"
        };
        if (scrollProgress < 0.66) return {
            title: "The Pivot",
            desc: "Complete direction change. No separate file needed. Just a branch.",
            colorClass: "text-purple-400",
            previewClass: "time-travel__preview--normal"
        };
        return {
            title: "The Masterpiece",
            desc: "Polished, finalized, and ready for the world.",
            colorClass: "text-cyan-400",
            previewClass: "time-travel__preview--clear"
        };
    };

    const state = getCurrentState();

    return (
        <section ref={sectionRef} className="time-travel">
            <div className="time-travel__sticky">

                {/* Dynamic Background */}
                <div
                    className="time-travel__bg"
                    style={{
                        background: `radial-gradient(circle at ${scrollProgress * 100}% 50%, rgba(168, 85, 247, 0.15), transparent 50%)`
                    }}
                />

                <div className="time-travel__container">

                    {/* Controls Side */}
                    <div className="time-travel__left-col">
                        <h2 className="time-travel__headline">Time Travel <br /> for Files</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', maxHeight: '400px', justifyContent: 'space-between' }}>
                            <div className="time-travel__timeline">
                                {/* The Draggable Handle Visual */}
                                <div
                                    className="time-travel__handle"
                                    style={{ top: `${scrollProgress * 100}%` }}
                                />

                                {/* Checkpoints */}
                                <div className="time-travel__point time-travel__point--start">START</div>
                                <div className="time-travel__point time-travel__point--edit">EDIT</div>
                                <div className="time-travel__point time-travel__point--final">FINAL</div>
                            </div>

                            <div className="time-travel__card">
                                <span className={`time-travel__card-label ${state.colorClass}`}>Current State</span>
                                <h3 className="time-travel__card-title">{state.title}</h3>
                                <p className="time-travel__card-desc">{state.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* Preview Side */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className={`time-travel__preview ${state.previewClass}`}>
                            {/* Window Bar */}
                            <div className="time-travel__window-bar">
                                <div className="time-travel__dot" style={{ background: '#FF5F56' }}></div>
                                <div className="time-travel__dot" style={{ background: '#FFBD2E' }}></div>
                                <div className="time-travel__dot" style={{ background: '#27C93F' }}></div>
                                <div className="time-travel__window-title">Project_V{Math.floor(scrollProgress * 100)}.dw</div>
                            </div>

                            <div style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
                                {scrollProgress < 0.33 ? (
                                    <div className="text-center" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ width: '6rem', height: '6rem', margin: '0 auto', border: '2px dashed #374151', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FileText style={{ color: '#374151' }} size={32} />
                                        </div>
                                        <p className="font-mono" style={{ color: '#4b5563' }}>Draft Content...</p>
                                    </div>
                                ) : scrollProgress < 0.66 ? (
                                    <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1rem', opacity: 0.8 }}>
                                        <div style={{ background: 'rgba(168,85,247,0.15)', borderRadius: '0.5rem', animation: 'pulse 3s infinite' }} />
                                        <div style={{ background: 'rgba(168,85,247,0.08)', borderRadius: '0.5rem' }} />
                                        <div style={{ gridColumn: 'span 2', background: 'rgba(168,85,247,0.08)', borderRadius: '0.5rem' }} />
                                    </div>
                                ) : (
                                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(6,182,212,0.2), transparent 70%)', filter: 'blur(24px)' }}></div>
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', letterSpacing: '-0.05em', textShadow: '0 0 30px rgba(6,182,212,0.5)' }}>PERFECTION</h1>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Overlay Metadata - Pushed to bottom right */}
                            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: '#050505', border: '1px solid #1f2937', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#22d3ee' }}>
                                {Math.floor(scrollProgress * 500)} changes tracked
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
