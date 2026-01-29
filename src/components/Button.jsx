import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', style = {}, ...props }) => {
  const baseStyle = {
    padding: '0.8rem 2rem',
    borderRadius: 'var(--radius-full)',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'inherit',
    ...style
  };

  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'white',
      boxShadow: 'var(--shadow-glow)',
    },
    ghost: {
      background: 'transparent',
      color: 'white',
    },
    glass: {
      background: 'rgba(18, 18, 18, 0.6)',
      backdropFilter: 'blur(12px)',
      border: '1px solid var(--color-border)',
      color: 'white',
    }
  };

  const mergedStyle = { ...baseStyle, ...variants[variant] };

  return (
    <button 
      className={className} 
      style={mergedStyle}
      onMouseEnter={(e) => {
        if (variant === 'primary') e.currentTarget.style.transform = 'translateY(-2px)';
        if (variant === 'glass') e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') e.currentTarget.style.transform = 'translateY(0)';
        if (variant === 'glass') e.currentTarget.style.background = 'rgba(18, 18, 18, 0.6)';
      }}
      {...props}
    >
      {children}
    </button>
  );
};
