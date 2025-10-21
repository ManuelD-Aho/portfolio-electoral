import { Section } from '@/components/Section'
import { IssueCard } from '@/components/IssueCard'
import { issues } from '@/data/issues'

export default function IssuesPage() {
  return (
    <Section title="Programme" subtitle="Nos engagements et actions.">
      <div className="grid md:grid-cols-3 gap-6">
        {issues.map((i) => <IssueCard key={i.slug} issue={i} />)}
      </div>
    </Section>
  )
}