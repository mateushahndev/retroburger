/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mostarda: {
          50: '#FFF8E1',
          100: '#FFEDB3',
          200: '#FFE080',
          300: '#FFD44D',
          400: '#FFC81A',
          500: '#F5C518',
          600: '#D4A017',
          700: '#B8860B',
          800: '#8B6914',
          900: '#6B4C0A',
        },
        red: {
          500: '#CC0000',
          600: '#B30000',
          700: '#990000',
        },
        dark: {
          100: '#4A4A4A',
          200: '#3D3D3D',
          300: '#2D2D2D',
          400: '#1A1A1A',
          500: '#0D0D0D',
        }
      },
      fontFamily: {
        display: ['Bangers', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(245, 197, 24, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(245, 197, 24, 0.6)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}