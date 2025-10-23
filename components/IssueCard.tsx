'use client'

import { motion } from 'framer-motion'
import { Issue } from '@/lib/types'
import { Badge } from './ui/Badge'

export function IssueCard({ issue }: { issue: Issue }) {
  return (
    <motion.article 
      className="card group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -4, 
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle gradient overlay on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-brand/5 via-accent/5 to-secondary/5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <motion.span 
            className="h-14 w-14 rounded-lg bg-gradient-to-br from-brand via-accent to-secondary grid place-items-center text-2xl shadow-sm flex-shrink-0"
            whileHover={{ 
              scale: 1.1 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10
            }}
          >
            {issue.icon}
          </motion.span>
          <motion.h3 
            className="font-semibold text-xl group-hover:text-brand transition-colors duration-300"
          >
            {issue.title}
          </motion.h3>
        </div>
        <motion.p 
          className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {issue.summary}
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {issue.tags.map((t, index) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              <Badge label={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.article>
  )
}