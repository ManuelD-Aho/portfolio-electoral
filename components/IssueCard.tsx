'use client'

import { motion } from 'framer-motion'
import { Issue } from '@/lib/types'
import { Badge } from './ui/Badge'

export function IssueCard({ issue }: { issue: Issue }) {
  return (
    <motion.article 
      className="card group relative overflow-hidden"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <motion.span 
            className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand via-accent to-secondary grid place-items-center text-2xl shadow-lg"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {issue.icon}
          </motion.span>
          <div className="font-semibold text-lg group-hover:text-brand transition-colors">
            {issue.title}
          </div>
        </div>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {issue.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {issue.tags.map((t) => <Badge key={t} label={t} />)}
        </div>
      </div>
    </motion.article>
  )
}