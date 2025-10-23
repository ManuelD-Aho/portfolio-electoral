'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, FileText, Vote } from 'lucide-react'
import { site } from '@/lib/site'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/programme', label: 'Programme', icon: FileText }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 dark:bg-neutral-950/98 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-lg shadow-neutral-200/20 dark:shadow-neutral-900/20' 
          : 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Clean minimal style */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="relative h-12 w-12 rounded-xl overflow-hidden bg-gradient-to-br from-brand via-accent to-secondary flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white font-bold text-xl">J</span>
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg block group-hover:text-brand transition-colors">
                Jemima
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                BDE MIAGE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean minimal style */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative"
                >
                  <motion.div
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'text-brand bg-brand/10 shadow-sm'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-brand hover:bg-neutral-100/80 dark:hover:bg-neutral-900/80'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              )
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.div
              className="hidden sm:block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="#vote" 
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand to-accent rounded-xl shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 transition-all"
              >
                <Vote className="h-4 w-4" />
                Voter le 25 Oct
              </Link>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden h-11 w-11 rounded-xl grid place-items-center hover:bg-neutral-100/80 dark:hover:bg-neutral-900/80 transition-colors"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Clean minimal style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white/98 dark:bg-neutral-950/98 backdrop-blur-xl overflow-hidden"
          >
            <nav className="container py-6 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      delay: index * 0.05,
                      duration: 0.2
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-brand to-accent text-white shadow-md'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/80 dark:hover:bg-neutral-900/80 hover:text-brand'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.2 }}
                className="pt-3"
              >
                <Link 
                  href="#vote" 
                  className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-brand to-accent rounded-xl shadow-lg shadow-brand/20"
                >
                  <Vote className="h-5 w-5" />
                  Voter le 25 Oct
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}