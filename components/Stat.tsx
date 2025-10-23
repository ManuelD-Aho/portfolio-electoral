'use client'

import { motion } from 'framer-motion'
import { site } from '@/lib/site'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function StatGroup({ className }: { className?: string }) {
  return (
    <div className={cn('mt-8 grid grid-cols-3 gap-4 md:gap-6', className)}>
      {site.stats.map((s, index) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card className="text-center p-4 md:p-6 cursor-pointer">
            <CardContent className="p-0">
              <motion.div 
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand via-accent to-secondary bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {s.value}
              </motion.div>
              <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 font-medium">{s.label}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}