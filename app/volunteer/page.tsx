import VolunteerForm from '@/components/VolunteerForm'
import { Section } from '@/components/Section'

export default function VolunteerPage() {
  return (
    <Section title="Devenir bénévole" subtitle="Rejoignez l’équipe et agissez avec nous.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="h3">Pourquoi devenir bénévole ?</h3>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Accueil, tractage, téléphone, réseaux sociaux, logistique… chaque talent compte.
          </p>
        </div>
        <VolunteerForm />
      </div>
    </Section>
  )
}