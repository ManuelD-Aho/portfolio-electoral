'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TimelineNodeProps {
  icon: string
  title: string
  period?: string
  description: string
  skills?: string[]
  index: number
}

export function TimelineNode({ icon, title, period, description, skills, index }: TimelineNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex gap-8 items-start"
    >
      {/* Node Circle */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
        className="relative flex-shrink-0"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand via-accent to-secondary flex items-center justify-center text-3xl shadow-lg shadow-brand/50">
          {icon}
        </div>
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-brand via-accent to-secondary opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="flex-1 card">
        {period && (
          <div className="text-sm font-semibold text-brand mb-2">{period}</div>
        )}
        <h3 className="h3 mb-3 text-glow">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          {description}
        </p>
        
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                className="px-3 py-1 text-sm rounded-full bg-brand/10 border border-brand/30 text-brand font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
