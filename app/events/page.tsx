import { Section } from '@/components/Section'
import { events } from '@/data/events'
import { EventCard } from '@/components/EventCard'

export default function EventsPage() {
  return (
    <Section title="Événements" subtitle="Venez nous rencontrer.">
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((e) => <EventCard key={e.id} event={e} />)}
      </div>
    </Section>
  )
}