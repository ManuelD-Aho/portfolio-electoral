'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { Section } from '@/components/Section'
import { site } from '@/lib/site'

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="Une question, une proposition ? Écrivez-nous.">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="h3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Coordonnées
          </motion.h3>
          <motion.ul 
            className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[
              { label: 'E-mail', value: site.candidate.email },
              { label: 'Téléphone', value: site.candidate.phone },
              { label: 'Siège de campagne', value: site.candidate.location }
            ].map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                {item.label}: {item.value}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  )
}