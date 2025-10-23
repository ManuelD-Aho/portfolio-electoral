'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site } from '@/lib/site'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { href: '/programme', label: 'Programme' }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/90 dark:bg-neutral-950/90 shadow-xl shadow-brand/10' 
          : 'backdrop-blur-md bg-white/60 dark:bg-neutral-950/60'
      } border-b border-neutral-200/50 dark:border-neutral-800/50`}
    >
      <div className="container h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand via-accent to-secondary relative overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 8 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </motion.div>
          <motion.div 
            className="font-bold text-lg group-hover:text-brand transition-colors hidden sm:block"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {site.name}
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                pathname === item.href
                  ? 'text-brand'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-brand dark:hover:text-brand hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {pathname === item.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-brand/15 via-accent/15 to-brand/15 rounded-lg -z-0"
                  transition={{ 
                    type: "spring", 
                    stiffness: 380, 
                    damping: 30,
                    duration: 0.6
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#vote" 
              className="btn-primary text-sm py-2.5 px-5 hidden sm:inline-flex shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:shadow-xl"
            >
              Voter le 25 Oct
            </Link>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden h-10 w-10 rounded-xl border border-neutral-300 dark:border-neutral-700 grid place-items-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
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
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden border-t border-neutral-200/50 dark:border-neutral-800/50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    delay: index * 0.08,
                    duration: 0.3
                  }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-brand to-accent text-white shadow-lg'
                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: navItems.length * 0.08, duration: 0.3 }}
              >
                <Link 
                  href="#vote" 
                  className="btn-primary w-full text-sm py-3 mt-2"
                >
                  Voter le 25 Oct
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}