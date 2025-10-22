'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'
import { Section } from '@/components/Section'
import { IssueCard } from '@/components/IssueCard'
import { Newsletter } from '@/components/Newsletter'
import { EnhancedTimeline } from '@/components/EnhancedTimeline'
import { HorizontalTimeline } from '@/components/HorizontalTimeline'
import { Button } from '@/components/ui/button'
import { issues } from '@/data/issues'
import { StatGroup } from '@/components/Stat'

export default function Home() {
  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <>
      <section className="relative overflow-hidden min-h-[85vh] md:min-h-0">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="container py-16 md:py-20 lg:py-28">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                  className="h1 text-glow text-4xl md:text-5xl lg:text-6xl"
                  variants={itemVariants}>
                {site.candidate.fullName}
              </motion.h1>
              <motion.p 
                className="lead mt-4 text-base md:text-lg"
                variants={itemVariants}>
                {site.candidate.slogan}
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl mt-2 text-brand font-semibold"
                variants={itemVariants}>
                Ensemble. 🌟
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3"
                variants={itemVariants}>
                <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
                  <Link href="/programme">Voir le Programme</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="/sengager">S&apos;engager</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Link href="#vote">Voter Jemima le 25 Octobre</Link>
                </Button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <StatGroup className="mt-10" />
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative order-first md:order-last"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="relative w-full aspect-[4/5] max-h-[60vh] md:max-h-none rounded-3xl overflow-hidden border-gradient">
                <Image
                  src="/candidate.jpg"
                  alt={site.candidate.fullName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section title="Bien plus qu'un programme, une vision" subtitle="Une stratégie collective sur l'autoroute du succès.">
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {issues.map((i, index) => (
            <motion.div
              key={i.slug}
              variants={itemVariants}
            >
              <IssueCard issue={i} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/programme">Découvrir le programme complet</Link>
          </Button>
        </motion.div>
      </Section>

      <Section title="Qui suis-je ?" subtitle="C'est en forgeant qu'on devient forgeron">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="space-y-4 text-neutral-600 dark:text-neutral-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              L&apos;expérience, la vraie, ne s&apos;acquiert pas dans les hauteurs ni avec des titres, mais sur le terrain, là où se construisent la conviction, la ténacité et l&apos;engagement.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Je parle en connaissance de cause. Depuis trois ans, j&apos;œuvre au cœur de la vie associative, d&apos;abord comme déléguée, puis comme trésorière. Des titres, oui, mais surtout du travail : des projets portés, des défis relevés, des heures données sans compter.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              J&apos;ai souvent fait bien plus que ce que mon rôle exigeait, non par devoir, mais par passion, par amour du travail bien fait. Ceux qui ont travaillé à mes côtés le savent : je n&apos;ai jamais cherché la lumière, seulement le résultat.
            </motion.p>
            <motion.p 
              className="font-semibold text-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Aujourd&apos;hui, je peux le dire avec confiance : j&apos;ai appris, j&apos;ai grandi, et j&apos;ai bâti ma légitimité sur le terrain.
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: '✨', title: 'Multitâche', desc: 'Gestion simultanée de multiples responsabilités' },
              { icon: '⚡', title: 'Rigoureuse', desc: 'Précision et excellence dans chaque action' },
              { icon: '🚀', title: 'Dynamique', desc: 'Énergie et proactivité au quotidien' },
              { icon: '💪', title: 'Dévouée', desc: 'Engagement total pour la communauté' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="card hover:shadow-xl transition-shadow"
                variants={itemVariants}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="bg-neutral-50 dark:bg-neutral-900/50">
        <EnhancedTimeline />
      </Section>

      <Section className="bg-gradient-to-br from-brand/5 via-accent/5 to-secondary/5">
        <HorizontalTimeline />
      </Section>

      <Section title="Restons Connectés" subtitle="Rejoignez le mouvement pour une MIAGE dynamique et unie.">
        <Newsletter />
      </Section>
    </>
  )
}
