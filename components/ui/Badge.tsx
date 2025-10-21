export function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand/10 to-accent/10 border border-brand/20 dark:border-accent/20 px-3 py-1 text-xs font-medium text-brand dark:text-accent transition-all hover:scale-105 hover:shadow-sm">
      {label}
    </span>
  )
}