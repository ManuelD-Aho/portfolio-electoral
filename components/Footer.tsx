'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { site } from '@/lib/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-neutral-200/50 dark:border-neutral-800/50 bg-gradient-to-b from-transparent to-neutral-50/50 dark:to-neutral-900/50">
      <div className="container py-12 md:py-16 grid md:grid-cols-3 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-bold text-lg mb-3 bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
            {site.name}
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {site.meta.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Navigation</div>
          <ul className="space-y-3 text-sm">
            <li>
              <Link 
                href="/programme"
                className="text-neutral-600 dark:text-neutral-400 hover:text-brand dark:hover:text-brand transition-colors"
              >
                Programme
              </Link>
            </li>
            <li>
              <Link 
                href="/sengager"
                className="text-neutral-600 dark:text-neutral-400 hover:text-brand dark:hover:text-brand transition-colors"
              >
                S&apos;engager
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className="text-neutral-600 dark:text-neutral-400 hover:text-brand dark:hover:text-brand transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Suivez-nous</div>
          <ul className="space-y-3 text-sm">
            {Object.entries(site.social).map(([platform, url]) => (
              <li key={platform}>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-brand dark:hover:text-brand transition-colors inline-flex items-center gap-2"
                >
                  {platform}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <div>
            © {currentYear} {site.candidate.fullName} — Tous droits réservés.
          </div>
          <div className="flex items-center gap-2">
            <span>Fait avec</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="text-red-500"
            >
              ♥
            </motion.span>
            <span>pour la MIAGE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}