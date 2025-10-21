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
        y: -8, 
        scale: 1.02,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated gradient overlay on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-brand/10 via-accent/10 to-secondary/10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <motion.span 
            className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand via-accent to-secondary grid place-items-center text-2xl shadow-lg"
            whileHover={{ 
              rotate: [0, -5, 5, -5, 0],
              scale: 1.15 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10,
              rotate: {
                duration: 0.5
              }
            }}
          >
            {issue.icon}
          </motion.span>
          <motion.div 
            className="font-semibold text-lg group-hover:text-brand transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {issue.title}
          </motion.div>
        </div>
        <motion.p 
          className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {issue.summary}
        </motion.p>
        <motion.div 
          className="mt-4 flex flex-wrap gap-2"
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