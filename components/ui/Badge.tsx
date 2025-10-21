export function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-1 text-xs">
      {label}
    </span>
  )
}