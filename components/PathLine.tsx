'use client'

import { motion } from 'framer-motion'

export function PathLine() {
  return (
    <div className="absolute left-10 top-20 bottom-0 w-1 -translate-x-1/2 overflow-hidden">
      {/* Background line */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand/20 via-accent/20 to-secondary/20" />
      
      {/* Animated line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-brand via-accent to-secondary"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand blur-sm"
        animate={{
          y: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}
