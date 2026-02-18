import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: {
        responsive: 'min(75vw, 90rem)',
      },
      boxShadow: {
        card: '0 8px 32px rgba(0, 217, 255, 0.1)',
        button: '0 4px 12px rgba(0, 217, 255, 0.2)',
        glow: '0 0 20px rgba(0, 217, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-cyan': 'linear-gradient(135deg, #00D9FF 0%, #0099CC 100%)',
        'gradient-purple': 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
      },
      colors: {
        background: '#0B0E27',
        surface: '#1A1F3A',
        'surface-light': '#252B48',
        foreground: '#F9FAFB',
        'text-secondary': '#9CA3AF',
        primary: '#00D9FF',
        'primary-dark': '#0099CC',
        secondary: '#A78BFA',
        accent: '#00D9FF',
        'accent-purple': '#A78BFA',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        // Legacy colors for backward compatibility
        grey: '#1F2937',
        white: '#F9FAFB',
        orange: '#FF6B35',
        yellow: '#FFD60A',
        purple: '#6366F1',
      },
      screens: {
        xs: '300px',
        smr: '480px',
        'md-lg': '1169px',
        'lg-xl': '1300px',
      },
    },
  },
  plugins: [],
};

export default config;
