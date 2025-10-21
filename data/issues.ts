import { Issue } from '@/lib/types'

export const issues: Issue[] = [
  {
    slug: 'excellence-academique',
    title: 'Excellence Académique',
    icon: '🎓',
    summary: 'Objectif validation en session 1, groupes d\'entraide, et préparation aux compétitions.',
    tags: ['Réussite', 'Entraide', 'Compétences']
  },
  {
    slug: 'vie-etudiante',
    title: 'Vie Étudiante & Cohésion',
    icon: '❤️',
    summary: 'Renforcer l\'esprit d\'héritage entre promotions, organiser des tournois et journées solidaires.',
    tags: ['Communauté', 'Solidarité', 'Héritage']
  },
  {
    slug: 'tremplin-professionnel',
    title: 'Tremplin Professionnel',
    icon: '💼',
    summary: 'Visites d\'entreprises, ateliers CV, et création d\'un annuaire des Alumni pour un réseau solide.',
    tags: ['Carrière', 'Réseau', 'Alumni']
  }
]
