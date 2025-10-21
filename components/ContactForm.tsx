'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function onSubmit(formData: FormData) {
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      })
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <form action={onSubmit} className="card">
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Nom</label>
            <input name="name" required className="mt-1 w-full rounded-xl px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />
          </div>
          <div>
            <label className="text-sm">E-mail</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-xl px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />
          </div>
        </div>
        <div>
          <label className="text-sm">Sujet</label>
          <input name="subject" required className="mt-1 w-full rounded-xl px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />
        </div>
        <button className="btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Envoi...' : 'Envoyer'}
        </button>
        {status === 'success' && <p className="text-emerald-600">Message envoyé.</p>}
        {status === 'error' && <p className="text-red-600">Erreur. Réessayez.</p>}
      </div>
    </form>
  )
}