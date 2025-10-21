'use client'

import { Event } from '@/lib/types'
import { CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'

export function EventCard({ event }: { event: Event }) {
  return (
    <motion.article 
      className="card hover:shadow-xl transition group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -6, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      <div className="relative z-10">
        <motion.div 
          className="text-sm text-neutral-500 flex items-center gap-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <CalendarDays size={16} /> {new Date(event.date).toLocaleDateString('fr-FR', { dateStyle: 'long' })}
        </motion.div>
        <motion.div 
          className="h3 mt-2 group-hover:text-brand transition-colors"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {event.title}
        </motion.div>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">{event.location}</p>
        <div className="mt-4">
          <a href={event.cta.href} className="btn-outline">{event.cta.label}</a>
        </div>
      </div>
    </motion.article>
  )
}