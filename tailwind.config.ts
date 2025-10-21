import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1453FF',
          dark: '#0E3AC7',
          light: '#E7EEFF'
        },
        accent: {
          DEFAULT: '#FF3366',
          dark: '#D21F4D',
          light: '#FFE4EA'
        }
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
        'mesh':
          'radial-gradient(1200px circle at 0% 0%, #1453FF22, transparent 40%), radial-gradient(1000px circle at 100% 0%, #FF336622, transparent 40%), radial-gradient(800px circle at 0% 100%, #22C55E22, transparent 40%)'
      }
    }
  },
  plugins: []
} satisfies Config