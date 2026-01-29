import { useState, useEffect } from 'react';
import {
    Navbar,
    Hero,
    TimeTravelSection,
    Features,
    HallOfShame,
    Manifesto,
    Pricing,
    Footer,
    EasterEggToast,
    LegalModal
} from './components';
import './App.css';

const App = () => {
    const [showEasterEgg, setShowEasterEgg] = useState(false);
    const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | null }>({
        isOpen: false,
        type: null
    });

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
                event.preventDefault(); // Prevent browser undo
                setShowEasterEgg(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const openLegalModal = (type: 'privacy' | 'terms') => {
        setLegalModal({ isOpen: true, type });
    };

    const closeLegalModal = () => {
        setLegalModal({ ...legalModal, isOpen: false });
    };

    const getLegalContent = (type: 'privacy' | 'terms' | null) => {
        if (type === 'privacy') {
            return (
                <>
                    <p style={{ fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>// 1. DATA COLLECTION</p>
                    <p>We collect minimal data. Your files stay local unless you explicitly enable cloud sync. We do not index your creative work for AI training without your direct consent.</p>
                    <p style={{ fontWeight: 'bold', color: 'white', marginBottom: '0.5rem', marginTop: '1rem' }}>// 2. LOCAL FIRST</p>
                    <p>DraftWolf is designed as a "Local First" application. Your version history resides in a hidden .draftwolf directory within your project folder. Delete that folder, and your history is gone (so don't do that).</p>
                    <p style={{ fontWeight: 'bold', color: 'white', marginBottom: '0.5rem', marginTop: '1rem' }}>// 3. ANALYTICS</p>
                    <p>We track basic usage stats (crashes, feature usage) to make the app less buggy. You can opt-out in settings.</p>
                </>
            );
        }
        if (type === 'terms') {
            return (
                <>
                    <p style={{ fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>// 1. ACCEPTANCE</p>
                    <p>By downloading DraftWolf, you agree that you are tired of naming files "Final_Final_v2".</p>
                    <p style={{ fontWeight: 'bold', color: 'white', marginBottom: '0.5rem', marginTop: '1rem' }}>// 2. LIABILITY</p>
                    <p>We are not responsible if you use the Time Travel feature to revert a client project to a version where you drew a mustache on the CEO. Use power responsibly.</p>
                    <p style={{ fontWeight: 'bold', color: 'white', marginBottom: '0.5rem', marginTop: '1rem' }}>// 3. REFUNDS</p>
                    <p>If the app doesn't save your sanity within 14 days, we'll refund your subscription. No questions asked.</p>
                </>
            );
        }
        return null;
    };

    return (
        <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <Hero />
            <TimeTravelSection />
            <Features />
            <Manifesto />
            <Pricing />
            <HallOfShame />
            <Footer onOpenLegal={openLegalModal} />
            <EasterEggToast show={showEasterEgg} onClose={() => setShowEasterEgg(false)} />
            <LegalModal
                isOpen={legalModal.isOpen}
                onClose={closeLegalModal}
                title={legalModal.type === 'privacy' ? 'PRIVACY POLICY' : 'TERMS OF SERVICE'}
                content={getLegalContent(legalModal.type)}
            />
        </div>
    );
};

export default App;
