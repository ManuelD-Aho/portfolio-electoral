import { Issue } from '@/lib/types'
import { Badge } from './ui/Badge'

export function IssueCard({ issue }: { issue: Issue }) {
  return (
    <article className="card hover:shadow-xl transition">
      <div className="flex items-center gap-3">
        <span className="h-10 w-10 rounded-lg bg-brand/10 grid place-items-center text-brand">{issue.icon}</span>
        <div className="font-semibold text-lg">{issue.title}</div>
      </div>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">{issue.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {issue.tags.map((t) => <Badge key={t} label={t} />)}
      </div>
    </article>
  )
}