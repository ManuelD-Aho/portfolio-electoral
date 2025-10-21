'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'
import { Section } from '@/components/Section'
import { IssueCard } from '@/components/IssueCard'
import { Newsletter } from '@/components/Newsletter'
import { issues } from '@/data/issues'
import { StatGroup } from '@/components/Stat'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="container py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                  className="h1 text-glow"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}>
                {site.candidate.fullName}
              </motion.h1>
              <motion.p 
                className="lead mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                {site.candidate.slogan}
              </motion.p>
              <motion.p 
                className="text-lg mt-2 text-brand font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}>
                Ensemble. 🌟
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}>
                <Link href="/programme" className="btn-primary">Voir le Programme</Link>
                <Link href="/sengager" className="btn-outline">S&apos;engager</Link>
                <Link href="#" className="btn-accent">Voter Jemima le 25 Octobre</Link>
              </motion.div>
              <StatGroup className="mt-10" />
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-gradient">
                <Image
                  src="/candidate.jpg"
                  alt={site.candidate.fullName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Bien plus qu'un programme, une vision" subtitle="Une stratégie collective sur l'autoroute du succès.">
        <div className="grid md:grid-cols-3 gap-6">
          {issues.map((i) => (
            <motion.div
              key={i.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <IssueCard issue={i} />
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/programme" className="btn-outline">Découvrir le programme complet</Link>
        </div>
      </Section>

      <Section title="Qui suis-je ?" subtitle="C'est en forgeant qu'on devient forgeron">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>L&apos;expérience, la vraie, ne s&apos;acquiert pas dans les hauteurs ni avec des titres, mais sur le terrain, là où se construisent la conviction, la ténacité et l&apos;engagement.</p>
            <p>Je parle en connaissance de cause. Depuis trois ans, j&apos;œuvre au cœur de la vie associative, d&apos;abord comme déléguée, puis comme trésorière. Des titres, oui, mais surtout du travail : des projets portés, des défis relevés, des heures données sans compter.</p>
            <p>J&apos;ai souvent fait bien plus que ce que mon rôle exigeait, non par devoir, mais par passion, par amour du travail bien fait. Ceux qui ont travaillé à mes côtés le savent : je n&apos;ai jamais cherché la lumière, seulement le résultat.</p>
            <p className="font-semibold text-brand">Aujourd&apos;hui, je peux le dire avec confiance : j&apos;ai appris, j&apos;ai grandi, et j&apos;ai bâti ma légitimité sur le terrain.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">✨</div>
              <h4 className="font-semibold text-lg mb-1">Multitâche</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Gestion simultanée de multiples responsabilités</p>
            </div>
            <div className="card hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-lg mb-1">Rigoureuse</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Précision et excellence dans chaque action</p>
            </div>
            <div className="card hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold text-lg mb-1">Dynamique</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Énergie et proactivité au quotidien</p>
            </div>
            <div className="card hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">💪</div>
              <h4 className="font-semibold text-lg mb-1">Dévouée</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Engagement total pour la communauté</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Restons Connectés" subtitle="Rejoignez le mouvement pour une MIAGE dynamique et unie.">
        <Newsletter />
      </Section>
    </>
  )
}
