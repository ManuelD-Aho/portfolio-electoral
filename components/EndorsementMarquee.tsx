'use client'
import { useEffect, useRef } from 'react'

type Endorsement = { name: string; title?: string; quote: string }

export function EndorsementMarquee({ items }: { items: Endorsement[] }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let pos = 0
    const id = setInterval(() => {
      pos -= 1
      el.style.transform = `translateX(${pos}px)`
      if (Math.abs(pos) > el.scrollWidth / 2) pos = 0
    }, 20)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="py-12 overflow-hidden border-y border-white/10 dark:border-neutral-800/60">
      <div className="container">
        <div className="relative whitespace-nowrap">
          <div className="inline-flex gap-6 will-change-transform" ref={ref}>
            {[...items, ...items].map((e, i) => (
              <figure key={i} className="glass px-6 py-4 rounded-xl">
                <blockquote className="text-sm">“{e.quote}”</blockquote>
                <figcaption className="text-xs mt-2 text-neutral-500">— {e.name}{e.title ? `, ${e.title}` : ''}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}