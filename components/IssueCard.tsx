import { Issue } from '@/lib/types'
import { Badge } from './ui/Badge'

export function IssueCard({ issue }: { issue: Issue }) {
  return (
    <article className="card hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-brand/30">
      <div className="flex items-center gap-3">
        <span className="h-12 w-12 rounded-lg bg-gradient-to-br from-brand to-accent grid place-items-center text-2xl">{issue.icon}</span>
        <div className="font-semibold text-lg">{issue.title}</div>
      </div>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">{issue.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {issue.tags.map((t) => <Badge key={t} label={t} />)}
      </div>
    </article>
  )
}