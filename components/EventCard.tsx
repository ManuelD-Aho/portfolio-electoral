import { Event } from '@/lib/types'
import { CalendarDays } from 'lucide-react'

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="card hover:shadow-xl transition">
      <div className="text-sm text-neutral-500 flex items-center gap-2">
        <CalendarDays size={16} /> {new Date(event.date).toLocaleDateString('fr-FR', { dateStyle: 'long' })}
      </div>
      <div className="h3 mt-2">{event.title}</div>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">{event.location}</p>
      <div className="mt-4">
        <a href={event.cta.href} className="btn-outline">{event.cta.label}</a>
      </div>
    </article>
  )
}