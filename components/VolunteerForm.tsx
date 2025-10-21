'use client'

import { useState } from 'react'

const ROLES = [
  'Accueil & logistique',
  'Tractage',
  'Phoning',
  'Réseaux sociaux',
  'Design & vidéo',
  'Data',
  'Programmation d’événements'
]

export default function VolunteerForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function onSubmit(formData: FormData) {
    setStatus('loading')
    const res = await fetch('/api/volunteer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        roles: Array.from(formData.getAll('roles')),
        message: formData.get('message')
      })
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <form action={onSubmit} className="card">
      <div className="grid gap-4">
        <div>
          <label className="text-sm">Nom</label>
          <input name="name" required className="mt-1 w-full rounded-xl px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">E-mail</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-xl px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />
          </div>
          <div>
            <label className="text-sm">Téléphone</label>
            <input name="phone" className="mt-1 w-full rounded-xl px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />
          </div>
        </div>

        <div>
          <label className="text-sm">Rôles souhaités</label>
          <div className="mt-2 grid md:grid-cols-2 gap-2">
            {ROLES.map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm">
                <input type="checkbox" name="roles" value={r} /> {r}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm">Message</label>
          <textarea name="message" rows={4} className="mt-1 w-full rounded-xl px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />
        </div>

        <button className="btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Envoi...' : 'Envoyer'}
        </button>
        {status === 'success' && <p className="text-emerald-600">Merci ! Nous revenons vers vous rapidement.</p>}
        {status === 'error' && <p className="text-red-600">Erreur. Réessayez plus tard.</p>}
      </div>
    </form>
  )
}