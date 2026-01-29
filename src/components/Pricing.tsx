import React from 'react';

export const Pricing = () => (
    <section id="pricing" className="pricing">
        <div className="pricing__container">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Fair pricing for <br /> chaotic minds.</h2>
                <p className="text-gray-400">Stop paying for "Storage" when what you need is sanity.</p>
            </div>

            <div className="pricing__grid md-grid-2">
                {/* Free Tier */}
                <div className="pricing-card pricing-card--free">
                    <h3 className="font-mono" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>The Lone Wolf</h3>
                    <div style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>$0</div>
                    <p className="text-gray-400" style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>Perfect for freelancers and solo artists just trying to survive.</p>
                    <ul className="font-mono" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: '#d1d5db', marginBottom: '2rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#6b7280', borderRadius: '50%' }} /> Local-only time travel</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#6b7280', borderRadius: '50%' }} /> Unlimited branches</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#6b7280', borderRadius: '50%' }} /> 3 active projects</li>
                    </ul>
                    <button className="footer__btn footer__btn--dark" style={{ width: '100%', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Download Free</button>
                </div>

                {/* Pro Tier */}
                <div className="pricing-card pricing-card--pro">
                    <div className="pricing-card__badge">Most Popular</div>

                    <h3 className="font-mono text-purple-400" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>The Alpha</h3>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>$12</span>
                        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/mo</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(192, 132, 252, 0.6)', marginBottom: '2rem' }}>For professionals who need their history synced across devices.</p>

                    <ul className="font-mono" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: '#d1d5db', marginBottom: '2rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#c084fc', borderRadius: '50%' }} /> Cloud Sync & Backup</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#c084fc', borderRadius: '50%' }} /> Unlimited projects</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#c084fc', borderRadius: '50%' }} /> Team Collaboration</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#c084fc', borderRadius: '50%' }} /> Smart Diffing (PSD, AI, DOCX)</li>
                    </ul>
                    <button className="footer__btn" style={{ width: '100%', background: 'linear-gradient(to right, #9333ea, #a855f7)', border: 'none', color: 'white', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Start 14-Day Trial</button>
                </div>
            </div>
        </div>
    </section>
);
