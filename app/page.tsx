'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'
import { Section } from '@/components/Section'
import { IssueCard } from '@/components/IssueCard'
import { EventCard } from '@/components/EventCard'
import { Newsletter } from '@/components/Newsletter'
import { endorsements } from '@/data/endorsements'
import { issues } from '@/data/issues'
import { events } from '@/data/events'
import { StatGroup } from '@/components/Stat'
import { EndorsementMarquee } from '@/components/EndorsementMarquee'
import { GalleryMosaic } from '@/components/GalleryMosaic'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="container py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                  className="h1"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}>
                {site.candidate.fullName}
              </motion.h1>
              <p className="lead mt-4">{site.candidate.slogan}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/donate" className="btn-primary">Soutenir la campagne</Link>
                <Link href="/volunteer" className="btn-outline">Devenir bénévole</Link>
                <Link href="/issues" className="btn-accent">Programme</Link>
              </div>
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

      <Section title="Nos priorités" subtitle="Un programme concret, humain et ambitieux.">
        <div className="grid md:grid-cols-3 gap-6">
          {issues.slice(0, 6).map((i) => (
            <IssueCard key={i.slug} issue={i} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/issues" className="btn-outline">Voir tout le programme</Link>
        </div>
      </Section>

      <Section title="Événements à venir" subtitle="Rencontrez l’équipe sur le terrain.">
        <div className="grid md:grid-cols-3 gap-6">
          {events.slice(0,3).map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/events" className="btn-outline">Tous les événements</Link>
        </div>
      </Section>

      <EndorsementMarquee items={endorsements} />

      <Section title="Moments de campagne">
        <GalleryMosaic />
      </Section>

      <Section title="Restez informé" subtitle="Recevez les actualités directement par e-mail.">
        <Newsletter />
      </Section>
    </>
  )
}