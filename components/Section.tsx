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
    <section className={clsx('container py-20 md:py-28 lg:py-32', className)}>
      {(title || subtitle) && (
        <motion.div 
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {title && (
            <motion.h2 
              className="h2 bg-gradient-to-r from-brand via-accent to-secondary bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p 
              className="lead mt-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  )
}