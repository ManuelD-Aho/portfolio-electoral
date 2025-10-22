'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface MilestoneCardProps {
  icon: string
  title: string
  period?: string
  description: string
  skills?: string[]
  index: number
}

function MilestoneCard({ icon, title, period, description, skills, index }: MilestoneCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex-shrink-0 w-80 md:w-96"
    >
      <Card className="h-full group relative overflow-hidden">
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          className="absolute inset-0 bg-gradient-to-br from-brand/10 via-accent/10 to-secondary/10"
        />
        
        <CardHeader>
          <div className="flex items-center gap-4 mb-3">
            <motion.div
              animate={{
                rotate: isHovered ? 360 : 0,
              }}
              transition={{ duration: 0.6 }}
              className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand via-accent to-secondary grid place-items-center text-3xl shadow-lg flex-shrink-0"
            >
              {icon}
            </motion.div>
            {period && (
              <div className="text-sm font-semibold text-brand px-3 py-1 rounded-full bg-brand/10 border border-brand/20">
                {period}
              </div>
            )}
          </div>
          <CardTitle className="text-xl bg-gradient-to-r from-brand via-accent to-secondary bg-clip-text text-transparent">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <CardDescription className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            {description}
          </CardDescription>
          
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                  className="px-2.5 py-1 text-xs rounded-full bg-gradient-to-r from-brand/10 to-accent/10 border border-brand/20 text-brand font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface TimelineStep {
  icon: string
  title: string
  period?: string
  description: string
  skills?: string[]
}

const milestones: TimelineStep[] = [
  {
    icon: '📚',
    title: 'Les Premiers Pas : 3 Ans Déléguée',
    period: '2021 - 2024',
    description: 'Pendant trois années, j\'ai appris l\'écoute, la représentation et la résolution de problèmes au cœur de la vie étudiante.',
    skills: ['Multitâche', 'Animatrice', 'Coordinatrice', 'Communicante']
  },
  {
    icon: '💰',
    title: 'L\'Art de la Gestion : Trésorière 2 en 1',
    period: '2023 - 2024',
    description: 'Une double responsabilité qui a forgé ma rigueur et ma capacité à gérer des projets d\'envergure.',
    skills: ['Rigoureuse', 'Studieuse', 'Motivée']
  },
  {
    icon: '✨',
    title: 'La Passion du Résultat',
    description: 'Mon engagement dépasse les titres, animé par l\'amour du travail bien fait et le désir d\'impact réel.',
    skills: ['Dynamique', 'Dévouée']
  },
  {
    icon: '🌱',
    title: 'La Légitimité Forgée',
    description: 'Chaque défi relevé a bâti ma légitimité. J\'ai appris, j\'ai grandi, et je suis prête à servir.',
    skills: ['Conseillère', 'Exécutante', 'Engagée']
  },
  {
    icon: '🌟',
    title: 'Vers l\'Avenir : Présidence BDE',
    period: '25 Octobre',
    description: 'Aujourd\'hui, je me présente pour continuer à rassembler et faire briller notre communauté.',
    skills: ['Visionnaire', 'Leader', 'Rassembleuse']
  }
]

export function HorizontalTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({
    container: scrollRef,
  })

  return (
    <div className="w-full py-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-brand via-accent to-secondary bg-clip-text text-transparent">
          Mon Parcours
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Faites défiler pour découvrir mon histoire →
        </p>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 mb-8 overflow-hidden rounded-full max-w-4xl mx-auto">
        <motion.div
          style={{ scaleX: scrollXProgress }}
          className="h-full bg-gradient-to-r from-brand via-accent to-secondary origin-left"
        />
      </div>

      {/* Scrollable Timeline */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-brand scrollbar-track-neutral-200 dark:scrollbar-track-neutral-800"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#8A2BE2 #e5e5e5',
        }}
      >
        <div className="flex gap-6 px-4 md:px-8">
          {/* Start marker */}
          <div className="flex-shrink-0 w-2 h-96 bg-gradient-to-b from-brand via-accent to-transparent rounded-full" />
          
          {/* Milestone cards */}
          {milestones.map((milestone, index) => (
            <MilestoneCard key={index} {...milestone} index={index} />
          ))}
          
          {/* End marker */}
          <div className="flex-shrink-0 w-2 h-96 bg-gradient-to-b from-transparent via-accent to-secondary rounded-full" />
        </div>
      </div>

      {/* Scroll hint for mobile */}
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: [1, 0.5, 1], x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-center mt-6 text-sm text-neutral-500 dark:text-neutral-400 md:hidden"
      >
        👉 Faites glisser pour voir plus
      </motion.div>
    </div>
  )
}
