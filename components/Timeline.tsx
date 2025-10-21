'use client'

import { motion } from 'framer-motion'
import { TimelineNode } from './TimelineNode'
import { PathLine } from './PathLine'

interface TimelineStep {
  icon: string
  title: string
  period?: string
  description: string
  skills?: string[]
}

const timelineSteps: TimelineStep[] = [
  {
    icon: '📚',
    title: 'Les Premiers Pas : 3 Ans Déléguée',
    period: '2021 - 2024',
    description: 'Pendant trois années, j&apos;ai appris l&apos;écoute, la représentation et la résolution de problèmes au cœur de la vie étudiante. Une immersion directe dans les réalités de chacun.',
    skills: ['Multitâche', 'Animatrice', 'Coordinatrice', 'Communicante']
  },
  {
    icon: '💰',
    title: 'L&apos;Art de la Gestion : Trésorière 2 en 1',
    period: '2023 - 2024',
    description: 'Une double responsabilité qui a forgé ma rigueur et ma capacité à gérer des projets d&apos;envergure, du comité d&apos;organisation de la JI au BDE de transition.',
    skills: ['Rigoureuse', 'Studieuse', 'Motivée']
  },
  {
    icon: '✨',
    title: 'La Passion du Résultat : Aller au-delà',
    description: 'J&apos;ai toujours cherché le résultat, pas la lumière. Mon engagement dépasse les titres, animé par l&apos;amour du travail bien fait et le désir d&apos;impact réel.',
    skills: ['Dynamique', 'Dévouée']
  },
  {
    icon: '🌱',
    title: 'La Légitimité Forgée : Sur le Terrain',
    description: 'Chaque défi relevé, chaque heure donnée a bâti ma légitimité. J&apos;ai appris, j&apos;ai grandi, et je suis prête à servir avec la même énergie.',
    skills: ['Conseillère', 'Exécutante', 'Engagée']
  },
  {
    icon: '🌟',
    title: 'Vers l&apos;Avenir : Présidence BDE MIAGE',
    period: 'Élection le 25 Octobre',
    description: 'Aujourd&apos;hui, je me présente pour continuer à rassembler et faire briller notre communauté. Avec une vision claire et une détermination inébranlable.',
    skills: ['Visionnaire', 'Leader', 'Rassembleuse']
  }
]

export function Timeline() {
  return (
    <div className="relative max-w-4xl mx-auto py-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="h2 text-glow mb-4">L&apos;Épopée de Jemima</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Construire l&apos;Avenir, Pas à Pas
        </p>
        <p className="text-brand font-semibold mt-2">
          « C&apos;est en forgeant qu&apos;on devient forgeron »
        </p>
      </motion.div>

      {/* Timeline content */}
      <div className="relative pl-24">
        <PathLine />
        <div className="space-y-16">
          {timelineSteps.map((step, index) => (
            <TimelineNode key={index} {...step} index={index} />
          ))}
        </div>
      </div>

      {/* Final message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center card bg-gradient-to-br from-brand/10 via-accent/10 to-secondary/10 border-2 border-brand/30"
      >
        <p className="text-xl font-semibold text-brand mb-2">
          Parce que l&apos;avenir, on ne l&apos;attend pas…
        </p>
        <p className="text-2xl font-bold text-glow">
          On le crée, Ensemble. 🌟
        </p>
      </motion.div>
    </div>
  )
}
