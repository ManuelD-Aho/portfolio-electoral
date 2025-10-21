import { Event } from '@/lib/types'

export const events: Event[] = [
  {
    id: '1',
    title: 'Réunion publique — Centre-ville',
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString(),
    location: 'Salle des Fêtes, 75000',
    cta: { label: 'S’inscrire', href: '#' }
  },
  {
    id: '2',
    title: 'Porte-à-porte — Quartier Est',
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(),
    location: 'Place des Tilleuls',
    cta: { label: 'Participer', href: '#' }
  },
  {
    id: '3',
    title: 'Café citoyen — Climat',
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 12).toISOString(),
    location: 'Café du Marché',
    cta: { label: 'Réserver', href: '#' }
  }
]