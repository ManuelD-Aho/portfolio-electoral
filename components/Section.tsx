import { ReactNode } from 'react'
import { clsx } from 'clsx'

export function Section({
  title,
  subtitle,
  children,
  className
}: {
  title?: ReactNode
  subtitle?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={clsx('container py-16 md:py-20', className)}>
      {(title || subtitle) && (
        <div className="mb-10">
          {title && <h2 className="h2">{title}</h2>}
          {subtitle && <p className="lead mt-2">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  )
}