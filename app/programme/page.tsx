import { Section } from '@/components/Section'
import { IssueCard } from '@/components/IssueCard'
import { issues } from '@/data/issues'

export default function ProgrammePage() {
  return (
    <>
      <Section 
        title="Notre Programme" 
        subtitle="Bien plus qu'un simple programme… nous avons une vision pour MIAGE!"
      >
        <div className="max-w-3xl mx-auto mb-12 space-y-4 text-neutral-600 dark:text-neutral-300">
          <p className="text-lg">
            Ce que je vous propose aujourd'hui, c'est bien plus qu'un simple programme : 
            c'est une stratégie collective sur l'autoroute du succès.
          </p>
          <p>
            Tout commence par vous. Notre première étape sera de recueillir les attentes de chacun, 
            afin de bâtir ensemble un bureau uni autour d'une vision commune. Une équipe soudée, 
            motivée et déterminée à faire de cette année une aventure inoubliable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {issues.map((i) => <IssueCard key={i.slug} issue={i} />)}
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="card">
            <h3 className="h3 mb-4 flex items-center gap-3">
              <span className="text-4xl">🎓</span>
              Sur le plan académique
            </h3>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Revalorisation du travail et réussite pour tous : objectif validation en session 1 !</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Création de groupes d'entraide pour accompagner chacun dans sa progression et remise sur pied des clubs qui ont disparu depuis quelques années.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Accompagnement des équipes pour les concours, hackathons et compétitions extra-universitaires.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Organisation et participation à des webinaires, sessions de formation et caravanes informatiques pour renforcer nos compétences techniques et personnelles.</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="h3 mb-4 flex items-center gap-3">
              <span className="text-4xl">❤️</span>
              Sur le plan de la vie à CESTIA
            </h3>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Renforcement de la cohésion et création d'un véritable esprit d'héritage entre les promotions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Valorisation du respect, de la solidarité et de l'entraide.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Soutien aux initiatives étudiantes et organisation d'activités extrascolaires : tournois, matchs inter-promotions, journées solidaires.</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="h3 mb-4 flex items-center gap-3">
              <span className="text-4xl">💼</span>
              Sur le plan professionnel
            </h3>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Visites d'entreprises et rencontres inspirantes avec les anciens.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Préparation au monde du travail : ateliers de rédaction de CV, simulations d'entretiens, et notions de secourisme et de savoir-être professionnel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Création de l'annuaire des Alumni pour faciliter le réseautage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span>Développement de partenariats stratégiques avec des entreprises et institutions.</span>
              </li>
            </ul>
          </div>

          <div className="text-center py-8">
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              Et bien d'autres activités sont prévues, car ce n'est que la partie visible de l'iceberg.
            </p>
            <p className="text-xl font-semibold text-brand mb-2">
              En résumé, un BDE dynamique, innovant et uni,
            </p>
            <p className="text-xl font-semibold text-brand">
              au service d'une filière forte, visible et solidaire.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
