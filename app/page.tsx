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
        <div className="grid md:grid-cols-2 gap-10 items-start">
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
              En d&apos;autres termes, l&apos;expérience, la vraie, ne s&apos;acquiert pas dans les hauteurs ni à travers des titres honorifiques, mais bien sur le terrain, là où se construisent les convictions, là où se mesurent la ténacité et l&apos;engagement.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Car, soyons honnêtes, ce n&apos;est pas en s&apos;attribuant des mérites que l&apos;on apprend la valeur du travail, mais en se retroussant les manches, en agissant, en donnant de soi sans compter. Oui, c&apos;est après avoir véritablement œuvré, après avoir porté les projets de bout en bout, qu&apos;on peut prétendre observer, diriger, inspirer.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Et si je vous dis cela aujourd&apos;hui, c&apos;est parce que j&apos;ai, moi aussi, longtemps « charbonné », ou, pour le dire plus élégamment, j&apos;ai œuvré avec persévérance, conviction et passion. J&apos;ai bâti mon parcours au cœur même de l&apos;action, dans la vie associative, là où les réussites collectives se construisent souvent dans le silence et le dévouement.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Depuis trois années, j&apos;endosse avec fierté le rôle de déléguée, une responsabilité exigeante, souvent éprouvante, mais ô combien enrichissante.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Et parce que l&apos;engagement, le vrai, ne se limite pas à ce qui est écrit sur le papier, j&apos;ai également assumé la fonction de trésorière. Trésorière, certes, mais aussi communicante, coordinatrice, conseillère, parfois même exécutante quand il le fallait.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              J&apos;ai souvent fait plus que ce que mon rôle exigeait, non pas par obligation, mais par amour du travail bien fait, par attachement à l&apos;équipe, et par respect pour les objectifs que nous nous étions fixés.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Ceux qui ont travaillé à mes côtés le savent : je n&apos;ai jamais compté mes heures, ni attendu les félicitations avant d&apos;agir. Pour moi, le véritable leadership ne se décrète pas, il se démontre dans les actes, dans la constance et dans la rigueur.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Peu à peu, j&apos;ai porté plusieurs casquettes, affronté plusieurs défis, et chaque expérience m&apos;a forgée.
            </motion.p>
            <motion.p 
              className="font-semibold text-brand text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Aujourd&apos;hui, je peux le dire avec confiance : j&apos;ai appris, j&apos;ai grandi, et j&apos;ai bâti ma légitimité sur le terrain.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              Oui, j&apos;ai les épaules assez solides pour porter plus haut les ambitions de notre communauté. Et si je me tiens devant vous aujourd&apos;hui, c&apos;est avec la conviction que servir, ce n&apos;est pas simplement occuper un poste : c&apos;est se donner pleinement, sincèrement, passionnément.
            </motion.p>
            <motion.p 
              className="font-medium text-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              C&apos;est fort de ce vécu, de cette expérience et de cette passion que je me présente, prête à servir, à rassembler et à conduire notre BDE avec la même énergie, la même détermination et le même amour du travail bien fait.
            </motion.p>
            <motion.p 
              className="text-sm italic text-neutral-500 dark:text-neutral-400 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Trésorière pour le BDE de transition en 2024-2025, arrivée et déléguée depuis 2022
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
