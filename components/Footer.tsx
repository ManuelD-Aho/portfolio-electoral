import Link from 'next/link'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 dark:border-neutral-800/60">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold">{site.name}</div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{site.meta.description}</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Navigation</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/programme">Programme</Link></li>
            <li><Link href="/sengager">S'engager</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Suivez-nous</div>
          <ul className="space-y-2 text-sm">
            {Object.entries(site.social).map(([k, v]) => (
              <li key={k}><a href={v} target="_blank" rel="noreferrer">{k}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 dark:border-neutral-800/60">
        <div className="container py-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} {site.candidate.fullName} — Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}