'use client'

import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

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
        <motion.div 
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title && (
            <h2 className="h2 bg-gradient-to-r from-brand via-accent to-secondary bg-clip-text text-transparent">
              {title}
            </h2>
          )}
          {subtitle && <p className="lead mt-3 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
      )}
      {children}
    </section>
  )
}