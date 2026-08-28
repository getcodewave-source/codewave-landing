/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'blue-dark': '#2563EB',
          'blue':      '#3B82F6',
          'cyan':      '#06B6D4',
          'dark':      '#0F172A',
          'navy':      '#1E293B',
          'gray':      '#64748B',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'orb-1': 'orbMove1 12s ease-in-out infinite alternate',
        'orb-2': 'orbMove2 15s ease-in-out infinite alternate',
        'orb-3': 'orbMove3 10s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2.5s ease-in-out infinite',
      },
      keyframes: {
        orbMove1: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(40px, -30px) scale(1.08)' },
        },
        orbMove2: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(-35px, 25px) scale(0.92)' },
        },
        orbMove3: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(20px, 30px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
