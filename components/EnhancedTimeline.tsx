'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface TimelineItemProps {
  icon: string
  title: string
  period?: string
  description: string
  skills?: string[]
  index: number
  isLast?: boolean
}

function TimelineItem({ icon, title, period, description, skills, index, isLast }: TimelineItemProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className={cn(
        "grid md:grid-cols-2 gap-8 items-center",
        isEven ? "md:text-right" : "md:text-left"
      )}>
        {/* Left side content (even items) */}
        {isEven && (
          <div className="hidden md:block">
            <TimelineCard 
              icon={icon}
              title={title}
              period={period}
              description={description}
              skills={skills}
              align="right"
              index={index}
            />
          </div>
        )}

        {/* Center timeline dot */}
        <div className="hidden md:flex justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            {!isLast && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="w-1 h-full bg-gradient-to-b from-brand via-accent to-secondary origin-top rounded-full"
              />
            )}
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-brand via-accent to-secondary flex items-center justify-center text-3xl shadow-2xl shadow-brand/40"
          >
            <span className="relative z-10">{icon}</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand via-accent to-secondary"
            />
          </motion.div>
        </div>

        {/* Right side content (odd items) */}
        {!isEven && (
          <div className="hidden md:block">
            <TimelineCard 
              icon={icon}
              title={title}
              period={period}
              description={description}
              skills={skills}
              align="left"
              index={index}
            />
          </div>
        )}

        {/* Mobile view (full width card) */}
        <div className="md:hidden col-span-2">
          <TimelineCard 
            icon={icon}
            title={title}
            period={period}
            description={description}
            skills={skills}
            align="left"
            index={index}
            mobile
          />
        </div>
      </div>
    </motion.div>
  )
}

function TimelineCard({ 
  icon, 
  title, 
  period, 
  description, 
  skills, 
  align, 
  index,
  mobile = false 
}: { 
  icon: string
  title: string
  period?: string
  description: string
  skills?: string[]
  align: 'left' | 'right'
  index: number
  mobile?: boolean
}) {
  return (
    <Card className="group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      <CardHeader>
        <div className={cn("flex items-center gap-3", mobile && "mb-2")}>
          {mobile && (
            <span className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand via-accent to-secondary grid place-items-center text-3xl shadow-lg flex-shrink-0">
              {icon}
            </span>
          )}
          <div className={cn(align === 'right' && 'flex flex-col items-end', "flex-1")}>
            {period && (
              <div className="text-sm font-semibold text-brand mb-1">{period}</div>
            )}
            <CardTitle className="text-lg md:text-xl bg-gradient-to-r from-brand via-accent to-secondary bg-clip-text text-transparent">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <CardDescription className={cn(
          "text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4",
          align === 'right' && 'md:text-right'
        )}>
          {description}
        </CardDescription>
        
        {skills && skills.length > 0 && (
          <div className={cn(
            "flex flex-wrap gap-2",
            align === 'right' && 'md:justify-end'
          )}>
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4 + i * 0.05 }}
                className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-brand/10 to-accent/10 border border-brand/20 text-brand font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

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
    description: 'Pendant trois années, j\'ai appris l\'écoute, la représentation et la résolution de problèmes au cœur de la vie étudiante. Une immersion directe dans les réalités de chacun.',
    skills: ['Multitâche', 'Animatrice', 'Coordinatrice', 'Communicante']
  },
  {
    icon: '💰',
    title: 'L\'Art de la Gestion : Trésorière 2 en 1',
    period: '2023 - 2024',
    description: 'Une double responsabilité qui a forgé ma rigueur et ma capacité à gérer des projets d\'envergure, du comité d\'organisation de la JI au BDE de transition.',
    skills: ['Rigoureuse', 'Studieuse', 'Motivée']
  },
  {
    icon: '✨',
    title: 'La Passion du Résultat : Aller au-delà',
    description: 'J\'ai toujours cherché le résultat, pas la lumière. Mon engagement dépasse les titres, animé par l\'amour du travail bien fait et le désir d\'impact réel.',
    skills: ['Dynamique', 'Dévouée']
  },
  {
    icon: '🌱',
    title: 'La Légitimité Forgée : Sur le Terrain',
    description: 'Chaque défi relevé, chaque heure donnée a bâti ma légitimité. J\'ai appris, j\'ai grandi, et je suis prête à servir avec la même énergie.',
    skills: ['Conseillère', 'Exécutante', 'Engagée']
  },
  {
    icon: '🌟',
    title: 'Vers l\'Avenir : Présidence BDE MIAGE',
    period: 'Élection le 25 Octobre',
    description: 'Aujourd\'hui, je me présente pour continuer à rassembler et faire briller notre communauté. Avec une vision claire et une détermination inébranlable.',
    skills: ['Visionnaire', 'Leader', 'Rassembleuse']
  }
]

export function EnhancedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto py-16 md:py-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24 md:mb-28"
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-brand via-accent to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          L&apos;Épopée de Jemima
        </motion.h2>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-light">
          Construire l&apos;Avenir, Pas à Pas
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 mx-auto max-w-sm"
        >
          <Separator className="bg-gradient-to-r from-transparent via-brand to-transparent h-1" />
        </motion.div>
        <p className="text-brand font-bold mt-6 text-xl md:text-2xl">
          « C&apos;est en forgeant qu&apos;on devient forgeron »
        </p>
      </motion.div>

      {/* Timeline Items */}
      <div className="space-y-20 md:space-y-28">
        {timelineSteps.map((step, index) => (
          <TimelineItem
            key={index}
            {...step}
            index={index}
            isLast={index === timelineSteps.length - 1}
          />
        ))}
      </div>

      {/* Final message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-24 md:mt-28"
      >
        <Card className="text-center bg-gradient-to-br from-brand/10 via-accent/10 to-secondary/10 border-2 border-brand/30 shadow-2xl">
          <CardContent className="pt-10 pb-10">
            <p className="text-2xl md:text-3xl font-semibold text-brand mb-4">
              Parce que l&apos;avenir, on ne l&apos;attend pas…
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand via-accent to-secondary bg-clip-text text-transparent">
              On le crée, Ensemble. 🌟
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
