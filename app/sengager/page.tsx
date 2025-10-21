'use client'

import { motion } from 'framer-motion'
import VolunteerForm from '@/components/VolunteerForm'
import { Section } from '@/components/Section'

export default function SengagerPage() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  }

  return (
    <Section title="S'engager avec nous" subtitle="Rejoignez l'équipe et participez à la campagne.">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="h3 mb-4">Pourquoi s&apos;engager ?</h3>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Rejoindre notre équipe, c&apos;est faire partie d&apos;un mouvement collectif pour transformer 
              la vie étudiante à la MIAGE.
            </motion.p>
            <motion.p 
              className="font-semibold text-brand"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Parce que l&apos;avenir, on ne l&apos;attend pas… On le crée, Ensemble. 🌟
            </motion.p>
            <div className="mt-6 space-y-2">
              {[
                "Participer à l'organisation d'événements",
                "Contribuer à la communication",
                "Soutenir les initiatives étudiantes",
                "Développer vos compétences en leadership"
              ].map((text, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <span className="text-brand">✓</span>
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <VolunteerForm />
        </motion.div>
      </div>
    </Section>
  )
}
