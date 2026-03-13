/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ipl-navy': '#11235A', 
        'ipl-navy-light': '#1b327b',
        'ipl-navy-dark': '#0a183d',
        'ipl-gold': '#f5a623',
        'ipl-gold-light': '#ffc247',
        'ipl-red': '#e4002b',
        'ipl-blue': '#004ba0',
        'ipl-white': '#ffffff',
        'ipl-gray': '#f4f4f4',
        'ipl-dark-gray': '#2a2a2a',
      },
      fontFamily: {
        'heading': ['Oswald', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(245,166,35,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(245,166,35,0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
