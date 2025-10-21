import { Section } from '@/components/Section'
import { site } from '@/lib/site'

export default function DonatePage() {
  return (
    <Section title="Soutenir la campagne" subtitle="Chaque contribution compte.">
      <div className="grid md:grid-cols-3 gap-6">
        {site.donations.options.map((opt) => (
          <a key={opt.label} href={opt.href} target="_blank" className="card hover:scale-[1.02] transition">
            <div className="h3">{opt.label}</div>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">{opt.description}</p>
          </a>
        ))}
      </div>
      <div className="mt-8 text-sm text-neutral-500">
        {site.donations.legalNote}
      </div>
    </Section>
  )
}