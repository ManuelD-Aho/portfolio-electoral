'use client'

import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' }
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <form onSubmit={onSubmit} className="card">
      <label className="text-sm">Votre e-mail</label>
      <div className="mt-2 flex gap-3">
        <input
          type="email"
          required
          placeholder="vous@exemple.fr"
          className="flex-1 rounded-xl px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Envoi...' : 'S’inscrire'}
        </button>
      </div>
      {status === 'success' && <p className="text-emerald-600 mt-2">Merci ! Vérifiez votre boîte mail.</p>}
      {status === 'error' && <p className="text-red-600 mt-2">Une erreur est survenue.</p>}
    </form>
  )
}