import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--primary-50))',
          100: 'rgb(var(--primary-100))',
          200: 'rgb(var(--primary-200))',
          300: 'rgb(var(--primary-300))',
          400: 'rgb(var(--primary-400))',
          500: 'rgb(var(--primary-500))',
          600: 'rgb(var(--primary-600))',
          700: 'rgb(var(--primary-700))',
          800: 'rgb(var(--primary-800))',
          900: 'rgb(var(--primary-900))',
        },
        accent: {
          green: 'rgb(var(--accent-green))',
          yellow: 'rgb(var(--accent-yellow))',
          orange: 'rgb(var(--accent-orange))',
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(var(--primary-800), 0.7), rgba(var(--primary-600), 0.4))',
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
        'highlight': '0 0 15px rgba(var(--primary-400), 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-in-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config; 