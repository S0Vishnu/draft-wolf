import { useState, useEffect } from 'react';

type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'INR' | 'JPY' | 'CAD' | 'AUD';

interface CurrencyConfig {
    symbol: string;
    rate: number;
}

const AUTHORIZED_CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    INR: { symbol: '₹', rate: 83.0 },
    JPY: { symbol: '¥', rate: 148.0 },
    CAD: { symbol: 'C$', rate: 1.35 },
    AUD: { symbol: 'A$', rate: 1.52 }
};

export const Pricing = () => {
    const [currency, setCurrency] = useState<CurrencyCode>('USD');

    useEffect(() => {
        // Attempt to detect currency based on user location
        const detectCurrency = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                if (data && data.currency && data.currency in AUTHORIZED_CURRENCIES) {
                    setCurrency(data.currency as CurrencyCode);
                }
            } catch (error) {
                console.warn('Failed to detect location/currency, defaulting to USD', error);
            }
        };

        detectCurrency();
    }, []);

    const { symbol, rate } = AUTHORIZED_CURRENCIES[currency];

    const formatPrice = (usdPrice: number) => {
        if (usdPrice === 0) return symbol + '0';
        const converted = Math.ceil(usdPrice * rate);
        return `${symbol}${converted}`;
    };

    return (
        <section id="pricing" className="pricing">
            <div className="pricing__container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Fair pricing for <br /> chaotic minds.</h2>
                    <p className="text-gray-400">Stop paying for "Storage" when what you need is sanity.</p>
                </div>

                <div className="pricing__grid md-grid-3">
                    {/* Free Tier */}
                    <div className="pricing-card pricing-card--free">
                        <h3 className="font-mono" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>The Lone Wolf</h3>
                        <div style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                            {formatPrice(0)}
                        </div>
                        <p className="text-gray-400" style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>Perfect for freelancers and solo artists just trying to survive.</p>
                        <ul className="font-mono" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: '#d1d5db', marginBottom: 'auto' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#6b7280', borderRadius: '50%' }} /> Local-only time travel</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#6b7280', borderRadius: '50%' }} /> Unlimited branches</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#6b7280', borderRadius: '50%' }} /> 3 active projects</li>
                        </ul>
                        <div style={{ marginTop: '2rem' }}>
                            <button className="footer__btn footer__btn--dark" style={{ width: '100%', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Download Free</button>
                        </div>
                    </div>

                    {/* Pro Tier */}
                    <div className="pricing-card pricing-card--pro">
                        <div className="pricing-card__badge pricing-card__badge--pro">Most Popular</div>

                        <h3 className="font-mono text-purple-400" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>The Alpha</h3>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>{formatPrice(12)}</span>
                            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/mo</span>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(192, 132, 252, 0.6)', marginBottom: '2rem' }}>For professionals who need their history synced across devices.</p>

                        <ul className="font-mono" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: '#d1d5db', marginBottom: 'auto' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#c084fc', borderRadius: '50%' }} /> Cloud Sync & Backup</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#c084fc', borderRadius: '50%' }} /> Unlimited projects</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#c084fc', borderRadius: '50%' }} /> Team Collaboration</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#c084fc', borderRadius: '50%' }} /> Smart Diffing (PSD, AI, DOCX)</li>
                        </ul>
                        <div style={{ marginTop: '2rem' }}>
                            <button className="footer__btn" style={{ width: '100%', background: 'linear-gradient(to right, #9333ea, #a855f7)', border: 'none', color: 'white', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Start 14-Day Trial</button>
                        </div>
                    </div>

                    {/* Team Tier (New) */}
                    <div className="pricing-card pricing-card--team">
                        <div className="pricing-card__badge pricing-card__badge--team">Best Value</div>
                        <h3 className="font-mono text-cyan-400" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>The Wolf Pack</h3>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>{formatPrice(49)}</span>
                            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/mo</span>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(34, 211, 238, 0.6)', marginBottom: '2rem' }}>For studios and agencies building the future together.</p>

                        <ul className="font-mono" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: '#d1d5db', marginBottom: 'auto' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#22d3ee', borderRadius: '50%' }} /> Everything in Alpha</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#22d3ee', borderRadius: '50%' }} /> SSO & Advanced Security</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#22d3ee', borderRadius: '50%' }} /> Dedicated Infrastructure</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '0.375rem', height: '0.375rem', background: '#22d3ee', borderRadius: '50%' }} /> Priority 24/7 Support</li>
                        </ul>
                        <div style={{ marginTop: '2rem' }}>
                            <button className="footer__btn" style={{ width: '100%', background: 'linear-gradient(to right, #0891b2, #22d3ee)', border: 'none', color: 'white', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
