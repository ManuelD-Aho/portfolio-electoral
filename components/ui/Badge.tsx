'use client'

import { motion } from 'framer-motion'

export function Badge({ label }: { label: string }) {
  return (
    <motion.span 
      className="inline-flex items-center rounded-full bg-gradient-to-r from-brand/10 to-accent/10 border border-brand/20 dark:border-accent/20 px-3 py-1.5 text-xs font-medium text-brand dark:text-accent transition-all"
      whileHover={{ 
        scale: 1.05,
        borderColor: "rgba(99, 102, 241, 0.4)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.span>
  )
}