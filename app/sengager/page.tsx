import VolunteerForm from '@/components/VolunteerForm'
import { Section } from '@/components/Section'

export default function SengagerPage() {
  return (
    <Section title="S'engager avec nous" subtitle="Rejoignez l'équipe et participez à la campagne.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="h3 mb-4">Pourquoi s'engager ?</h3>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              Rejoindre notre équipe, c'est faire partie d'un mouvement collectif pour transformer 
              la vie étudiante à la MIAGE.
            </p>
            <p className="font-semibold text-brand">
              Parce que l'avenir, on ne l'attend pas… On le crée, Ensemble. 🌟
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-brand">✓</span>
                <span>Participer à l'organisation d'événements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand">✓</span>
                <span>Contribuer à la communication</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand">✓</span>
                <span>Soutenir les initiatives étudiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand">✓</span>
                <span>Développer vos compétences en leadership</span>
              </div>
            </div>
          </div>
        </div>
        <VolunteerForm />
      </div>
    </Section>
  )
}
