'use client'

import { motion } from 'framer-motion'
import { site } from '@/lib/site'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function StatGroup({ className }: { className?: string }) {
  return (
    <div className={cn('mt-6 grid grid-cols-3 gap-3 md:gap-4', className)}>
      {site.stats.map((s, index) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="text-center p-3 md:p-4 cursor-pointer">
            <CardContent className="p-0">
              <motion.div 
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand via-accent to-secondary bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {s.value}
              </motion.div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}