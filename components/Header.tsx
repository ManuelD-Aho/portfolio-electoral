'use client'

import Link from 'next/link'
import { site } from '@/lib/site'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-white/10 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-950/60">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-brand" />
          <div className="font-semibold">{site.name}</div>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/issues" className="hover:opacity-80">Programme</Link>
          <Link href="/events" className="hover:opacity-80">Événements</Link>
          <Link href="/contact" className="hover:opacity-80">Contact</Link>
          <Link href="/volunteer" className="hover:opacity-80">Bénévolat</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/donate" className="btn-primary text-sm py-2">Soutenir</Link>
        </div>
      </div>
    </header>
  )
}