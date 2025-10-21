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
          DEFAULT: '#8A2BE2',
          dark: '#6A1BB2',
          light: '#E9D5FF'
        },
        accent: {
          DEFAULT: '#FF00FF',
          dark: '#CC00CC',
          light: '#FFE6FF'
        },
        secondary: {
          DEFAULT: '#00FFFF',
          dark: '#00CCCC',
          light: '#E0FFFF'
        }
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
        'mesh':
          'radial-gradient(1200px circle at 0% 0%, #8A2BE244, transparent 40%), radial-gradient(1000px circle at 100% 0%, #FF00FF44, transparent 40%), radial-gradient(800px circle at 0% 100%, #00FFFF44, transparent 40%)'
      }
    }
  },
  plugins: []
} satisfies Config