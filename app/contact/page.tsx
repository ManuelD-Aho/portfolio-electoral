import ContactForm from '@/components/ContactForm'
import { Section } from '@/components/Section'
import { site } from '@/lib/site'

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="Une question, une proposition ? Écrivez-nous.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="h3">Coordonnées</h3>
          <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>E-mail: {site.candidate.email}</li>
            <li>Téléphone: {site.candidate.phone}</li>
            <li>Siège de campagne: {site.candidate.location}</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </Section>
  )
}