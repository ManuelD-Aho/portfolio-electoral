import { Issue } from '@/lib/types'

export const issues: Issue[] = [
  {
    slug: 'ecologie',
    title: 'Écologie et climat',
    icon: '🌿',
    summary: 'Plan de végétalisation, mobilités douces, rénovation énergétique.',
    tags: ['Climat', 'Mobilités', 'Énergie']
  },
  {
    slug: 'sante',
    title: 'Santé',
    icon: '🩺',
    summary: 'Renforcer l’accès aux soins de proximité et la prévention.',
    tags: ['Prévention', 'Accès', 'Solidarité']
  },
  {
    slug: 'education',
    title: 'Éducation',
    icon: '📚',
    summary: 'Soutien scolaire, périscolaire de qualité, écoles rénovées.',
    tags: ['Jeunesse', 'Écoles', 'Égalité des chances']
  },
  {
    slug: 'securite',
    title: 'Sécurité',
    icon: '🛡️',
    summary: 'Prévention, présence renforcée, médiation et éclairage public.',
    tags: ['Prévention', 'Médiation']
  },
  {
    slug: 'logement',
    title: 'Logement',
    icon: '🏘️',
    summary: 'Rénovation thermique, lutte contre l’habitat indigne, logements abordables.',
    tags: ['Rénovation', 'Abordable']
  },
  {
    slug: 'economie-locale',
    title: 'Économie locale',
    icon: '🏪',
    summary: 'Soutien aux commerces, circuits courts, emploi local.',
    tags: ['Commerces', 'Circuits courts', 'Emploi']
  }
]