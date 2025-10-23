'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showCTA, setShowCTA] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      // Hide CTA when near bottom of page
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200
      setShowCTA(!nearBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              variant="outline"
              className="h-12 w-12 rounded-full shadow-xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border-2 hover:border-brand"
              aria-label="Retour en haut"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main CTA - Mobile only */}
      <AnimatePresence>
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="md:hidden"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full shadow-2xl shadow-brand/40 px-6 h-14 text-base font-bold"
            >
              <Link href="#vote">
                🗳️ Voter le 25 Oct
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
