import { site } from '@/lib/site'
import { clsx } from 'clsx'

export function StatGroup({ className }: { className?: string }) {
  return (
    <div className={clsx('mt-6 grid grid-cols-3 gap-4', className)}>
      {site.stats.map((s) => (
        <div key={s.label} className="glass rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold">{s.value}</div>
          <div className="text-xs text-neutral-500">{s.label}</div>
        </div>
      ))}
    </div>
  )
}