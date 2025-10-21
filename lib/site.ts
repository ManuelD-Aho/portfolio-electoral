export const site = {
  name: 'En Marche Locale',
  urls: {
    base: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  },
  candidate: {
    fullName: 'Prénom Nom',
    slogan: 'Pour une ville plus juste, plus verte, plus proche.',
    position: 'Candidat·e à la Mairie',
    party: 'Alliance Citoyenne',
    location: 'Hôtel de Ville, 75000 Paris',
    email: 'contact@campagne.fr',
    phone: '+33 6 12 34 56 78'
  },
  meta: {
    description: 'Portfolio électoral moderne: programme, événements, équipe et engagement.',
    keywords: ['campagne', 'élections', 'programme', 'bénévolat', 'dons']
  },
  social: {
    Twitter: 'https://twitter.com/',
    Facebook: 'https://facebook.com/',
    Instagram: 'https://instagram.com/',
    YouTube: 'https://youtube.com/',
    TikTok: 'https://tiktok.com/'
  },
  donations: {
    options: [
      { label: 'Don unique', href: '#', description: 'Soutenez ponctuellement la campagne.' },
      { label: 'Don mensuel', href: '#', description: 'Amplifiez durablement notre action.' },
      { label: 'Autre montant', href: '#', description: 'Personnalisez votre contribution.' }
    ],
    legalNote: 'Les dons sont soumis à la réglementation en vigueur. Merci de votre soutien.'
  },
  stats: [
    { label: 'Bénévoles mobilisés', value: '1 200+' },
    { label: 'Portes frappées', value: '80 000+' },
    { label: 'Réunions citoyennes', value: '150+' }
  ]
}