'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'
import { Section } from '@/components/Section'
import { IssueCard } from '@/components/IssueCard'
import { EnhancedTimeline } from '@/components/EnhancedTimeline'
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
      <section className="relative overflow-hidden min-h-[92vh] md:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="container py-24 md:py-32 lg:py-36">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                  className="h1 text-glow mb-8"
                  variants={itemVariants}>
                {site.candidate.fullName}
              </motion.h1>
              <motion.p 
                className="lead mt-6"
                variants={itemVariants}>
                {site.candidate.slogan}
              </motion.p>
              <motion.p 
                className="text-2xl md:text-3xl mt-6 text-brand font-semibold"
                variants={itemVariants}>
                Ensemble. 🌟
              </motion.p>
              <motion.div 
                className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4"
                variants={itemVariants}>
                <Button asChild size="lg" variant="default" className="w-full sm:w-auto shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30">
                  <Link href="/programme">Voir le Programme</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto shadow-md hover:shadow-lg">
                  <Link href="#vote">Voter Jemima le 25 Octobre</Link>
                </Button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <StatGroup className="mt-16" />
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
              <div className="relative w-full aspect-[4/5] max-h-[65vh] md:max-h-none rounded-3xl overflow-hidden border-gradient shadow-2xl">
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
          className="grid md:grid-cols-3 gap-8"
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
          className="mt-12"
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

      <Section title="Qui suis-je ?" subtitle="L'expérience se forge sur le terrain">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="card p-8 bg-gradient-to-br from-brand/5 to-accent/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand to-accent flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                  🔨
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-brand">Le Terrain, Ma Formation</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Trois années comme déléguée, trésorière du BDE de transition : j&apos;ai appris dans l&apos;action, pas dans les titres.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card p-8 bg-gradient-to-br from-accent/5 to-secondary/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                  💪
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-accent">Au-delà du Rôle</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Communicante, coordinatrice, exécutante : j&apos;ai fait plus que mon rôle par passion du travail bien fait.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card p-8 bg-gradient-to-br from-secondary/5 to-brand/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary to-brand flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                  🌟
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-secondary">Légitimité Forgée</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Chaque défi m&apos;a forgée. Aujourd&apos;hui, prête à porter plus haut les ambitions de notre communauté.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: '✨', title: 'Multitâche', desc: 'Gestion de multiples responsabilités simultanées', gradient: 'from-brand/10 to-accent/10' },
              { icon: '⚡', title: 'Rigoureuse', desc: 'Précision et excellence dans chaque action', gradient: 'from-accent/10 to-secondary/10' },
              { icon: '🚀', title: 'Dynamique', desc: 'Énergie et proactivité au quotidien', gradient: 'from-secondary/10 to-brand/10' },
              { icon: '💪', title: 'Dévouée', desc: 'Engagement total pour la communauté', gradient: 'from-brand/10 to-secondary/10' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className={`card hover:shadow-2xl transition-all p-8 bg-gradient-to-br ${item.gradient}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="bg-neutral-50 dark:bg-neutral-900/50">
        <EnhancedTimeline />
      </Section>
    </>
  )
}
